import React from 'react';
import "./Styling/App.css"
import { TopBanner } from '../components/TopBanner';
import { PostsContainer } from "../components/PostsContainer";
import Post from "../containers/Post"
import { Footer } from "../components/Footer";
import Icons from "../components/icons/icons"
import { NewPostButton } from "../components/NewPostButton"
import { Header } from "../components/Header"
import { getState } from 'redux';
import { connect } from "react-redux";
import Loader from "./Loader"
import axios from "axios"
class App extends React.Component {
    componentWillMount () {
        this.apiRequest();
      }
      
      apiRequest () {
        axios.get('/posts?location=Clausthal-Zellerfeld')
          .then(response => {
            console.log(JSON.stringify(response.data[0]._id));
          })
          .catch(e => {
            console.log(e);
          });
      }
    myPost = <Post />;
    myIcons = <Icons />;
    render() {
        const postProps = this.props.post;
        const status = "notLoading";
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
                                <PostsContainer myPost={this.myPost} />
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

const mapDispatchToProps = (state) => {
    return {
        post: state.vR

    }
}
const mapStateToProps = (state) => {
    return {
        post: state.vR

    }
}
export default connect(mapStateToProps)(App)
