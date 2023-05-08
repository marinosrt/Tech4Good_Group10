import React from "react";
import { IconContainer, ServiceContainer } from "./Servicios.style";

const Servicios = () => {
    return (
        <section>
            <div className="container px-5 pt-20 pb-12 mx-auto flex flex-col items-center">
                <div className="flex flex-col text-center w-full mb-16">
                    <h2>Servicios</h2>
                    <p>Nuestros coworkers cuentan con los siguientes servicios:</p>
                </div>
                <div className="sm:flex flex-wrap lg:w-3/4">
                    <div className="sm:w-1/2 xl:w-1/3 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span className="material-symbols-outlined">
                                    wifi
                                </span>
                            </IconContainer>
                            <h4>Wifi de alta velocidad</h4>
                        </ServiceContainer>
                    </div>
                    <div className="sm:w-1/2 xl:w-1/3 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span className="material-symbols-outlined">
                                    inventory_2
                                </span>
                            </IconContainer>
                            <h4>Recepción de paquetería</h4>
                        </ServiceContainer>
                    </div>
                    <div className="sm:w-1/2 xl:w-1/3 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span className="material-symbols-outlined">
                                    key
                                </span>
                            </IconContainer>
                            <h4>Acceso seguro 24/7</h4>
                        </ServiceContainer>
                    </div>
                    <div className="sm:w-1/2 xl:w-1/3 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span className="material-symbols-outlined">
                                    print
                                </span>
                            </IconContainer>
                            <h4>Uso de impresora</h4>
                        </ServiceContainer>
                    </div>
                    <div className="sm:w-1/2 xl:w-1/3 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span className="material-symbols-outlined">
                                    meeting_room
                                </span>
                            </IconContainer>
                            <h4>Salas de reuniones</h4>
                        </ServiceContainer>
                    </div>
                    <div className="sm:w-1/2 xl:w-1/3 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span className="material-symbols-outlined">
                                    power
                                </span>
                            </IconContainer>
                            <h4>Suministros incluidos</h4>
                        </ServiceContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicios;