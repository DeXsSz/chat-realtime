import React from 'react'
import {ChatContext} from '../context/ChatProvider'
const Agregar = () => {
    const {agregarMensajes, usuario} = React.useContext(ChatContext)
    const [mensaje, setMensaje]= React.useState('')
    const agregar = (e)=>{
        e.preventDefault()
        if(!mensaje.trim()){
            console.log('Sin Mensaje');
            return
        }
        agregarMensajes(usuario.uid, mensaje);
        setMensaje('')
    }
    return (
        <form className="fixed-bottom input-group p-3 bg-dark text-white" onSubmit={agregar}>
            <input type="text" className="form-control" placeholder="Ingresa tu mensaje" value={mensaje}onChange={e=> setMensaje(e.target.value)}/>
            <div className="input-group-append">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    )
}

export default Agregar
