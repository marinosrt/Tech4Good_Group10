import React, { useState, useContext } from 'react';
import { DesktopMenu, MobileMenu, NavLink, HamburguerLink, HamburguerButton } from './Navbar.style';
import { Logo } from 'GlobalStyles'
import { Link } from 'react-router-dom';
import ModalContext from "context/ModalContext";

//TODO implementar este header en la page auth
const Navbar = ({ scrollToOfficeSection, scrollToPlansSection }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { toggleModal } = useContext(ModalContext);

    return (
        <header>
            <div className="container mx-auto flex flex-row justify-between items-center p-5">
                <Link to="/">
                    <Logo>Sardenya CoWorks</Logo>
                </Link>

                <MobileMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
                    <HamburguerLink onClick={scrollToOfficeSection}>La oficina</HamburguerLink>
                    <HamburguerLink onClick={scrollToPlansSection}>Planes</HamburguerLink>
                    <HamburguerLink>Blog</HamburguerLink>
                    <HamburguerLink className="special-link">Contacto</HamburguerLink>
                    <HamburguerLink className="special-link"><Link to="/user-area">Iniciar sesión</Link></HamburguerLink>
                </MobileMenu>

                <DesktopMenu className="md:ml-auto">
                    <NavLink onClick={scrollToOfficeSection}>La oficina</NavLink>
                    <NavLink onClick={scrollToPlansSection}>Planes</NavLink>
                    <NavLink>Blog</NavLink>
                    <div className='flex gap-4 ml-6'>
                        <button onClick={toggleModal}>
                            Contacto
                        </button>
                        <Link to="/user-area">
                            <button>Iniciar sesión</button>
                        </Link>
                    </div>
                </DesktopMenu>

                <HamburguerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </HamburguerButton>
            </div>
        </header>
    );
};

export default Navbar;
