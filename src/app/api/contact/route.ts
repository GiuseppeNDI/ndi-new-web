import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { nombre, email, empresa, servicio, mensaje } = body;
    
    if (!nombre || !email || !servicio || !mensaje) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
    }
    
    await resend.emails.send({
      from: 'NDI Contacto <onboarding@resend.dev>',
      to: 'gabad@negociosdigitalesinteligentes.com',
      replyTo: email,
      subject: `Nuevo contacto NDI — ${servicio}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #c0c1ff;">Nuevo mensaje de contacto — NDI</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888;">Nombre:</td>
                <td style="padding: 8px 0;"><strong>${nombre}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Email:</td>
                <td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Empresa:</td>
                <td style="padding: 8px 0;">${empresa || 'No indicada'}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Servicio:</td>
                <td style="padding: 8px 0;">${servicio}</td></tr>
          </table>
          <div style="margin-top: 16px;">
            <p style="color: #888; margin-bottom: 8px;">Mensaje:</p>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px;">${mensaje}</div>
          </div>
        </div>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}
