import styled from 'styled-components';

export const MobileMenu = styled.nav`
    position: fixed;
    top: 0;
    right: ${props => (props.isMenuOpen ? '0' : '-100%')};
    height: 100vh;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    transition: right 0.3s ease-in-out;

    @media (min-width: 1024px) {
        display: none;
    }
`;


export const DesktopMenu = styled.nav`
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;


export const NavLink = styled.a`
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

    &.special-link {
        background-color: #ebebeb;
        padding: 8px 12px;
        border-radius: 4px;
        color: #333;
        font-weight: 700;

        &:hover {
            background-color: #dcdcdc;
        }
    }
`;


export const MobileMenuButton = styled.button`
    display: none;

    @media (max-width: 1024px) {
        display: block;
    }
`;

