import React from "react"

interface Props {
    Image: string
    Title: string
}
function ImageItem({ Image, Title }: Props) {
    return (
        <div className="Image__item">
            <img src={Image} alt="car" />
            <div>
                <span>{Title}</span>
            </div>
        </div>
    )
}

export default ImageItem
