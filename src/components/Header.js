import React from 'react';
import "./Styling/Header.css"
import Logo from "../images/Logo.png"

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="headerContainer">
                <img id="logo" src={Logo} alt="" />

                <div className="icons">
                    {this.props.myIcons}
                </div>


            </div>
        );
    }
};