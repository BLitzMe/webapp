import React from 'react';
import "./Styling/App.css"
import {TopBanner} from '../components/TopBanner';
import {PostsContainer} from "../components/PostsContainer";
import Post from "../containers/Post"
import {FixedHeader} from "../components/fixedHeader";
import Icons from "../containers/icons/icons"

class App extends React.Component {
    myPost = <Post/>;
    myIcons = <Icons/>;
    render() {
        return (

            <div id="Appp">
                <div id="fixedHeader">
                    <FixedHeader myIcons={this.myIcons}/>
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
