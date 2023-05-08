import React from "react";
import { Container, Title, Subtitle } from "./Portada.styles";

const Portada = () => {

    return (<>
        <Container>
            <Title>Sardenya CoWorks</Title>
            <Subtitle className="w-2/3 lg:w-1/2 mx-auto">
                Impresionantes oficinas privadas y espacios de coworking en el Eixample de Barcelona.
            </Subtitle>
            <div>
                {/* //TODO botón despliega modal de contacto */}
                <button>Button</button>
            </div>
        </Container>
    </>
    )
}

export default Portada;