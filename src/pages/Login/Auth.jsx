import React from "react";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from "components/Navbar/Navbar";

const Auth = () => {

    const [showLogin, setShowLogin] = useState(true);

    const toggleComponent = () => {
        setShowLogin(!showLogin);
    };


    return (
        <div>
            <Navbar/>
            {showLogin ? <Login toggleComponent={toggleComponent} /> : <Signup toggleComponent={toggleComponent} />}
        </div>
    )
}

export default Auth;