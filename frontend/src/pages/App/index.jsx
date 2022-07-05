import {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import CardProdutos from '../../components/CardProdutos'
import api from '../../service/api'
import { Container, ContainerTitulo, Titulo } from './styles'

function App() {
  const [products, setProducts] = useState([])

  function getProducts() {
    try {
      api.get("/produtos")
      .then( (res) => {
        setProducts(res.data)
      })
    } catch (err) {
      console.log(err.message)
    }
  }
  useEffect(() => {getProducts()}, [])
  
  return (
    <div>
      <Header/>
      <Container>
        <ContainerTitulo>
          <Titulo> Adicionados Recentemente</Titulo>
        </ContainerTitulo>
        <div>
          { products ? products.map((p) => {
            return (
              <CardProdutos data={p} key={p.id_produto}/>
              )
          }) : null}
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default App
