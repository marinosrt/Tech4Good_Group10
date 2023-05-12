import React, { useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import Plans from "components/Plans/Plans";
import { ArrowButton } from "./MiTarifa.style";


const MiTarifa = () => {

    const [user] = useLocalStorage('user', {});
    console.log(user)

    const [showPlans, setShowplans] = useState(false);
    const handleShowPlans = () => setShowplans(!showPlans)



    return (
        <div className="rounded-xl bg-white shadow-md p-4 md:p-6 lg:p-8">

            {!user.plan?.confirmation && (
                <div className="block md:flex justify-between items-center gap-5 p-4">
                    <h3 className="mt-4">
                        Todavía no tienes una tarifa contratada
                    </h3>
                    <ArrowButton onClick={handleShowPlans} showPlans={showPlans} className="material-symbols-outlined">
                        expand_circle_down
                    </ArrowButton>
                </div>)}

            {user.plan?.confirmation && (
                <div className="p-4">
                    <h3 className="mt-4">
                        Tu tarifa es actual es {user.plan.name}
                    </h3>

                    <div className="sm:flex sm:gap-4">
                        <span
                            onClick={handleShowPlans}
                            showPlans={showPlans}
                            className="text-myblue2 cursor-pointer">
                            ¿Quieres cambiar de tarifa?
                        </span>
                    </div>
                </div>)}

            {showPlans && <div className="pt-10"><Plans /></div>}
        </div>
    )
}

export default MiTarifa;