import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail } from 'class-validator';

// This creates a new type that has all the properties of User and
// all the properties of Document. The resulting type is called userDocument.
export type userDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  @IsEmail()
  email: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now() })
  date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
