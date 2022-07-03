import React from "react";

import CircularHeader from "../../components/CircularHeader/CircularHeader";
import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import "./Teasers.scss";

function Teasers() {
    return (
        <div className="teasers">
            <SeaDawgMark />
            <CircularHeader heading="TEASERS">
                <div className="content_first">
                    We will release teasers under this section for upcoming
                    products and events.
                    <br />
                    <br />
                    WATCH THIS SPACE!
                    <br />
                    <br />
                    In the meantime, you may consider following us on social
                    media as well. We are even more regular out there.
                </div>
            </CircularHeader>
        </div>
    );
}

export default Teasers;
