import { Container, Title, Subtitle } from "./Header.styles";

const Portada = () => {

    return (<>
        <Container>
            <Title>Find a spot</Title>
            <Subtitle className="w-2/3 lg:w-1/2 mx-auto">
                Encuentra tu espacio para el éxito
            </Subtitle>
        </Container>
    </>
    )
}

export default Portada;