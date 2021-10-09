import React from "react"
import "./styles.css"

type Props = {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const Inputfield: React.FC<Props> = ({ todo, setTodo }: Props) => {
    return (
        <div>
            <form className="input">
                <input
                    type="text"
                    placeholder="enter a task"
                    className="input__box"
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className="input__submit" type="submit">
                    Go
                </button>
            </form>
        </div>
    )
}

export default Inputfield
