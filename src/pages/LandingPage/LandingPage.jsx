import React from "react";
import Portada from "./components/Portada/Portada";
import Navbar from '../../components/Navbar/Navbar'
import Oficina from './components/Oficina/Oficina'
import BannerContacto from "components/BannerContacto/BannerContacto";
import Servicios from "./components/Servicios/Servicios";
import Tarifas from "./components/Tarifas/Tarifas";

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
        </>
    )
}

export default Landing;