import React, { type FC } from "react";
import { Link } from "react-router-dom";

type IconLinkProps = {
  children: React.ReactNode;
  className?: string;
  toPath: string;
  icon?: string;
};

const IconLink: FC<IconLinkProps> = ({ children, className, toPath, icon }) => {
  return (
    <Link to={toPath} className={className}>
      {children}
    </Link>
  );
};

export default IconLink;
