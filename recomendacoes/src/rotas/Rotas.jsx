import {Routes, Route} from 'react-router-dom'
import {Login} from '../paginas/Login'
import {Inicial} from '../paginas/Inicial'
import {Filmes} from '../paginas/Filmes'
import {Perfil} from '../paginas/Perfil'
import {Sobre} from '../paginas/Sobre'
import {Usuarios} from '../paginas/Usuarios'
import {RotasPrivadas} from '../rotas/RotasPrivadas'

export function Rotas(){
    return(
        <Routes>

            <Route path='/' element={<Login />} />

            <Route path='inicial' element={ <RotasPrivadas>
                                                <Inicial />
                                            </RotasPrivadas> }>

                <Route index element={<RotasPrivadas><Filmes /></RotasPrivadas>} />
                <Route path='perfil' element={<RotasPrivadas><Perfil /></RotasPrivadas>} />
                <Route path='sobre' element={<RotasPrivadas><Sobre /></RotasPrivadas>} />
                <Route path='usuarios' element={<RotasPrivadas><Usuarios /></RotasPrivadas>} />
            </Route>

        </Routes>
    )
}
