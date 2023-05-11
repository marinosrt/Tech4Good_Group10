import React from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "hooks/useLocalStorage";

const Step2 = () => {

    const [user] = useLocalStorage('user', {});

    return (
        <div className="rounded-xl bg-white shadow-md m-10 p-4 md:p-6 lg:p-8 max-w-md">
            <div className="p-4 text-center">
                <h4 className="mt-4">
                    En este componente se incluirá la pasarela de pagos.
                    Para la tarifa {user.plan.name} el precio a pagar es {user.plan.price} €
                </h4>

            </div>
            <div className="flex justify-center">
                <Link to="/user-area/reservas/step3">
                    <button>Pagar</button>
                </Link>
            </div>
        </div>
    )
}

export default Step2