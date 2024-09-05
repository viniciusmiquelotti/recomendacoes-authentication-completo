import estilos from './Filme.module.css'
import {Card} from './Card'
import {Star} from '@phosphor-icons/react'

export function Filme({filme}) {
    return(
        <Card>
            <figure className={estilos.conteiner}>
                <img src={`https://image.tmdb.org/t/p/w400/${filme.poster_path}`}/>
                <figcaption className={estilos.titulo}>{filme.title}</figcaption>
                <p className={estilos.descricao}>{filme.overview}</p>
                <p className={estilos.avaliacao}>
                    <Star 
                        className={estilos.icone}
                        size={18} 
                        color='#ffee32' 
                        weight='fill' 
                    />
                    {filme.vote_average}
                </p>
            </figure>
        </Card>
    );
}