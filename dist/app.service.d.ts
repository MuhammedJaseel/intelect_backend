import { CreateInquiryDto } from './app.dto';
import { Inquiry } from './app.schema';
export declare class AppService {
    getHello(): any;
    sendEmail(): Promise<void>;
    createUserDetails(createInquiryDto: CreateInquiryDto): Promise<Inquiry>;
}
