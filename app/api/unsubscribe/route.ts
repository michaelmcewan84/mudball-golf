import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return Response.json(
      { error: "Email required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabaseAdmin
    .from("signups")
    .update({
      marketing_consent: false,
    })
    .eq("email", email)
    .select();

  if (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return Response.json({
    success: true,
    updatedCount: data?.length ?? 0,
    updated: data,
  });
}