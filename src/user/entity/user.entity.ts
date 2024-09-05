import { Course } from 'src/course/entity/course.entity';
import { Enrollment } from 'src/enrollment/enrollment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  // each student can make many enrollment
  @OneToMany(() => Enrollment, (enroll) => enroll.student)
  enrolls: Enrollment[];

  // each teacher can create many course
  @OneToMany(() => Course, (course) => course.teacher)
  courses: Course[];
}
