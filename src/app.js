import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Basket from "./components/Basket";
import Catalogue from "./components/Catalogue";
import ErrorPage from "./components/Error/ErrorPage";
import ItemCard from "./components/ItemCard";
const App = () => {
    return (
         <div>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/basket' element={<Basket/>}/>
                  <Route exact path='/catalogue' element={<Catalogue/>}/>
                  <Route exact path='/catalogue/:itemId' element={<ItemCard/>}/>
                  <Route path='*' element={<ErrorPage/>}/>
              </Routes>
         </div>
    )
}

export default App;
