import { User } from './user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  async createUser(@Body() userDTO: User) {
    return this.appService.createUser(userDTO);
  }
}
