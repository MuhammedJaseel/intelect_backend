import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Inquiry, InquirySchema } from './app.schema';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: Inquiry.name, schema: InquirySchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
