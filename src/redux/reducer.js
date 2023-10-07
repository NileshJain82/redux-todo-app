import { addTodo, deleteTodo } from "./action";
const initialState = {
    todo:[]
}

export const reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case "add": 
      return {...state, todo:[...state.todo,{
        id:action.payload.id,
        data:action.payload.data
      }]
      };

    case "delete":
      const newState = state.todo.filter((each)=> each.id!==action.payload.id)
      return {
        ...state,
        todo:newState 
      };
    default:
      return state;
  }
};
