import React from "react";
import "./Styling/PostInputMask.css";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NewPostButtonClean } from "../actions/ToggleActions";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import {
  setPostDate,
  setName,
  setOrt,
  setDescription,
  setTitle
} from "../actions/newPostActions";
import axios from "axios";

class PostInputMask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      title: "",
      description: "",
      location: ""
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
/*   componentDidUpdate() {} */
  newPostModalMetaData = {
    modalTitle: "Neues Angebot erstellen",
    nameLabel: "Who is Posting?",
    locationLabel: "Where are you posting from",
    pictureLabel: "Upload Picture",
    descriptionLabel: "Do you want to enter more details?"
  };
/* functions to handle submitting new input data */
  imageToUploadHandler = event => {};
  sendName = e => {
    this.setState({
      name: e.target.value 
    })
  }

  sendDescription = e => {
    this.setState({
      description: e.target.value 
    })
  }
  sendOrt = e => {
    this.setState({
      location: e.target.value 
    })
  };
  sendTitle = e => {
    this.setState({
      title: e.target.value 
    })
  };

  onSubmit = e => {
    e.preventDefault();
   
/* axios comamnd to handle submit */
    axios({
      method: "post",
      url: "/posts/submit",
      data: {
        name: this.state.name,
        title: this.state.title,
        location: this.state.location,
        description: this.state.description
      }
    }).then(res => {
      console.log(res);
 
    });
  };

  render() {
    return (
      <div>
        <Modal
          id="newPostModal"
          isOpen={this.state.showModal}
          /* toggle={this.toggle} */
          className={this.props.className}
        >
          <ModalHeader
            id="newPostModalHeader"
            onClick={this.cancelAndGoBackToMain}
          >
            {this.newPostModalMetaData.modalTitle}
          </ModalHeader>
          <ModalBody>
            <Form inline onSubmit={this.onSubmit}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">
                  Titel
                </Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  placeholder="Was?"
                  onChange={this.sendTitle}
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
                  onChange={this.sendName}
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
                  onChange={this.sendOrt}
                />
              </FormGroup>
              <FormGroup className="asd">
                <Label for="examplePassword" className="mr-sm-2">
                  Beschreibung
                </Label>
                <input
                  type="textarea"
                  name="text"
                  id="examplePassword"
                  placeholder="Was genau?"
                  onChange={this.sendDescription}
                />
              </FormGroup>
              <Button type="Submit" color="primary">
                Absenden
              </Button>
            </Form>
            <FormGroup>
              <Label for="examplePassword" className="mr-sm-2">
                Bild
              </Label>
              <Label>
                <input
                  type="file"
                  id="uploadImage"
                  onChange={this.imageToUploadHandler}
                />
              </Label>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.cancelAndGoBackToMain}>
              Abbrechen
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
    }/* ,
    setName: name => {
      dispatch(setName(name));
    },
    setDate: date => {
      dispatch(setPostDate(date));
    },
    setTitle: title => {
      dispatch(setTitle(title));
    },
    setDescription: description => {
      dispatch(setDescription(description));
    },
    setOrt: ort => {
      dispatch(setOrt(ort));
    } */
  };
};
const mapStateToProps = state => {
  return {
    post: state.vR,
    toggle: state.tR,
    newPost: state.npR
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostInputMask);
