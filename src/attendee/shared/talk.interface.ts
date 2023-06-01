import { addTalkDto } from '../../talk/dto/add-talk.dto';

export interface AddTalkResponseDto {
  status: string;
  message: string;
  data: addTalkDto;
}

export interface AddAttendeeToTalkResponseDto {
  status: boolean;
  message: string;
  data: addTalkDto;
}
