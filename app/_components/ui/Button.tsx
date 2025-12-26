import clsx from "clsx";
import { LucideProps } from "lucide-react";
import Link from "next/link";

const Button = ({
  children,
  variant,
  link,
  isDisabled = false,
}: {
  children: string | LucideProps;
  variant: "filled" | "outline";
  link: string;
  isDisabled: boolean;
}) => {
  if (variant === "outline") {
    return (
      <Link
        href={link}
        className="text-center px-8 py-3 bg-transparent text-btn-text tracking-wide border border-white/40 hover:brightness-90 transition-opacity cursor-pointer"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={link}
      className={clsx(
        "text-center px-8 py-3 text-btn-text tracking-wide hover:opacity-90 transition-opacity",
        isDisabled
          ? "bg-border pointer-events-none cursor-not-allowed"
          : "bg-primary cursor-pointer"
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
