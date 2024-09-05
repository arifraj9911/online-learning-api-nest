import {
  Controller,
  Get,
  Request,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/RBAC/roles.guard';

@Controller('profile')
export class ProfileController {
  @Get('/teacher')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SetMetadata('roles', ['teacher'])
  getTeacher(@Request() req: any) {
    return req.user;
  }
  @Get('/student')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SetMetadata('roles', ['student'])
  getStudent(@Request() req: any) {
    return req.user;
  }
}
