import { useContext } from "react";
import { MainProjectsContext } from "../contexts/MainProjectsContext";

export const useMainProjectsRef = () => {
    const mainProjectsRef = useContext(MainProjectsContext);
    if (mainProjectsRef === null) {
        throw new Error(
            "useMainProjectsRef deve ser usado dentro de um MainProjectsContextProvider"
        );
    }
    return mainProjectsRef;
};
