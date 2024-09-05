import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { EnrollDto } from 'src/enrollment/enroll.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles.guard';
// import { RolesGuard } from 'src/RBAC/roles.guard';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  getAllCourse() {
    return this.courseService.getAllCourse();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SetMetadata('roles', ['teacher'])
  createCourse(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.createCourse(createCourseDto);
  }

  @Patch('/:id')
  // @UseGuards(AuthGuard('jwt'), RolesGuard)
  // @SetMetadata('roles', ['teacher'])
  updateCourse(
    @Body() updateCourseDto: UpdateCourseDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.courseService.updateCourse(updateCourseDto, id);
  }

  @Get('/:id')
  getCourse(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.getCourse(id);
  }

  @Delete('/:id')
  // @UseGuards(AuthGuard('jwt'), RolesGuard)
  // @SetMetadata('roles', ['teacher'])
  deleteCourse(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.deleteCourse(id);
  }

  // enroll the courses
  @Post('/enroll')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SetMetadata('roles', ['student'])
  enrollCourse(@Body() enrollDto: EnrollDto, @Request() req: any) {
    const { id, passcode } = enrollDto;
    return this.courseService.enroll(id, passcode, req.user);
  }
}
