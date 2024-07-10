import { useState } from "react";
import {
  DragDropContext,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import Column from "./Column";

export interface Board {
  columns: Map<TypedColumn, Column>;
}

export type TypedColumn = "todo" | "inprogress" | "done";

export interface Column {
  id: TypedColumn;
  todos: Todo[];
}

export interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
}

export interface Image {
  buckedId: string;
  fileId: string;
}

const Board = () => {
  const board1: Board = {
    columns: new Map([
      [
        "todo",
        {
          id: "todo",
          todos: [
            {
              $id: "653b4d23c467f099328a",
              $createdAt: "2023-10-27T05:39:47.805+00:00",
              title: "Take the Dog out for the walk",
              status: "todo",
            },
          ],
        },
      ],
      [
        "inprogress",
        {
          id: "inprogress",
          todos: [
            {
              $id: "653bd2c0060a7af82657",
              $createdAt: "2023-10-27T15:09:52.025+00:00",
              title: "Do your HW",
              status: "inprogress",
            },
          ],
        },
      ],
      ["done", { id: "done", todos: [] }],
    ]),
  };

  const [board, setBoardState] = useState<Board>(board1);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    console.log({ destination, source, type });
    if (!destination) return;

    // Handle Column drag
    if (type === "column") {
      const columnsArray = Array.from(board.columns.entries());
      const [removed] = columnsArray.splice(source.index, 1);
      columnsArray.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(columnsArray);
      setBoardState({
        ...board,
        columns: rearrangedColumns,
      });
      return;
    }

    const columnArray = Array.from(board.columns);
    const startColIndex = columnArray[Number(source.droppableId)];
    const finishColIndex = columnArray[Number(destination.droppableId)];

    const startCol = board.columns.get(startColIndex[0]);
    const finishCol = board.columns.get(finishColIndex[0]);

    if (!startCol || !finishCol) return;

    if (source.index === destination.index && startCol === finishCol) return;

    const newStartTodos = Array.from(startCol.todos);
    const [movedTodo] = newStartTodos.splice(source.index, 1);

    if (startCol.id === finishCol.id) {
      // Same column task drag
      newStartTodos.splice(destination.index, 0, movedTodo);
      const newStartCol = {
        id: startCol.id,
        todos: newStartTodos,
      };
      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, newStartCol);

      setBoardState({ ...board, columns: newColumns });
    } else {
      // Dragging to another column
      const finishTodos = Array.from(finishCol.todos);
      finishTodos.splice(destination.index, 0, movedTodo);
      const newStartCol = {
        id: startCol.id,
        todos: newStartTodos,
      };
      const newFinishCol = {
        id: finishCol.id,
        todos: finishTodos,
      };

      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, newStartCol);
      newColumns.set(finishCol.id, newFinishCol);

      // Update in DB
      updateTodoInDB(movedTodo, finishCol.id);

      setBoardState({ ...board, columns: newColumns });
    }
  };

  // Assume updateTodoInDB is defined somewhere else in your code
  const updateTodoInDB = (todo: Todo, newStatus: TypedColumn) => {
    // Update the todo status in the database
  };
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            >
              {Array.from(board.columns.entries()).map(
                ([id, column], index) => (
                  <Column key={id} id={id} todos={column.todos} index={index} />
                  // <List key={id} id={id} todos={column.todos} index={index} />
                )
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Board;
