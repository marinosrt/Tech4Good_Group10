import React from "react";
import { Price, IconContainer, FeeContainer, Span } from "./Plans.style";
import { Link } from "react-router-dom";

const Plans = () => {

    const AllFeesInclude = ['Recepción de paquetería', 'Office equipado', 'Café recién molido', 'Agua, luz, climatización y limpieza'];

    const PicoteoIncludes = ['Acceso al espacio de 8:00-19:00h', 'Mesa flexible', ...AllFeesInclude];

    const AGustoIncludes = ['Acceso sin límite al espacio 24/7', 'Mesa fija en escritorio compartido', ...AllFeesInclude, 'Hasta 100 fotocopias en b/n y 20 en color al mes', 'Salas de reunión: 5h/mes']

    const FiestaOficinaIncludes = ['Acceso sin límite al espacio 24/7', 'Mesa fija en escritorio compartido', ...AllFeesInclude, 'Hasta 250 fotocopias en b/n y 50 en color al mes', 'Salas de reunión: 20h/mes', '50% de descuento en salas de reunión']


    return (
        <div className="flex flex-wrap justify-center -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <FeeContainer>
                    <h4>PICOTEO</h4>
                    <Price>20€<Span>/día</Span></Price>
                    {PicoteoIncludes.map((include, id) =>
                        <div key={id} className="mb-2">
                            <IconContainer>
                                <span className="material-symbols-outlined text-sm">
                                    done
                                </span>
                            </IconContainer>
                            {include}
                        </div>)}
                    <Link to="/user-area/reservas" className="w-full mt-auto">
                        <button className="w-full">
                            Quiero contratarla
                        </button>
                    </Link>

                </FeeContainer>
            </div>

            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <FeeContainer>
                    <h4>A GUSTO</h4>
                    <Price>180€<Span>/mes</Span></Price>
                    {AGustoIncludes.map((include, id) =>
                        <div key={id} className="mb-2">
                            <IconContainer>
                                <span className="material-symbols-outlined text-sm">
                                    done
                                </span>
                            </IconContainer>
                            {include}
                        </div>)}
                    <Link to="/user-area/reservas" className="w-full mt-auto">
                        <button className="w-full">
                            Quiero contratarla
                        </button>
                    </Link>
                </FeeContainer>
            </div>

            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <FeeContainer>
                    <h4>FIESTA DE OFICINA</h4>
                    <Price>320€<Span>/mes</Span></Price>
                    {FiestaOficinaIncludes.map((include, id) =>
                        <div key={id} className="mb-2">
                            <IconContainer>
                                <span className="material-symbols-outlined text-sm">
                                    done
                                </span>
                            </IconContainer>
                            {include}
                        </div>)}
                    <Link to="/user-area/reservas" className="w-full mt-auto">
                        <button className="w-full">
                            Quiero contratarla
                        </button>
                    </Link>
                </FeeContainer>
            </div>
        </div>
    )
}

export default Plans;