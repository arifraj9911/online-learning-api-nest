"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_entity_1 = require("./entity/course.entity");
const typeorm_2 = require("typeorm");
const enrollment_entity_1 = require("../enrollment/enrollment.entity");
let CourseService = class CourseService {
    constructor(courseRepository, enrollmentRepository) {
        this.courseRepository = courseRepository;
        this.enrollmentRepository = enrollmentRepository;
    }
    getAllCourse() {
        return this.courseRepository.find();
    }
    createCourse(createCourseDto, teacher) {
        const course = this.courseRepository.create({
            ...createCourseDto,
            teacher,
        });
        return this.courseRepository.save(course);
    }
    updateCourse(updateCourseDto, id) {
        return this.courseRepository.update(id, updateCourseDto);
    }
    getCourse(id) {
        return this.courseRepository.findOne({ where: { id } });
    }
    deleteCourse(id) {
        return this.courseRepository.delete(id);
    }
    async enrollCourse(courseId, passcode, student) {
        const course = await this.courseRepository.findOne({
            where: { id: courseId },
        });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        if (course.passcode !== passcode) {
            throw new common_1.UnauthorizedException('Password did not match');
        }
        const existingEnroll = await this.enrollmentRepository.findOne({
            where: {
                student: { id: student.id },
                course: { id: course.id },
            },
        });
        if (existingEnroll) {
            throw new common_1.ConflictException('Already enroll this course');
        }
        const enrollment = this.enrollmentRepository.create({
            student,
            course,
        });
        return this.enrollmentRepository.save(enrollment);
    }
    async removeEnroll(courseId, studentId, teacher) {
        const course = await this.courseRepository.findOne({
            where: { id: courseId },
            relations: ['teacher'],
        });
        if (!course) {
            throw new common_1.NotFoundException('Course Not Found');
        }
        if (course.teacher.id !== teacher.id) {
            throw new common_1.UnauthorizedException('You are not the owner of this course');
        }
        const enrollment = await this.enrollmentRepository.findOne({
            where: {
                course: { id: courseId },
                student: { id: studentId },
            },
        });
        if (!enrollment) {
            throw new common_1.NotFoundException('Enrollment not found');
        }
        return this.enrollmentRepository.delete(enrollment.id);
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(1, (0, typeorm_1.InjectRepository)(enrollment_entity_1.Enrollment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CourseService);
//# sourceMappingURL=course.service.js.map