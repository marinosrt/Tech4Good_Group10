import Plans from "components/Plans/Plans";
import React from "react";


const Tarifas = () => {

    return (
        <section className="bg-myblue3">
            <div className="container px-5 pt-20 pb-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <h2>Tarifas</h2>
                    <p>Nuestras tarifas de coworking se adaptan a cualquier tipo de negocio, ya sea grande, pequeño, estable o en expansión. ¿Qué necesitas?</p>
                </div>
                <Plans/>
            </div>
        </section>
    )
}

export default Tarifas;