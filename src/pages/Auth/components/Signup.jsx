import React, { useState, useContext } from "react";
import UserContext from "context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { OrContainer, OrSpan, GoogleButton, Span } from "./Login&SignUp.style"

const Signup = ({ toggleComponent }) => {

    const navigate = useNavigate();
    const { signUp, googleSignIn } = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        emailConfirmation: "",
        password: "",
        passwordConfirmation: "",
    });
    const [error, setError] = useState("");


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, surname, email, emailConfirmation, password, passwordConfirmation } = formData;
        const displayName = `${surname}, ${name}`;

        if (email !== emailConfirmation) {
            setError("Los emails no coinciden");
            return;
        }

        if (password !== passwordConfirmation) {
            setError("Las contraseñas no coinciden");
            return;
        }

        if (name.trim() === "" || surname.trim() === "") {
            setError("Por favor, completa todos los campos");
            return;
        }

        try {
            await signUp(email, password, displayName);
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
        <>
        <h4>Crear cuenta</h4>

            {/* //TODO dar formato al mensaje de error */}
            {error && <div>{error}</div>}

            <form >
                <div className="mb-4">
                    <label htmlFor="Name" >Nombre</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="name"
                        name="name" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="surname" >Apellidos</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="surname"
                        name="surname" />
                </div>

                <div className="mb-4">
                    <label htmlFor="Email" >Email</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        id="Email"
                        name="email" />
                </div>

                <div className="mb-4">
                    <label htmlFor="EmailConfirmation" >Confirma tu email</label>
                    <input
                        onChange={handleChange}
                        type="EmailConfirmation"
                        id="EmailConfirmation"
                        name="emailConfirmation" />
                </div>

                <div className="mb-4">
                    <label htmlFor="Password">Contraseña</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        id="Password"
                        name="password" />
                </div>

                <div className="mb-4">
                    <label htmlFor="PasswordConfirmation">Confirma la contraseña</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        id="PasswordConfirmation"
                        name="passwordConfirmation" />
                </div>
            </form>

            <button onClick={handleSubmit}>Registrarme</button>

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
                <Link onClick={toggleComponent}>¿Ya estás registrado?</Link>
            </Span>
        </>
    );
};

export default Signup;
