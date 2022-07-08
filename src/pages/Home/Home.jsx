import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navs from "../../components/Navs/Navs";
import T from "../../components/t/T";
import "./Home.scss";
const Home = () => {
    const [open, setOpen] = useState(false);
    const [navType, setNavType] = useState("");
    const [firstLink, setFirstLink] = useState(" ");
    const [secondLink, setSecondLink] = useState("active_link");
    // const nav1 = ['o', 'u', 'r', ' ', 's', 't', 'o', 'r', 'y']

    // Toggle animation for buttons (teasers, shop)
    function mouseOverFirstHandler() {
        if (firstLink === " " && secondLink === "active_link") {
            setFirstLink("active_link");
            setSecondLink(" ");
        }
    }

    function mouseOutFirstHandler() {
        setSecondLink("active_link");
        setFirstLink(" ");
    }

    function mouseOverSecondHandler() {
        if (firstLink === " " && secondLink === "active_link") {
            setSecondLink(" ");
            setFirstLink("active_link");
        }
    }

    function mouseOutSecondHandler() {
        setFirstLink(" ");
        setSecondLink("active_link");
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
                        <T text="⅄ꓤOꓕS ꓤՈO" />
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
                        <span
                            onMouseOver={mouseOverFirstHandler}
                            onMouseOut={mouseOutFirstHandler}
                            className="link_shop"
                        >
                            Shop
                        </span>
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
