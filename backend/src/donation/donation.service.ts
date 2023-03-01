import { Injectable } from '@nestjs/common';
import { PaymentAccepted } from './dto/paymentAccepted.dto';
import * as mercadopago from 'mercadopago';

@Injectable()
export class DonationService {
  async saveNew(body: any) {
    mercadopago.ipn
      .manage(body)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
