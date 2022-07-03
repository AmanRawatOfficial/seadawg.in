import React from "react";

import "./Collaboration.scss";
import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import CircularHeader from "../../components/CircularHeader/CircularHeader";

function Collaboration() {
    return (
        <div className="collaboration">
            <SeaDawgMark />
            <CircularHeader heading="COLLABORATE WITH US">
                <div className="content_first">
                    Are you a designer, artist or creator? Or do you work with
                    creators or artisans?
                    <br />
                    <br />
                    If you think you can add value to our products with your
                    designs, think of some stuff up and let us know at
                    collaborate@seadawg.in
                    <br />
                    <br />
                    Bear in mind your suggestions have to be in line with our
                    product values and should be intended for people working at
                    sea.
                    <br />
                    <br />
                    If you can add to our ensemble, we would be delighted to work with you!
                </div>
            </CircularHeader>
        </div>
    );
}

export default Collaboration;