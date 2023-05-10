import React, { useContext } from "react";
import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Logo } from 'GlobalStyles'
import { Link } from 'react-router-dom';
import ModalContext from "context/ModalContext";


const Auth = () => {

    const { toggleModal } = useContext(ModalContext);

    const [showLogin, setShowLogin] = useState(true);

    const toggleComponent = () => {
        setShowLogin(!showLogin);
    };


    return (
        <div className="bg-myblue3 h-screen">
            <header className="bg-white">
                <nav className="container mx-auto flex flex-row justify-between items-center p-5">
                    <Link to="/">
                        <Logo>Sardenya CoWorks</Logo>
                    </Link>
                    <div className="md:ml-auto">
                        <div className='flex gap-4 ml-6'>
                            <button onClick={toggleModal}>
                                Contacto
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            {showLogin ? <Login toggleComponent={toggleComponent} /> : <Signup toggleComponent={toggleComponent} />}
        </div>
    )
}

export default Auth;