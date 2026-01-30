"use server";

import { redirect } from "next/navigation";
import { createActionClient } from "@/supabase/action-client";

export async function signOut() {
  const supabase = await createActionClient();
  await supabase.auth.signOut();
  redirect("/login");
}
