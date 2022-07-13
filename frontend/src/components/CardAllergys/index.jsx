import { Container, Name, ContainerName, Text } from './styles'

function CardAllergys(props) {
  return(
    <Container>
      <ContainerName>
        <Name>{props.name}</Name>
      </ContainerName>
      <Text>{props.text}</Text>
    </Container>
  )
}

export default CardAllergys;