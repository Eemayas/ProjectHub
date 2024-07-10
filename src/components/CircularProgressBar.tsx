import React from "react";

interface CircularProgressBarProps {
  value: number;
  color?: string;
  width?: number;
  trackColor?: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  color = "#4F46E5",
  width = 8,
  trackColor = "#E5E7EB",
}) => {
  return (
    <>
      <div className="flex justify-between">
        <span className="text-base font-medium">Progress</span>
        <span className="text-sm font-medium">{value}%</span>
      </div>
      <div
        className="w-full rounded-full"
        style={{ backgroundColor: trackColor, height: `${width}px` }}
      >
        <div
          className="rounded-full"
          style={{
            backgroundColor: color,
            height: `${width}px`,
            width: `${value}%`,
          }}
        ></div>
      </div>
    </>
  );
};

export default CircularProgressBar;
