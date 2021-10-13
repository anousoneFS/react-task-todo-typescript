import React from "react"
import ImageItem from "./ImageItem"
import images from "../data"
import "./ImageGrid.css"

interface Props {
    text: string
}

function ImageGrid({ text }: Props) {
    const filterImage = images.filter((image) =>
        image.Title.toLowerCase().includes(text.toLowerCase())
    )
    const elementImage = filterImage.map((image) => (
        <ImageItem Image={image.Image} Title={image.Title} key={image.Id} />
    ))

    return (
        <div>
            <div className="Image__grid">{elementImage}</div>
        </div>
    )
}

export default ImageGrid
