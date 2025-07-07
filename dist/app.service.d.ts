import { CreateInquiryDto } from './app.dto';
import { Inquiry } from './app.schema';
export declare class AppService {
    getHello(): string;
    sendEmail(): Promise<void>;
    createUserDetails(createInquiryDto: CreateInquiryDto): Promise<Inquiry>;
}
