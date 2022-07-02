import React from "react";

import "./CircularHeader.scss"

function CircularHeader(props) {
    return (
        <div className="main_content">
            <div className="heading_container">
                <div className="heading_gimmick"></div>
                <div className="heading">
                    <h2>{props.heading}</h2>
                </div>
            </div>
            <div className="content">
                <p>{props.children}</p>
            </div>
        </div>
    );
}

export default CircularHeader;
