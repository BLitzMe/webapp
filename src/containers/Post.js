//statefull component
import React from "react";
import "./Styling/Post.css"

class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            PostName: "Duummy name Post 1",
            Ort: "dummy ort",
            Date: "23-12-3014"
        }
    }

    render() {
        return (

            <div className="postsBucket">
                <div className="postName">
                    <h4>{this.state.PostName}</h4>
                </div>
                <div className="foodPicture">
                    <img src="../images/dummyImages/tomatoes.jpg" alt="tomato"/>
                </div>
                <div className="Ort">
                    <h5> {this.state.Ort} </h5>
                </div>
                <div className="Date>">
                    <h5>{this.state.Date}</h5>
                </div>
            </div>

        );
    }
}

export default Post;

