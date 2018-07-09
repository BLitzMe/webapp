//statefull component
import React from "react";
import "./Styling/Post.css";
import { connect } from "react-redux";
import tomatoes from "../images/dummyImages/tomatoes.jpg";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="postsBucket"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <p id="mainPostName">{this.props.title}</p>
        <p id="mainOrt">{this.props.ort}</p>
        <p id="mainDate">{this.props.date} </p>
        <img id="postImage" src={this.props.picture} alt="" />

        <div
          className="modal "
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header" id="modadHeader">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {this.props.title}
                </h5>
                <p id="modalOrt">{this.props.ort}</p>
                <p id="modalDate">{this.props.date} </p>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  id="closeCross"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img id="modalImage" src={this.props.picture} alt="" />
                <h6 id="desc-title">Beschreibung</h6>
                <p id="description">
                  Officia sint cillum do exercitation veniam. Non mollit aliquip
                  velit cupidatat anim cupidatat eu sint ea commodo. Consectetur
                  reprehenderit non est nulla do esse commodo commodo incididunt
                  dolor sunt ut pariatur.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    post: state.vR
  };
};

export default connect(mapStateToProps)(Post);
