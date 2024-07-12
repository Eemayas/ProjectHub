import React from "react";

interface CircularProgressBarProps {
  size?: number;
  strokeWidth?: number;
  percentage: number;
  color?: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
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

export default CircularProgressBar;

// import React from "react";
// import PropTypes from "prop-types";

// const CircularProgressBar = ({ size, strokeWidth, percentage, color }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (percentage / 100) * circumference;

//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox={`0 0 ${size} ${size}`}
//       className="relative"
//     >
//       <circle
//         className="text-gray-200"
//         strokeWidth={strokeWidth}
//         stroke="currentColor"
//         fill="transparent"
//         r={radius}
//         cx={size / 2}
//         cy={size / 2}
//       />
//       <circle
//         className="text-blue-500"
//         strokeWidth={strokeWidth}
//         stroke={color}
//         fill="transparent"
//         r={radius}
//         cx={size / 2}
//         cy={size / 2}
//         strokeDasharray={circumference}
//         strokeDashoffset={offset}
//         strokeLinecap="round"
//       />
//       <text
//         x="50%"
//         y="50%"
//         dy=".3em"
//         textAnchor="middle"
//         className="text-xl font-semibold"
//         fill={color}
//       >
//         {`${percentage}%`}
//       </text>
//     </svg>
//   );
// };

// CircularProgressBar.propTypes = {
//   size: PropTypes.number.isRequired,
//   strokeWidth: PropTypes.number.isRequired,
//   percentage: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
// };

// CircularProgressBar.defaultProps = {
//   size: 100,
//   strokeWidth: 10,
//   percentage: 50,
//   color: "blue",
// };

// export default CircularProgressBar;
