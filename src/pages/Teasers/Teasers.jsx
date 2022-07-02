import React from "react";

import CircularHeader from "../../components/CircularHeader/CircularHeader";
import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import "./Teasers.scss"

function Teasers() {
    return (
        <div className="teasers">
            <SeaDawgMark />
            <CircularHeader heading="TEASERS">
                <div className="content_first">
                    As you would learn from our story (Who We Are), we were
                    brought into being in order to fill a void. We saw the need
                    for something to be done, observed that nobody was really
                    doing it, and took it upon ourselves to take up the task.
                    <br />
                    <br />
                    But this isn’t the only thing we want to do. We don’t just
                    want to design material things to sell them and make profit.
                    This entity was established not by seeing a means to profit
                    from the observed void, but to explore it and do our best to
                    get rid of it.
                    <br />
                    <br />
                </div>
            </CircularHeader>
        </div>
    );
}

export default Teasers;
