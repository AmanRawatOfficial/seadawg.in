import React from "react";
import CircularHeader from "../../components/CircularHeader/CircularHeader";
import HomeButton from "../../components/HomeButton/HomeButton";

import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import "./Order.scss";

function Order() {
    return (
        <div className="orders">
            <HomeButton />
            <SeaDawgMark />
            <CircularHeader heading="CORPORATE ORDERS">
                <div className="content_first">
                    If you are a company/ supplier looking for a bulk order,
                    please contact us at{" "}
                    <span className="highlight_yellow">corporate@dawg.in</span>{" "}
                    with the subject “bulk order enquiry”.
                    <br />
                    <br />
                    We can make and ship bulk orders especially for you. Please
                    mention if you have a design or would like us to design your
                    product for you. Give as many details right from the onset
                    as possible.
                    <br />
                    <br />
                    Download our updated corporate brochure by clicking below.
                    <br />
                    <br />
                    <div className="order_button">
                        <button>DOWNLOAD</button>
                    </div>
                    <div></div>
                </div>
            </CircularHeader>
        </div>
    );
}

export default Order;
