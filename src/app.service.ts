import { Injectable } from '@nestjs/common';
import { User, userDocument } from './user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('Users') private userModel: Model<userDocument>) {}

  async createUser(user: User): Promise<User> {
    const newUser = await new this.userModel(user);
    return newUser.save();
  }
}
