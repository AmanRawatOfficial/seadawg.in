import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navs from "../../components/Navs/Navs";
import T from "../../components/t/T";
import "./Home.scss";
const Home = () => {
    const [open, setOpen] = useState(false);
    const [navType, setNavType] = useState("");
    const [firstLink, setFirstLink] = useState("active_link");
    const [secondLink, setSecondLink] = useState(" ");
    // const nav1 = ['o', 'u', 'r', ' ', 's', 't', 'o', 'r', 'y']

    // Toggle animation for buttons (teasers, shop)
    function mouseOverFirstHandler() {
        if (firstLink === "active_link" && secondLink === " ") {
            setFirstLink(" ");
            setSecondLink("active_link");
        }
    }

    function mouseOutFirstHandler() {
        setSecondLink(" ");
        setFirstLink("active_link");
    }

    function mouseOverSecondHandler() {
        if (firstLink === "active_link" && secondLink === " ") {
            setSecondLink("active_link");
            setFirstLink(" ");
        }
    }

    function mouseOutSecondHandler() {
        setFirstLink("active_link");
        setSecondLink(" ");
    }

    return (
        <div className="home">
            <div className="home_wrapper">
                <div className="circle">
                    <div
                        className="navs nav_1"
                        onClick={() => {
                            setNavType("story");
                            setOpen(true);
                        }}
                    >
                        {/* <img src="images/story.png" alt="" /> */}
                        {/* Our Story */}
                        {/* <T text='yrotS ruO' /> */}
                        <T text="⅄ꓤOꓕS ꓕՈO" />
                    </div>

                    <div
                        className="navs nav_2 "
                        onClick={() => {
                            setNavType("blogs");
                            setOpen(true);
                        }}
                    >
                        <T height="60px" text="⅁O⅂ꓭ" />
                    </div>
                    <div
                        className="navs nav_3"
                        onClick={() => {
                            setNavType("contacts");
                            setOpen(true);
                        }}
                    >
                        {/* <T text='Contacts' /> */}
                        <T text="HϽՈOꓕ NI ꓕƎ⅁" />
                    </div>
                </div>
                <div className="links">
                    <div className={`link link_first ${firstLink}`}>
                        <Link className="link_teaser" to="/shop">
                            <span
                                onMouseOver={mouseOverFirstHandler}
                                onMouseOut={mouseOutFirstHandler}
                                className="link_shop"
                            >
                                Shop
                            </span>
                        </Link>
                    </div>
                    <div className={`link link_second ${secondLink}`}>
                        <Link className="link_teaser" to="/teasers">
                            <span
                                onMouseOver={mouseOverSecondHandler}
                                onMouseOut={mouseOutSecondHandler}
                                className="link_teasers"
                            >
                                Teasers
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {open && <Navs setOpen={setOpen} navType={navType} />}
        </div>
    );
};

export default Home;
