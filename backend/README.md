Endo point
http://localhost:3000/payment
MET: POST

Se le debe enviar en el body un objeto con los siguientes valores:
{ 
  "unit_price": "100",
  "name": "Diego",  
  "surname": "Dimitroff",
  "email":" user@email.com",
  "phone": {
  "area_code": "11",
  "number": "4444-4444"
  },
  "address": {
  "street_name": "Calle marmol",
  "street_number": "554",
  "zip_code": "3500"
  } 
}

"unit_price" > es el monto en dineron que  se pagara.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
VARIABLES DE ENTORNO:
ACCESS_TOKEN=  Este es el token que debe tener la persona que reciba el dinero, el mismo se debe obtenermediante la cuenta de Mercado pago creada
SUCCESS_PAYMENT=Se debe poner la pagina o ruta a la que el usuario que esta pagando accedera luego de realizar el pago si el mismo se efectiviza con exito
FAILURE_PAYMENT=Se debe poner la pagina o ruta a la que el usuario que esta pagando accedera luego de realizar el pago FALLA
PENDING_PAYMENT=Se debe poner la pagina o ruta a la que el usuario que esta pagando accedera luego de realizar el pago QUEDA PENDIENTE


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ACLARACIONE PARA EL DESARROLLO.
Para poder probar el funcionamiento de la api de mercado pago se debe tener en cuenta que TANTO EL COMPRADOR COMO EL VENDEDOR debe ser cuentas
verdaderas o ambas deben ser cuentas de prueba, es decir que no podemos intener testear la misma utilizando nuestra cuenta real y simular la compra
con una cuenta de prueba.
Dejo aqui dos cuentas de PRUEBA para poder utilizar y testear el funcionamiento (esto serian usuarios que puedo utilizar para logearme en la pagina de Mercado pago, puedo hacerlo a travez de diferentes navegadores o con ventanas incognitas a fin de poder tener ambas cuentas abiertas):

Identificación de cuenta: TEST_USER_1313855305
Usuario	Contraseña: uQwpuTttut
Public Key: APP_USR-39f42a1c-072a-45e5-95e2-a0ef3bd7b622
Access Token: APP_USR-4410140070420770-021915-9a67e31ccdd7e46c81e6967f03a2eedf-1313855305


Identificación de cuenta: TEST_USER_1313864649
Usuario	Contraseña: t61vtrzaJC
Public Key: APP_USR-67e17192-9882-430a-919c-7c0ec08b0749
Access Token: APP_USR-1271116256911400-021915-42f226bbf128fa74d870f633c6b6999f-1313864649


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

MERCADO PAGO OFRECE TARJETAS DE CREDITOS PARA SIMULAR PAGOS:
Tarjeta Número     Código de seguridad	 Fecha de caducidad
Mastercard	       5031755734530604   123	                 11/25
Visa	             4509953566233704   123	                 11/25
American Express   3711803032575221   234




++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

El endpoint devuelve toda la info como la sieguiente (lo cual seria un return de subscription.data):

{
    "additional_info": "",
    "auto_return": "approved",
    "back_urls": {
        "failure": "https://www.failure.com/",
        "pending": "https://www.pending.com/",
        "success": "https://www.success.com/"
    },
    "binary_mode": false,
    "client_id": "4410140070420770",
    "collector_id": 1313855305,
    "coupon_code": null,
    "coupon_labels": null,
    "date_created": "2023-02-22T15:36:20.401-04:00",
    "date_of_expiration": null,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2026-02-28T12:00:00.000-04:00",
    "expires": false,
    "external_reference": "Reference_1234",
    "id": "1313855305-c3373c2a-8004-41c0-ade9-f5e3fb3dcef4",
    "init_point": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1313855305-c3373c2a-8004-41c0-ade9-f5e3fb3dcef4",
    "internal_metadata": null,
    "items": [
        {
            "id": "item-ID-1234",
            "category_id": "art",
            "currency_id": "ARS",
            "description": "Descrição do Item",
            "picture_url": "https://http2.mlstatic.com/D_NQ_NP_842143-MLM53948591044_022023-F.jpg",
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 100
        }
    ],
    "marketplace": "NONE",
    "marketplace_fee": 0,
    "metadata": {},
    "notification_url": "https://www.your-site.com/ipn",
    "operation_type": "regular_payment",
    "payer": {
        "phone": {
            "area_code": "11",
            "number": "4444-4444"
        },
        "address": {
            "zip_code": "3500",
            "street_name": "Calle marmol",
            "street_number": "554"
        },
        "email": "user@email.com",
        "identification": {
            "number": "",
            "type": ""
        },
        "name": "Diego",
        "surname": "Dimitroff",
        "date_created": null,
        "last_purchase": null
    },
    "payment_methods": {
        "default_card_id": null,
        "default_payment_method_id": null,
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12,
        "default_installments": null
    },
    "processing_modes": null,
    "product_id": null,
    "redirect_urls": {
        "failure": "",
        "pending": "",
        "success": ""
    },
    "sandbox_init_point": "https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=1313855305-c3373c2a-8004-41c0-ade9-f5e3fb3dcef4",
    "site_id": "MLA",
    "shipments": {
        "default_shipping_method": null,
        "receiver_address": {
            "zip_code": "",
            "street_name": "",
            "street_number": null,
            "floor": "",
            "apartment": "",
            "city_name": null,
            "state_name": null,
            "country_name": null
        }
    },
    "statement_descriptor": "MEUNEGOCIO",
    "total_amount": null,
    "last_updated": null
}


Pero el cliente debe ser redirecionado directamente a subscription.data.init_point:
siguiendo el ejemplo anterior, el punto a redirecionar seria:
"init_point": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1313855305-c3373c2a-8004-41c0-ade9-f5e3fb3dcef4", 
