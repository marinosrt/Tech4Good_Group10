import React from "react";
import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "components/Navbar/Navbar";

const Auth = () => {

    const [showLogin, setShowLogin] = useState(true);

    const toggleComponent = () => {
        setShowLogin(!showLogin);
    };


    return (
        <div>
            {showLogin ? <Login toggleComponent={toggleComponent} /> : <Signup toggleComponent={toggleComponent} />}
        </div>
    )
}

export default Auth;