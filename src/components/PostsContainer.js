import React from "react";
import "./Styling/PostsContainer.css";
import { connect } from "react-redux";
import Post from "../containers/Post";

class PostsContainer extends React.Component {
  myPost = <Post />;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let posts = this.props.post.posts;
    let postsList;
    if (posts) {
      postsList = posts.map((localPost) => {
        return (
          <li key={localPost._id}>
            <Post  title={localPost.title} ort={localPost.location}  date={localPost.date} picture={localPost.picture}/>
          </li>
        );
      });
    }
    return <ul id="postsContainer">{postsList}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    post: state.vR
  };
};

export default connect(mapStateToProps)(PostsContainer);
