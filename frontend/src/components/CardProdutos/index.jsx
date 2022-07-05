import { Card, LinkProduct, CardElements, Image, Text } from './styles';

function CardProdutos(props) {
    console.log(props.data.imagem)
  return (
        <Card>
            <LinkProduct to='/produto'></LinkProduct>
            <CardElements>
                <Image src={props.data.imagem} />
                <Text>{props.data.nome}</Text>
            </CardElements>
        </Card>
  )
}

export default CardProdutos