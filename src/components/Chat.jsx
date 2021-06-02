import React from 'react';
import Agregar from './Agregar';
import { ChatContext } from '../context/ChatProvider';

const Chat = () => {
    const { mensajes, usuario } = React.useContext(ChatContext);
    const refZonaChat = React.useRef(null);
    React.useEffect(()=>{
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    },[mensajes])
    return (
        <div className="py-3 px-3"
        style={
            {
                height: '75vh',
                overflowY: 'scroll',

            }
        }
        ref={refZonaChat}
        >
            {mensajes.map((item, index) => {
                if (usuario.uid === item.uid) {
                    return (
                        <div className="d-flex justify-content-end my-2" key={index}>
                            <span className="badge bg-primary">{item.texto}</span>
                        </div>
                    );
                } else {
                    return (
                        <div className="d-flex justify-content-start my-2" key={index}>
                            <span className="badge bg-secondary">{item.texto}</span>
                        </div>
                    );
                }
            })}
            <Agregar />
        </div>
    );
};

export default Chat;
