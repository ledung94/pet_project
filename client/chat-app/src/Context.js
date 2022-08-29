import React, {createContext, useState} from "react";
import {useCookies} from "react-cookie";



const Context = createContext([{}, () => {}]);


const ContextProvider = ({ children }) => {
    const [cookies , setCookies] = useCookies(['t-app']);
    const userToken = cookies["t-app"];
    let userLogged = false;
    if (userToken) userLogged = true ;
    const [context, setContext] = useState({
        cookies: cookies["t-app"],
        userLogged: userLogged,
        userName: ''
    })
    return (
        <Context.Provider value={[context, setContext]}>
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider}
