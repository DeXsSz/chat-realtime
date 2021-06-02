import React from 'react'
import {ChatContext} from '../context/ChatProvider'
const NavBar = () => {
    const { usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
            <span className="navbar-brand">ChatRealTime</span>
            <div>
                {
                    usuario.estado?(
                        <button className="btn btn-outline-danger my-2" onClick={cerrarSesion}>Cerrar  Sesion</button>
                    ):(
                        <button className="btn btn-outline-success my-2" onClick={ingresoUsuario}>Acceder</button>
                    )
                }
            </div>
            </div>
        </div>
    )
}

export default NavBar
