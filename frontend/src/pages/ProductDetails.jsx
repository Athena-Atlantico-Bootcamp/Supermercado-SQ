import Header from "../components/Header/Header"
import CardProductDetails from "../components/CardProductDetails"
import { useParams } from "react-router-dom"

function ProductDetails() {

  const params = useParams();

  return (
    <div>
      <Header/>
      <CardProductDetails idProduto={params.id} />
    </div>
  )
}

export default ProductDetails

