import { Injectable } from '@nestjs/common';
import { MyService } from './my/my.service';

@Injectable()
export class AppService {

  constructor(private myService: MyService){

  }

  getHello(): string {
    return 'Hello World!';
  }
}
