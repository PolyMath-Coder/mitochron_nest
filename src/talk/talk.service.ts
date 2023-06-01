import { Injectable } from '@nestjs/common';
import { addTalkDto } from './dto/add-talk.dto';
import { UpdateTalkDto } from './dto/update-talk.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Talk } from '../attendee/schemas/talk.schema';
import {
  AddTalkResponseDto,
  AddAttendeeToTalkResponseDto,
} from '../attendee/shared/talk.interface';
import { Attendee } from 'src/attendee/schemas/attendee.schema';

@Injectable()
export class TalkService {
  constructor(@InjectModel(Talk.name) private talkModel: Model<Talk>) {}
  async addTalk(addTalkDto: addTalkDto): Promise<AddTalkResponseDto> {
    const data = await this.talkModel.create(addTalkDto);

    return { status: 'success', message: 'Talk successfully added', data };
  }

  findAll() {
    return `This action returns all talk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} talk`;
  }

  async addAttendee(
    talkId: string,
    attendeeId: string,
  ): Promise<AddAttendeeToTalkResponseDto> {
    const data = await this.talkModel.findByIdAndUpdate(
      talkId,
      {
        $push: { attendees: attendeeId },
      },
      { new: true },
    );

    return {
      status: true,
      message: `Attendee with the id ${attendeeId} successfully added to talk!`,
      data,
    };
  }

  async removeTalk(talkId: string) {
    await this.talkModel.findByIdAndDelete(talkId);
    return { status: true, message: `The talk ${talkId} just got deleted...` };
  }
}
