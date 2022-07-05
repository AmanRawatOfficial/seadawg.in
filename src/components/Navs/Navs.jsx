import React from "react";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

import "./style.scss";
const Navs = ({ setOpen, navType }) => {
    return (
        <div className="our_story_nav">
            <div className="our_story_nav_wrapper">
                <CloseOutlined
                    className="close"
                    onClick={() => setOpen(false)}
                />

                <div className="heading">{navType === "story" ? "Out Story" : navType === "blogs" ? "Blogs" : "Get In Touch"}</div>
                <div className="links_div">
                    {/* for our story navs */}
                    {navType === "story" && (
                        <>
                            <Link className="nav_link" to="/intro">
                                <span>Who we are (comic strip)</span>
                            </Link>
                            <Link className="nav_link" to="/aim">
                                <span>what we are trying to do</span>
                            </Link>
                        </>
                    )}

                    {/* for our blags navs */}
                    {navType === "blogs" && (
                        <>
                            <Link className="nav_link" to="/charity">
                                <span>Charity</span>
                            </Link>
                        </>
                    )}

                    {/* for our get in touch  navs */}
                    {navType === "contacts" && (
                        <>
                            <Link className="nav_link" to="/orders">
                                <span>Corporate Orders</span>
                            </Link>
                            <Link className="nav_link" to="/collaboration">
                                <span>Collaborate With Us</span>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navs;
