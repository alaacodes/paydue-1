import { forwardRef, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  type: "submit" | "button";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export type ButtonRef = HTMLButtonElement;

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ type, onClick, disabled, className, children }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        className={className + " " + "bg-blue-100 rounded-md text-white w-full"}
        type={type}
      >
        {children}
      </button>
    );
  }
);
