import styled from 'styled-components';


export const Summary = styled.summary`
    background-color: ghostwhite;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    gap: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #AFD3E2;
        color: white;
}
`;


export const ProfileNav = styled.summary`
    background-color: ghostwhite;
    border-radius: .5rem;
    cursor: pointer;
`;

export const ProfileLink = styled.span`
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
`;