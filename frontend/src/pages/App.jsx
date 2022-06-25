import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()
  function paginaBuscar() {
    navigate("/buscar")
  }

  return (
    <div>
      <p>Tela Inicial</p>
      <button onClick={paginaBuscar}>Ir para página buscar</button>
    </div>
  )
}

export default App
