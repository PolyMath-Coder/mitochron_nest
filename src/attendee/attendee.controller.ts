import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttendeeService } from './attendee.service';
import { addAttendeeDto } from './dto/add-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';
import { AttendeeRoute } from './shared/constants';

@Controller(AttendeeRoute.ATTENDEE)
export class AttendeeController {
  constructor(private readonly attendeeService: AttendeeService) {}

  @Post(AttendeeRoute.ADD_ATTENDEE)
  addAttendee(@Body() addAttendeeDto: addAttendeeDto) {
    return this.attendeeService.createAttendee(addAttendeeDto);
  }

  @Get()
  findAll() {
    return this.attendeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendeeService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateAttendeeDto: UpdateAttendeeDto,
  // ) {
  //   return this.attendeeService.update(+id, updateAttendeeDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendeeService.remove(+id);
  }
}
