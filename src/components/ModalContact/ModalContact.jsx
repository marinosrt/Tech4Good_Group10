import React, { useContext } from "react";
import ModalContext from "context/ModalContext";
import { ModalOverlay, ModalContainer } from "./ModalContact.style";

const ModalContact = () => {

    const { showModal, toggleModal } = useContext(ModalContext);

    if (!showModal) {
        return null;
    }

    return (
        <ModalOverlay >
            <ModalContainer >

                <div className="absolute top-6 right-6">
                    <span onClick={toggleModal} className="material-symbols-outlined">
                        close
                    </span>
                </div>

                <div className="container px-5 py-10 md:py-24 mx-auto flex flex-wrap items-center justify-between gap-20">
                    <div className="lg:w-2/6 lg:pl-10 pl-0">
                        <p className="mb-6">
                            ¿Necesitas más información sobre nuestros espacios o nuestros planes de precios?
                        </p>
                        <p>Ya eres miembro y necesitas ayuda con algún servicio de nuestros espacios?</p>
                    </div>

                    <div className="bg-white rounded-lg p-10 lg:w-3/6 lg:mr-10">
                        <div className="flex flex-col w-full mb-6">
                            <h3>Contáctanos</h3>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" id="name" name="name" />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea id="message" name="message" ></textarea>
                                </div>
                            </div>
                            <div className="flex justify-center pt-6 w-full">
                                <button >Enviar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default ModalContact