import {useEffect, useState} from "react"
import {autenticacao} from '../firebase/firebaseConexao'
import {onAuthStateChanged} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'


export function RotasPrivadas({children}){

    const [carregando, setCarregando] = useState(true)
    const [usuarioLogado, setUsuarioLogado] = useState(false)

    const navegacao = useNavigate()

    useEffect(() => {

            async function verificarUsuarioLogado(){

                onAuthStateChanged(autenticacao, (usuario) => {

                    if(usuario){
                        setUsuarioLogado(true)
                        setCarregando(false)
                    }else{
                        setUsuarioLogado(false)
                        setCarregando(false)
                    }
                })
            }

        verificarUsuarioLogado()
    }, [])


    if(carregando){
        return null
    }

    if(!usuarioLogado){
        navegacao('/')
    }

    return children
}

