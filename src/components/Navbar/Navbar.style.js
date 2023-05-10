import styled from 'styled-components';


export const DesktopMenu = styled.nav`
    display: flex;
    align-items: baseline;
    gap: 3rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;


export const NavLink = styled.p`
    margin-bottom: 10px;
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #666;
    }
`;


export const MobileMenu = styled.nav`
    position: fixed;
    top: 0;
    right: ${props => (props.isMenuOpen ? '0' : '-100%')};
    height: 100vh;
    width: 100vw;
    background-color: #fefefe;
    text-align: center;
    transition: right 0.3s ease-in-out;
    z-index: 200;

    @media (min-width: 1025px) {
        display: none;
    }
`;


export const HamburguerLink = styled.p`
    padding: 1.5rem;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    border-bottom: #666 solid 1px;
    transition: color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #666;
    }

    &.special-link {
        width: 100%;
        background-color: #19A7CE;
        color: white;
        font-weight: 700;
        border-bottom: none;
        margin-bottom: 0.4rem;

        &:hover {
            background-color: #146C94;
        }
    }
`;


export const HamburguerButton = styled.button`
    display: flex;
    background-color: transparent; 
    color: #19A7CE; 
    font-weight: 600; 
    padding: 0.5rem 1rem; 


    &:hover {
        background-color: transparent; 
        color: #19A7CE; 
    }


    @media (min-width: 1025px) {
        display: none;
    }
`;

