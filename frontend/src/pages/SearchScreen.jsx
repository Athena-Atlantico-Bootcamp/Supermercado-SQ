import api from '../service/api'
import { useState, useEffect } from 'react'
import ButtonsType from '../components/Buttons'
import Modal from 'react-modal'

function SearchScreen() {
  /*const [products, setProducts] = useState([])

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
  
    { products ? products.map((p) => {
        return <div>{ p.nome }</div>
      }) : <div>oi</div>}
  */
  return (
    <div className='teste'>
      <p>Tela de Busca</p>

    </div>
  )
}

export default SearchScreen
