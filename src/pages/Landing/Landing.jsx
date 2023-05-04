import React from "react";
import Portada from "./components/Portada/Portada";
import Navbar from '../../components/Navbar/Navbar'
import Oficina from './components/Oficina/Oficina'

const Landing = () => {

    return (
        <>
            <Navbar />
            <Portada />
            <Oficina/>

        </>
    )
}

export default Landing;