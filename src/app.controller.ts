import { userUpdateDto } from './user-update-dto';
import { User } from './user.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDTO: User) {
    return this.appService.createUser(userDTO);
  }

  @Get()
  getUser() {
    return this.appService.getUser();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.appService.getUserById(id);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() update: userUpdateDto) {
    this.appService.updateUser(id, update);
    return { message: 'User updated successfully' };
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    this.appService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
}
