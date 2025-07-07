import { CreateInquiryDto } from './app.dto';
import { Inquiry, InquiryDocument } from './app.schema';
import { Model } from 'mongoose';
export declare class AppService {
    private inquiryModel;
    constructor(inquiryModel: Model<InquiryDocument>);
    getHello(): string;
    createUserDetails(createInquiryDto: CreateInquiryDto): Promise<Inquiry>;
    findAll(): Promise<Inquiry[]>;
}
