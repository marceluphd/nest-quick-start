import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
    name() {
        return 'Hello fuinha!';
      }
}
