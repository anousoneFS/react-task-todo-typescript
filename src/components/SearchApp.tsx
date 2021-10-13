import React from "react"
import "./SearchApp.css"

interface Props {
    text: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

function SearchApp({ text, setSearch }: Props) {
    return (
        <div className="Search__app">
            <input
                value={text}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="Search__input"
                placeholder="Search Images"
            />
        </div>
    )
}

export default SearchApp
