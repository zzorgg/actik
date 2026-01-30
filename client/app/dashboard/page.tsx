import { createClient } from "@/supabase/server";
import { signOut } from "@/supabase/action";
import { redirect } from "next/navigation";
import { UserProfileCard } from "@/components/user";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
      <UserProfileCard user={user} signOut={signOut} />
    </div>
  );
}
