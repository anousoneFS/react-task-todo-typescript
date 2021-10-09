import React, { useState } from "react"
import "./App.css"
import Inputfield from "./components/Inputfield"

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    return (
        <div className="App">
            <span className="heading">taskify</span>
            <Inputfield todo={todo} setTodo={setTodo} />
        </div>
    )
}

export default App
