import React, { createContext, useRef } from "react";

export const MainProjectsContext =
    createContext<React.RefObject<HTMLDivElement> | null>(null);

interface ProviderProps {
    children: React.ReactNode;
}

export const MainProjectsContextProvider = ({ children }: ProviderProps) => {
    const mainProjectsRef = useRef<HTMLDivElement>(null);

    return (
        <MainProjectsContext.Provider value={mainProjectsRef}>
            {children}
        </MainProjectsContext.Provider>
    );
};
