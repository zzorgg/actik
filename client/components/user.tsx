import { MailIcon, KeyIcon, CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LogoIcon } from "./logo";

export function UserProfileCard({
  user,
  signOut,
}: {
  user: any;
  signOut: () => Promise<void>;
}) {
  const name = user.user_metadata?.full_name ?? "User";
  const avatar = user.user_metadata?.avatar_url;
  const provider = user.app_metadata?.provider ?? "email";

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="relative">
          <Avatar className="size-14">
            <AvatarImage src={avatar} />
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <span className="absolute -bottom-1 -right-1">
            <LogoIcon />
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-lg font-semibold">{name}</span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <MailIcon className="size-4" />
            {user.email}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <KeyIcon className="size-4 text-muted-foreground" />
          <span className="font-medium">Provider:</span>
          <span className="capitalize">{provider}</span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarIcon className="size-4 text-muted-foreground" />
          <span className="font-medium">Joined:</span>
          <span>{new Date(user.created_at).toDateString()}</span>
        </div>

        <div className="pt-4">
          <form action={signOut}>
            <Button variant="destructive" className="w-full">
              Sign Out
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
