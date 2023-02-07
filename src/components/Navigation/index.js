import React, { useRef, useState} from "react";
import './style.scss'
import logo from './Logo.jpg'
import {Link} from 'react-router-dom'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState("-200px")
    const navbar = useRef()
    const burger = useRef()
    let event
    const openMenu = () => {
        event = document.body.addEventListener("click", (e) => {
            e.target !== navbar.current && e.target !== burger.current && closeMenu()
        })
        setShowMenu("0px")
    }
    const closeMenu = () => {
        document.body.removeEventListener('click', event)
        setShowMenu('-200px')
    }
    
    return (
        <section className="sectionWhiteRow">
            <div className="containerNav">
                    <Link to='/' className = "a">
                    <img src={logo} className="logo"/>
                    </Link>
                    <ul className="navbar" ref={navbar} style={{right: `${showMenu}`}}>
                        <li>
                            <Link to='/' className = "a navlinks">Principal</Link>
                        </li>

                        <li>
                            <Link to='/catalogue' className = "a navlinks">Búsqueda de Inmuebles</Link>
                        </li>
                        <a href="#contacts">
                        <li  className="navContactUs" >
                        Contact us 
                        </li>
                        </a>
                    </ul>
            <a href="#contacts">
            <button className="button_header">
             Contact us
            </button>
            </a>
            <div onClick = {openMenu} ref={burger} className="hamburger"/>
            </div>
        </section>
    )
}

export default Navigation;