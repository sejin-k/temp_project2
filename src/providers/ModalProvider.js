"use client";

import { createContext, useState, useContext } from "react";
import { useRouter } from "next/navigation";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modalDialog, setModalDialog] = useState(null);
    const [inputData, setInputData] = useState(null);

    return (
        <ModalContext.Provider value={{ modalDialog, setModalDialog, inputData, setInputData }}>
            {children}
        </ModalContext.Provider>
    );
}