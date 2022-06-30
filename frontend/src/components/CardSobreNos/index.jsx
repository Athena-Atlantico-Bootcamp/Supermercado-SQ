import iconeGitHub from '../../../assets/iconeGithub.png'
import iconeLinkedin from '../../../assets/iconeLinkedin.png'
import { Container, Name, Icone, ContainerName, Text } from './styles'

function CardSobreNos(props) {
  return(
    <Container>
      <ContainerName>
        <Name>{props.name}</Name>
        <a href={props.github} target="_blank"><Icone src={iconeGitHub} /></a>
        {props.linkedin ? 
          <a href={props.linkedin} target="_blank"><Icone src={iconeLinkedin} /></a>
        : null}
      </ContainerName>
      <Text>{props.text}</Text>
    </Container>
  )
}

export default CardSobreNos;