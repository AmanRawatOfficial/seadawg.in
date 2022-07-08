import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./HomeButton.scss";

function HomeButton() {
    const navigate = useNavigate();

    return (
        <div className="home_button_container">
            <FaArrowLeft onClick={() => navigate("/")} className="home_button" fill="#ffac1c"/>
        </div>
    );
}

export default HomeButton;
