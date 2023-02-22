import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { PaymentService } from './payment.service';
import { dataPayment } from 'src/payment-link/entities/payment';

@Controller('payment')
export class PaymentController {
  constructor(private readonly appService: PaymentService) {}

  @Post()
  async payment(@Body() body: dataPayment) {
    return await this.appService.payment(body);
  }
}
