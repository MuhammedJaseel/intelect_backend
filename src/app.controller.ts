import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateInquiryDto } from './app.dto';
import { Inquiry } from './app.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('api/user/details')
  getHello(@Body() body: CreateInquiryDto): Promise<Inquiry> {
    return this.appService.createUserDetails(body);
  }
}
