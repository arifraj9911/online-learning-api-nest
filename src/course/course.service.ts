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

  createCourse(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto);
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
  async enroll(id: number, passcode: string, student: User): Promise<any> {
    const course = await this.courseRepository.findOne({
      where: { id },
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
}
