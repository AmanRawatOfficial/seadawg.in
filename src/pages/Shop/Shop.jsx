import React from "react";

import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import "./Shop.scss";
import HomeButton from "../../components/HomeButton/HomeButton";
import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import CircularHeader from "../../components/CircularHeader/CircularHeader";

function Shop() {
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
                        <FaFacebookSquare
                            fill="#fbcc00"
                            className="shop_icon"
                        />
                        <FaInstagramSquare
                            fill="#fbcc00"
                            className="shop_icon"
                        />
                    </div>
                </div>
            </CircularHeader>
        </div>
    );
}

export default Shop;
