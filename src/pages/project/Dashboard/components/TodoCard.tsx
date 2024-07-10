import React, { useState, useEffect } from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";
import { Todo, TypedColumn } from "./Board";
import { MdDeleteSweep } from "react-icons/md";

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
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

  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md"
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-5">
        <p>{todo.title}</p>
        <button
          // onClick={() => deleteTask(index, todo, id)}
          className="text-red-500 hover:text-red-600"
        >
          <MdDeleteSweep className="ml-5 h-8 w-8" />
        </button>
      </div>
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
    </div>
  );
};

export default TodoCard;
