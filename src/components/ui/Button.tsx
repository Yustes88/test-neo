import React, { type FC } from "react";

type ButtonProps = {
  className: string;
  type: "button";
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({
  className,
  type,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
