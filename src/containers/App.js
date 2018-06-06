import React, {Component} from 'react';

import {TopBanner} from '../components/TopBanner';
import {PostsContainer} from "../components/PostsContainer";

class App extends Component {
    render() {
        return (
            <div>
                <div className="topBanner">
                    <TopBanner/>
                </div>
                <div className = "PostsContainer">
                    <PostsContainer/>
                </div>
            </div>
        );
    }
}

export default App;
