import React from "react";
import { Section, Price, IconContainer, FeeContainer, Span } from "./Tarifas.style";

const Tarifas = () => {

    const AllFeesInclude = ['Recepción de paquetería', 'Office equipado', 'Café recién molido', 'Agua, luz, climatización y limpieza'];

    const PicoteoIncludes = ['Acceso al espacio de 8:00-19:00h', 'Mesa flexible', ...AllFeesInclude];

    const AGustoIncludes = ['Acceso sin límite al espacio 24/7', 'Mesa fija en escritorio compartido', ...AllFeesInclude, 'Hasta 100 fotocopias en b/n y 20 en color al mes', 'Salas de reunión: 5h/mes']

    const FiestaOficinaIncludes = ['Acceso sin límite al espacio 24/7', 'Mesa fija en escritorio compartido', ...AllFeesInclude, 'Hasta 250 fotocopias en b/n y 50 en color al mes', 'Salas de reunión: 20h/mes', '50% de descuento en salas de reunión']

    return (
        <Section>
            <div className="container px-5 pt-20 pb-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <h2>Tarifas</h2>
                    <p>Nuestras tarifas de coworking se adaptan a cualquier tipo de negocio, ya sea grande, pequeño, estable o en expansión. ¿Qué necesitas?</p>
                </div>
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
                            {/* //TODO link button a modal contacto */}
                            <button className="flex mt-auto">
                                Quiero contratarla
                            </button>
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
                            {/* //TODO link button a modal contacto */}
                            <button className="flex mt-auto">
                                Quiero contratarla
                            </button>
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
                            {/* //TODO link button a modal contacto */}
                            <button className="flex mt-auto">
                                Quiero contratarla
                            </button>
                        </FeeContainer>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Tarifas;