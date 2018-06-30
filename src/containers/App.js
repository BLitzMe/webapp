import React from 'react';
import "./Styling/App.css"
import { TopBanner } from '../components/TopBanner';
import { PostsContainer } from "../components/PostsContainer";
import Post from "../containers/Post"
import { Footer } from "../components/Footer";
import Icons from "../components/icons/icons"
import { NewPostButton } from "../components/NewPostButton"
import { Header } from "../components/Header"
class App extends React.Component {
    myPost = <Post />;
    myIcons = <Icons />;
    render() {
        return (
            <div id="App">
                <div id="header">
                    <Header myIcons={this.myIcons}/>
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
                    <Footer  />
                </div>
            </div>
        );
    }
}

export default App;
