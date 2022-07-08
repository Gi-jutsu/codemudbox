import { Body, Controller, Post } from '@nestjs/common';
import { PayloadDto } from '@/code/dtos';
import { VMService } from '@/code/services';

@Controller('/code')
export class CodeController {
  constructor(private readonly VMService: VMService) {}

  @Post('/execute')
  async execute(@Body() dto: PayloadDto) {
    return this.VMService.execute(dto.payload);
  }
}
