import React, { useReducer, createContext } from "react";

const globalContext = createContext({});

const globalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer,{});
    return (
        <globalContext.Provider value={[]}>
            {children}
        </globalContext.Provider>
    )
}