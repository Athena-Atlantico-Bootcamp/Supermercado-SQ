import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Header from '../components/Header/Header'

function App() {

  const navigate = useNavigate()
  function paginaBuscar() {
    navigate("/buscar")
  }

  return (
    <div>
      <Header></Header>
      <Login></Login>
    </div>
  )
}

export default App
