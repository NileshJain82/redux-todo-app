export function addTodo(data){
    return{
        type:"add",
        payload:{
            id:Date.now(),
            data:data
        }
    }
}

export function deleteTodo(id){
    return{
        type:"delete",
        payload:{
            id:id
        }
    }
}