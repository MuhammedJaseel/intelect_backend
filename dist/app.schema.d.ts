import { Document } from 'mongoose';
export type InquiryDocument = Inquiry & Document;
export declare class Inquiry {
    name: string;
    email: string;
    phone: string;
    course: string;
    message?: string;
    reference?: string;
}
export declare const InquirySchema: import("mongoose").Schema<Inquiry, import("mongoose").Model<Inquiry, any, any, any, Document<unknown, any, Inquiry, any> & Inquiry & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Inquiry, Document<unknown, {}, import("mongoose").FlatRecord<Inquiry>, {}> & import("mongoose").FlatRecord<Inquiry> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
