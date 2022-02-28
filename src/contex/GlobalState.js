import React,{ createContext,useReducer } from "react";
import Reducer from "./Reducer";

export const initialState = {
    budget:2000,
    expenses:[  
    {id:1,label:"lunch",amount:400},
    {id:2,label:"bills",amount:300},
    {id:3,label:"shop",amount:200}
    ]
};

 // create context
export const GlobalContext = createContext(initialState);

// create provider
export const GlobalProvider = (props)=>{
     
    const [state, dispatch ] = useReducer(Reducer,initialState);
    
    return (<GlobalContext.Provider value={
        {
        budget:state.budget,
        expenses:state.expenses,
        dispatch
        }
    }>
      {props.children}
    </GlobalContext.Provider>
    );    
}