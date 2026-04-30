import { Resend } from "resend";
import { env } from "@/src/config/env";
import type { IOrder } from "@/src/lib/db/models/User";

const resend = new Resend(env.RESEND_API);
const from = env.EMAIL_FROM;
const siteName = env.COMPANY_NAME;
const appUrl = env.APP_URL;

export async function sendWelcomeEmail(user: { email: string; name: string }) {
  await resend.emails.send({
    from,
    to: user.email,
    subject: `Welcome to ${siteName}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h1 style="color:#7c3aed">Welcome to ${siteName}!</h1>
        <p>Hi ${user.name},</p>
        <p>Thank you for creating your account. You're now ready to grow your social media presence.</p>
        <p>Get started by topping up your balance and placing your first order.</p>
        <a href="${appUrl}/dashboard" style="display:inline-block;background:#7c3aed;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;margin:16px 0">Go to Dashboard</a>
        <p style="color:#999;font-size:12px;margin-top:32px">— The ${siteName} Team</p>
      </div>
    `,
  });
}

export async function sendTopUpEmail(
  user: { email: string; name: string },
  amountGBP: number
) {
  await resend.emails.send({
    from,
    to: user.email,
    subject: "Your wallet top-up was successful",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h1 style="color:#7c3aed">Top-Up Successful</h1>
        <p>Hi ${user.name},</p>
        <p>Your wallet has been topped up with <strong>&pound;${amountGBP.toFixed(2)}</strong>.</p>
        <p>You can now use your balance to purchase services.</p>
        <a href="${appUrl}/dashboard" style="display:inline-block;background:#7c3aed;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;margin:16px 0">View Dashboard</a>
        <p style="color:#999;font-size:12px;margin-top:32px">— The ${siteName} Team</p>
      </div>
    `,
  });
}

export async function sendOrderConfirmationEmail(
  user: { email: string; name: string },
  order: IOrder
) {
  await resend.emails.send({
    from,
    to: user.email,
    subject: "Your order has been received",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h1 style="color:#7c3aed">Order Confirmed</h1>
        <p>Hi ${user.name},</p>
        <p>Your order has been received and is being processed.</p>
        <table style="width:100%;border-collapse:collapse;margin:16px 0">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Order ID</td><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">${order.id}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Platform</td><td style="padding:8px;border-bottom:1px solid #eee">${order.platform}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Service</td><td style="padding:8px;border-bottom:1px solid #eee">${order.service}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Package</td><td style="padding:8px;border-bottom:1px solid #eee">${order.packageName}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Quantity</td><td style="padding:8px;border-bottom:1px solid #eee">${order.quantity.toLocaleString()}</td></tr>
          <tr><td style="padding:8px;color:#666">Price</td><td style="padding:8px;font-weight:bold">&pound;${order.priceGBP.toFixed(2)}</td></tr>
        </table>
        <a href="${appUrl}/dashboard" style="display:inline-block;background:#7c3aed;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;margin:16px 0">Track Your Order</a>
        <p style="color:#999;font-size:12px;margin-top:32px">— The ${siteName} Team</p>
      </div>
    `,
  });
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactMessageEmail(data: ContactData) {
  const to = env.COMPANY_EMAIL || from;
  await resend.emails.send({
    from,
    to,
    subject: `New contact form message: ${data.subject}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h1 style="color:#7c3aed">New Contact Message</h1>
        <table style="width:100%;border-collapse:collapse;margin:16px 0">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${data.name}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Email</td><td style="padding:8px;border-bottom:1px solid #eee">${data.email}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Subject</td><td style="padding:8px;border-bottom:1px solid #eee">${data.subject}</td></tr>
        </table>
        <div style="background:#f9fafb;padding:16px;border-radius:8px;margin:16px 0">
          <p style="margin:0;white-space:pre-wrap">${data.message}</p>
        </div>
      </div>
    `,
  });
}

export async function sendContactAutoReply(data: ContactData) {
  await resend.emails.send({
    from,
    to: data.email,
    subject: `We received your message — ${siteName}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h1 style="color:#7c3aed">Thank You for Contacting Us</h1>
        <p>Hi ${data.name},</p>
        <p>We received your message and will get back to you as soon as possible.</p>
        <p>For reference, here is a copy of your message:</p>
        <div style="background:#f9fafb;padding:16px;border-radius:8px;margin:16px 0">
          <p style="margin:0;font-weight:bold">${data.subject}</p>
          <p style="margin:8px 0 0;white-space:pre-wrap">${data.message}</p>
        </div>
        <a href="${appUrl}" style="display:inline-block;background:#7c3aed;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;margin:16px 0">Visit ${siteName}</a>
        <p style="color:#999;font-size:12px;margin-top:32px">— The ${siteName} Team</p>
      </div>
    `,
  });
}
