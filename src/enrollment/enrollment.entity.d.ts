import { Course } from 'src/course/entity/course.entity';
import { User } from 'src/user/entity/user.entity';
export declare class Enrollment {
    id: number;
    student: User;
    course: Course;
}
