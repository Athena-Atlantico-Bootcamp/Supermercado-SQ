import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/index';
import CardAllergys from '../../components/CardAllergys';
import alergias from '../../../assets/imagemAlergias.png';
import { Container, ContainerTitulo, Titulo, ContainerConteudo, Imagem } from './styles';

function Allergy() {

  return (
    <div>
      <Header />
      <Container>
          <ContainerTitulo>
            <Titulo>Alergia Alimentares</Titulo>
          </ContainerTitulo>
          <ContainerConteudo>
            <div>
              <CardAllergys 
                name="Principais alergias alimentares"
                text={`As alergias alimentares ocorrem quando o sistema imunológico do corpo (mecanismo de defesa do organismo) responde de maneira anormal a certos alimentos. Normalmente, o sistema imunológico ajuda o corpo a combater as coisas nocivas como no caso dos patógenos.
                Para pessoas com alergias alimentares, o sistema imunológico identifica incorretamente certos componentes dos alimentos como prejudiciais e produz uma resposta inadequada. Isso leva a desagradáveis sinais e sintomas associados com alergias que às vezes podem ser fatais. Mais de 120 alimentos são reconhecidos por causar alergias alimentares. 
                Na criança, os alimentos mais comuns são o leite, ovo, peixe e cereais, enquanto nos adultos são o marisco (que geralmente inclui crustáceos e moluscos), os frutos frescos, os frutos secos ou de casca rija, o amendoim e algumas sementes. 
                A maioria das crianças com alergia alimentar deixa de ter sintomas ao fim de alguns anos, enquanto a alergia alimentar nos adultos tende a persistir a vida inteira.`
                }
                />
              <CardAllergys 
                name="Proteínas do Leite" 
                text="A alergia à proteína do leite de vaca, conhecida como APLV, é a alergia alimentar mais comum durante a infância: estima-se que 2,2% das crianças são atingidas no primeiro ano de vida.
                Quem é alérgico ao leite de vaca pode apresentar desde sintomas bem leves, como uma urticária na pele, até reações bem graves, como o choque anafilático (reação alérgica súbita que pode ser fatal). 
                 Às vezes, a APLV é confundida com intolerância à lactose, mas elas são muito diferentes: intolerância à lactose não envolve o sistema imunológico do corpo."
              />
              <CardAllergys 
                name="Ovo" 
                text="A alergia ao ovo é bastante frequente em idade pediátrica e é a segunda principal causa de alergia alimentar na criança, a seguir ao leite de vaca. Podendo gerar sintomas leves, como coriza e náuseas e, em casos mais graves, levar a sintomas, como dificuldade para respirar, sensação de bolo na garganta e queda da pressão arterial.
                Algumas vacinas, como a vacina contra H1N1, influenza, a vacina contra febre amarela, Tríplice Viral (sarampo, caxumba e rubéola) e Tetra Viral (sarampo, caxumba, rubéola e varicela) são produzidas com proteínas do ovo. No entanto, somente quem possui alergia grave à proteína do ovo não deve receber vacinas com esse componente."
              />
              <CardAllergys 
                name="Peixe" 
                text="Nas crianças pequenas, a alergia ao peixe é o terceira causa mais frequente de alergia alimentar, a seguir ao leite vaca e ovo, na maioria dos países da Europa.
                Em contraste com a alergia à proteína do leite de vaca ou ovo que são transitórias, a alergia a peixes pelo contrário tem tendência a geralmente persistir ativa."
              />
              <CardAllergys 
                name="Amendoim" 
                text="A alergia ao amendoim é uma das alergias alimentares mais frequentes em idade pediátrica e é uma causa importante de anafilaxia. Verificou-se um aumento significativo da sua prevalência nos últimos anos e estima-se que afete cerca de 1-3% das crianças."
              />
              <CardAllergys 
                name="Mariscos" 
                text="A alergia aos mariscos é uma reação adversa imunológica (do sistema imunológico), sendo a alergia alimentar mais frequente nos adultos. O camarão (gambas) é o tipo de marisco que mais frequentemente é associado às alergias, uma vez que é dos mariscos mais consumidos entre a população. No entanto, muitos outros tipos de marisco podem causar alergia."
              />
            </div>
            <Imagem src={alergias}/>
          </ContainerConteudo>
        </Container>
      <Footer />
    </div>
  )
}
export default Allergy
  