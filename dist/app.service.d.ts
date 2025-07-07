import { CreateInquiryDto } from './app.dto';
import { Inquiry } from './app.schema';
export declare class AppService {
    getHello(): string;
    _sendEmail(body: CreateInquiryDto): Promise<void>;
    createUserDetails(body: CreateInquiryDto): Promise<Inquiry>;
}
