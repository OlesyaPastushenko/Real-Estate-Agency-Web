import React, { useState } from "react";
import App from "./app";
import { render } from 'react-dom';
import { ContextuserBasket, ContextCatalogue } from "store/context";
import { BrowserRouter } from 'react-router-dom';
import { ContextFilter } from "./store/context";
import { ContextResult } from "./store/context";

function Init() {
    const [catalogue, setCatalogue] = useState([])
    const [userBasket, setUserBasket] = useState([])
    const [filter, setFilter] = useState({
        'poblacion':'Poblaciónes',
        'rooms':'',
        'price': '100000000',
        'type':'',
        'zone':'',
        'topoffer': "no",
    })
    const [result, setResult] = useState([])
                
    return (
        <React.StrictMode>
            <BrowserRouter>
              <ContextResult.Provider value = {{result, setResult}}>
                <ContextCatalogue.Provider value={{catalogue, setCatalogue}}>
                    <ContextuserBasket.Provider value={{userBasket, setUserBasket}}>
                        <ContextFilter.Provider value={{filter, setFilter}}>
                        <App/>
                        </ContextFilter.Provider>
                    </ContextuserBasket.Provider>
                </ContextCatalogue.Provider>
              </ContextResult.Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}
render (<Init />, document.getElementById('root'));

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
