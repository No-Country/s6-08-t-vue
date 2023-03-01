import { Body, Controller, Post } from '@nestjs/common';
import { DonationService } from './donation.service';
import { PaymentAccepted } from './dto/paymentAccepted.dto';
import { PaymentData } from './dto/paymentData.dto';
import { PaymentService } from './payment.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('donation')
export class DonationController {
  constructor(
    private readonly donationService: DonationService,
    private readonly paymentService: PaymentService,
  ) {}

  @Post('payment')
  async payment(@Body() body: PaymentData): Promise<any> {
    const initPoint = await this.paymentService.payment(body);
    return { initPoint };
    //return await this.paymentService.payment(body);
  }

  @Post('save')
  async handleIpn(@Body() body: any) {
    console.log(body);
    const handleIPN = await this.paymentService.handleIPN(body);
    return { handleIPN };
  }
  /* @ApiResponse({
    status: 201,
    description: 'Se ha registrado la organización.',
  })
  async saveNew(@Body() body: any) {
    return await this.donationService.saveNew(body);
  } */
}
