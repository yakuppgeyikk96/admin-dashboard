import React from "react";

interface RightSectionProps {
  className?: string;
  children?: React.ReactNode;
}

export const RightSection: React.FC<RightSectionProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>{children}</div>
  );
};
