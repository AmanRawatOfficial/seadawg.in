import React from "react";

import "./CircularHeader.scss"

function CircularHeader(props) {
    return (
        <div className="main_content">
            <div className="heading_container">
                <div className="heading_gimmick"></div>
                <div className="heading">
                    <h2 style={{color: `${props.color}`}}>{props.heading}</h2>
                </div>
            </div>
            <div className="content" style={{height: props.height}}>
                <p>{props.children}</p>
            </div>
        </div>
    );
}

export default CircularHeader;
