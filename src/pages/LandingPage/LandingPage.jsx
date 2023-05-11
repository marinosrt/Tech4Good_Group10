import React, { useRef } from "react";
import Portada from "./components/Portada/Portada";
import Navbar from '../../components/Navbar/Navbar'
import Oficina from './components/Oficina/Oficina'
import BannerContacto from "components/BannerContacto/BannerContacto";
import Servicios from "./components/Servicios/Servicios";
import Tarifas from "./components/Tarifas/Tarifas";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "components/Footer/Footer";

const Landing = () => {

    const officeSectionRef = useRef(null);
    const plansSectionRef = useRef(null);

    const scrollToOfficeSection = () => {
        officeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPlansSection = () => {
        plansSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Navbar
                scrollToOfficeSection={scrollToOfficeSection}
                scrollToPlansSection={scrollToPlansSection}
            />

            <Portada />

            <div ref={officeSectionRef} id="office-section">
                <Oficina />
            </div>

            <BannerContacto
                title={'¿Ganas de ver más?'}
                text={'Te atenderemos encantados en un tour personalizado para que conozcas nuestras instalaciones.'}
                buttonText={'Reserva un tour'} />

            <Servicios />
            {/* //TODO añadir Servicios a NavBar e implementar scroll-down */}

            <div ref={plansSectionRef} id="plans-section">
                <Tarifas />
            </div>

            <Testimonials />

            <BannerContacto
                title={'¿Necesitas más información?'}
                text={'¡No dudes en contactarnos! Nuestro equipo estará encantado de responder a todas tus preguntas y ayudarte a encontrar la mejor opción para ti. En nuestro coworking, nos enorgullece ofrecer un espacio moderno, flexible y diseñado para inspirarte y hacer crecer tu negocio. Así que si necesitas más información o simplemente quieres conocernos mejor, ¡no dudes en ponerte en contacto con nosotros hoy mismo! '}
                buttonText={'Contacta'} />

            <Footer />
        </>
    )
}

export default Landing;