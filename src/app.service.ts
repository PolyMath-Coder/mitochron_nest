import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      status: true,
      message: 'Welcome to Mitochron Hub...',
    };
  }
}
