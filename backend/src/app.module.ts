import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentService } from './donation/payment.service';
import { EnvConfiguration } from './config/app.config';
import { DonationModule } from './donation/donation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),
    DonationModule,
  ],

  controllers: [AppController],
  providers: [AppService, PaymentService],
})
export class AppModule {}
