import React, { useContext } from "react";
import { Section } from './BannerContacto.style';
import ModalContext from "context/ModalContext";

const BannerContacto = (props) => {

    const { toggleModal } = useContext(ModalContext);

    return (
        <>
            <Section>
                <div className="container px-5 pt-16 pb-14 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h3>{props.title}</h3>
                        <p className="lg:w-2/3 mx-auto">{props.text}</p>
                    </div>
                    <div className="text-center">
                        <button onClick={toggleModal}>{props.buttonText}</button>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default BannerContacto;