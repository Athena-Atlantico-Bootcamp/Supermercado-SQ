import Header from "../../components/Header/Header"
import Footer from "../../components/Footer"
import CardProductDetails from "../../components/CardProductDetails"
import { useParams } from "react-router-dom"

function ProductDetails() {

  const params = useParams();

  return (
    <div>
      <Header/>
      <CardProductDetails idProduto={params.id} />
      <Footer />
    </div>
  )
}

export default ProductDetails

