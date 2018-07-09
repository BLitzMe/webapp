import React from "react";
import "./Styling/App.css";
import { TopBanner } from "../components/TopBanner";
import PostsContainer from "../containers/PostsContainer";

import { Footer } from "../components/Footer";
import Icons from "../components/icons/icons";
import NewPostButton from "../containers/NewPostButton";
import { Header } from "../components/Header";

import { connect } from "react-redux";
import Loader from "../components/Loader";
import axios from "axios";
import { FetchFailure } from "../actions/VanillaActions";
import { LoadPosts } from "../actions/VanillaActions";
import { FetchPosts } from "../actions/VanillaActions";

class App extends React.Component {
  componentWillMount() {
    this.apiRequest();
    this.dispatchFetchRequest();
  }
  dispatchFetchRequest() {
    this.props.fetchPosts;
  }
  apiRequest() {
    axios
      .get("/posts?location=Clausthal-Zellerfeld")
      .then(response => {
        this.props.loadPosts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        this.props.fetchFailure(e);
        console.log(e);
      });
  }

  myIcons = <Icons />;
  render() {
    const postProps = this.props.post;
    const status = postProps.status;
    return (
      <div id="App">
        {status === "loading" ? (
          <Loader />
        ) : (
          <div id="AppReal">
            <div id="header">
              <Header myIcons={this.myIcons} />
            </div>
            <div id="topBanner">
              <TopBanner />
            </div>
            <div id="postsContainer">
              <PostsContainer />
            </div>
            <div id="newPostButton">
              <NewPostButton />
            </div>
            <div id="footer">
              <Footer />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(FetchPosts());
    },
    loadPosts: posts => {
      dispatch(LoadPosts(posts));
    },
    fetchFailure: error => {
      dispatch(FetchFailure(error));
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
)(App);
