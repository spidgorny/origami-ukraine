import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_KEY);
  const postData = await request.json();
  const { message, ...mailDetails } = postData;
  let payload = {
    from: "onboarding@resend.dev",
    to: "spidgorny@gmail.com",
    subject: "Contact form from Origami Ukraine",
    html: `<p>Hi, somebody sent an email from website. Here are the details:</p>
    <pre>${JSON.stringify(mailDetails, null, 2)}</pre>
    <div style="background-color: #ddd; padding: 1em">
      ${message.replace("\n", "<br />")}
    </div>`,
  };
  console.log(payload);
  const result = await resend.emails.send(payload);
  console.log(result);
  return Response.json({ result });
}
