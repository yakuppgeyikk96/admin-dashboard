import React from "react";
import { ToggleButton } from "./toggle-button";

interface LeftSectionProps {
  className?: string;
}

export const LeftSection: React.FC<LeftSectionProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <ToggleButton />
      {/* Buraya arama çubuğu gibi sol taraf elemanları eklenebilir */}
    </div>
  );
};
