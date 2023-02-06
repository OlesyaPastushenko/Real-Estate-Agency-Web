import React, { useState, useEffect } from "react";
import './style.scss';
const SmallSlider = ({photos}) => {
  const [count, setCount] = useState(0) 
  const [opacity, setOpacity] = useState(0)
  const onNext = () => {
    count > (photos.length-1)*(-350) ? setCount(count - 350) : setCount(0)
  }
  const onPrev = () => {
    count >=0 ? setCount(0) : setCount(count + 350)

  }
useEffect(()=> {
  count == 0 ? setOpacity(0) : setOpacity(1)
}, [count])

  return (
  <div className="innerSlider">
  <div className="but_prev_slider" onClick = {onPrev} style={{opacity: opacity}}>
  <div className="arrow"></div>
  </div>
  <div className="but_next_slider" onClick = {onNext}>
     <div className="arrow"></div>
  </div>
  <div className="sliderLine" style={{left: count}}>
  {photos.map(el =>(
          <img src = {el}></img>
          ))}
  </div>
</div>
  )
}

export {SmallSlider};