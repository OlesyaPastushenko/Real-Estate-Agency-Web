import { useEffect, useState } from 'react'
import './style.scss'


const Referencias = () => {
    const [left, setLeft] = useState(0)
    const [num, setNum] = useState(1)
    const [color1, setColor1] = useState('#1c3988')
    const [color2, setColor2] = useState('#dadaee')
    const [color3, setColor3] = useState('#dadaee')
    const [color4, setColor4] = useState('#dadaee')
    useEffect(()=>{
        setColor1('#dadaee')
        setColor2('#dadaee')
        setColor3('#dadaee')
        setColor4('#dadaee')
        num == 1 ? setColor1('#1c3988') :
        num == 2 ? setColor2('#1c3988') : 
        num == 3 ? setColor3('#1c3988') :
        num == 4 ? setColor4('#1c3988') : "" 
        
    },[num])
    
    const onSlider = (num) => {
        setNum(num)
        num == 1 ? setLeft(0) :
        num == 2 ? setLeft(-231) : 
        num == 3 ? setLeft(-823) :
        num == 4 ? setLeft(-1160) : ""
    } 

    const firstDot = () => {
        setLeft(0)
        setColor1('#1c3988')
        setColor2('#dadaee')
        setColor3('#dadaee')
        setColor4('#dadaee')
    }
    const scndDot = () => {
        setLeft(-231)
        setColor1('#dadaee')
        setColor2('#1c3988')
        setColor3('#dadaee')
        setColor4('#dadaee')
    }
    const thirdDot = () => {
        setLeft(-823)
        setColor1('#dadaee')
        setColor3('#1c3988')
        setColor2('#dadaee')
        setColor4('#dadaee')
    }
    const fourthDot = () => {
        setLeft(-1160)
        setColor1('#dadaee')
        setColor4('#1c3988')
        setColor3('#dadaee')
        setColor2('#dadaee')
    }
    return (
    <div className='wrapReferencias'> 
        <div className='textReferencias'>
            <h1 className='refH1'>Referencias</h1>
            <p className='refP'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            </p>
        </div>
    <div className='refSlider'>
        <div  onClick = {e => onSlider(e.target.closest(".refCard").id)} className='wrapForCards'  style={{
            left: left
        }}>
            <div id = "1"  className='refCard'>
                <div className='comas'>,,</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <div className='refName'>Amerson Aminov</div>
                <div className='sub'>3 Hab Apartamentos en Madrid</div>
            </div>
            <div id = '2'  className='refCard'>
            <div className='comas'>,,</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <div className='refName'>Amerson Aminov</div>
                <div className='sub'>3 Hab Apartamentos en Madrid</div>
            </div>
            <div id = '3' className='refCard'>
            <div className='comas'>,,</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <div className='refName'>Amerson Aminov</div>
                <div className='sub'>3 Hab Apartamentos en Madrid</div>
            </div>
            <div id = '4' className='refCard'>
            <div className='comas'>,,</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <div className='refName'>Amerson Aminov</div>
                <div className='sub'>3 Hab Apartamentos en Madrid</div>
            </div>
        </div>
    </div>
    <div className='wrapForDots'>
        <div  className='sliderDot' id='1' style={{
            backgroundColor: color1
        }} onClick = {firstDot}></div>
        <div className='sliderDot' id='2' style={{
            backgroundColor: color2
        }} onClick = {scndDot}></div>
        <div className='sliderDot' id = '3' style={{
            backgroundColor: color3
        }}  onClick = {thirdDot}></div>
        <div className='sliderDot' id='4' style={{
            backgroundColor: color4
        }} onClick = {fourthDot}></div>
    </div>
    </div> 
    )

}
export {Referencias}