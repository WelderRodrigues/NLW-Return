import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "dbe96f87c073a5",
    pass: "9abbd72497e3bd",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <contato@feedget.com>",
      to: "Welder Rodrigues <welder_15@hotmail.com>",
      subject,
      html: body,
    });
  }
}
