import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entity/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
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
    return this.courseRepository.findOne({ where: { courseId: id } });
  }

  deleteCourse(id: number) {
    return this.courseRepository.delete(id);
  }
}
