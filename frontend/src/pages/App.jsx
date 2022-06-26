import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import {GlobalStyle} from '../components/GlobalStyle'



function App() {

  const navigate = useNavigate()
  function paginaBuscar() {
    navigate("/buscar")
  }

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <p>Tela Inicial</p>
      <button onClick={paginaBuscar}>Ir para página buscar</button>
      
    </div>
  )
}

export default App
