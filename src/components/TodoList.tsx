import React from "react"
import SingleTodo from "./SingleTodo"
import { Todo } from "../model"

interface editType {
    id: number
    todo: string
}

interface Props {
    todos: Todo[]
    remove: (id: number) => void
    complete: (id: number) => void
    editTodo: ({ id, todo }: editType) => void
}

const TodoList: React.FC<Props> = ({
    todos,
    remove,
    complete,
    editTodo,
}: Props) => {
    return (
        <div className="Todo__list">
            {todos.map((todo) => (
                <SingleTodo
                    todo={todo}
                    remove={remove}
                    complete={complete}
                    editTodo={editTodo}
                    key={todo.id}
                />
            ))}
        </div>
    )
}

export default TodoList
