import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule  } from '@nestjs/typeorm'
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';


@Module({
  imports: [UsersModule],
  controllers: [AppController, PaymentController],
  providers: [AppService, PaymentService],
})
export class AppModule {}
