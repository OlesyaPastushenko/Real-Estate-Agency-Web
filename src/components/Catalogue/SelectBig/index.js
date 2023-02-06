import { areas, types, prices, rooms, bath } from '../../../store/data'
import './style.scss'
import {Link , useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ContextFilter, ContextCatalogue, ContextResult } from '../../../store/context'
const SelectBig = () => {

    const { result, setResult } = useContext(ContextResult)
    const {catalogue, setCatalogue} = useContext(ContextCatalogue)
    const {filter, setFilter} = useContext(ContextFilter)
    const [area, setArea] = useState(filter.poblacion ? filter.poblacion : "Poblaciónes")
    const [room, setRoom] = useState(filter.rooms)
    const [type, setType] = useState(filter.type)
    const [price, setPrice] = useState(filter.price)
    const [zona, setZona] = useState(filter.zone)
    console.log(filter)
    console.log(result)
    useEffect(()=> {
        onSearch
        scroll(0,0)
    },[])
    useEffect(()=>{
      
        area == "Poblaciónes" ? setFilter(filter, filter.poblacion = '') : setFilter(filter, filter.poblacion = area)
        room == "Dormitorios" ? setFilter(filter, filter.rooms = '') : setFilter(filter, filter.rooms = room)
        price == "Precio Max" ? setFilter(filter, filter.price = 100000000) : setFilter(filter, filter.price = price)
        zona == "Zonas" || zona == "Todas" ? setFilter(filter, filter.zone = '') : setFilter(filter, filter.zone = zona)
        type == "Tipo" ? setFilter(filter, filter.type = '') : setFilter(filter, filter.type = type)
    },[area,room,type,price,zona,bath])


    const onSearch = () => {
        filter.topoffer = ""
        setResult(catalogue?.filter(el=>(
                el.topoffer.includes(filter.topoffer) &&
                (el.rooms+'').includes(''+filter.rooms) &&
                el.poblacion.includes(filter.poblacion) &&
                parseInt(el.price) <= parseInt(filter.price) &&
                el.zone.includes(filter.zone) &&
                el.type.includes(filter.type)
                )))

            }

    
    let variants = Object.keys(areas)
    return (
    <div>   
    <div className='wrapSelectBig'>
    <select defaultValue = {area} onChange={(e)=>{setArea(e.target.value)}}>
        {variants.map(el=>(
           <option>{el}</option>
        ))}
    </select>
    <select defaultValue = {zona} onChange={(e)=>{setZona(e.target.value)}}>
        {areas[area].map((el)=>(
            <option>{el}</option>
        ))}
    </select>
    <select defaultValue = {type} onChange={(e)=>{setType(e.target.value)}}>
        {types.map(el=>(
           <option>{el}</option>
        ))}
    </select>
    </div>
    <div className='wrapSelectBig'>
        <select defaultValue = {price} className='' onChange={(e)=>{setPrice(e.target.value)}}>
            {Object.keys(prices).map(el=>(
            <option>{el}</option>
            ))}
        </select>
        <select defaultValue = {room} className='' onChange={(e)=>{setRoom(e.target.value)}}>
            {Object.values(rooms).map(el=>(
            <option>{el}</option>
            ))}
        </select>
        <button onClick = {onSearch} className='button_selectBig'>Buscar</button>
    </div>
    </div>
    )

}

export { SelectBig };