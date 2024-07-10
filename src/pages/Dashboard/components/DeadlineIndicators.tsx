import { getDeadlineColor, getDeadlineRemainingTime } from "@/lib/utils";
import React from "react";

interface DeadlineProps {
  deadline: Date;
}

const Deadline: React.FC<DeadlineProps> = ({ deadline }) => {
  const daysRemaining = getDeadlineRemainingTime(deadline);
  const color = getDeadlineColor(daysRemaining);

  return (
    <div
      style={{ color }}
      className={`bg-${color}-500 bg-opacity-10 px-3 py-1 rounded-lg font-bold`}
    >
      {daysRemaining <= 0
        ? "Deadline Passed"
        : `${daysRemaining} day(s) remaining`}
    </div>
  );
};

export default Deadline;
