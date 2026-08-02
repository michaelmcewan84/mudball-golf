import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return Response.json(
      { error: "Email required" },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("signups")
    .update({
      marketing_consent: false,
    })
    .eq("email", email);

  if (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return Response.json({
    success: true,
  });
}