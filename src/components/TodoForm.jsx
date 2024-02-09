import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import { AiOutlinePlusCircle } from "react-icons/ai";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoContext();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, isCompleted: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Add a Todo..."
        className="w-full border border-gray-300 capitalize rounded-l-lg px-3 outline-none duration-150 bg-white-50 py-1.5 text-gray-800 focus:border-2 focus:border-green-500 focus:shadow-green-500 focus:shadow-md"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-4 py-4 bg-green-500 text-white text-2xl duration-150  hover:shadow-green-500 hover:shadow-2xl  "
      >
        <AiOutlinePlusCircle className="hover:scale-105" />
      </button>
    </form>
  );
};

export default TodoForm;
