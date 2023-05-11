import React, { useEffect } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Step1 = () => {

    const [user, setUser] = useLocalStorage('user', {});

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const tarifa = searchParams.get("tarifa");

    useEffect(() => {
        if (tarifa === "picoteo") {
            setUser({ ...user, plan: { name: "Picoteo", price: 20 } });
        } else if (tarifa === "agusto") {
            setUser({ ...user, plan: { name: "A Gusto", price: 180 } });
        } else if (tarifa === "fiesta-oficina") {
            setUser({ ...user, plan: { name: "Fiesta de Oficina", price: 320 } });
        }
    }, []);
    console.log(user)
    return (
        <div className="rounded-xl bg-white shadow-md m-10 p-4 md:p-6 lg:p-8 max-w-md">
            <div className="p-4 text-center">
                <h4 className="mt-4">
                    Has seleccionado la tarifa
                </h4>
                <h3>{user.plan?.name}</h3>
            </div>
            <div className="flex justify-center">
                <Link to="step2">
                    <button>Confirmar</button>
                </Link>
            </div>
        </div>
    )
}

export default Step1