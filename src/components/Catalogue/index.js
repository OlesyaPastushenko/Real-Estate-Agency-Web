import React from "react";
import {ContextCatalogue, ContextBasket, ContextFilter, ContextResult} from "../../store/context";
import {Link, useLocation} from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import LowerHeader from "../Home/LowerHeader";
import { SelectBig } from "./SelectBig";
import './style.scss';
import { SmallSlider } from "./SmallSlider/index";
import { Contactos } from "../Home/Contactos"
const Catalogue = () => {
    const {filter, setFilter} = useContext(ContextFilter)
    const {catalogue, setCatalogue} = useContext(ContextCatalogue)
    const {result, setResult} = useContext(ContextResult)
useEffect(()=>{
    scroll(0,0)
    const token = 'wkv8h00hzocfk0mzxa4l24uxx6yk8caiwzbhca0l'
    const url = 'https://api.json-generator.com/templates/PQmMoFUNsVBb/data'
    const api = `${url}?access_token=${token}`
    fetch(api)
    .then(res=>res.json())
    .then(json=>setCatalogue(json));        
},[])
useEffect(() => {
    filter.poblacion == "Poblaciónes" ? filter.poblacion = '': filter.poblacion=filter.poblacion
    filter.rooms == "Dormitorios" ? filter.rooms = '': filter.rooms=filter.rooms
    filter.price == "Precio Max" ? filter.price = 100000000 : filter.price = filter.price
    filter.zone == "Zonas" || filter.zone == "Todas" ? filter.zone='': filter.zone = filter.zone 
    filter.type == "Tipo" ? filter.type = '' : filter.type = filter.type
    filter.topoffer == "no" ? filter.topoffer = '' : filter.topoffer = filter.topoffer 

    setResult(catalogue?.filter(el=>(
            el.topoffer.includes(filter.topoffer) &&
            (el.rooms+'').includes(''+filter.rooms) &&
            el.poblacion.includes(filter.poblacion) &&
            parseInt(el.price.replace(" ","")) <= parseInt(filter.price.replace(" ","")) &&
            el.zone.includes(filter.zone) &&
            el.type.includes(filter.type)
            )))



    },[]) 
console.log(filter)
console.log(result)


let {pathname} = useLocation()
    return (
        <div className="wrapCat">
            <LowerHeader></LowerHeader>
            <div className="wraph1cat">Buscar una oferta</div>
            <div className='wrapPCat'>Elige entre las ofertas más ventajosas</div>
            <div className="wrapSelectCat">
                <div className="line"></div>
                <div className="filterSettings">Filter Settings</div>
            <SelectBig/>
            </div>
             <p>
             Mostrando {result.length} inmuebles 
             </p>
             <div className="collection">
                 <div className="wrapCatCol">
                {
                result?.map(elem => 
                    <div className='sliderItem'>
                    <SmallSlider 
                    photos = {elem.photos}
                    />
                        <Link className='all' to={`${pathname}/${elem.id}`}>
                        <div className='itemName'>
                            {elem.name}
                        </div>
                        <div className='itemPrice'>
                            {elem.price + " EUR"}
                        </div>
                        <div className='itemArea'>
                        {elem.poblacion}
                        </div>
                    </Link> 
                    </div> 
                    )
                }

                </div>
             </div>
             <Contactos/>
         </div>
    )
}

export default Catalogue;