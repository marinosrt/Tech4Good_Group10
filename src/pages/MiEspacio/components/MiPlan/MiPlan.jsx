import React from "react";
import { useState } from "react";
import Plans from "components/Plans/Plans";
import { Link } from "react-router-dom";

const MiPlan = () => {

    const [showPlans, setShowplans] = useState(false);

    const handleShowPlans = () => setShowplans(!showPlans)

    return (
        <div
            className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8"
            role="alert"
        >
            <div className="flex items-center gap-4">
                <p className="font-medium sm:text-lg">New message!</p>
            </div>

            <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde
                vel adipisci blanditiis voluptates eum. Nam, cum minima?
            </p>

            <div className="mt-6 sm:flex sm:gap-4">
                <button onClick={handleShowPlans}>
                    Take a Look
                </button>
            </div>
            {showPlans && <Plans />}
            <button><Link to="reservas">Reservas</Link></button>
        </div>
    )
}

export default MiPlan;