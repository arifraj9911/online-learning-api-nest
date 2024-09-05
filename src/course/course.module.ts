import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entity/course.entity';
import { User } from 'src/user/entity/user.entity';
import { Enrollment } from 'src/enrollment/enrollment.entity';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  imports: [TypeOrmModule.forFeature([Course, User, Enrollment])],
})
export class CourseModule {}
