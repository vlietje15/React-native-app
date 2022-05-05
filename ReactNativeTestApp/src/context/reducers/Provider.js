import React, {createContext, useReducer} from 'react';
import authInitalsState from '../initialsStates/authInitalsState';
import contactsInitalsState from '../initialsStates/contactsInitalsState';
import auth from './auth';
import contacts from './contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {

    const [authState, authDispatch]= useReducer(auth, authInitalsState)
    const [contactsState, contactsDispatch]= useReducer(contacts, contactsInitalsState,);

    return <GlobalContext.Provider 
        value={{authState, contactsState, authDispatch, contactsDispatch}}>
            {children}
        </GlobalContext.Provider>

};

export default GlobalProvider;