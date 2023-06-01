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

import { Attendee } from '../../attendee/schemas/attendee.schema';

export class addTalkDto {
  @IsString()
  @IsNotEmpty()
  titleOfTalk: string;

  @IsString()
  dateOfEvent: string;

  @IsString()
  location: string;

  @IsString()
  fieldOfDiscourse: string;

  @IsString()
  venue: string;

  @IsString()
  organizer: string;

  @IsBoolean()
  @IsNotEmpty()
  canBeViewedOnline: boolean;

  @IsNumber()
  leastExpectedAttendance: number;

  @IsNumber()
  maximumExpectedAttendance: number;

  @IsArray()
  @IsOptional()
  attendees?: Attendee[];
}
