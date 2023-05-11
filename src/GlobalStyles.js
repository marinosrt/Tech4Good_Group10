import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	body {
		margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}


    button {
    background-color: #19A7CE;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #146C94;
    }
}


    h2 {
        font-size: 1.8rem;
        font-weight: 500;
        color: #1a202c;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 0.5rem;

        @media (min-width: 640px) {
            font-size: 2.250rem;
        }
    }


    h3 {
        font-size: 1.25rem;
        font-weight: 500;
        color: #1a202c;
        margin-bottom: 0.5rem;

        @media (min-width: 640px) {
            font-size: 1.5rem;
        }
    }


    h4 {
        font-size: 1.125rem;
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

    input, textarea {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    color: #718096;
    padding: 0.5rem 0.75rem;
    line-height: 1.6;
    transition: color 0.2s ease-in-out;

    &:focus {
        border-color: #667eea;
        box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.5);
        outline: none;
    }

    &:focus::placeholder {
        color: transparent;
    }
    }

    label {
        line-height: 1.75; 
        font-size: 0.875rem; 
        color: #6b7280;
    }
`;



export const Logo = styled.span`
    font-family: 'Manrope', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #19A7CE;
    padding: 0.6rem 1rem;
    border: #19A7CE solid 3px;

    @media (min-width: 640px) {
        font-size: 1.5rem;
    }
`