import React, {Component} from 'react';

import {TopBanner} from '../components/TopBanner';
import {PostsContainer} from "../components/PostsContainer";
import Post from "../containers/Post"

class App extends React.Component {
    myPost=<Post/>;
    render() {
        return (
            <div>
                <div className="topBanner">
                    <TopBanner/>
                </div>
                <div>
                    <PostsContainer myPost={this.myPost}/>


                </div>

            </div>
        );
    }
}

export default App;
