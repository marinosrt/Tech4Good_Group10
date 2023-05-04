import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: #374151;
		/* font-family: 'Overpass', sans-serif;
        font-weight: 200;
        background-color: #101111;
        color: white; */
	}

    button {
    background-color: #6366f1;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #4f46e5;
    }
}

h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;

    @media screen and (min-width: 640px) {
        font-size: 4rem;
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
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: #1a202c;
    margin-bottom: 0.5rem;
}

`;
