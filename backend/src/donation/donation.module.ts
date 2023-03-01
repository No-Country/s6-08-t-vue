import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
//import { Donation } from './entities/donation.entity';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentService } from './payment.service';

@Module({
  controllers: [DonationController],
  providers: [DonationService, PaymentService],
  //imports: [TypeOrmModule.forFeature([Donation])],
})
export class DonationModule {}
