import React, { useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import Plans from "components/Plans/Plans";
import { ArrowButton, Icon } from "./MiTarifa.style";


const MiTarifa = () => {

    const [user] = useLocalStorage('user', {});
    console.log(user)

    const [showPlans, setShowplans] = useState(false);
    const handleShowPlans = () => setShowplans(!showPlans)



    return (
        <div className="rounded-xl bg-white shadow-md p-4 md:p-6 lg:p-8">

            {!user.plan?.confirmation && (<div className="block md:flex justify-between items-baseline gap-5 p-4">
                <h3 className="mt-4">
                    Todavía no tienes una tarifa contratada
                </h3>

                <div className="sm:flex sm:gap-4">
                    <ArrowButton onClick={handleShowPlans}>
                        Ver tarifas
                        <Icon showPlans={showPlans} className="material-symbols-outlined">
                            keyboard_arrow_down
                        </Icon>
                    </ArrowButton>
                </div>
            </div>)}

            {user.plan?.confirmation && (<div className="block md:flex justify-between items-baseline gap-5 p-4">
                <h3 className="mt-4">
                    Tu tarifa es actual es {user.plan.name}
                </h3>

                <div className="sm:flex sm:gap-4">
                    <ArrowButton onClick={handleShowPlans}>
                        Cambiar tarifa
                        <Icon showPlans={showPlans} className="material-symbols-outlined">
                            keyboard_arrow_down
                        </Icon>
                    </ArrowButton>
                </div>
            </div>)}

            {showPlans && <Plans />}

        </div>
    )
}

export default MiTarifa;