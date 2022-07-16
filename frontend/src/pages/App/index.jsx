import {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import CardProdutos from '../../components/CardProdutos'
import api from '../../service/api'
import { Container, ContainerTitulo, Titulo, ContainerProdutos } from './styles'

function App() {
  const [products, setProducts] = useState([])

  function getProducts() {
    try {
      api.get("/produtos")
      .then( (res) => {
        setProducts(res.data)
      })
    } catch (err) {
      console.error(err)
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
        <ContainerProdutos>
          { products ? products.map((p) => {
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