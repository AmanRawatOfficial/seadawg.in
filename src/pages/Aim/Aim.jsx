import React, { useEffect} from "react";

import "./Aim.scss";
import SeaDawgMark from "../../components/SeaDawgMark/SeaDawgMark";
// import CircularHeader from "../../components/CircularHeader/CircularHeader";
import HomeButton from "../../components/HomeButton/HomeButton";
import Footer from "../../components/Footer/Footer";



function Aim() {
    useEffect(() => {
        document.title = "dawg.in | What We're Trying to do";
    })
    return (
        <>
        <div className="aim">
            <HomeButton className="aim_home_button" />
            <SeaDawgMark />
            <div className="main_content">
                <div className="heading_container">
                    <div className="heading_gimmick"></div>
                    <div className="heading">
                        <h2>WHAT WE ARE TRYING TO DO</h2>
                    </div>
                </div>
                <div className="content">
                    <p>
                        <div className="content_first">
                            As you would learn from our story (Who We Are), we
                            were brought into being in order to fill a void. We
                            saw the need for something to be done, observed that
                            nobody was really doing it, and took it upon
                            ourselves to take up the task.
                            <br />
                            <br />
                            But this isn’t the only thing we want to do. We
                            don’t just want to design material things to sell
                            them and make profit. This entity was established
                            not by seeing a means to profit from the observed
                            void, but to explore it and do our best to get rid
                            of it.
                            <br />
                            <br />
                            <span className="content_para_one">
                                It is not only that one of the largest
                                workforces on earth, moving 90% of the world’s
                                goods was neglected as a market for merchandise
                                made specifically for them. We feel the pain of
                                our brethren being neglected on a lot of fronts.
                                <br />
                                <br />
                            </span>
                        </div>
                        <div className="content_second">
                            <span className="content_para_two">
                                It is not only that one of the largest
                                workforces on earth, moving 90% of the world’s
                                goods was neglected as a market for merchandise
                                made specifically for them. We feel the pain of
                                our brethren being neglected on a lot of fronts.
                                <br />
                                <br />
                            </span>
                            The pandemic had our heroes working on the frontline
                            with no others means to keep the wheel turning and
                            no one seemed to be bothered. They faced hardships
                            getting to work, getting back home, and even
                            discharging their duties.
                            <br />
                            <br />
                            We want to bring together all of us as a family.
                            Creating bonds that will forge a force to be
                            reckoned.
                            <br />
                            <br />
                            This family is you. There is nothing we can do
                            without you behind us. We have big plans to get the
                            family together on various fronts and stay united
                            forever, but these plans come only if we can
                            establish the SeaDawg as an identifiable name within
                            our community - something we relate to - something
                            known to the people we want our voices to reach.
                            <br />
                            <br />
                            For that we need your support. Shop with us, spread
                            the word, encourage us on social media, and we
                            promise we shall not be just another entity selling
                            products. We shall in fact become the adhesive we
                            stick together with.
                            <br />
                            <br />
                            Take any brand you can think of. They didn’t become
                            as strong as they are overnight. It was people who
                            believed in their humble beginnings and supported
                            them that made them stronger that brought them to a
                            platform where they are not neglected. We ask for
                            your support to this end.
                            <br />
                            <br />
                            We strongly believe in helping save the earth and
                            giving back to the environment we get from and you
                            shall see varied evidence of this in our conduct
                            right from the get go.
                            <br />
                            <br />
                            Thank you for your time and your support
                            <br />
                            <br />
                            Fair winds and following seas to all.
                        </div>
                    </p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Aim;
