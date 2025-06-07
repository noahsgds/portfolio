'use client';

import * as React from "react";

import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "default";
  children?: React.ReactNode;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = "outline", children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variant === "outline" && "border border-input bg-background text-muted-foreground",
        variant === "default" && "bg-primary text-primary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});
Tag.displayName = "Tag";

export { Tag };
