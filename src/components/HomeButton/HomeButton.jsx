import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./HomeButton.scss";

function HomeButton() {
    const navigate = useNavigate();
    return (
        <div>
            <AiOutlineHome onClick={() => navigate("/")} className="home_button" fill="#116cb7"/>
        </div>
    );
}

export default HomeButton;
