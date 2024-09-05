import estilos from './Sobre.module.css'

import foto from '../assets/usuario.jpg'

export function Sobre(){

    return(
        <div className={estilos.conteiner}> 

            <img className={estilos.avatar} src={foto} />
            <p className={estilos.texto}>Usuário</p>
            <p className={estilos.texto}>3DS</p>

        </div>
    )
}
