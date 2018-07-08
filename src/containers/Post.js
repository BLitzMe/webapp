//statefull component
import React from "react";
import "./Styling/Post.css";
import { connect } from "react-redux";
import tomatoes from "../images/dummyImages/tomatoes.jpg"

class Post extends React.Component {
    constructor(props) {
        super(props);
       
        
    }
    
    render() {
        
        return (
             
            <div id="postsBucket" data-toggle="modal" data-target="#exampleModalCenter">
                <p id="mainPostName">{this.props.title}</p>
                <p id="mainOrt">{this.props.ort}</p>
                <p id="mainDate">{this.props.date} </p>
                <img id="postImage" src={this.props.picture} alt="" />
              
                    <div class="modal " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header" id="modadHeader">
                                    <h5 class="modal-title" id="exampleModalLongTitle">{this.props.title}</h5>
                                    <p id="modalOrt">{this.props.ort}</p>
                                    <p id="modalDate">{this.props.date} </p>
                                    <button type="button" class="close" aria-label="Close" id="closeCross">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img id="modalImage" src={this.props.picture} alt="" />
                                    <h6 id="desc-title">Beschreibung</h6>
                                    <p id="description">{this.props.description}</p>
									<p id="comments">{this.props.comments}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" >Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
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


