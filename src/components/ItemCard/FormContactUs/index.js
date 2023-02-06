import "./style.scss"
import { useState } from "react"
import {useParams} from 'react-router-dom'
const FormContactUs = () => {
    let {itemId} = useParams()
    const [exito, setExito] = useState("none")
    const [ups, setUps] = useState("none")
    const [user, setUser] = useState({
        name: '',
        tel: '',
        email: '',
        message: '',
        id: itemId,
    })
    const clear = () => {
        setExito("none")
        setUps("none")
    }
    const submit = e => {
        e.preventDefault()
        let text = JSON.stringify(user).replace('{','').replace('}','').replaceAll('"','')
        var TOKEN = "5697100567:AAHelFg8Zya_v6v2lZ4z2w5xxsqI2Tf1Js0";
        var chatID = "5284544422";
        var api = "https://api.telegram.org/bot" + TOKEN + "/sendMessage?chat_id="+chatID+"&text=";
        var message = text;
        fetch(api + "New%20Message:%20" + message)
        .then(res=>{
            res.status == "200" ? setExito("block") : setUps("block")
        });
        setUser({
            name: '',
            tel: '',
            email: '',
            message: ''       
        })
      }
    return (
        <form  onClick = {clear} onSubmit = {submit} className="contactUs">
        <label className="contTxt">Contacta con nosotros</label>
        
        <label className="label">Nombre*</label>

        <input 
         required
         className="contInput" 
         type='text'
         placeholder="John"
         value = {user.name}
         onChange={(e)=> setUser({...user, name: e.target.value})}
         />

        <label className="label">Telefono*</label>

        <input 
         required
         type='tel' 
         pattern="[0-9]{10}"
         className="contInput" 
         placeholder="1234567890"
         value = {user.tel}
         onChange={(e)=> setUser({...user, tel: e.target.value})}
         />

        <label className="label">E-mail</label>

        <input 
         type = 'email' 
         className="contInput" 
         placeholder="john@gmail.com"
         value = {user.email}
         onChange={(e)=> setUser({...user, email: e.target.value})}
         />

        <label className="label">Tu mensaje</label>

        <textarea  
         className="contInputText"  
         placeholder="Me interesa ver esta propiedad."
         value = {user.message}
         onChange={(e)=> setUser({...user, message: e.target.value} )}
         />

        <div className="checkBox">
            <input type='checkbox' defaultChecked></input>
            <div className="checkTxt">Acepto el procesamiento de 
            <a onClick = {e=>(e.preventDefault())} href=""> datos personales </a>
            </div>
        </div>

        <input
        type = 'submit'
        name="enviar"
        className="checkBut"
        />
        <div className="exito" style={{display: exito}}>Tu mensaje ha sido enviado con exito!</div>
        <div className="ups" style={{display: ups}}>Ups! Tu mensaje no ha sido enviado. </div>
       </form>
    )
}

export {FormContactUs};