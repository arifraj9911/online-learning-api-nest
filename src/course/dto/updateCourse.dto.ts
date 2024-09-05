import { IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  passcode: string;

  @IsString()
  videoURL: string;
}
