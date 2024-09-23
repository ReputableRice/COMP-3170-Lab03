export default function Card(props) {

    const imageSource = props.image ? props.image : "https://placehold.co/600x400?text=News+Story"

    return (
        // <div className="story">
        //     <span className="delete">x</span>
        //     <div className="story_header">
        //         <div className="story_image">
        //             <img className="" src="" alt="alt text" />
        //         </div>
        //         <div>
        //             <h1>
        //                 <a href="">Title</a>
        //             </h1>
        //             <span className="story_creator">By Name</span>
        //         </div>
        //     </div>
        //     <p className="description">descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription</p>
        // </div>
        <div className="story">
            <span className="delete">x</span>
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
    )
}