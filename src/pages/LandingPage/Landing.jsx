import React from "react";
import Portada from "./components/Header/Header";
import Navbar from '../../components/Navbar/Navbar'
import Footer from "components/Footer/Footer";

const Landing = () => {

    // const officeSectionRef = useRef(null);
    // const plansSectionRef = useRef(null);

    // const scrollToOfficeSection = () => {
    //     officeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    // };

    // const scrollToPlansSection = () => {
    //     plansSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <>
            <Navbar
                // scrollToOfficeSection={scrollToOfficeSection}
                // scrollToPlansSection={scrollToPlansSection}
            />

            <Portada />


            <Footer />
        </>
    )
}

export default Landing;