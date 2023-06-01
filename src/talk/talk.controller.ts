import {
  Controller,
  HttpException,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  Query,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TalkService } from './talk.service';
import { addTalkDto } from './dto/add-talk.dto';
import { UpdateTalkDto } from './dto/update-talk.dto';
import { TalkRoute } from '../attendee/shared/constants';
@Controller(TalkRoute.TALK)
export class TalkController {
  constructor(private readonly talkService: TalkService) {}

  @Post(TalkRoute.ADD_TALK)
  addTalk(@Body() createTalkDto: addTalkDto) {
    try {
      return this.talkService.addTalk(createTalkDto);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.response?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(TalkRoute.ADD_TO_TALK)
  addAttendeeToTalk(
    @Query('talkId') talkId: string,
    @Query('attendeeId') attendeeId: string,
  ) {
    try {
      return this.talkService.addAttendee(talkId, attendeeId);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.response?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(TalkRoute.REMOVE_TALK)
  removeTalk(@Param('talkId') talkId: string) {
    try {
      return this.talkService.removeTalk(talkId);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.response?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
