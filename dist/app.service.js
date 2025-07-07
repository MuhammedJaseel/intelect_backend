"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const app_schema_1 = require("./app.schema");
const nodemailer = require("nodemailer");
let AppService = class AppService {
    getHello() {
        return 'Hello World! v1';
    }
    async _sendEmail(body) {
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
    async createUserDetails(body) {
        await this._sendEmail(body);
        return new app_schema_1.Inquiry();
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map