import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InquiryDocument = Inquiry & Document;

@Schema({ timestamps: true })
export class Inquiry {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  course: string;

  @Prop()
  message?: string;

  @Prop()
  reference?: string;
}

export const InquirySchema = SchemaFactory.createForClass(Inquiry);
