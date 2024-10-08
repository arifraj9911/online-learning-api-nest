import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entity/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { Enrollment } from 'src/enrollment/enrollment.entity';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Enrollment)
    private enrollmentRepository: Repository<Enrollment>,
  ) {}

  getAllCourse(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  createCourse(createCourseDto: CreateCourseDto, teacher: User) {
    const course = this.courseRepository.create({
      ...createCourseDto,
      teacher,
    });
    return this.courseRepository.save(course);
  }

  updateCourse(updateCourseDto: UpdateCourseDto, id: number) {
    return this.courseRepository.update(id, updateCourseDto);
  }

  getCourse(id: number) {
    return this.courseRepository.findOne({ where: { id } });
  }

  deleteCourse(id: number) {
    return this.courseRepository.delete(id);
  }

  // enroll course
  async enrollCourse(
    courseId: number,
    passcode: string,
    student: User,
  ): Promise<any> {
    const course = await this.courseRepository.findOne({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    if (course.passcode !== passcode) {
      throw new UnauthorizedException('Password did not match');
    }

    const existingEnroll = await this.enrollmentRepository.findOne({
      where: {
        student: { id: student.id },
        course: { id: course.id },
      },
    });

    if (existingEnroll) {
      throw new ConflictException('Already enroll this course');
    }

    // for new enrollment
    const enrollment = this.enrollmentRepository.create({
      student,
      course,
    });

    return this.enrollmentRepository.save(enrollment);
  }

  // remove enroll
  async removeEnroll(courseId, studentId, teacher: User): Promise<any> {
    const course = await this.courseRepository.findOne({
      where: { id: courseId },
      relations: ['teacher'],
    });

    if (!course) {
      throw new NotFoundException('Course Not Found');
    }

    if (course.teacher.id !== teacher.id) {
      throw new UnauthorizedException('You are not the owner of this course');
    }

    const enrollment = await this.enrollmentRepository.findOne({
      where: {
        course: { id: courseId },
        student: { id: studentId },
      },
    });

    if (!enrollment) {
      throw new NotFoundException('Enrollment not found');
    }

    return this.enrollmentRepository.delete(enrollment.id);
  }
}
