import React, { useRef } from "react"
import "./styles.css"

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    AddTodo: (e: React.FormEvent) => void
}

const Inputfield: React.FC<Props> = ({ AddTodo, todo, setTodo }) => {
    const ref = useRef<HTMLInputElement>(null)

    console.log("rerender againt!!!")
    // demo: use ref
    function onSend(e: React.FormEvent) {
        ref.current?.focus()
        ref.current?.select()
        const data = ref.current?.value
        console.log("useref value = ", data)
        AddTodo(e)
    }

    return (
        <form className="input" onSubmit={(e) => onSend(e)}>
            <input
                ref={ref}
                type="text"
                className="input_box"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button type="submit" className="Btn__submit">
                Go
            </button>
        </form>
    )
}

export default Inputfield
