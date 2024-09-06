import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { EnrollDto } from 'src/enrollment/enroll.dto';
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    getAllCourse(): Promise<import("./entity/course.entity").Course[]>;
    createCourse(createCourseDto: CreateCourseDto, req: any): Promise<import("./entity/course.entity").Course>;
    updateCourse(updateCourseDto: UpdateCourseDto, id: number): Promise<import("typeorm").UpdateResult>;
    getCourse(id: number): Promise<import("./entity/course.entity").Course>;
    deleteCourse(id: number): Promise<import("typeorm").DeleteResult>;
    enrollCourse(enrollDto: EnrollDto, req: any): Promise<any>;
    removeEnroll(courseId: number, studentId: number, req: any): Promise<any>;
}
