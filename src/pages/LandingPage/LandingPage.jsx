import React from "react";
import Portada from "./components/Portada/Portada";
import Navbar from '../../components/Navbar/Navbar'
import Oficina from './components/Oficina/Oficina'
import BannerContacto from "components/BannerContacto/BannerContacto";
import Servicios from "./components/Servicios/Servicios";
import Tarifas from "./components/Tarifas/Tarifas";
import Reviews from "./components/Reviews/Reviews";

const Landing = () => {

    return (
        <>
            <Navbar />
            <Portada />
            <Oficina />
            <BannerContacto
                title={'¿Ganas de ver más?'}
                text={'Te atenderemos encantados en un tour personalizado para que conozcas nuestras instalaciones.'}
                buttonText={'Reserva un tour'} />
            <Servicios />
            <Tarifas/>
            <Reviews/>
            <BannerContacto
                title={'¿Necesitas más información antes de tomar una decisión?'}
                text={'¡No dudes en contactarnos! Nuestro equipo estará encantado de responder a todas tus preguntas y ayudarte a encontrar la mejor opción para ti. En nuestro coworking, nos enorgullece ofrecer un espacio moderno, flexible y diseñado para inspirarte y hacer crecer tu negocio. Así que si necesitas más información o simplemente quieres conocernos mejor, ¡no dudes en ponerte en contacto con nosotros hoy mismo! '}
                buttonText={'Contacta'} />
        </>
    )
}

export default Landing;