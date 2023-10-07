import React from "react";
import { useState } from "react";
import { addTodo } from "../redux/action";
import { connect } from "react-redux";

function InputUsingConnect({add_Todo}) {;
  const [todo, setTodo] = useState("");
  
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleClick=()=>{
    add_Todo(todo)
    setTodo("")
  }

 

  return (
    <div className='flex m-10'>
        <div >
          <input
            type="text"
            className="text-gray-900 w-80 border-2 border-gray-300 p-2 placeholder:text-gray-600 capitalize  bg-orange-100 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="enter the todo"
            value={todo}
            onChange={handleChange}
          />
        </div>
        <div>
        <button
          className="rounded-lg  bg-orange-100 p-2 border-2 border-gray-300 ml-3  text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500"
          onClick={handleClick}
        >
          Add
        </button>
        </div>
        </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_Todo: (todo) => dispatch(addTodo(todo))
  };
};

export default connect(null, mapDispatchToProps)(InputUsingConnect);
