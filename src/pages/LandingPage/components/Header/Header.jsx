import React from "react";
import { Link } from 'react-router-dom';
import { Container, Title, Subtitle } from "./Header.styles";

const Portada = () => {

    return (<>
        <Container>
            <Title>Hack4Good</Title>
            <Subtitle className="w-2/3 lg:w-1/2 mx-auto">
                Ayuda al comerciante local
            </Subtitle>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to='/map'>Ir al mapa</Link></button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to='/table'>Ir a la tabla</Link></button>
            </div>
        </Container>
    </>
    )
}

export default Portada;