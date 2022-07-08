import * as vm from 'node:vm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VMService {
  execute(payload: string) {
    return vm.runInContext(
      payload,
      vm.createContext({}),
        { displayErrors: true }
    );
  }
}
