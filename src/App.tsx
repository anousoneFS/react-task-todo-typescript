import React, { useState } from "react"
import AppHeader from "./components/AppHeader"
import SearchApp from "./components/SearchApp"
import "./App.css"
import ImageGrid from "./components/ImageGrid"

function App() {
    const [searchImage, setSearchImage] = useState<string>("")
    return (
        <div className="app">
            <AppHeader />
            <section className="Section__body">
                <div className="Body__container">
                    <SearchApp text={searchImage} setSearch={setSearchImage} />
                    <ImageGrid text={searchImage} />
                </div>
            </section>
        </div>
    )
}

export default App
