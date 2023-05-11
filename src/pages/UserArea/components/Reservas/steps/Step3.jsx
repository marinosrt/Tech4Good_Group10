import React from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useState } from "react";

const Step3 = () => {

    const [user, setUser] = useLocalStorage('user', {});

    const [confirmation, setConfirmation] = useState(false);

    const handleConfirmation = () => {
        setConfirmation(true);
        setUser({ ...user, plan: { ...user.plan, confirmation: true } });
    }
    console.log(user)

    return (
        <div className="rounded-xl bg-white shadow-md m-10 p-4 md:p-6 lg:p-8 max-w-md">
            {!confirmation &&
                (<>
                    <div className="p-4 text-center">
                        <h4 className="mt-4">
                            En este componente se incluirá la confirmación de contratación de la tarifa {user.plan.name}.
                        </h4>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleConfirmation}>Confirmar</button>
                    </div>
                </>)}
            {confirmation &&
                (<>
                    <div className="p-4 text-center">
                        <h4 className="mt-4">
                            ¡Tarifa {user.plan.name} contratada!
                        </h4>
                    </div>
                    <Link to="/user-area" className="flex justify-center">
                        <button>Regresar</button>
                    </Link>
                </>)}
        </div>


    )
}

export default Step3