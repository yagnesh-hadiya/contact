import React, { useReducer, createContext } from "react";
import authInitialState from "./initialsStates/authInitialState";
import contactInitialState from "./initialsStates/contactInitialState";
import auth from "./reducers/auth";
import Contacts from "./reducers/contacts";

export const globalContext = createContext({});

const globalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [contactsState, contactsDispatch] = useReducer(Contacts, contactInitialState);

    return (
        <globalContext.Provider value={{ authState, authDispatch, contactsState, contactsDispatch }}>
            {children}
        </globalContext.Provider>
    )
}
export default globalProvider;