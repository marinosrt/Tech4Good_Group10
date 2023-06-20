import React, { useState } from 'react';
import { DesktopMenu, MobileMenu, NavLink, HamburguerLink, HamburguerButton } from './Navbar.style';
import { Link } from 'react-router-dom';



const Navbar = ({scrollToAboutUs, scrollToWhatWeDo}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="container mx-auto flex flex-row justify-between items-center p-5">
                <Link to="/">
                </Link>
{/* TODO onClick Contacto */}
                <MobileMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
                    <HamburguerLink onClick={scrollToAboutUs}>Quiénes somos</HamburguerLink>
                    <HamburguerLink onClick={scrollToWhatWeDo}>Qué hacemos</HamburguerLink>
                    <HamburguerLink conClick={console.log("hi")}>Contacto</HamburguerLink>
                </MobileMenu>

                <DesktopMenu className="md:ml-auto">
                    <NavLink onClick={scrollToAboutUs}>Quiénes somos</NavLink>
                    <NavLink onClick={scrollToWhatWeDo}>Qué hacemos</NavLink>
                    <NavLink onClick={console.log("hi")}>Contacto</NavLink>
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
