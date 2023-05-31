import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Attendee } from './schemas/attendee.schema';
import { addAttendeeDto } from './dto/add-attendee.dto';
import { AddTalkResponseDto } from './shared/attendee.interface';
import { Mode } from 'fs';

@Injectable()
export class AttendeeService {
  constructor(
    @InjectModel(Attendee.name) private attendeeModel: Model<Attendee>,
  ) {}

  async createAttendee(
    addAttendeeDto: addAttendeeDto,
  ): Promise<AddTalkResponseDto> {
    const data = await this.attendeeModel.create(addAttendeeDto);
    return {
      status: 'success',
      message: 'Attendee successfully added...',
      data,
    };
  }

  findAll() {
    return `This action returns all attendee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendee`;
  }

  // update(id: number, updateAttendeeDto: UpdateAttendeeDto) {
  //   return `This action updates a #${id} attendee`;
  // }

  remove(id: number) {
    return `This action removes a #${id} attendee`;
  }
}
