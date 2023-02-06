import React, {useEffect, useContext, useRef, useState} from "react";
import './style.scss'
import '../../../fonts/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVIGxA (1).woff2'
import logo from './Logo.jpg'
import {Link} from 'react-router-dom'
import {ContextuserBasket} from "../../../store/context";

const LowerHeader = () => {
    const onContactUs = () => {
        setRight(-150)
        scroll(0,document.body.clientHeight)
    }
    const [right, setRight] = useState(-160);
    const drawerRef = useRef(null);
    const principalRef = useRef(null)
    const { userBasket, setUserBasket } = useContext(ContextuserBasket)
    useEffect(() => {
        /* Close the drawer when the user clicks outside of it */
        const closeDrawer = (event) => {
          if (principalRef.current && principalRef.current.contains(event.target)) {
            setRight(-160);
          }
          if (drawerRef.current && drawerRef.current.contains(event.target)) {
            return;
          }
          setRight(-160);
        };
        document.addEventListener("mousedown", closeDrawer);
        return () => document.removeEventListener("mousedown", closeDrawer);
      }, []);
    return (
        <div className="recWhite">
            <div className="navbar">
                <div className="logo_links">
                    <Link to='/' className = "a">
                    <img src={logo} className="logo"/>
                    </Link>
                    <ul className="lowerHeader" ref={drawerRef} style={{right: right}}>
                        <li>
                            <Link ref={principalRef} to='/' className = "a navlinks">Principal</Link>
                        </li>

                        <li>
                            <Link to='/catalogue' className = "a navlinks">Búsqueda de Inmuebles</Link>
                        </li>
                        <li  className="navContactUs" onClick={onContactUs}>
                        Contact us 
                        </li>
            
                        {/* <li>
                            <Link to = '/basket' className = "a navlinks favoritas">Mis favoritos
                            <div className="eticket">
                            {userBasket.length}
                            </div>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            <button onClick={onContactUs} className="button_header">
             Contact us
            </button>
            <button className="hamburger" onClick={() => setRight(-5)}><div className="lines"></div></button>
            </div>
        </div>
    )
}

export default LowerHeader;