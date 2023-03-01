import { Injectable } from '@nestjs/common';
import * as mercadopago from 'mercadopago';
import axios from 'axios';
import { PaymentData } from './dto/paymentData.dto';

@Injectable()
export class PaymentService {
  constructor() {
    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    });
  }
  async payment(paymentData: PaymentData): Promise<any> {
    try {
      const preferences = {
        binary_mode: true,
        items: [
          {
            id: 'item-ID-1234',
            title: 'Donación',
            currency_id: 'ARS',
            picture_url:
              'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
            description: 'Donación',
            category_id: 'art',
            quantity: 1,
            unit_price: Number(paymentData.unit_price),
          },
        ],
        payer: {
          name: paymentData.name,
          surname: paymentData.surname,
          email: paymentData.email,
          phone: {
            area_code: paymentData.phone.area_code,
            number: paymentData.phone.number,
          },

          address: {
            street_name: paymentData.address.street_name,
            street_number: paymentData.address.street_number,
            zip_code: paymentData.address.zip_code,
          },
        },
        back_urls: {
          success: `${process.env.SUCCESS_PAYMENT}`,
          failure: `${process.env.FAILURE_PAYMENT}`,
          pending: `${process.env.PENDING_PAYMENT}`,
        },
        auto_return: 'approved',
        payment_methods: {
          payment_methods: {
            installments: 3,
          },
        },
        external_reference: 'Reference_1234',
        notification_url: 'https://eol3ilw0u5630yg.m.pipedream.net',
      };
      const response = await mercadopago.preferences.create(preferences);
      return response.body;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  /* async payment(paymentData: PaymentData) {
    const domain =
      process.env.DOMAIN ||
      `http://localhost:${process.env.PORT}` ||
      'http://localhost:3001';

    const url = 'https://api.mercadopago.com/checkout/preferences';

    const body = {
      items: [
        {
          id: 'item-ID-1234',
          title: 'Donación',
          currency_id: 'ARS',
          picture_url:
            'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
          description: 'Donación',
          category_id: 'art',
          quantity: 1,
          unit_price: Number(paymentData.unit_price),
        },
      ],
      payer: {
        name: paymentData.name,
        surname: paymentData.surname,
        email: paymentData.email,
        phone: {
          area_code: Number(paymentData.phone.area_code),
          number: paymentData.phone.number,
        },

        address: {
          street_name: paymentData.address.street_name,
          street_number: paymentData.address.street_number,
          zip_code: paymentData.address.zip_code,
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
      notification_url: 'http://localhost:3000/donation/save-new',
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
    console.log(body.notification_url);
    return payment.data;
  } */
  async handleIPN(body: any) {
    console.log('Este es el body: ', body);
    mercadopago.ipn
      .manage(body)
      .then((data) => {
        console.log('Esta es la data', data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
