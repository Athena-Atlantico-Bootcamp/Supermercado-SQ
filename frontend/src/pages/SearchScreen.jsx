import api from '../service/api'
import { useState, useEffect } from 'react'
import Header from '../components/Header/Header'

function SearchScreen() {

  const [products, setProducts] = useState([])

  function getProducts() {
    try {
      api.get("/produtos")
      .then( (res) => {
        console.log(res.data)
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
      <p>Tela de Busca</p>
      { products ? products.map((p) => {
        return <div>{ p.nome }</div>
      }) : <div>oi</div>}
    </div>
  )
}

export default SearchScreen
