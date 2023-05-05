import React from 'react';
import { NavLink } from './Navbar.style';

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <span>Sardenya CoWorks</span>
                {/* // TODO links scroll-down*/}
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink>La oficina</NavLink>
                    <NavLink>Planes</NavLink>
                    <NavLink>Blog</NavLink>
                </nav>
                <div>
                    {/* // TODO botón despliega modal contacto*/}
                    <button>
                        Contacto
                    </button>
                     {/* // TODO link a página de autenticación*/}
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
