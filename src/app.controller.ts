import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateInquiryDto } from './app.dto';
import { Inquiry } from './app.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Intelect API (0.0.1)"
  }

  @Post('api/user/details')
  createUserDetails(@Body() body: CreateInquiryDto): Promise<Inquiry> {
    return this.appService.createUserDetails(body);
  }
}
