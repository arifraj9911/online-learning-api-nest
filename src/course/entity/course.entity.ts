import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  courseId: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  passcode: string;

  @Column()
  videoURL: string;
}
