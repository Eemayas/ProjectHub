import React from "react";

interface CircularProgressBarProps {
  size?: number;
  strokeWidth?: number;
  percentage: number;
  color?: string;
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  size = 100,
  strokeWidth = 10,
  percentage,
  color = "green",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const textSize = size * 0.25; // Adjust this value to fit your design

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="relative"
    >
      <circle
        className="text-gray-200"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="text-blue-500"
        strokeWidth={strokeWidth}
        stroke={color}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.35s" }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="font-semibold"
        fill={color}
        style={{ fontSize: textSize }}
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export const CircularProgressBarOutsideText: React.FC<
  CircularProgressBarProps
> = ({ size = 100, strokeWidth = 10, percentage = 50, color = "green" }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const textSize = size * 0.5; // Adjust this value to fit your design

  return (
    <div className=" flex space-x-2 items-center">
      <div
        className="font-semibold"
        style={{ fontSize: textSize, color: color }}
      >
        {`${percentage}%`}
      </div>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="relative"
      >
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-blue-500"
          strokeWidth={strokeWidth}
          stroke={color}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.35s" }}
        />
      </svg>
    </div>
  );
};

interface LinearProgressBarProps {
  value: number;
  color?: string;
  width?: number;
  trackColor?: string;
}

export const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
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
