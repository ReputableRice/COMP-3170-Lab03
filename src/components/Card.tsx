import { useState } from "react"

export default function Card(props) {
    const [isVisible, setIsVisble] = useState(true)

    const imageSource = props.image ? props.image : "https://placehold.co/600x400?text=News+Story"

    function CardVisibility() {
        setIsVisble(false)
    }

    return (
        <>
            {isVisible ?
                <div className="story">
                    <span className="delete" onClick={CardVisibility}>x</span>
                    <div className="story_header">
                        <div className="story_image">
                            <img className="" src={imageSource} alt="alt text" />
                        </div>
                        <div>
                            <h1>
                                <a href="">{props.title}</a>
                            </h1>
                            <span className="story_creator">By {props.creator}</span>
                        </div>
                    </div>
                    <p className="description">{props.description}</p>
                </div>
                : null}
        </>
    )
}