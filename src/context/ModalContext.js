import React, { createContext, useState } from 'react';

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <ModalContext.Provider value={{ showModal, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
