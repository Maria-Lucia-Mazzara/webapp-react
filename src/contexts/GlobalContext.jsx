
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [loading, setLoading] = useState(true);

    return (
        <GlobalContext.Provider
            value={{
                loading,
                setLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobal() {
    return useContext(GlobalContext);
}

export { GlobalProvider, useGlobal }