import { createContext, useContext } from "react";

// This creates a new context object for our Todo:
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo title",
            completed: false
        }
    ],
    addTodo: (newTodo) => { },
    updateTodo: (id, newTodo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});

// Now, Above context can be used in other components too, vars are defined here but funcs can be defined in App.js

export const useTodoContext = () => {
    return useContext(TodoContext);
    // always give useContext a Context !
    // In this case we have TodoContext.
}

export const TodoProvider = TodoContext.Provider;
// Made shorthand so that other components can be wrapped into Todo Context.

