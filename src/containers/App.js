import React from 'react';
import "./Styling/App.css"
import {TopBanner} from '../components/TopBanner';
import {PostsContainer} from "../components/PostsContainer";
import Post from "../containers/Post"
import {FixedHeader} from "../components/fixedHeader";

class App extends React.Component {
    myPost = <Post/>;

    render() {
        return (

            <div id="Appp">
                <div id="fixedHeader">
                    <FixedHeader/>
                </div>
                <div id="topBanner">
                    <TopBanner/>
                </div>
                <div>
                    <PostsContainer myPost={this.myPost} id="PostsContainer"/>
                </div>
                <div id="scrollUpButton">

                </div>
            </div>
        );
    }
}

export default App;
