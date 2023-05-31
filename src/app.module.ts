import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendeeModule } from './attendee/attendee.module';
import { config } from 'dotenv';
config();
const databaseURL = process.env.DB_URL;
const DB_LINK = databaseURL.toString();
const DATABASE_NAME = process.env.DATABASE_NAME;

@Module({
  imports: [
    MongooseModule.forRoot(`${DB_LINK}`, {
      dbName: `${DATABASE_NAME}`,
    }),
    AttendeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
