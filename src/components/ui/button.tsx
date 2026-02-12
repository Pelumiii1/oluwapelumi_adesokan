import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40";

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-black text-white hover:bg-black/80",
  outline: "border border-black/20 text-black hover:bg-black hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-sm",
};

export const Button = ({
  variant = "default",
  size = "md",
  className = "",
  type,
  ...props
}: ButtonProps) => {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button type={type ?? "button"} className={classes} {...props} />;
};
