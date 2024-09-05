import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {
  @Get('/teacher')
  @UseGuards(AuthGuard('jwt'))
  getTeacher(@Request() req: any) {
    return req.user;
  }
  @Get('/student')
  @UseGuards(AuthGuard('jwt'))
  getStudent(@Request() req: any) {
    return req.user;
  }
}
