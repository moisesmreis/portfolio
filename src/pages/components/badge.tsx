import React from "react";

interface Props {
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ children }) => { 
  return (
    <span className="badge-main">{children}</span>
  );
}

export default Badge;
