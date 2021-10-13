import React from "react"
import images from "../data"
import "./ImageGrid.css"

interface Props {
    text: string
}

function ImageGrid({ text }: Props) {
    const filterImage = images.filter((image) => image.Title.includes(text))
    const elementImage = filterImage.map((image) => (
        <div className="Image__item">
            <img src={image.Image} alt="car" />
            <div>
                <span>{image.Title}</span>
            </div>
        </div>
    ))

    return (
        <div>
            <div className="Image__grid">{elementImage}</div>
        </div>
    )
}

export default ImageGrid
