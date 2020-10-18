
import React, { createContext, useReducer, useContext } from 'react'

// Setting Up A Data Layer
export const StateContext = createContext();

// Building Up A Provider
const StateProvider = ( {initialState, reducer, children} ) => {
    return(
        <StateContext.Provider value={ useReducer(reducer, initialState) }>
        
            {children}
        
        </StateContext.Provider>

    );
}
export default StateProvider;

export const useStateValue = () => useContext(StateContext); 