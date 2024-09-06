import { Course } from 'src/course/entity/course.entity';
import { Enrollment } from 'src/enrollment/enrollment.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    courses: Course[];
    enrollments: Enrollment[];
}
