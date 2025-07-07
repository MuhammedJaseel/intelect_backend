import { Injectable } from '@nestjs/common';
import { CreateInquiryDto } from './app.dto';
import { Inquiry, InquiryDocument } from './app.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Inquiry.name)
    private inquiryModel: Model<InquiryDocument>,
  ) {}

  getHello(): string {
    return 'Hello World! v1';
  }

  async createUserDetails(
    createInquiryDto: CreateInquiryDto,
  ): Promise<Inquiry> {
    const inquiry = new this.inquiryModel(createInquiryDto);
    return inquiry.save();
  }

  async findAll(): Promise<Inquiry[]> {
    return this.inquiryModel.find().exec();
  }
}
