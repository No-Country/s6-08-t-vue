import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';
@Controller('payment')
export class PaymentController {
  constructor(private readonly appService: PaymentService) {}
  @Get()
  payment(): string {
    return this.appService.Test();
  }
}
