import React, { useState } from 'react';
import { DesktopMenu, MobileMenu, NavLink, MobileMenuButton } from './Navbar.style';
import { Logo } from 'GlobalStyles'
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToOfficeSection, scrollToPlansSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="container mx-auto flex flex-row items-center p-5">
                <Link to="/">
                    <Logo>Sardenya CoWorks</Logo>
                </Link>

                <MobileMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
                    <NavLink onClick={scrollToOfficeSection}>La oficina</NavLink>
                    <NavLink onClick={scrollToPlansSection}>Planes</NavLink>
                    <NavLink>Blog</NavLink>
                    <NavLink className="special-link">Contacto</NavLink>
                    <NavLink className="special-link"><Link to="/auth">Iniciar sesión</Link></NavLink>
                </MobileMenu>

                <DesktopMenu className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5 px-4">
                    <NavLink onClick={scrollToOfficeSection}>La oficina</NavLink>
                    <NavLink onClick={scrollToPlansSection}>Planes</NavLink>
                    <NavLink>Blog</NavLink>
                    <div>
                        <button>
                            Contacto
                        </button>
                        <Link to="/miespacio">
                            <button>Iniciar sesión</button>
                        </Link>
                    </div>
                </DesktopMenu>

                <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} last>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </MobileMenuButton>
            </div>
        </header>
    );
};

export default Navbar;
