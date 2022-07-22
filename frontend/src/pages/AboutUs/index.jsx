import Header from "../../components/Header/Header"
import Footer from '../../components/Footer'
import CardSobreNos from '../../components/CardSobreNos'
import logoAthena from '../../../assets/nomeAthena.png'
import { Container,ContainerTitulo, SobreNos, ContainerConteudo, Logo } from './styles'

function AboutUs() {
    return (
      <div>
        <Header />
        <Container>
          <ContainerTitulo>
            <SobreNos>Sobre nós</SobreNos>
          </ContainerTitulo>
          <ContainerConteudo>
            <div>
              <CardSobreNos 
                name="Projeto - Equipe Athena" 
                github="https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ"
                text="Equipe multidisciplinar formada no curso de Desenvolvimento Fullstack do programa de capacitação Atlântico Academy Bootcamp, ofertado pelo Instituto Atlântico. A equipe Athena é composta por: Ada Diniz, Beatriz Makowski, João Victor, Leonardo Felipe, Lucas Cesar, Paulo Anderson e tendo como líder Luiza Gadelha. "
              />
              <CardSobreNos 
                name="Ada Diniz" 
                github="https://github.com/adaDiniz"
                linkedin="https://www.linkedin.com/in/adadiniz/"
                text="Advogada e, principalmente, Desenvolvedora Front-End em busca da primeira oportunidade profissional. Atualmente, cursa o 2º semestre do curso de Análise e Desenvolvimento de Sistemas e está cada vez mais se aprofundando nas tecnologias do desenvolvimento web."
              />
              <CardSobreNos 
                name="Beatriz Makowski" 
                github="https://github.com/beatrizmakowski"
                linkedin="https://www.linkedin.com/in/beatriz-makowski/"
                text="Lörem ipsum mör europlal, gil. Dekasm euskapet proll astroporydade. Termopol vis: munar, geonöck om langen jåmönas inklusive oregt, ans. Dehyde nyv, bröllopsklänning. Kakrons ultranade, blinga, än wikiläcka fast mikroged och jåmulig töst. 
                Monas heterobel ågona migon, sperad så past. Mohure kykyras rament, homorade i reara. Makrohötöligt megas pretos, lurat. Denas hös i köttberg lareligt vivahet inte etnofili. Nyng vudokåktig nilingar om rymoling i ektiga. "
              />
              <CardSobreNos 
                name="João Victor Almeida" 
                github="https://github.com/joaovictorgit"
                linkedin="https://www.linkedin.com/in/jo%C3%A3o-v-a41a9313b/"
                text="Lörem ipsum mör europlal, gil. Dekasm euskapet proll astroporydade. Termopol vis: munar, geonöck om langen jåmönas inklusive oregt, ans. Dehyde nyv, bröllopsklänning. Kakrons ultranade, blinga, än wikiläcka fast mikroged och jåmulig töst. 
                Monas heterobel ågona migon, sperad så past. Mohure kykyras rament, homorade i reara. Makrohötöligt megas pretos, lurat. Denas hös i köttberg lareligt vivahet inte etnofili. Nyng vudokåktig nilingar om rymoling i ektiga. "
              />
              <CardSobreNos 
                name="Leonardo Felipe" 
                github="https://github.com/leonardo-felipe"
                linkedin="https://www.linkedin.com/in/leonardoofelipe/"
                text="Lörem ipsum mör europlal, gil. Dekasm euskapet proll astroporydade. Termopol vis: munar, geonöck om langen jåmönas inklusive oregt, ans. Dehyde nyv, bröllopsklänning. Kakrons ultranade, blinga, än wikiläcka fast mikroged och jåmulig töst. 
                Monas heterobel ågona migon, sperad så past. Mohure kykyras rament, homorade i reara. Makrohötöligt megas pretos, lurat. Denas hös i köttberg lareligt vivahet inte etnofili. Nyng vudokåktig nilingar om rymoling i ektiga. "
              />
              <CardSobreNos 
                name="Lucas Cesar" 
                github="https://github.com/lucasoliv21"
                linkedin="https://www.linkedin.com/in/lucas-cesar-de-oliveira-dantas-bb362a209"
                text="Lörem ipsum mör europlal, gil. Dekasm euskapet proll astroporydade. Termopol vis: munar, geonöck om langen jåmönas inklusive oregt, ans. Dehyde nyv, bröllopsklänning. Kakrons ultranade, blinga, än wikiläcka fast mikroged och jåmulig töst. 
                Monas heterobel ågona migon, sperad så past. Mohure kykyras rament, homorade i reara. Makrohötöligt megas pretos, lurat. Denas hös i köttberg lareligt vivahet inte etnofili. Nyng vudokåktig nilingar om rymoling i ektiga. "
              />
              <CardSobreNos 
                name="Luiza Gadelha" 
                github="https://github.com/LuizaGA"
                linkedin="https://www.linkedin.com/in/luiza-gadelha/"
                text="Desenvolvedora Fullstack com experiência em react e react native. Pós graduada em Arquitetura e atualmente cursando o 3º semestre de Análise e Desenvolvimento de Sistemas, sempre estudando novas tecnologias para se atualizar e melhorar profissionalmente. Estagiária de desenvolvimento web e mobile desde dezembro de 2021 no VORTEX, Laboratório de Formação e Inovação Tecnológica da Universidade de Fortaleza (Unifor). "
              />
              <CardSobreNos 
                name="Paulo Anderson" 
                github="https://github.com/PauloAndersonN"
                linkedin="https://www.linkedin.com/in/paulo-anderson-3a374622b/"
                text="Lörem ipsum mör europlal, gil. Dekasm euskapet proll astroporydade. Termopol vis: munar, geonöck om langen jåmönas inklusive oregt, ans. Dehyde nyv, bröllopsklänning. Kakrons ultranade, blinga, än wikiläcka fast mikroged och jåmulig töst. 
                Monas heterobel ågona migon, sperad så past. Mohure kykyras rament, homorade i reara. Makrohötöligt megas pretos, lurat. Denas hös i köttberg lareligt vivahet inte etnofili. Nyng vudokåktig nilingar om rymoling i ektiga. "
              />
            </div>
            <Logo src={logoAthena}/>
          </ContainerConteudo>
        </Container>
        <Footer />
      </div>
    )
  }
  
  export default AboutUs
  