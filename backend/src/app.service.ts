import { Injectable } from '@nestjs/common';

//AGREGO EL ConfigService SEGUN RAMA DE YOAHN
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {

  private defaultLimit: number;
  constructor(private readonly configService: ConfigService) {
    this.defaultLimit = configService.get<number>('defaultLimit');
    console.log(this.defaultLimit, 'prueba');
  }




  getHello(): string {
    return 'Hello World!';
  }
}
