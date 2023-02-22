export interface dataPayment {
  unit_price: number;
  name: string;

  surname: string;
  email: string;
  phone: { area_code: number; number: number };
  address: { street_name: string; street_number: number; zip_code: number };
}
