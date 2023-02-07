import React, { useEffect } from "react";
import Banner from "components/Home/Banner";
import LowerHeader from "../Navigation/index";
import './style.scss'
import { TopOffer } from "./TopOffers";
import {About} from "./About";
import { OurTeam } from "./OurTeam";
import { Referencias } from "./Referencias";
import { Contactos } from "./Contactos";
import { TopOfferMobile } from "./TopOfferMobile";
 
const Home = () => {
    useEffect(()=>{
     scroll(0,0)
    },[])
    const windowScreenWidth = window.screen.width
    console.log(windowScreenWidth)
    return (
         <div>
              <LowerHeader/>
              <Banner/>
              {windowScreenWidth > 650 ? <TopOffer/> : <TopOfferMobile/>}
              <TopOfferMobile></TopOfferMobile>
              <About/>
              <OurTeam/>
              <Referencias/>
              <Contactos/>
         </div>
         
    )
}

export default Home;