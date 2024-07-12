import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { TTodo, TTypedColumn } from "../types";

type Props = {
  id: TTypedColumn;
  todos: TTodo[];
  index: number;
};

const idToColumnText: {
  [key in TTypedColumn]: string;
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
  const getBgColorClass = (text: string) => {
    switch (text) {
      case "To Dos":
        return "bg-indigo-600";
      case "In Progress":
        return "bg-[#FFA500]";
      case "Done":
        return "bg-green-600";
      default:
        return "";
    }
  };
  const getTextColorClass = (text: string) => {
    switch (text) {
      case "To Dos":
        return "text-indigo-600";
      case "In Progress":
        return "text-[#FFA500]";
      case "Done":
        return "text-green-600";
      default:
        return "";
    }
  };
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
                className={`p-2 rounded-2xl shadow-sm px-5 pt-5 dark:border-gray-300 border-gray-700 border ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-column"
                }`}
              >
                <div className="flex gap-5 justify-between items-center  w-full font-medium mb-3">
                  <div className="flex gap-2 ">
                    <div
                      className={`my-auto w-2 h-2 ${getBgColorClass(
                        idToColumnText[id]
                      )} rounded-full`}
                    />
                    <div className="my-auto text-base">
                      {idToColumnText[id]}
                    </div>
                    <div className="justify-center items-center flex w-5 h-5 text-xs whitespace-nowrap rounded-xl bg-neutral-200 text-zinc-500">
                      {!searchString
                        ? todos.length
                        : todos.filter((todo) =>
                            todo.title.toLowerCase().includes(searchString)
                          ).length}
                    </div>
                  </div>
                  <Button
                    className={`${getBgColorClass(
                      idToColumnText[id]
                    )}  bg-opacity-5 p-2 rounded-full  `}
                  >
                    <MdAdd
                      className={`${getTextColorClass(
                        idToColumnText[id]
                      )} size-5 font-bold`}
                    />
                  </Button>
                </div>
                <div
                  className={`w-full h-1 rounded-full mb-3 ${getBgColorClass(
                    idToColumnText[id]
                  )} `}
                ></div>

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
                            bgColor={getBgColorClass(idToColumnText[id])}
                          ></TodoCard>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
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
