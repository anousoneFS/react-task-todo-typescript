import React, { useReducer, useState } from "react"
import TodoList from "./components/TodoList"
import Inputfield from "./components/InputField"
import { Todo } from "./model"
import "./App.css"
interface editType {
    id: number
    todo: string
}

type Action =
    | { type: "Add"; payload: string }
    | { type: "Remove"; payload: number }
    | { type: "Done"; payload: number }
    | { type: "Edit"; payload: editType }

const initial: Todo[] = []

const numReducer = (state: Todo[], action: Action) => {
    switch (action.type) {
        case "Add":
            return [
                ...state,
                { id: Date.now(), todo: action.payload, isDone: false },
            ]
        case "Edit":
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, todo: action.payload.todo }
                    : todo
            )
        case "Remove":
            return state.filter((todo) => todo.id !== action.payload)
        case "Done":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            )
        default:
            return state
    }
}
function App() {
    const [todo, setTodo] = useState<string>("")
    const [todos, dispatch] = useReducer(numReducer, initial)

    const AddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        if (todo) {
            dispatch({ type: "Add", payload: todo })
            setTodo("")
        }
    }

    const remove = (id: number) => {
        dispatch({ type: "Remove", payload: id })
    }

    const complete = (id: number) => {
        dispatch({ type: "Done", payload: id })
    }

    const editTodo = ({ id, todo }: editType) => {
        dispatch({ type: "Edit", payload: { id, todo } })
    }

    return (
        <div className="App">
            <span className="Header">taskify</span>
            <Inputfield AddTodo={AddTodo} todo={todo} setTodo={setTodo} />
            <TodoList
                todos={todos}
                remove={remove}
                complete={complete}
                editTodo={editTodo}
            />
        </div>
    )
}

export default App
