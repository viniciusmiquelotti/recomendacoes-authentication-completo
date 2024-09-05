import estilos from './Login.module.css'
import {useState} from 'react'
import {autenticacao} from '../firebase/firebaseConexao'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {ModalUsuarios} from '../componentes/ModalUsuarios'
import {ModalMensagem} from '../componentes/ModalMensagem'


// Definição das regras de validação de entradas
const loginSchema = z.object({

    email: z.string()
            .email({message: 'Informe um e-mail válido!'}),

    senha: z.string()
            .length(6, {message: 'Defina uma senha com 6 caracteres'})
})

export function Login(){
   
    const [modalMensagemVisivel, setModalMensagemVisivel] = useState(false)
    const [modalMensagemTitulo, setModalMensagemTitulo] = useState('')
    const [modalMensagemTexto, setModalMensagemTexto] = useState('')

    const [modalUsuariosVisivel, setModalUsuariosVisivel] = useState(false)
    const [modalUsuariosTitulo, setModalUsuariosTitulo] = useState('')

    // Construção e vínculo do React-Hook-Form + Zod
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(loginSchema)})

    // Componente de navegação
    const navigate = useNavigate()


    async function autenticarUsuario(data){

        try {       
            await signInWithEmailAndPassword(autenticacao, data.email, data.senha)
            navigate('inicial')

        } catch (error) {
            setModalMensagemTitulo('Identificação')
            setModalMensagemTexto('Falha na autenticação do usuário!')
            exibirModal('mensagem')
        }
    }

    function novoUsuario(){
        setModalUsuariosTitulo('Novo usuário')
        exibirModal('usuarios')        
    }

    // Controle das telas modais (manipulação de mais de uma tela modal)
    function exibirModal(modal){
        modal == 'usuarios' ? setModalUsuariosVisivel(true) : setModalMensagemVisivel(true)
    }

    function ocultarModal(modal){
        modal == 'usuarios' ? setModalUsuariosVisivel(false) : setModalMensagemVisivel(false)
    }


    return(
        <div className={estilos.conteiner}>

            <h1 className={estilos.titulo}>Recomendações</h1>

            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(autenticarUsuario)}
            >
                <input 
                    {...register('email')}
                    className={estilos.campo}
                    placeholder='E-mail'            
                />
                { errors.email && (
                    <p className={estilos.mensagem}>
                        {errors.email.message}
                    </p>
                ) }

                <input 
                    {...register('senha')}
                    className={estilos.campo}
                    placeholder='Senha'      
                    type='password'      
                />
                { errors.senha && (
                    <p className={estilos.mensagem}>
                        {errors.senha.message}
                    </p>
                ) }

                <button
                    className={estilos.botao}
                >Entrar</button>

            </form>

            <button 
                className={estilos.novoUsuario}
                onClick={novoUsuario}
            >Cadastre-se</button>

            <ModalMensagem 
                exibir={modalMensagemVisivel}
                ocultar={() => ocultarModal('mensagem')}  
                titulo={modalMensagemTitulo}       
                mensagem={modalMensagemTexto}
                pagina='login'
            />

            <ModalUsuarios 
                exibir={modalUsuariosVisivel}
                ocultar={() => ocultarModal('usuarios')}  
                titulo={modalUsuariosTitulo}        
                pagina='login'
            />

        </div>
    )
}
