import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const type = formData.get('type') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;
    const linkedin = formData.get('linkedin') as string | null;

    const hasCredentials = process.env.SMTP_HOST && process.env.SMTP_USER;

    if (!hasCredentials) {
        console.log("------------------------------------------");
        console.log(" NO SMTP CREDENTIALS - DATA LOGGED ONLY ");
        console.log("Type:", type);
        console.log("From:", `${firstName} ${lastName} <${email}>`);
        console.log("Message:", message);
        if (linkedin) console.log("LinkedIn:", linkedin);
        if (file) console.log("File attached:", file.name, `(${file.size} bytes)`);
        console.log("------------------------------------------");
        
        return NextResponse.json({ success: true, message: "Simulation successful (check server logs)" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
          rejectUnauthorized: false
      }
    });

    const subject = `Nouveau Contact : ${firstName} ${lastName}`;
    const htmlContent = `
        <h2>Nouvelle demande de contact via le site</h2>
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <h3>Message :</h3>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
    `;

    const attachments = [];
    if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
            filename: file.name,
            content: buffer
        });
    }

    await transporter.sendMail({
      from: `"Paulforbe Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "contact@paulforbe.com",
      replyTo: email,
      subject: subject,
      html: htmlContent,
      attachments: attachments
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
