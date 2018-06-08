import React from 'react';
import './Styling/PostsContainer.css';


export class PostsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="postsContainer">
                    {this.props.myPost}
                    <hr/>
                    {this.props.myPost}
                    <hr/>
                    {this.props.myPost}
                    <hr/>
                    {this.props.myPost}
                    <hr/>
                    {this.props.myPost}
                    <hr/>
                    {this.props.myPost}
                    <hr/>
                    {this.props.myPost}
                </div>
            </div>
        );

    }
}
