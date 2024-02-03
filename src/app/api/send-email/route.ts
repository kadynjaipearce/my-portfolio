import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function GET(req: Request) {
  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY ?? "",
  });

  const sentFrom = new Sender("you@yourdomain.com", "Your name");

  const recipients = [new Recipient("your@client.com", "Your Client")];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("This is a Subject")
    .setTemplateId("templateId");

  await mailerSend.email.send(emailParams);
}
