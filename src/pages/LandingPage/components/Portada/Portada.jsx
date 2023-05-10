import React, { useContext } from "react";
import { Container, Title, Subtitle } from "./Portada.styles";
import ModalContext from "context/ModalContext";

const Portada = () => {

    const { toggleModal } = useContext(ModalContext);

    return (<>
        <Container>
            <Title>Sardenya CoWorks</Title>
            <Subtitle className="w-2/3 lg:w-1/2 mx-auto">
                Impresionantes oficinas privadas y espacios de coworking en el Eixample de Barcelona.
            </Subtitle>
            <div>
                <button onClick={toggleModal}>¡Prueba un día gratis!</button>
            </div>
        </Container>
    </>
    )
}

export default Portada;