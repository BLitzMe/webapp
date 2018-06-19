//statefull component
import React from "react";
import "./Styling/Post.css"
import { connect } from "react-redux"
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";
import tomatoes from "../images/dummyImages/tomatoes.jpg"
import Image from 'react-image-resizer'

class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }


    _handlePostNameClick = (e) => {
        this.setState({ active: !this.state.active });
    };



    render() {
        const { active } = this.state;

        return (

            <div className="postsBucket ">


                <div className="postName">
                    <h3 className="postNameeElement" onClick={this._handlePostNameClick}> {this.props.post.name}</h3>
                </div>
                <div className="thumbnail foodPicture">
                    <Image src={tomatoes} alt=""
                        height={150}
                        width={250}
                        border-radius={20}
                    />
                </div>
                <div className="Ort">
                    <h5>Ort: {this.props.post.ort} </h5>
                </div>
                <div className="Date">
                    <h5>Datum: {this.props.post.postDate}</h5>
                </div>
                {active && [
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
                    </div>,
                    <div className="postCommentButton">
                        <button className="commentBtnDesign">Neue Kommentar</button>
                    </div>,
                    <div className="commentFieldBucket">
                        <input className="commentField" type="text" value="Tippen Sie ein" />
                    </div>,
                    <div className="moreCommentsButton">
                        <button className="commentBtnDesign showComments">Kommentare Anzeigen</button>
                    </div>
                ]
                }
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


