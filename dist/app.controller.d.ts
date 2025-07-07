import { AppService } from './app.service';
import { CreateInquiryDto } from './app.dto';
import { Inquiry } from './app.schema';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createUserDetails(body: CreateInquiryDto): Promise<Inquiry>;
}
