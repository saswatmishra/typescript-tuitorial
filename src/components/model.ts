import { useReducer } from "react";

export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}


// type Actions = {
//     type: "add", payload: string
// } | {type: "remove", payload: number} | {type: "done", payload: number}

// const TodoRecuder = (state: Todo[], action: Actions) => {
//     switch(action.type){
//         case "add": 
//             return [...state, {id: Date.now(), todo: action.payload, isDone: false }];
//         case "remove":
//             return state.filter((todo) => todo.id !== action.payload);
//         case "done":
//             return state.map((todo) => 
//             todo.id !== action.payload ? {...todo, isDone: !todo.isDone}: todo);
//         default:
//             return state
//     }

// }

// const ReducerExample = () => {
//     const [state, dispatch] = useReducer(TodoRecuder, [])
//   return (
//     <div />
//   )
// }
