import React from "react";
import { cn } from "@/lib/utils";

export type IconBadgeVariant = "white-teal" | "yellow-teal" | "teal-yellow";

interface IconBadgeProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  ariaLabel?: string;
  icon: React.ReactNode; // Pass lucide-react icon JSX
  variant?: IconBadgeVariant;
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<IconBadgeVariant, { wrap: string; icon: string; shadow: string }> = {
  "white-teal": {
    wrap: "bg-white",
    icon: "text-foreground opacity-90",
    shadow: "shadow-cyan-500/30",
  },
  "yellow-teal": {
    wrap: "bg-[#FFEB3B]",
    icon: "text-foreground opacity-90",
    shadow: "shadow-yellow-400/40",
  },
  "teal-yellow": {
    wrap: "bg-foreground",
    icon: "text-[#FFEB3B] opacity-90",
    shadow: "shadow-cyan-600/40",
  },
};

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
};

export function IconBadge({
  href,
  ariaLabel,
  icon,
  variant = "white-teal",
  size = "lg",
  className,
  ...props
}: IconBadgeProps) {
  const classes = variantClasses[variant];

  const content = (
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-2xl transition-transform duration-300",
        sizeClasses[size],
        classes.wrap,
        "hover:scale-110 shadow-2xl",
        classes.shadow,
      )}
    >
      <span className={cn("flex items-center justify-center", classes.icon)}>{icon}</span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={cn("group relative", className)}
        {...props}
      >
        {/* Hover glow */}
        <span className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 bg-foreground/10" />
        {content}
      </a>
    );
  }

  return (
    <span className={cn("inline-block", className)} {...props}>
      {content}
    </span>
  );
}

export default IconBadge;
