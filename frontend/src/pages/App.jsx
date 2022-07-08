import { useNavigate } from 'react-router-dom'
import Login from './Login'

function App() {

  const navigate = useNavigate()
  function paginaBuscar() {
    navigate("/buscar")
  }

  return (
    <div>
      <p>Tela Inicial</p>

      <button onClick={paginaBuscar}>Ir para página buscar</button><br/><br/>
      <Login></Login>
    </div>
  )
}

export default App
