import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	body {
		margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		/* font-family: 'Overpass', sans-serif;
        font-weight: 200;
        background-color: #101111;
        color: white; */
	}


    button {
    background-color: #19A7CE;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    margin: 0 0.5rem 0 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #146C94;
    }
}


    h2 {
        font-size: 2.5rem;
        font-weight: 500;
        color: #1a202c;
        margin-bottom: 0.5rem;

        @media (min-width: 640px) {
            font-size: 3rem;
        }
    }


    h3 {
        font-size: 1.5rem;
        font-weight: 500;
        color: #1a202c;
        margin-bottom: 0.5rem;

        @media (min-width: 640px) {
            font-size: 2rem;
        }
    }


    h4 {
        font-size: 1.2rem;
        line-height: 1.5rem;
        font-weight: 500;
        color: #1a202c;
        margin-bottom: 0.5rem;
    }


    p {
        font-size: 1.3rem;
        line-height: 1.7rem;
        font-weight: 400;
        color: #2C3333;
    }
`;



export const Logo = styled.span`
font-family: 'Manrope', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    color: #1a202c;

    @media (min-width: 640px) {
        font-size: 1.5rem;
    }
`