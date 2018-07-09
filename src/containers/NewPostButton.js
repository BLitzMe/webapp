import React from "react";
import "./Styling/NewPostButton.css";
import { connect } from "react-redux";
import { NewPostButtonToggler } from "../actions/ToggleActions";
import PostInputMask from "./PostInputMask";
import createStore from "../Store";
import { getState } from "redux";
class NewPostButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: false
    };
  }
  /*   newPostButtonHandler(){
    this.setState(prevState=>({
      
      buttonPressed: !prevState.buttonPressed
    }))
  } */

  render() {
    let newPBStatus = this.props.toggle.newPostButton;
    return (
      <div id="newPostButtonContainer">
        <button
          onClick={() => {
            this.props.newPostButtonToggle(this.props.toggle.newPostButton);
            console.log(newPBStatus);
          }}
          id="postButton"
          className="btn "
        >
          <i id="buttonIcon" className="fa fa-plus-circle" />
        </button>
        {this.props.toggle.newPostButton ? <PostInputMask/> : <div />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    post: state.vR,
    toggle: state.tR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newPostButtonToggle: newPostStatus => {
      dispatch(NewPostButtonToggler(newPostStatus));
    } /* ,
    newPostButtonOffDispatcher: () => {
      dispatch(NewPostButtonOff());
    } */
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostButton);
