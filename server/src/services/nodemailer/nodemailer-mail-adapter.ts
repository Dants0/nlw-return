import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2de0a0a52f8a57",
          pass: "0c9e3e97dc254b"
        }
      });
    

export class NodemailerMailAdapter implements MailAdapter{


    async sendMail({subject, body}:SendMailData){
            await transport.sendMail({
        from:'Equipe Feedget <oi@feedget.com>',
        to:'Guilherme Dantas <checkemailportf@gmail.com>',
        subject,
        html: body,
    });
    }
}