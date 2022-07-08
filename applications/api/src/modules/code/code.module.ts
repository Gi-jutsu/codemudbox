import { Module } from '@nestjs/common';
import { CodeController } from '@/code/controllers';
import { VMService } from '@/code/services';

@Module({
  controllers: [CodeController],
  providers: [VMService],
})
export class CodeModule {}
