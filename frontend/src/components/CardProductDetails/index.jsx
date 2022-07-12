import styled from "styled-components";






function CardProductDetails(props) {
    return(
      <section>
            <Container>
                <ContainerCard>
                      <Text>Voltar</Text> 
                      <Text>Produto: Flocão de milho</Text>
                    <ContainerColumn>
                        <ContainerImg>
                            <Img src="https://supernossoio.vtexassets.com/arquivos/ids/204625-1600-auto?v=637808076712200000&width=1600&height=auto&aspect=true"/>
                        </ContainerImg>
                        <ContainerDescription>
                            <ContainerTitulo>
                                <Titulo>Flocão de Milho</Titulo>
                                <TextDescription>
                                O primeiro registro escrito sobre cuscuz foi feito no século XIII, no livro de cozinha magrebina-andaluza Kitab al-tabikh fi al-Maghrib wa’l-Andalus (Livro de Culinária do Magrebe e Andaluzia), de autor desconhecido.
Por ser de fácil preparo e render bem, o cuscuz era uma comida destinada aos pobres, escravos e também aos bandeirantes, que consumiam junto com carne seca batida no pilão.
Em berbere, a palavra “k’seksu”, vem do som do vapor na cuscuzeira durante o cozimento. A palavra couscous é a versão francesa de “k’seksu”, criada pelos colonizadores na Argélia.
                                </TextDescription>
                            </ContainerTitulo>
                        </ContainerDescription>
                    </ContainerColumn>
                </ContainerCard>
                <ContainerComents>
                    <Text>Comentários</Text>
                    <Text>Comentar</Text>
                </ContainerComents>
                <CardComents>
                    <Usuario>Fulaninho</Usuario>
                    <Data>22/22/2022</Data>
                    <Comentario>Cuscuz com leite faz muito bem pra barriga "Confia"</Comentario>
                </CardComents>
                <CardComents>
                    <Usuario>Fulaninho</Usuario>
                    <Data>22/22/2022</Data>
                    <Comentario>Cuscuz com leite faz muito bem pra barriga "Confia"</Comentario>
                </CardComents>
            </Container>
      </section>
    )
  }
  
  export default CardProductDetails;


export const Container = styled.div` 
width: 100%;
box-sizing: border-box;
padding: 4rem 8rem 4rem 5rem;



@media only screen and (max-width: 1070px) {
    padding: 4rem;
}

@media only screen and (max-width: 768px) {
    padding: 1rem;
}
`


export const Text = styled.p` 
font-size: 2rem;
font-weight: bold;
color: #015F43;

@media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
}
`


export const TextDescription = styled.p` 
font-size: 1.5rem;
color: black;

@media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
}
`

export const ContainerCard = styled.div` 
    
`


export const ContainerColumn = styled.div` 
    display:flex;

`


export const ContainerImg = styled.div` 
width: 400px;
height: 400px;
background-color: grey;


`

const Img = styled.img`
    width: 100%;
    height: 100%;
    
    
`;

export const ContainerDescription = styled.div`
    width: 700px;
    height: 400px;
    background-color: white;
    overflow-y: scroll;
`


export const ContainerTitulo = styled.div`
    margin-left: 6%;
    
`


export const Titulo = styled.p` 
    font-size: 2rem;
    font-weight: bold;
    color: black;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }
`

export const ContainerComents = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    box-sizing: border-box;
    padding-top: 3rem;
`

export const Usuario = styled.h2`
font-size: 2rem;
font-weight: bold;
color: #015F43;

@media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
}

`

export const Data = styled.p`
    font-weight: bold;
`

export const Comentario = styled.p`
font-size: 1.5rem;
color: black;

@media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
}
    
`

export const CardComents = styled.div`
width: 100%;
box-sizing: border-box;

    
`

