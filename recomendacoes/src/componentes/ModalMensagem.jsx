import estilos from './ModalMensagem.module.css'

export function ModalMensagem({exibir, ocultar, titulo, mensagem, pagina = ''}) {

    if (exibir) {

        return(
            <div className={estilos.conteiner}
                 style={{ border: `${ pagina == 'login' ? '50px solid #1f0322' : null }`, 
                          boxSizing: `${ pagina == 'login' ? 'content-box' : null }` }}
            >

                <p className={estilos.titulo}
                   style={{ backgroundColor: `${ pagina == 'login' ? '#ccc' : null }`, 
                            color: `${ pagina == 'login' ? '#1f0322' : null }` }}
                >{titulo}</p>

                <div className={estilos.conteinerMensagem}>
                    <p className={estilos.mensagem}>{mensagem}</p>
                </div>
                
                <button 
                    className={estilos.botao}
                    onClick={ocultar}
                >Fechar</button>

            </div>
        )    
    }
}