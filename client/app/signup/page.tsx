import Image from "next/image";

import { SignupForm } from "@/components/signup-form";
import { Logo } from "@/components/logo";
import signup_light from "@/public/signup-light.png";
import signup_dark from "@/public/signup-dark.png";
import { Freepixel } from "@/components/ui/freepixel";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={signup_light}
          alt="signup-light"
          className="absolute inset-0 h-full w-full object-cover block dark:hidden"
        />
        <Image
          src={signup_dark}
          alt="signup-dark"
          className="absolute inset-0 h-full w-full object-cover hidden dark:block"
        />
        <Freepixel />
      </div>
    </div>
  );
}
