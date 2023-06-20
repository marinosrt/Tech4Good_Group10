import React, { useRef } from "react";
import Portada from "./components/Header/Header";
import Navbar from '../../components/Navbar/Navbar'
import Footer from "components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

const Landing = () => {

    const aboutUsRef = useRef(null);
    const whatWeDoRef = useRef(null);

    const scrollToAboutUs = () => {
        aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToWhatWeDo = () => {
        whatWeDoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Navbar
                scrollToAboutUs={scrollToAboutUs}
                scrollToWhatWeDo={scrollToWhatWeDo}
            />

            <Portada />

            <div ref={aboutUsRef} id="aboutUsRef">
                <AboutUs />
            </div>

            <div ref={whatWeDoRef} id="whatWeDoRef">
                <WhatWeDo />
            </div>

            <Footer />
        </>
    )
}

export default Landing;