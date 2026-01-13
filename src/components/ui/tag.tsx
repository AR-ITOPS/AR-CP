import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Tag({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-black/20 bg-white/80 backdrop-blur-md px-5 py-2 text-black uppercase shadow-sm",
        className,
      )}
      {...props}
    >
      <span className="text-2xl">&#10038;</span>
      <span className="text-xl font-medium">{children}</span>
    </div>
  );
}
