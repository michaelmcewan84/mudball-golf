import { Resend } from "resend";
import WelcomeEmail from "@/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name } = await request.json();

  try {
    await resend.emails.send({
      from: "Mudball Golf <hello@mudballgolf.uk>",
      to: email,
      subject: "You're on the list!",
      react: WelcomeEmail({ name }),
      headers: {
        "List-Unsubscribe": "<https://mudballgolf.uk/unsubscribe>",
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}