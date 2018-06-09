import React from 'react';
import "./Styling/fixedHeader.css"

export const FixedHeader = () => {
    return (
        <div>
            <div className="fixedHeader">
                <button className="box newPostButton">Neues Beitrag</button>
                <input className="box searchBox" type="text" value="def"/>
            </div>
        </div>
    );
}