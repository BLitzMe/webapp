import React from "react";
import "./Styling/PostInputMask.css";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NewPostButtonClean } from "../actions/ToggleActions";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

class PostInputMask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.cancelAndGoBackToMain = this.cancelAndGoBackToMain.bind(this);
  }
  componentWillMount() {
    if (this.props.toggle.newPostButton) {
    }
    this.setState({
      showModal: true
    });
  }
  cancelAndGoBackToMain() {
    this.props.turnModalOff();
  }
  componentDidUpdate() {}
  newPostModalMetaData = {
    modalTitle: "Create New Post",
    nameLabel: "Who is Posting?",
    locationLabel: "Where are you posting from",
    pictureLabel: "Upload Picture",
    descriptionLabel: "Do you want to enter more details?"
  };

  imageToUploadHandler=(event)=>{
    console.log(event.taget.files[0])
  }
  render() {
    return (
      <div>
        <Modal
          id="newPostModal"
          isOpen={this.state.showModal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader
            id="newPostModalHeader"
            onClick={this.cancelAndGoBackToMain}
          >
            {this.newPostModalMetaData.modalTitle}
          </ModalHeader>
          <ModalBody>
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">
                  Titel des Posts
                </Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  placeholder="Was?"
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">
                  Name
                </Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  placeholder="Wer?"
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">
                  Ort
                </Label>
                <Input
                  type="text"
                  name="text"
                  id="examplePassword"
                  placeholder="Wo?"
                />
              </FormGroup>
              
            </Form>
            <FormGroup>
              <Label>
                <input type="file" id="uploadImage" onChange={this.imageToUploadHandler}/>
              </Label>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Los!
            </Button>
            <Button color="secondary" onClick={this.cancelAndGoBackToMain}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    turnModalOff: () => {
      dispatch(NewPostButtonClean());
    }
  };
};
const mapStateToProps = state => {
  return {
    post: state.vR,
    toggle: state.tR
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostInputMask);
