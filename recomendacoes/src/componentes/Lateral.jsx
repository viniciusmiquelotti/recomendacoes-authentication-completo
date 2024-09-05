import estilos from './Lateral.module.css'
import {useEffect, useState} from 'react'
import {Gear, FilmSlate, User, UsersFour, SignOut} from '@phosphor-icons/react'
import {Link} from 'react-router-dom'
import {autenticacao} from '../firebase/firebaseConexao'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

import foto from '../assets/usuario.jpg'

export function Lateral(){

    const [usuarioLogado, setUsuarioLogado] = useState()

    const navegacao = useNavigate()

    useEffect( () => {

        async function verificarUsuarioLogado(){

            onAuthStateChanged(autenticacao, (usuarioLogado) => {

                if(usuarioLogado){
                    setUsuarioLogado(usuarioLogado.email)
                }else{
                    setUsuarioLogado('')
                }
            })
        }
            
        verificarUsuarioLogado()

    }, [] )


    async function deslogar(){
        await signOut(autenticacao)
        setUsuarioLogado('')
        navegacao('/')
    }

    return(
        <aside className={ estilos.conteiner }>
            <header>
                <img className={ estilos.imagemCabecalho } src='https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

                <div className={ estilos.perfil }>
                    <img className={ estilos.avatar } src={foto} />
                    <strong>{usuarioLogado}</strong>
                </div>
            </header>
            <section className={ estilos.opcoes }>

                <Link 
                    className={ estilos.botao }
                    to={'/inicial'}
                >
                    <FilmSlate size={20} />
                    <strong>Filmes</strong>
                </Link>

                <Link 
                    className={ estilos.botao }
                    to={'perfil'}
                >
                    <Gear size={20} />
                    <strong>Perfil</strong>
                </Link>

                <Link 
                    className={ estilos.botao }
                    to={'sobre'}
                >
                    <User size={20} />
                    <strong>Sobre</strong>
                </Link>

                <Link 
                    className={ estilos.botao }
                    to={'usuarios'}
                >
                    <UsersFour size={20} />
                    <strong>Usuários</strong>
                </Link>

                <Link 
                    className={ estilos.botao }
                    onClick={deslogar}
                >
                    <SignOut size={20} />
                    <strong>Deslogar</strong>
                </Link>

            </section>
        </aside>
    )
}
