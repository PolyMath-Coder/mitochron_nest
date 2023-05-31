import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Attendee } from './schemas/attendee.schema';
import { addAttendeeDto } from './dto/add-attendee.dto';
import { Mode } from 'fs';

@Injectable()
export class AttendeeService {
  constructor(
    @InjectModel(Attendee.name) private attendeeModel: Model<Attendee>,
  ) {}

  async createAttendee(addAttendeeDto: addAttendeeDto): Promise<Attendee> {
    return await this.attendeeModel.create(addAttendeeDto);
    // return 'This action adds a new attendee';
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
