import React, { useState, useContext } from "react";
import UserContext from "context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { OrContainer, OrSpan, GoogleButton, Span } from "./Login&SignUp.style"

const Login = ({ toggleComponent }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { logIn, googleSignIn } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            navigate("/user-area")
        }
        catch (err) {
            setError(err.message)
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        try {
            await googleSignIn();
            navigate("/user-area");
        } catch (err) {
            setError(err.message)
        }
    }


    return (

        <section>
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="bg-white mx-auto lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                    <h4>Log in</h4>
                    {error && <div>{error}</div>}

                    <form >
                        <div className="mb-4">
                            <label htmlFor="Email" >Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="Email"
                                name="email" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Password">Contraseña</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="Password"
                                name="password"/>
                        </div>
                    </form>

                    <button onClick={handleSubmit}>Inicia sesión</button>

                    <OrContainer>
                        <OrSpan>O continúa con</OrSpan>
                    </OrContainer>

                    <GoogleButton onClick={handleGoogleSignIn}>
                        <img
                            alt="Google"
                            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                            className="w-7 h-7 lazyLoad isLoaded">
                        </img>
                    </GoogleButton>

                    <Span>
                        <Link onClick={toggleComponent}>¿Todavía no tienes una cuenta?</Link>
                    </Span>

                </div>
            </div>
        </section>
    );
};

export default Login;
