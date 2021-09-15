import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findMe(variants = [3,5,-4,8,11,1,-1,6], sum = 10): number[] {
    return this.appService.findMe(variants, sum);
  }
}
