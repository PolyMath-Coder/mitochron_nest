import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendeeService } from './attendee.service';
import { AttendeeController } from './attendee.controller';
import { Attendee, AttendeeSchema } from './schemas/attendee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Attendee.name, schema: AttendeeSchema },
    ]),
  ],
  controllers: [AttendeeController],
  providers: [AttendeeService],
})
export class AttendeeModule {}
