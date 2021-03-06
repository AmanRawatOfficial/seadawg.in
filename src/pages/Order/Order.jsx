import React, { useEffect } from "react";

import CircularHeader from "../../components/CircularHeader/CircularHeader";
import HomeButton from "../../components/HomeButton/HomeButton";
import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import Footer from "../../components/Footer/Footer";
import "./Order.scss";



function Order() {
    useEffect(() => {
        document.title = "dawg.in | Corporate";
    })
    return (
        <>
            <div className="orders">
                <HomeButton />
                <SeaDawgMark />
                <CircularHeader heading="CORPORATE ORDERS">
                    <div className="content_first">
                        If you are a company/ supplier looking for a bulk order,
                        please contact us at{" "}
                        <span className="highlight_yellow">
                            <a href="mailto:corporate@seadawg.in">
                                corporate@dawg.in
                            </a>
                        </span>{" "}
                        with the subject “bulk order enquiry”.
                        <br />
                        <br />
                        We can make and ship bulk orders especially for you.
                        Please mention if you have a design or would like us to
                        design your product for you. Give as many details right
                        from the onset as possible.
                        <br />
                        <br />
                        Download our updated corporate brochure by clicking
                        below.
                        <br />
                        <br />
                        <div className="order_button">
                            <button>DOWNLOAD</button>
                        </div>
                        <div></div>
                    </div>
                </CircularHeader>
            </div>
            <Footer />
        </>
    );
}

export default Order;
