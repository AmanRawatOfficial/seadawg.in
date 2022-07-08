import React from "react";

import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import HomeButton from "../../components/HomeButton/HomeButton";
import "./Intro.scss";

function Intro() {
    const imageArray = [
        "a_1",
        "a_2",
        "a_3",
        "b_1",
        "b_2",
        "b_3",
        "c_1",
        "c_2",
        "c_3",
        "d_1",
        "d_2",
        "d_3",
        "e_1",
        "e_2",
        "e_3",
        "f_1",
        "f_2",
        "f_3",
        "g_1",
        "g_2",
        "g_3",
        "h_1",
        "h_2",
        "h_3",
    ];

    const Images = imageArray.map((item) => {
        return (
            <div key={item} className="comic_stripe_element">
                <img
                    className="comic_stripe_image"
                    src={require(`../../images/Comic_stripe/${item}.png`)}
                    alt="Block of comic stripe"
                />
            </div>
        );
    });

    return (
        <div className="intro">
            <HomeButton />
            <SeaDawgMark />
            <div className="comic_container">
                <div className="comic_stripe_container">{Images}</div>
            </div>
        </div>
    );
}

export default Intro;
