import styled from "styled-components";
import Img from '../../../../assets/img/portada.jpg'

export const Container = styled.section`
    background-image: url(${Img});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 5rem 1rem;

    @media screen and (min-width: 640px) {
        padding: 5rem;
    }
`; 

export const Description = styled.p`
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 640px) {
        font-size: 1.25rem;
        line-height: 1.875rem;
    }
`;



