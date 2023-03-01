import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

class Phone {
  @IsNotEmpty()
  @IsString()
  area_code: string;

  @IsNotEmpty()
  @IsNumber()
  number: number;
}

class Address {
  @IsNotEmpty()
  @IsString()
  street_name: string;

  @IsNotEmpty()
  @IsNumber()
  street_number: number;

  @IsNotEmpty()
  @IsNumber()
  zip_code: number;
}

export class PaymentData {
  @IsNotEmpty()
  @IsNumber()
  unit_price: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsObject()
  phone: Phone;

  @IsNotEmpty()
  @IsObject()
  address: Address;
}
