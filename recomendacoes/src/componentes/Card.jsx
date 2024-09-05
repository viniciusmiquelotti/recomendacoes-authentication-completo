import estilos from './Card.module.css'

export function Card(props) {
    return(
        <div className={estilos.conteiner}>
            {props.children}
        </div>
    );
}