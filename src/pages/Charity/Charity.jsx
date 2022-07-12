import React, { useEffect} from "react";

import CircularHeader from "../../components/CircularHeader/CircularHeader";
import Footer from "../../components/Footer/Footer";
import HomeButton from "../../components/HomeButton/HomeButton";
import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
import "./Charity.scss";



function Charity() {
    useEffect(() => {
        document.title = "dawg.in | Charity";
    })
    return (
        <>
        <div className="charity">
            <HomeButton />
            <SeaDawgMark />
            <CircularHeader heading="CHARITY">
                <div className="content_first">
                    We strongly believe in giving back to the community that we
                    receive from. We have, through our careers, seen seafarers
                    in need of help. We know that there are a number of
                    organisations out there that are trying to do exactly that.
                    <br />
                    <br />
                    Every financial year, we select a seafaring charity
                    organisation to donate to. At the end of the financial year,
                    the agreed amount is transferred to the said organisation
                    for the welfare of fellow seafarers.
                    <br />
                    <br />
                    To see this year's agreement, click below.
                    <br />
                    <br />
                    <div className="">
                        <button>DOWNLOAD</button>
                    </div>
                </div>
            </CircularHeader>
        </div>
        <Footer />
        </>
    );
}

export default Charity;
