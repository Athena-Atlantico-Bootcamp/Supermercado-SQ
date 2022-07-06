import { Card, LinkProduct, CardElements, ImageDiv, Image, Text } from './styles';

function CardProdutos(props) {
    console.log(props.data.imagem)
  return (
        <Card>
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