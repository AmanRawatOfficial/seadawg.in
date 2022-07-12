import React, { useEffect } from "react";

import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import "./Shop.scss";
import HomeButton from "../../components/HomeButton/HomeButton";
import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import CircularHeader from "../../components/CircularHeader/CircularHeader";



function Shop() {
    useEffect(() => {
        document.title = "dawg.in | Shop";
    })
    return (
        <div className="shop">
            <HomeButton />
            <SeaDawgMark />
            <CircularHeader color="#fbcc00" heading="COMING SOON!">
                <div className="content_first">
                    <h3>HEAVE TIGHT, AND MAKE FAST!</h3>
                    <br />
                    <br />
                    Watch this space for our upcoming Pre-Launch limited stock
                    sale event!
                    <br />
                    <br />
                    We will follow the sale with the announcement of the dates
                    when our stores will go online full time.
                    <br />
                    <br />
                    Do subscribe to the store once it is launched for updates on
                    latest events and products.
                    <br />
                    <br />
                    Also follow us on social media to stay abreast with us at
                    all times.
                    <div className="shop_icon_container">
                        <a href="https://facebook.com/dawgdotin" target="_blank" rel="noreferrer">
                            <FaFacebookSquare
                                fill="#fbcc00"
                                className="shop_icon"
                            />
                        </a>
                        <a href="https://instagram.com/dawgdotin" target="_blank" rel="noreferrer">
                            <FaInstagramSquare
                                fill="#fbcc00"
                                className="shop_icon"
                            />
                        </a>
                    </div>
                </div>
            </CircularHeader>
        </div>
    );
}

export default Shop;
