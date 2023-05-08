import styled from "styled-components";
import Img from 'assets/img/portada.jpg'

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
    position: relative;
    z-index: -2;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;

    @media screen and (min-width: 640px) {
        padding: 5rem;
    }
}
`

export const Title = styled.h1`
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;

    @media screen and (min-width: 640px) {
        font-size: 4rem;
    }
`

export const Subtitle = styled.p`
    color: white;
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 640px) {
        font-size: 1.5rem;
        line-height: 1.875rem;
    }
`;



