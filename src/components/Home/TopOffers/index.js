
import './style.scss'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ContextFilter, ContextCatalogue, ContextResult } from '../../../store/context'
import arrow from './Antu_arrow-right.svg'
const TopOffer = () => {
    const {catalogue, setCatalogue} = useContext(ContextCatalogue)
    const {filter, setFilter} = useContext(ContextFilter)
    const { result, setResult } = useContext(ContextResult)
    const [top, setTop] = useState([])
    const [slide, setSlide] = useState('0')
    const [pro, setPro] = useState(0)
    useEffect(()=>{
        setFilter({
            'poblacion':'Poblaciónes',
            'rooms':'',
            'price': '100000000',
            'type':'',
            'zone':'',
            'topoffer': "no",
        })
        setResult([])
        const token = 'wkv8h00hzocfk0mzxa4l24uxx6yk8caiwzbhca0l'
        const url = 'https://api.json-generator.com/templates/PQmMoFUNsVBb/data'
        const api = `${url}?access_token=${token}`
        catalogue.length < 1 ? fetch(api)
        .then(res=>res.json())
        .then(json=>setCatalogue(json)) : ""        
    },[])
    useEffect (()=>{
        catalogue?.filter((el)=>{
            el.topoffer == "yes" ? setTop(top => [...top,el]) : ''
        })
    },[catalogue])
    
    useEffect(()=>{
        setPro(943/top.length*3)
    }, [top])
    const filterTop = () => {
       setFilter(filter, filter.topoffer = "yes")
    } 
    const onMove = () => {   
        slide >= (top.length*(-382)+1273) ? setSlide(slide - 382)  : setSlide(slide)
        pro < 943 ? setPro(pro + (943/top.length)) : setPro(pro)
    }

    const backMove = () => {   
        slide < 0 ? setSlide(slide + 382)  : setSlide(slide)
        pro == 943/top.length*3 ? setPro(pro) : setPro(pro - (943/top.length))
    }
    return (
    <div className = 'wrapTopOffer'>  
                <div className='wrapH1'>
                        <h1>Mejores ofertas</h1> 
                </div>

        <div className='wrapPAndButton'>
                <p className='pTopOffers'>Cumple tus sueños, disfruta al máximo de todos los beneficios del centro de la ciudad y viviendas de lujo</p>
                <Link to='/catalogue' className = "a">
                <div className='TopOffersButton' onClick = {filterTop}>Mostrar Todo</div>
                </Link>
        </div>

    <div className='buttons_n_progress'>
            <div className='progressLine'>
                <div className='progress' style={{width: pro}}></div>
            </div>

            <button className='buttonSlider' onClick={backMove}>
                <img src={arrow} className='pev'/>
            </button>

            <button className='buttonSlider' onClick={onMove}>
                <img src={arrow} className='next'/>
            </button>
    </div>
    <div className='sliderContainer'>
    <div className='slider'>
                <div className='wrapSlider' style={{left: slide}}>
                {top.map((el)=>(
                    <Link className='all' to={`catalogue/${el.id}`}>
                    <div className='sliderItem'>
                        <img src={el.photos[0]}></img>
                        <div className='itemName'>
                            {el.name}
                        </div>
                        <div className='itemPrice'>
                            {el.price + " EUR"}
                        </div>
                        <div className='itemArea'>
                        {el.poblacion}
                        </div>
                    </div> 
                    </Link> 
                ))}
                </div>
    </div>
    </div>
    </div>
    )

}

export { TopOffer };