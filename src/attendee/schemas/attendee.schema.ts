import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { fieldOfInterest } from '../shared/enums';

export type AttendeeDocument = HydratedDocument<Attendee>;

@Schema()
export class Attendee {
  @Prop()
  nameOfAttendee: string;

  @Prop()
  age: number;

  @Prop()
  email: string;

  @Prop()
  organizer: string;

  @Prop()
  occupation: string;

  @Prop()
  gender: string;

  @Prop()
  address: string;

  @Prop()
  preferredFieldOfInterest: string;
}

export const AttendeeSchema = SchemaFactory.createForClass(Attendee);
