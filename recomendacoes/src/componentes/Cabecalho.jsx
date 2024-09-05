import estilos from './Cabecalho.module.css'
import { FilmReel } from '@phosphor-icons/react'

export function Cabecalho(){
    return(
        <header className={ estilos.conteiner }>
            <FilmReel 
                size={34}
                color='#717c89'
                weight='duotone'
            />
            <p>Recomendações</p>
        </header>
    )
}
