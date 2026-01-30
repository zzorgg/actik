"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { createClient } from "@/supabase/supabase-client";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const supabase = createClient();

  const googleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });
  };

  const githubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });
  };
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="actick@gmail.com"
            required
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field className="grid gap-4 sm:grid-cols-2">
          <Button variant="outline" type="button" onClick={githubLogin}>
            <Image
              src="/brands/github/github-dark.svg"
              alt="Github Icon"
              width={24}
              height={24}
              className="block dark:hidden"
            />
            <Image
              src="/brands/github/github-light.svg"
              alt="Github Icon"
              width={24}
              height={24}
              className="hidden dark:block"
            />
            GitHub
          </Button>
          <Button variant="outline" type="button" onClick={googleLogin}>
            <Image
              src="/brands/google/google.svg"
              alt="Google G Icon"
              width={18}
              height={18}
            />
            Google
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
          <FieldDescription className="text-center">
            Admin?{" "}
            <a href="/admin-login" className="underline decoration-dotted">
              Login here
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
