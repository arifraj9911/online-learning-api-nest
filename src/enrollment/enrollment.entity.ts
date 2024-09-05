import { Course } from 'src/course/entity/course.entity';
import { User } from 'src/user/entity/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['student', 'course'])
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  //   each student can enroll many course
  @ManyToOne(() => User, (user) => user.enrollments, { eager: true })
  student: User;

  //   each course can have many enrollment
  @ManyToOne(() => Course, (course) => course.enrollments, { eager: true })
  course: Course;
}
