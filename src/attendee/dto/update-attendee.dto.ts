import { PartialType } from '@nestjs/mapped-types';
import { addAttendeeDto } from './add-attendee.dto';

export class UpdateAttendeeDto extends PartialType(addAttendeeDto) {}
