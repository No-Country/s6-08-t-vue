import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { PaymentService } from './payment.service';
import { dataPayment } from 'src/payment-link/entities/payment';

@Controller('payment')
export class PaymentController {
  constructor(private readonly appService: PaymentService) {}

  @Get(':dataPayment')
  async payment(@Param('dataPayment') dataPayment: string) {
    return await this.appService.payment(parseInt(dataPayment));
  }


}
