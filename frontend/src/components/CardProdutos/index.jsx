import { Card, LinkProduct, CardElements, ImageDiv, Image, Text } from './styles';
import { useNavigate } from 'react-router-dom'


function CardProdutos(props) {

    const navigate = useNavigate()
    function Redirecionar() {
        navigate(`/produto/${props.data.id_produto}`);
      }

  return (
        <Card onClick={Redirecionar}>
            <LinkProduct to='/produto'>
            <CardElements>
                <ImageDiv>  
                    <Image src={props.data.imagem} />
                </ImageDiv>  
                <Text>{props.data.nome}</Text>
            </CardElements>
            </LinkProduct>
        </Card>
  )
}

export default CardProdutos