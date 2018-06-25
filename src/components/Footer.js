import React from 'react';
import "./Styling/Footer.css"

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footerContainer">
                <div className="icons">
                    {this.props.myIcons}
                </div>
                <div className="otherStuff">

                </div>
            </div>
        );
    }
}