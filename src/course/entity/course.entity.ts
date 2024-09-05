import { Enrollment } from 'src/enrollment/enrollment.entity';
import { User } from 'src/user/entity/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  passcode: string;

  @Column()
  videoURL: string;

  // each teacher can create many course
  @ManyToOne(() => User, (user) => user.courses)
  teacher: User;

  // one course can have many enrollment
  @OneToMany(() => Enrollment, (enrollment) => enrollment.course)
  enrollments: Enrollment[];
}
