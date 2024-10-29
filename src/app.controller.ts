import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DoctorModel } from './models/testing-method.model';
import { instanceToPlain } from 'class-transformer';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
@UsePipes(new ValidationPipe({ transform: true }))
export class AppController {
  @Post()
  getHello(@Body() payload: DoctorModel) {
    return instanceToPlain(payload);
  }
}
