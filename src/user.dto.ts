import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// This creates a new type that has all the properties of User and
// all the properties of Document. The resulting type is called userDocument.
export type userDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  description: string;

  @Prop({ default: Date.now() })
  date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
