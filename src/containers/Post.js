//statefull component
import React from "react";
import "./Styling/Post.css"
import {connect} from "react-redux"

class Post extends React.Component {
    render() {
        return (
            <div className="postsBucket transform">
                <div className="postName">
                    <button className="postNameButton"> {this.props.post.name}</button>
                </div>
                <div className="foodPicture">
                    <img src="../images/dummyImages/tomatoes.jpg" alt="dummy picture"/>
                </div>
                <div className="Ort">
                    <h5>Ort: {this.props.post.ort} </h5>
                </div>
                <div className="Date">
                    <h5>Datum: {this.props.post.postDate}</h5>
                </div>
                <div className="description">
                    <div className=" des-heading">
                        <h6>Beschreibung</h6>
                    </div>
                    <div className=" des-content">
                        <p> this pack of super good tomatoes was brought to you by uncle
                            scrooge Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti mollitia neque
                            quaerat reiciendis vero? Amet aut consectetur deserunt dolores explicabo illo iste,
                            necessitatibus quam sit vel. Accusantium aspernatur assumenda aut autem dolor ea explicabo
                            fuga id labore maiores maxime nulla numquam, placeat praesentium quam quis quod ratione sed
                            tempora veniam. Adipisci atque delectus earum enim error, excepturi exercitationem
                            laboriosam magni neque odit pariatur, possimus sint voluptate! Ab aliquid aperiam corporis
                            dolores, hic laboriosam laudantium molestiae neque, non pariatur quam quis, ut veniam! Et
                            facere ipsa nemo nihil obcaecati pariatur sint! Ab animi culpa dolores doloribus obcaecati,
                            officiis quo quos velit!</p>
                    </div>
                </div>
                <div className="postCommentButton">
                    <button className="commentBtnDesign">Neue Kommentar</button>
                </div>
                <div className="commentFieldBucket">
                    <input className="commentField" type="text" value="Tippen Sie ein"/>
                </div>
                <div className="moreCommentsButton">
                    <button className="commentBtnDesign showComments">Kommentare Anzeigen</button>
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.vR

    }
}
export default connect(mapStateToProps)(Post)


