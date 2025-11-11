import 'reflect-metadata';
import { IsEmail, IsString, MinLength } from 'class-validator';

// DTO for user login validation
export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}
