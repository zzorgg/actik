import { NextResponse } from "next/server";
import { createClient } from "@/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const host = request.headers.get("host");
      const protocol = request.headers.get("x-forwarded-proto") ?? "http";
      return NextResponse.redirect(`${protocol}://${host}${next}`);
    }
  }
  const origin = new URL(request.url).origin;
  return NextResponse.redirect(`${origin}/login?error=auth-code-error`);
}
