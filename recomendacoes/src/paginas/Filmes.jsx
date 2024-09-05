import estilos from './Filmes.module.css'
import {useState, useEffect} from 'react'
import {Filme} from '../componentes/Filme'

export function Filmes(){

    const apiKey = "1383b7fe1786f8e95fd643dab0de58f7"
   
    const [filmes, setFilmes] = useState([]);

    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=pt-BR`)
        .then(response => response.json()) 
        .then(dados => setFilmes( dados.results ))
        
    },[]);

    return(
        <main className={estilos.conteiner}>
            {filmes.map( filme => <Filme filme = {filme} /> )}
        </main>
    );
}