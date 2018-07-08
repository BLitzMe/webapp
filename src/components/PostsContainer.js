import React from 'react';
import './Styling/PostsContainer.css';



export class PostsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        let i;
        return (
           
            <div id="postsContainer">
             for(i=0; i <20;i++){
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
                <li>{this.props.myPost}</li>
             }
            </div>
        );
    }
}
