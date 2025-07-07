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
    return 'Hello World! v1';
  }

  async _sendEmail(body: CreateInquiryDto) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@intellectacademicsolutions.com',
        pass: process.env.ZOHO_PASSWORD || '',
      },
    });

    let res = await transporter.sendMail({
      from: 'info@intellectacademicsolutions.com',
      to: 'cuownbe.it@gmail.com',
      subject: 'Enquiry',
      text: '',
      html: `
      <h1>Enquiry Details</h1>
      <p><strong>Name:</strong> ${body?.name ?? ''}</p>
      <p><strong>Email:</strong> ${body?.email ?? ''}</p>
      <p><strong>Phone:</strong> ${body?.phone ?? ''}</p>
      <p><strong>Course:</strong> ${body?.course ?? ''}</p>
      <p><strong>Message:</strong> ${body?.message ?? ''}</p>
      <p><strong>Reference:</strong> ${body?.reference ?? ''}</p>
    `,
    });
    console.log(res);
  }

  async createUserDetails(body: CreateInquiryDto) {
    await this._sendEmail(body);
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
