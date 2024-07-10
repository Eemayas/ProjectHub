import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

import { Todo, TypedColumn } from "./Board";
import { BiPlusCircle } from "react-icons/bi";
import TodoCard from "./TodoCard";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Dos",
  inprogress: "In Progress",
  done: "Done",
};
//https://youtu.be/7DVdVGm7Ht8?si=9WsX25J8STDs8KuR&t=11928
const Column = ({ id, todos, index }: Props) => {
  // const [searchString, setNewTaskType] = useBoardStore((state) => [
  //   state.searchString,
  //   state.setNewTaskType,
  // ]);
  // const [openModal] = useModalStore((state) => [state.openModal]);
  // const handleAddTodo = () => {
  //   setNewTaskType(id);
  //   openModal();
  // };
  const searchString = undefined;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between font-normal text-xl">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full p-2">
                    {!searchString
                      ? todos.length
                      : todos.filter((todo) =>
                          todo.title.toLowerCase().includes(searchString)
                        ).length}
                  </span>
                </h2>

                <div className="space-y-2 ">
                  {todos.map((todo, index) => {
                    if (
                      searchString &&
                      !todo.title.toLowerCase().includes(searchString)
                    ) {
                      return null;
                    }
                    return (
                      <Draggable
                        draggableId={todo.$id}
                        index={index}
                        key={todo.$id}
                      >
                        {(provided) => (
                          <TodoCard
                            id={id}
                            todo={todo}
                            index={index}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                            innerRef={provided.innerRef}
                          ></TodoCard>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                  <div className="flex items-end justify-end">
                    <button
                      // onClick={handleAddTodo}
                      className="text-green-500 hover:text-green-600"
                    >
                      <BiPlusCircle className="h-10 w-10 " />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;

export const List = ({ id, todos, index }: Props) => {
  // const items = props.items;

  return (
    <Droppable
      droppableId="droppable"
      renderClone={(provided, snapshot, rubric) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          Item id:
        </div>
      )}
    >
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {todos.map((item) => (
            <Draggable draggableId={id} index={index}>
              {(provided, snapshot) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  Item id:
                </div>
              )}
            </Draggable>
          ))}
        </div>
      )}
    </Droppable>
  );
};
// App.tsx

type Item = {
  id: string;
  content: string;
};

const initialItems: Item[] = [
  { id: "item-1", content: "Item 1" },
  { id: "item-2", content: "Item 2" },
  { id: "item-3", content: "Item 3" },
  { id: "item-4", content: "Item 4" },
];

export const Game: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ border: "1px solid lightgray", padding: 10, width: 200 }}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        userSelect: "none",
                        padding: 16,
                        margin: "0 0 8px 0",
                        minHeight: "50px",
                        backgroundColor: "white",
                        ...provided.draggableProps.style,
                      }}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
