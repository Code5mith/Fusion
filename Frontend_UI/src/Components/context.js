// MARK: https://youtu.be/HYKDUF8X3qI?si=jVhfCcmov_Ye0Rdi

import { createContext, useContext } from "react";

export const AppContext = createContext  (undefined);
export const YearContext = createContext (undefined);

export function useUserContext() {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserContextProvider, text returned undefined");
    }
    return context;
}

export function useYearContext() {
    const context = useContext(YearContext);

    if (context === undefined) {
        throw new Error("useYearContext must be used within a UserContextProvider, year returned undefined")
    }
    return context;
}