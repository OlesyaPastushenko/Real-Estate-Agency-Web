import React from "react";
import { useEffect, useState, useContext } from "react";
import {useParams} from 'react-router-dom'
import LowerHeader from "../Home/LowerHeader/index";
import './style.scss'
import { Map } from "./GoogleMap/index";
import {Contactos} from "../Home/Contactos/index"
import basket from '../Home/LowerHeader/c3b2dff7986e701847f213423683f00a.png'
import {ContextCatalogue, ContextuserBasket} from "../../store/context";
import { FormContactUs } from "./FormContactUs";
const ItemCard = () => {
    const {catalogue, setCatalogue} = useContext(ContextCatalogue)
    let {itemId} = useParams()
    const [item, setItem] = useState({})
    const { userBasket, setUserBasket } = useContext(ContextuserBasket)
    const [count, setCount] = useState(0) 
    const [tCount, setTCount] = useState(0)
    const [num, setNum] = useState(0)
    useEffect(()=>{
        scroll(0,0)
        const token = 'wkv8h00hzocfk0mzxa4l24uxx6yk8caiwzbhca0l'
        const url = 'https://api.json-generator.com/templates/PQmMoFUNsVBb/data'
        const api = `${url}?access_token=${token}`
        fetch(api)
        .then(res=>res.json())
        .then(json=>setCatalogue(json));        
        },[])

    useEffect(()=>{     
        setItem(catalogue?.filter(el=>el.id == itemId)[0])
    },[itemId])
    const onCart = () => {
        setUserBasket([...userBasket, item])
    }

    const onNextBig = () => {
    tCount > ((item?.photos?.length-1)*(-210)+421) ? setTCount(tCount - 210) : ""
    }
    const onPrevBig = () => {
    tCount >=-12 ? setTCount(0) : setTCount(tCount +  210)   
            }
    useEffect(()=>{
        setCount((num)*(-735))
        num == 0 || num == 1 ? setTCount(0) : setTCount((num)*(-210)+199)
        num == (item?.photos?.length-1) ? setTCount((item?.photos?.length*(-210)+ 619)) : ""
    },[num])

    return (
        <div>
            <LowerHeader></LowerHeader>
         <div className="ItemWrap">
             <h1 className="itemH1">
                {item?.type + " " +item?.action + " en " + item?.poblacion}
             </h1>
            <div className="wrapRaws">
            <div className="leftCol">
                        <div className="innerSliderBig">
                                <div className="sliderLineBig" style={{left: count}}>
                                {item?.photos?.map(el =>(
                                        <img src = {el}></img>
                                        ))}
                                </div>            
                        </div>
                        <div className="thambNailWrap">
                        
                        <button className="but_prev_slider_big" onClick = {onPrevBig}>
                        <div className="arrow"></div>
                        </button>
                        
                        <div className="thambNail">
                            <div className="thambnailLine" style={{left: tCount}}>
                                {item?.photos?.map((el,i) =>(
                                        <img src = {el} id = {i} onClick={(e)=>{setNum(e.target.id)}}></img>
                                        ))}
                            </div>
                        </div>
                        
                        <button className="but_next_slider_big" onClick = {onNextBig}>
                            <div className="arrow"></div>
                        </button>
                        </div>
                        <div className="wrapIcons">
                            <div className="typeIcon">
                                <div className="typePic"></div>
                                <p className="typeTxt">{item?.type}</p>
                            </div>
                            <div className="demIcon">
                                <div className="demPic"></div>
                                <p className="demTxt">{item?.square} m2</p>
                            </div>
                            <div className="roomIcon">
                                <div className="roomPic"></div>
                                <p className="roomTxt">{item?.rooms} Hab</p>
                            </div>
                            <div className="locIcon">
                                <div className="locPic"></div>
                                <div className="locTxt">
                                <p>{item?.poblacion}</p>
                                <p>{item?.zone}</p>
                                </div>
                            </div>
                        </div> 

                        <div className="mortgage">
                            <div className="mortTxt">
                            <p> Hipoteca desde:</p>
                            <p>{item?.hip} EUR/mes</p>
                            </div>
                            <div className = 'button_mort'>Obtener Hipoteca</div>
                        </div>
                        <div className="description"> 
                            <div>{item?.desc}</div>
                            <div>{item?.desc1}</div>
                            <div>{item?.desc2}</div>
                        </div>
                        <div className="basic">
                            <div className="basicH">Caracteristicas basicas:</div>
                            <div className="pBasic1">&#183; Numero de las habitaciones:{item?.rooms}</div>
                            <div className="pBasic">&#183; Zona de apartamentos: 64 m2</div>
                            <div className="pBasic">&#183; Zona de terraza: 18m2 </div>
                            <div className="pBasic">&#183; Segundo piso de cinco</div>
                        </div>
                        <div className="basic">
                            <div className="basicH">Solución de diseño:</div>
                            <div className="pBasic1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.
                            </div>
                        </div>
                        <div className="basic">
                            <div className="basicH">Ejecución y amueblamiento del apartamento:</div>
                            <div className="pBasic1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.
                            </div>
                        </div>
                        <div className="basic">
                            <div className="basicH">Ubicación:</div>
                            <div className="pBasic1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.
                            </div>
                        </div>
                        <div className="basic">
                            <div className="basicH">Opinión del grupo Fedors:</div>
                            <div className="pBasic1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.
                            </div>
                        </div> 
                        <Map
                        center = {item?.center}
                        />           
                    </div>
                    
            <div className="rightCol">
               <FormContactUs/>
               <div className="manager">
                <div className="manPhoto"></div>
                <div className="manH3">Hailet Donin</div>
                <p className="manTxt">+38 698 567 467</p>
                <p className="manTxt">hailet.donin@aventis.com</p>
                <p className="manView">
                    <a onClick = {e=>(e.preventDefault())} href="" className="manView">Ver Perfil</a>
                </p>
               </div>
               <div className="gInfo">
                    <div className="gInfoTxt">Breves características</div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Cuidad: </span>
                        <span className="gInfoA"> {item?.poblacion}</span>
                    </div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Calle: </span>
                        <span className="gInfoA"> {item?.street}</span>
                    </div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Garajes: </span>
                        <span className="gInfoA"> {item?.rooms}</span>
                    </div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Habitaciones: </span>
                        <span className="gInfoA"> {item?.rooms}</span>
                    </div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Área utilizable: </span>
                        <span className="gInfoA">{item?.sq_usefull}</span>
                    </div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Área total: </span>
                        <span className="gInfoA">{item?.square}</span>
                    </div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Terraza: </span>
                        <span className="gInfoA"> Si</span>
                    </div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Baños: </span>
                        <span className="gInfoA">{item?.bath}</span>
                    </div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Piscina: </span>
                        <span className="gInfoA"> {item?.pool}</span>
                    </div>
                    <div className="gInfoBl">
                        <span className="gInfoQ"> Vista al mar: </span>
                        <span className="gInfoA"> {item?.sea}</span>
                    </div>

               </div>
            </div>
            </div>
            <Contactos/>
            </div>
         </div>
    )
}

export default ItemCard;