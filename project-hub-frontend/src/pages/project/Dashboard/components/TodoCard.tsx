import { useState, useEffect } from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

import { Button } from "@/components/ui/button";
import { SlOptions } from "react-icons/sl";
import MemberAvatarGroup from "@/components/MemberAvatrGroup";
import { CircularProgressBarOutsideText } from "@/components/CircularProgressBar";
import ResourcesAccordion from "./ResourcesAccordion";
import { TTodo, TTypedColumn } from "../types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import SubTaskAccordion from "./SubTaskAccordion";

type Props = {
  todo: TTodo;
  index: number;
  id: TTypedColumn;
  bgColor: string;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};
const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  dragHandleProps,
  draggableProps,
  bgColor,
}: Props) => {
  // const deleteTask = useBoardStore((state) => state.deleteTask);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (todo.image) {
      const fetchImage = async () => {
        // const url = await getUrl(todo.image!);
        // if (url) {
        //   setImageUrl(url.toString());
        // }
      };
      fetchImage();
    }
  }, [todo]);
  const [isTaskOptionDropdownOpen, setIsTaskOptionDropdownOpen] =
    useState(false);

  return (
    <div
      key={`Task Card-${index}-${id}`}
      className="bg-white dark:bg-gray-900 space-y-2 drop-shadow-md dark:border-gray-300 border-gray-700 border shadow-card-light dark:shadow-card-dark rounded-2xl"
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
    >
      <div className="flex flex-col justify-between  p-5">
        <div className="mt-2 text-[1rem] font-semibold  justify-between flex w-full items-center">
          {todo.title}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="bg-transparent"
                aria-expanded={isTaskOptionDropdownOpen}
                onClick={() =>
                  setIsTaskOptionDropdownOpen(!isTaskOptionDropdownOpen)
                }
              >
                <SlOptions className="text-gray-700 dark:text-gray-300 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white border border-gray-400 dark:border-gray-600  rounded-lg shadow-lg dark:bg-gray-700"
            >
              <div
                className="mt-2  bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit Task
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete task
                    </a>
                  </li>
                </ul>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-2.5 text-sm ">{todo.taskDescription}</div>{" "}
        {imageUrl && (
          <div className="h-full w-full rounded-b-md">
            <img
              src={imageUrl}
              alt="Task image"
              width={400}
              height={200}
              className="full object-contain rounded-b-md"
            />
          </div>
        )}
        <div className={`w-full h-1 rounded-full my-4 ${bgColor}`} />
        <SubTaskAccordion subTaskList={todo.subTaskList || []} />
        <div className={`w-full h-1 rounded-full my-4 ${bgColor}`} />
        <ResourcesAccordion resourceList={todo.resourceList} />
        <div className={`w-full h-1 rounded-full my-4 ${bgColor}`} />
        <div className="flex justify-between">
          <MemberAvatarGroup memberList={todo.memberList} size={8} />
          <CircularProgressBarOutsideText
            size={30}
            strokeWidth={5}
            color="green"
            percentage={todo.progressPrecentage}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
