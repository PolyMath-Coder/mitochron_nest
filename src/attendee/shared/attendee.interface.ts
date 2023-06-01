import { addAttendeeDto } from '../dto/add-attendee.dto';
export interface AddAttendeeResponseDto {
  status: string;
  message: string;
  data: addAttendeeDto;

  // nameOfAttendee: string;
  // age: number;
  // email: string;
  // occupation: string;
  // gender: string;
  // address: string;
  // preferredFieldOfInterest: string;
}
