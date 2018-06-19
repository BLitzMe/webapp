import React from 'react';
import "./Styling/fixedHeader.css"

export class FixedHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="fixedHeader">
                <div className="icons">
                    {this.props.myIcons}
                </div>
                <div className="otherStuff">
                <input className="box searchBoxx" type="text" value="Lebensmittel finden" />
                    <button className="box newPostButton">Neues Beitrag</button>
                    
                </div>
            </div>
        );
    }
}