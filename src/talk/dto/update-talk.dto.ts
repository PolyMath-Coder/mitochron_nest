import { PartialType } from '@nestjs/mapped-types';
import { addTalkDto } from './add-talk.dto';

export class UpdateTalkDto extends PartialType(addTalkDto) {}
