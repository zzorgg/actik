"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: number;
};

export function LogoIcon({ className, size = 20 }: LogoProps) {
  return (
    <Image
      src="/icon-512.png"
      alt="Actik logo"
      width={size}
      height={size}
      className={cn("aspect-square", className)}
      priority
    />
  );
}

export function Logo({ className, size = 20 }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoIcon size={size} />

      <span className="font-semibold tracking-tight" style={{ fontSize: size }}>
        actik
      </span>
    </div>
  );
}
