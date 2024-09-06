import { Course } from './entity/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { Enrollment } from 'src/enrollment/enrollment.entity';
import { User } from 'src/user/entity/user.entity';
export declare class CourseService {
    private courseRepository;
    private enrollmentRepository;
    constructor(courseRepository: Repository<Course>, enrollmentRepository: Repository<Enrollment>);
    getAllCourse(): Promise<Course[]>;
    createCourse(createCourseDto: CreateCourseDto, teacher: User): Promise<Course>;
    updateCourse(updateCourseDto: UpdateCourseDto, id: number): Promise<import("typeorm").UpdateResult>;
    getCourse(id: number): Promise<Course>;
    deleteCourse(id: number): Promise<import("typeorm").DeleteResult>;
    enrollCourse(courseId: number, passcode: string, student: User): Promise<any>;
    removeEnroll(courseId: any, studentId: any, teacher: User): Promise<any>;
}
