import React, { useRef } from "react";
import Portada from "./components/Header/Header";
import Navbar from '../../components/Navbar/Navbar'
import Footer from "components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

const Landing = () => {

    const aboutUsRef = useRef(null);

    const scrollToAboutUs = () => {
        aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
            <Navbar scrollToAboutUs={scrollToAboutUs} />

            <Portada />

            <div ref={aboutUsRef} id="aboutUsRef">
                <AboutUs />
            </div>
            
            <Footer />
        </>
    )
}

export default Landing;