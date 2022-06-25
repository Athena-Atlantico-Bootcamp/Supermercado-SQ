import api from '../service/api'

function SearchScreen() {

  function getProducts() {
    try {
      api.get("/produtos")
      .then( (res) => {console.log(res.data)} )
    } catch (err) {
      console.log(err.message)
    }
  }

  getProducts()

  return (
    <div>
      <p>Tela de Busca</p>
    </div>
  )
}

export default SearchScreen
