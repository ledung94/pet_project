import React, {createContext, useState} from "react";
import {useCookies} from "react-cookie";

const [cookies , setCookie] = useCookies(['t-app']);
const [login, setLogin] = useState(cookies.get("t-app"));
const loginFlgContext = createContext( [{login, setLogin}]);

export {loginFlgContext}
