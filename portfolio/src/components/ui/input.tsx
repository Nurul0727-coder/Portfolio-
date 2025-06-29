import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        " selection:bg-[#fef9f5] selection:text-primary-foreground  flex h-9 w-full min-w-0  px-3 py-1 transition-[color,box-shadow] outline-none file:inline-flex file:h-7  file:text-xs disabled:pointer-events-none disabled:cursor-not-allowed md:text-xs",
        " focus-visible:ring-ring/50 focus-visible:ring-[1px]",
        "",
        className
      )}
      {...props}
    />
  );
}

export { Input };
