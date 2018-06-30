import React from 'react';
import "./Styling/NewPostButton.css"

export class NewPostButton extends React.Component {
        constructor(props) {
                super(props);
             
        }

        render() {
                return (
                        <div id="newPostButtonContainer">
                                <button id="postButton" className="btn "><i id="buttonIcon" className="fa fa-plus-circle"></i></button>
                        </div>
                );
        }
};