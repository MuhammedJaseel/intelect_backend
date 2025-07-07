import { Injectable } from '@nestjs/common';
import { CreateInquiryDto } from './app.dto';
import { Inquiry, InquiryDocument } from './app.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectModel(Inquiry.name)
  //   private inquiryModel: Model<InquiryDocument>,
  // ) {}

  getHello(): string {
    this.sendEmail();
    return 'Hello World! v1';
  }

  async sendEmail() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@intellectacademicsolutions.com',
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    let res = await transporter.sendMail({
      from: 'info@intellectacademicsolutions.com',
      to: 'cuownbe.it@gmail.com',
      subject: 'hallow',
      text: 'Hallow ',
    });
    console.log(res);
  }

  async createUserDetails(createInquiryDto: CreateInquiryDto) {
    return new Inquiry();
  }

  // async createUserDetails(
  //   createInquiryDto: CreateInquiryDto,
  // ): Promise<Inquiry> {
  //   const inquiry = new this.inquiryModel(createInquiryDto);
  //   return inquiry.save();
  // }

  // async findAll(): Promise<Inquiry[]> {
  //   return this.inquiryModel.find().exec();
  // }
}
