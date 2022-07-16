import { useState, useRef } from 'react'
import api from '../../service/api'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import CardProdutos from '../../components/CardProdutos'
import { Container, 
         ContainerGeral,
         TextoProcura, 
         ContainerBusca, 
         ContainerResposta, 
         Texto, 
         BtnProcurar, 
         CaixaTexto } 
from './styles'

function SearchScreen() {
  const formRef = useRef(null)
  const [procuraExiste, setProcuraExiste] = useState(false);
  const [textoProcura, setTextoProcura] = useState('');
  const [procuraCom, setProcuraCom] = useState('');
  const [procuraSem, setProcuraSem] = useState('');
  const [produtosResultado, setProdutosResultados] = useState([])

  function getProducts(props) {
    try {
      api.get(`/produtos${props}`)
      .then( (res) => {
        setProdutosResultados(res.data);
        setProcuraExiste(true);
      })
    } catch (err) {
      console.error(err)
    }
  }  

  function ProcurarSemProduto(e){
    e.preventDefault();
    setTextoProcura(`Buscar produtos sem: ${procuraSem}`);
    setProcuraSem('');
    getProducts(`/semingrediente/${procuraSem}`)
  }

  function ProcurarComProduto(e){
    e.preventDefault();
    setTextoProcura(`Buscar produtos com: ${procuraCom}`);
    setProcuraCom('');
    getProducts(`/ingrediente/${procuraCom}`)
  }

  return (
    <Container>
      <Header />
      <TextoProcura>{textoProcura}</TextoProcura>
      <ContainerGeral>
        <ContainerBusca>
          <form onSubmit={ProcurarSemProduto} ref={formRef}>
            <Texto>Buscar produtos sem:</Texto>
            <CaixaTexto 
              type="text" 
              minlength="3"
              onChange={(e) => setProcuraSem(e.target.value)} 
              value={procuraSem}
            />
            <BtnProcurar type="submit" value="Procurar"/>
          </form>
          <form onSubmit={ProcurarComProduto} ref={formRef}>
            <Texto>Buscar produtos com:</Texto>
            <CaixaTexto 
              type="text" 
              minlength="3" 
              onChange={(e) => setProcuraCom(e.target.value)} 
              value={procuraCom}
            />
            <BtnProcurar type="submit" value="Procurar"/>
          </form>
        </ContainerBusca>
        <ContainerResposta>
          { procuraExiste ? produtosResultado.map((p) => {
            return (
              <CardProdutos data={p} key={p.id_produto}/>
              )
          }) : null}
        </ContainerResposta>
      </ContainerGeral>
      <Footer />
    </Container>
  )
}

export default SearchScreen