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
                text="Graduanda em Engenharia Mecânica na FAE Curitiba, com experiência na área de Engenharia de Processos na Indústria Automotiva. Atuação em projetos automotivos e de meios industriais para a indústria automotiva, especificamente na área de Estamparia de Veículos de Passeio e Veículos Utilitários da Renault do Brasil. 
                Extremamente motivada por trabalhos colaborativos em equipe e oportunidades compartilhar minhas melhores competências, conhecimentos e experiências."
              />
              <CardSobreNos 
                name="João Victor Almeida" 
                github="https://github.com/joaovictorgit"
                linkedin="https://www.linkedin.com/in/jo%C3%A3o-v-a41a9313b/"
                text="Olá, sou João Victor. Sou Técnico de Informática e atualmente faço bacharelado em Ciência da Computação na Universidade Federal do Ceará, no Campus de Quixadá. Gosto bastante de desenvolver aplicações de dispositivos móveis, principalmente em Java e React Native, e de descobrir novas tecnologias para aprimorar meus conhecimentos."
              />
              <CardSobreNos 
                name="Leonardo Felipe" 
                github="https://github.com/leonardo-felipe"
                linkedin="https://www.linkedin.com/in/leonardoofelipe/"
                text="Desenvolvedor back-end Python - Django, graduado em Análise e Desenvolvimento de Sistemas e bacharel em Administração."
              />
              <CardSobreNos 
                name="Lucas Cesar" 
                github="https://github.com/lucasoliv21"
                linkedin="https://www.linkedin.com/in/lucas-cesar-de-oliveira-dantas-bb362a209"
                text="Sou um estudante de Ciência e Tecnologia na UFERSA, e acredito que o meu diferencial seja a vontade de aprender sempre mais e o bom relacionamento com todo os parceiros que já tive, seja na faculdade ou trabalho, acredito que sempre é bom deixar boas recordações por onde passar. Tenho uma imensa curiosidade na área de tecnologia e estou em busca de uma empresa que possa mostrar isso crescendo junto a ela."
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
                text="Lörem ipsum mör europlal, gil. Dekasm euskapet proll astroporydade. Termopol vis: munar, geonöck om langen jåmönas inklusive oregt, ans. "
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
  