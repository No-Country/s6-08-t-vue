import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { EnvConfiguration } from 'src/config/app.config';
import { dataPayment } from 'src/payment-link/entities/payment';

@Injectable()
export class PaymentService {
  async payment(dataPayment: dataPayment) {
    console.log(dataPayment);

    const url = 'https://api.mercadopago.com/checkout/preferences';

    const body = {
      items: [
        {
          id: 'item-ID-1234',
          title: 'Meu produto',
          currency_id: 'BRL',
          picture_url:
            'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
          description: 'Descrição do Item',
          category_id: 'art',
          quantity: 1,
          unit_price: Number(dataPayment.unit_price),
        },
      ],
      payer: {
        name: dataPayment.name,
        surname: dataPayment.surname,
        email: dataPayment.email,
        phone: {
          area_code: Number(dataPayment.phone.area_code),
          number: dataPayment.phone.number,
        },

        address: {
          street_name: dataPayment.address.street_name,
          street_number: dataPayment.address.street_number,
          zip_code: dataPayment.address.zip_code,
        },
      },
      back_urls: {
        success: `${process.env.SUCCESS_PAYMENT}`,
        failure: `${process.env.FAILURE_PAYMENT}`,
        pending: `${process.env.PENDING_PAYMENT}`,
      },
      auto_return: 'approved',
      payment_methods: {
        excluded_payment_methods: [
          {
            id: 'master',
          },
        ],
        excluded_payment_types: [
          {
            id: 'ticket',
          },
        ],
        installments: 12,
      },
      notification_url: 'https://www.your-site.com/ipn',
      statement_descriptor: 'MEUNEGOCIO',
      external_reference: 'Reference_1234',
      expires: false,
      expiration_date_from: '2016-02-01T12:00:00.000-04:00',
      expiration_date_to: '2026-02-28T12:00:00.000-04:00',
    };

    const payment = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }

  async createSubscription() {
    const url = 'https://api.mercadopago.com/preapproval';

    const body = {
      reason: 'Suscripción de ejemplo',
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: 100,
        currency_id: 'ARS',
      },
      back_urls: {
        success: 'https://www.mtv.com',
        failure: 'http://www.failure.com',
        pending: 'http://www.pending.com',
      },
      payer_email: 'test_user_46945293@testuser.com',
    };

    const subscription = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return subscription.data;
  }
}
