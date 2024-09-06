import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EnrollDto {
  @IsNumber()
  @IsNotEmpty()
  courseId: number;

  @IsString()
  @IsNotEmpty()
  passcode: string;
}
