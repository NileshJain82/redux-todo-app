import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/action";

function ListUsingConnect({state,delete_Todo}) {

  const handleDeleteTodo = (id) => {
    delete_Todo(id);
  };

  if(state.todo.length==0)
  return null;

  return (
    <div className="flex flex-col items-start w-10/12 m-3 p-5 bg-yellow-100 capitalize">
      {state.todo.map((eachTodo) => (
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

function mapStateToProp(state){ 
  return {
    state : state
  }
}

function mapDispatchToProp(dispatch){ 
  return {
    delete_Todo : (id) => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProp,mapDispatchToProp)(ListUsingConnect);
