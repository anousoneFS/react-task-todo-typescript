import React, { useState, useRef, useEffect } from "react"
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai"
import { MdOutlineFileDownloadDone } from "react-icons/md"

import { Todo } from "../model"

interface editType {
    id: number
    todo: string
}

interface Props {
    todo: Todo
    remove: (id: number) => void
    complete: (id: number) => void
    editTodo: ({ id, todo }: editType) => void
}

function SingleTodo({ todo, remove, complete, editTodo }: Props) {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [editValue, setEdit] = useState<editType>({
        id: todo.id,
        todo: todo.todo,
    })

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [isEdit])

    function myedit(e: React.FormEvent) {
        e.preventDefault()
        editTodo(editValue)
        setIsEdit(false)
    }

    return (
        <form className="Single__todo" onSubmit={(e) => myedit(e)}>
            {isEdit ? (
                <input
                    ref={inputRef}
                    className="Edit__input"
                    type="text"
                    value={editValue.todo}
                    onChange={(e) =>
                        setEdit({ ...editValue, todo: e.target.value })
                    }
                />
            ) : todo.isDone ? (
                <s>{todo.todo}</s>
            ) : (
                <span>{todo.todo}</span>
            )}
            <div>
                <span className="Icon" onClick={() => remove(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="Icon" onClick={() => setIsEdit(!isEdit)}>
                    <AiOutlineEdit />
                </span>
                <span className="Icon" onClick={() => complete(todo.id)}>
                    <MdOutlineFileDownloadDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo
