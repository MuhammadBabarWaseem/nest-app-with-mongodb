import { IsString } from 'class-validator';

export class userUpdateDto {
  @IsString()
  description: string;
}
