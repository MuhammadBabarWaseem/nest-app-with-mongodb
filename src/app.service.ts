import { Injectable } from '@nestjs/common';
import { User, userDocument } from './user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('Users') private userModel: Model<userDocument>) {}

  async createUser(user: User) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async getUser() {
    if (!this.userModel) return;
    return this.userModel.find();
  }

  async getUserById(id: string) {
    if (!this.userModel) return;
    return this.userModel.findById(id);
  }

  async updateUser(id: string, data: any) {
    return this.userModel.findByIdAndUpdate(id, data);
  }

  async deleteUser(id: string) {
    if (!this.userModel) return;
    return this.userModel.findByIdAndDelete(id);
  }
}
