import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  nature: z.string(),
  date: z.string().optional(),
  time: z.string().optional(),
  message: z.string().min(10),
  honeypot: z.string().optional().or(z.literal('')), 
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { firstName, lastName, email, phone, nature, date, time, message } = contactSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Domaine par défaut Resend (fonctionne uniquement vers l'email du compte Resend pour les tests)
      to: 'shmom.drch@gmail.com', // TODO: Changer pour contact@paulforbe.com en prod
      replyTo: email,
      subject: `Nouveau Contact Site: ${firstName} ${lastName} - ${nature}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #002855; padding: 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">Paul Forbe</h1>
                <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px;">Nouvelle demande de contact</p>
            </div>
            
            <div style="padding: 32px;">
                <div style="border-radius: 8px; background-color: #f8fafc; padding: 20px; margin-bottom: 24px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 40%;">Prénom / Nom</td>
                            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                            <td style="padding: 8px 0; color: #002855;"><a href="mailto:${email}" style="color: #002855; text-decoration: none;">${email}</a></td>
                        </tr>
                         <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Téléphone</td>
                            <td style="padding: 8px 0; color: #0f172a;">${phone || '-'}</td>
                        </tr>
                         <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Nature</td>
                            <td style="padding: 8px 0; color: #0f172a;">${nature}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Créneau souhaité</td>
                            <td style="padding: 8px 0; color: #0f172a;">${date ? date : ''} ${time ? 'à ' + time : ''}</td>
                        </tr>
                    </table>
                </div>

                <p style="color: #64748b; font-size: 14px; margin-bottom: 8px;">Message :</p>
                <div style="background-color: #ffffff; border-left: 4px solid #002855; padding: 16px; color: #334155; line-height: 1.6; font-style: italic;">
                    "${message}"
                </div>
            </div>

            <div style="background-color: #f8fafc; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e5e7eb;">
                © 2024 Paul Forbe - Gestion de Patrimoine
            </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur API Contact Resend:', error);
      return NextResponse.json({ success: false, error: 'Erreur lors de l\'envoi' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message envoyé' }, { status: 200 });

  } catch (error) {
    console.error('Erreur API Contact:', error);
    if (error instanceof z.ZodError) {
        return NextResponse.json({ success: false, error: 'Données invalides', details: (error as z.ZodError).errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Erreur interne' }, { status: 500 });
  }
}
