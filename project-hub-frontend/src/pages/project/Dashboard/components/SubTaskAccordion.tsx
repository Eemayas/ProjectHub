import React, { useState } from "react";
import Accordion from "./Accordion";
import { TSubTaskList } from "../types";

interface SubTaskAccordionProps {
  subTaskList: TSubTaskList[];
}

const SubTaskAccordion: React.FC<SubTaskAccordionProps> = ({ subTaskList }) => {
  return (
    <div id="accordion-nested-parent" data-accordion="collapse">
      <Accordion title="SubTask" isOpenProps={true}>
        <>
          <div id="accordion-nested-collapse" data-accordion="collapse">
            {subTaskList.map((subTask, index) => (
              <Subtask
                key={`SubTask-${index}`}
                title={subTask.subTaskTitle}
                initialCompleted={subTask.status}
              />
            ))}
          </div>
        </>
      </Accordion>
    </div>
  );
};
interface SubtaskProps {
  title: string;
  initialCompleted?: boolean;
}

const Subtask: React.FC<SubtaskProps> = ({
  title,
  initialCompleted = false,
}) => {
  const [isCompleted, setIsCompleted] = useState(initialCompleted);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
        className="form-checkbox"
      />
      <span className={isCompleted ? "line-through" : ""}>{title}</span>
    </div>
  );
};

export default SubTaskAccordion;
