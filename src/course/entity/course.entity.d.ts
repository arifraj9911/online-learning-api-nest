import { Enrollment } from 'src/enrollment/enrollment.entity';
import { User } from 'src/user/entity/user.entity';
export declare class Course {
    id: number;
    title: string;
    description: string;
    passcode: string;
    videoURL: string;
    teacher: User;
    enrollments: Enrollment[];
}
