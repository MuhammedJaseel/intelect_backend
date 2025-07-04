import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Inquiry, InquiryDocument } from './app.schema';
import { CreateInquiryDto } from './app.dto';
import { Model } from 'mongoose';


@Injectable()
export class AppService {
  constructor(
    @InjectModel(Inquiry.name)
    private inquiryModel: Model<InquiryDocument>,
  ) {}

  async createUserDetails(createInquiryDto: CreateInquiryDto): Promise<Inquiry> {
    const inquiry = new this.inquiryModel(createInquiryDto);
    return inquiry.save();
  }

  async findAll(): Promise<Inquiry[]> {
    return this.inquiryModel.find().exec();
  }
}
