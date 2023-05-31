import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  IsBoolean,
} from 'class-validator';

export class addAttendeeDto {
  @IsNotEmpty({ message: 'Kindly input name of attendee' })
  @IsString()
  nameOfAttendee: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  gender: string;

  @IsString()
  address: string;

  @IsString()
  preferredFieldOfInterest?: string;
}
