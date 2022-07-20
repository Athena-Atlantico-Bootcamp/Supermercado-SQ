import {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import CardProdutos from '../../components/CardProdutos'
import api from '../../service/api'
import { Container, ContainerTitulo, Titulo, ContainerProdutos } from './styles'
import { useNavigate } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  const [produto, setProduto] = useState([]);

  function getProducts() {
    try {
      api.get("/produtos")
      .then( (res) => {
        setProducts(res.data)
        setProduto(products.reverse())
      })
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {getProducts()}, [])
  
  const navigate = useNavigate()

  function Redirecionar(id_produto) {
    console.log('teste');
    navigate(`/produto/${id_produto}`);
  }

  return (
    <div>
      <Header/>
      <Container>
        <ContainerTitulo>
          <Titulo> Adicionados Recentemente</Titulo>
        </ContainerTitulo>
        <ContainerProdutos>
          { produto ? produto.map((p) => {
            return (
                <CardProdutos data={p} key={p.id_produto}/>
              )
          }) : null}
        </ContainerProdutos>
      </Container>
      <Footer />
    </div>
  )
}

export default App