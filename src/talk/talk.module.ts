import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TalkService } from './talk.service';
import { TalkController } from './talk.controller';
import { Talk, TalkSchema } from '../attendee/schemas/talk.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Talk.name, schema: TalkSchema }]),
  ],
  controllers: [TalkController],
  providers: [TalkService],
})
export class TalkModule {}
