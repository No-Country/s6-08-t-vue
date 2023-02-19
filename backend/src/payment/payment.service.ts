import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {

  Test(): string{
    return 'Desde el service';
  }
}
