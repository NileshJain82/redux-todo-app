import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/action";

function ListUsingHooks() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  if(todos.length==0)
  return null;

  return (
    <div className="flex flex-col items-start w-10/12 m-3 p-5 bg-yellow-100 capitalize">
      {todos.map((eachTodo) => (
        <div
          key={eachTodo.id}
          className="border border-gray-400  w-full rounded-lg p-3 m-2 flex justify-between items-center"
        >
         <h3 style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
              {eachTodo.data}
            </h3>
          <button
            onClick={() => handleDeleteTodo(eachTodo.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListUsingHooks;
