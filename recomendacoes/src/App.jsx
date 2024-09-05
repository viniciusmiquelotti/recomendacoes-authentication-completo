import './global.css'
import {BrowserRouter} from 'react-router-dom'
import {Rotas} from './rotas/Rotas'
// import {bd} from './firebase/firebaseConexao'

export function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )
}
