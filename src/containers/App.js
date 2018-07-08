import React from 'react';
import "./Styling/App.css"
import { TopBanner } from '../components/TopBanner';
import PostsContainer from "../components/PostsContainer";
import Post from "../containers/Post"
import { Footer } from "../components/Footer";
import Icons from "../components/icons/icons"
import { NewPostButton } from "../components/NewPostButton"
import { Header } from "../components/Header"
import { getState } from 'redux';
import { connect } from "react-redux";
import Loader from "./Loader"
import axios from "axios"
import {FetchFailure} from "../actions/VanillaActions"
import {LoadPosts} from "../actions/VanillaActions"
import {FetchPosts} from "../actions/VanillaActions"
import createStore from "../Store"
import {NewPostButtonOn} from "../actions/ToggleActions"
import {NewPostButtonOff} from "../actions/ToggleActions"
class App extends React.Component {
    store =createStore
    componentWillMount () {
        
        this.apiRequest();
        this.dispatchFetchRequest();
      }
      dispatchFetchRequest(){
          this.props.fetchPosts
      }
      apiRequest () {
        axios.get('/posts?location=Clausthal-Zellerfeld')
          .then(response => {
             this.props.loadPosts(response.data);
            console.log(response.data);
          })
          .catch(e => {
              this.props.fetchFailure(e);
            console.log(e);
          });
      }
      
      newPostButtonHandler=(props)=>{
          if(props.toggle.NewPostButton==="Off"){
              props.newPostButtonOnDispatcher
          }else if (props.toggle.NewPostButton==="On"){
              props.newPostButtonOffDispatcher
          }

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
                                <NewPostButton onClick={this.newPostButtonHandler}/>
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


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: ()=>{
            dispatch(FetchPosts())
        } ,
        loadPosts: (posts)=>{
            dispatch(LoadPosts(posts))
        },
        fetchFailure: (error)=>{
            dispatch(FetchFailure(error))
        },
        newPostButtonOnDispatcher: ()=>{
            dispatch(NewPostButtonOn)
        },
        newPostButtonOffDispatcher:()=>{
            dispatch(NewPostButtonOff)
        }

    }
}
const mapStateToProps = (state) => {
    return {
        post: state.vR,
        toggle: state.tR

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
