import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Attendee } from 'src/attendee/schemas/attendee.schema';
import * as mongoose from 'mongoose';

export type TalkDocument = HydratedDocument<Talk>;

@Schema()
export class Talk {
  @Prop()
  titleOfTalk: string;

  @Prop()
  date: string;

  @Prop()
  location: string;

  @Prop()
  venue: string;

  @Prop()
  canBeViewedOnline: boolean;
  default: false;

  @Prop()
  leastExpectedAttendance: number;

  @Prop()
  maximumExpectedAttendance: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' }] })
  attendees: Attendee[];
}
