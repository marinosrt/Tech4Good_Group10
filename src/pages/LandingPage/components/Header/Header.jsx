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
            
        </Container>
    </>
    )
}

export default Portada;