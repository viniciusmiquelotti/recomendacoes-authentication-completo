import estilos from './ModalConfirmacao.module.css'

export function ModalConfirmacao({exibir, ocultar, titulo, mensagem}) {

    if (exibir) {

        return(
            <div className={estilos.conteiner}>

                <p className={estilos.titulo}>{titulo}</p>

                <div className={estilos.conteinerMensagem}>
                    <p className={estilos.mensagem}>{mensagem}</p>
                </div>
                
                <div className={estilos.conteinerBotoes}>
                    <button 
                        className={estilos.botao}
                    >Confirmar</button>

                    <button 
                        className={estilos.botao}
                        onClick={ocultar}
                    >Cancelar</button>
                </div>

            </div>
        )    
    }
}