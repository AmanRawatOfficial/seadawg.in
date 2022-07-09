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

                <div className="heading">
                    {navType === "story"
                        ? "Our Story"
                        : navType === "blogs"
                        ? "Blog"
                        : "Get In Touch"}
                </div>
                <div className="links_div">
                    {/* for our story navs */}
                    {navType === "story" && (
                        <>
                            <Link className="nav_link" to="/who">
                                <span>Who we are (comic strip)</span>
                            </Link>
                            <Link className="nav_link" to="/what">
                                <span>What we are trying to do</span>
                            </Link>
                            <Link className="nav_link nav_link_charity" to="/charity">
                                <span>Charity</span>
                            </Link>
                        </>
                    )}

                    {/* for our blags navs */}
                    {navType === "blogs" && (
                        <>
                            <Link className="nav_link" to="/">
                                <span>Click here to read or to contribute to our Blog</span>
                            </Link>
                        </>
                    )}

                    {/* for our get in touch  navs */}
                    {navType === "contacts" && (
                        <div className="nav_link_three">
                            <Link className="nav_link" to="/corporate">
                                <span>Corporate Orders</span>
                            </Link>
                            <Link className="nav_link" to="/collaborate">
                                <span>Collaborate With Us</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navs;
