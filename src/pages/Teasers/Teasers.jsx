import React from "react";

import CircularHeader from "../../components/CircularHeader/CircularHeader";
import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import HomeButton from "../../components/HomeButton/HomeButton";
import "./Teasers.scss";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";


function Teasers() {
    useEffect(() => {
        document.title = "dawg.in | Teasers";
    })
    return (
        <>
            <div className="teasers">
                <HomeButton />
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
                        <br />
                        <br />
                        <div className="teaser_icon_container">
                            <a
                                href="https://facebook.com/dawgdotin"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebookSquare
                                    fill="#fbcc00"
                                    className="teaser_icon"
                                />
                            </a>
                            <a
                                href="https://instagram.com/dawgdotin"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagramSquare
                                    fill="#fbcc00"
                                    className="teaser_icon"
                                />
                            </a>
                        </div>
                    </div>
                </CircularHeader>
            </div>
            <Footer />
        </>
    );
}

export default Teasers;
