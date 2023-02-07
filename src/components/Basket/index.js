import React, { useEffect } from "react";
import LowerHeader from "../Navigation";
import { useContext } from "react";
import {Link , useLocation} from 'react-router-dom'
import {ContextCatalogue, ContextuserBasket} from "../../store/context";
const Basket = () => {
    const {userBasket, setUserBasket} = useContext(ContextuserBasket)
    
    return (
        <div className="allWrap">
             <LowerHeader></LowerHeader>
                <h1 className="h3">Favoritos</h1>
            <ul>
                {userBasket.map(elem=>{
                    return (
                        <li>
                    <Link className='all' to={`catalogue/${elem.id}`}>
                        <div className="card">
                        <img src={elem[0]?.img} className='img'/>
                        <div className='infoDetail'>
                        <div className="all">
                        {elem[0]?.type +" "+ elem[0]?.action}
                        </div>
                        <div>
                        {elem[0]?.poblacion}
                        </div>
                        <div>
                        {elem[0]?.zone}
                        </div>
                        <div>
                        {elem[0]?.price} EUR
                        </div>
                            <div className = "miniInfo">
                                <div>Ref:{elem[0]?.id}
                                </div>
                                <div>
                                {elem[0]?.rooms} Hab.
                                </div>
                                <div>
                                {elem[0]?.bath} Banos.
                                </div>
                                <div>
                                {elem[0]?.square} m2
                                </div>
                                <div>
                                {elem[0]?.pool ? "picina" :""}
                                </div>
                            </div>
                            <div className='telClass'>{elem[0]?.tel}</div>
                        </div>                                 
                        </div>  
                    </Link>
                </li>
                    )
                })}
            </ul>
         </div>
    )
}

export default Basket;