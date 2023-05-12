import React, { useContext } from "react";
import UserContext from "context/UserContext";
import { useNavigate } from "react-router-dom";
import { ProfileLink, ProfileNav, Summary } from "./Header.style";

const Header = () => {

    const navigate = useNavigate();

    const { user, logOut } = useContext(UserContext);
    console.log(user)

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate("/")
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">

                    <div className="text-center sm:text-left">
                        <h3>Bienvenid@, {user.displayName.split(", ")[1]}</h3>
                        <p>¡Manos a la obra! 💼💻</p>
                    </div>

                    <div className="mt-4">
                        <details className="group">

                            <Summary className="flex cursor-pointer items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span> {user.email} </span>
                                </div>
                                <span className="material-symbols-outlined shrink-0 transition duration-300 group-open:-rotate-180">
                                    expand_more
                                </span>
                            </Summary>

                            <ProfileNav className="mt-2 flex flex-col px-10 py-4 gap-5">
                                <ProfileLink className="flex items-center gap-2">
                                    <span class="material-symbols-outlined">
                                        person
                                    </span>
                                    <span>Perfil</span>
                                </ProfileLink>
                                <ProfileLink onClick={handleLogOut} className="flex items-center gap-2">
                                    <span class="material-symbols-outlined">
                                        logout
                                    </span>
                                    <span>Cerrar sesión</span>
                                </ProfileLink>
                            </ProfileNav>
                        </details>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;