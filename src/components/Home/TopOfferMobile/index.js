import './style.scss'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ContextFilter, ContextCatalogue, ContextResult } from '../../../store/context'
import { useRef } from 'react'
const TopOfferMobile = () => {
    const {catalogue, setCatalogue} = useContext(ContextCatalogue)
    const {filter, setFilter} = useContext(ContextFilter)
    const { result, setResult } = useContext(ContextResult)
    const [top, setTop] = useState([])
    const [slide, setSlide] = useState('0')
    const [pro, setPro] = useState(0)
    const Carousel = useRef()
    const screenWidth = window.screen.width*0.9
 
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
        setPro(screenWidth/top.length*1)
    }, [top])
    const filterTop = () => {
       setFilter(filter, filter.topoffer = "yes")
    } 

    const onScroll = () => {
        setPro(screenWidth/top.length*(Math.ceil(Carousel.current.scrollLeft/Carousel.current.offsetWidth + 1)))
    }


    return (
    <div className = 'wrapTopOfferMobile'>  
                <div className='wrapH1'>
                        <h1>Mejores ofertas</h1> 
                </div>

        <div className='wrapPAndButtonMobile'>
                <p className='pTopOffersMobile'>Cumple tus sueños, disfruta al máximo de todos los beneficios del centro de la ciudad y viviendas de lujo</p>
                <Link to='/catalogue' className = "a">
                <div className='TopOffersButtonMobile' onClick = {filterTop}>Mostrar Todo</div>
                </Link>
        </div>

    <div className='buttons_n_progressMobile'>
            <div className='progressLine' style={{width: screenWidth}}>
                <div className='progress' style={{width: pro}}></div>
            </div>
    </div>
    <div className='sliderContainerMobile'>
    <div className='sliderMobile' ref={Carousel}  onScroll = {onScroll}    style={{width: screenWidth/0.9, left: slide} }>
                {top.map((el)=>(
                    <div className='sliderItemMobileWrap'>
                    <Link className='all' to={`catalogue/${el.id}`}>
                    <div className='sliderItemMobile'>
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
                    </div>
                ))}
    </div>
    </div>
    </div>
    )

}

export { TopOfferMobile };