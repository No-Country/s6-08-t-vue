import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

class Data {
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class PaymentAccepted {
  @IsNotEmpty()
  @IsString()
  action: string;

  @IsNotEmpty()
  @IsString()
  api_version: string;

  @IsNotEmpty()
  @IsObject()
  data: Data;

  @IsNotEmpty()
  @IsDate()
  date_created: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsBoolean()
  live_mode: boolean;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  user_id: string;
}
