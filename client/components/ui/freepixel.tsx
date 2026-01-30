import { Info } from "lucide-react";

export function Freepixel() {
  return (
    <span className="absolute bottom-2 right-2 flex items-center gap-1 whitespace-nowrap text-[10px] bg-foreground/60 text-background px-2 py-0.5 rounded">
      <Info className="w-3 h-3 shrink-0" />
      <span>image by freepixel.com</span>
    </span>
  );
}
