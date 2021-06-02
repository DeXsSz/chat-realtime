import React from 'react'
import Chat from './components/Chat'
import NavBar from './components/NavBar'
import {ChatContext} from './context/ChatProvider'
const App = () => {
    const {usuario} = React.useContext(ChatContext)
    return usuario !== null? (
        <div>
            <NavBar/>
            {
                usuario.estado? (
                    <Chat/>
                ):(
                    <div className="lead text-center mt-5">Debes Iniciar Sesion</div>
                )
            }
        </div>
    ): (
        <div>Cargando...</div>
    )
}

export default App;