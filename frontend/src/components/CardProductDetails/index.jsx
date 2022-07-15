import { useState, useEffect } from 'react'
import api from '../../service/api'
import ButtonsType from '../Buttons'
import {
  Container,
  Text,
  TextDescription,
  ContainerCard,
  ContainerTitle,
  ContainerProdutoTitle,
  ContainerColumn,
  ContainerImg,
  Img,
  ContainerDescription,
  ContainerTitulo,
  Titulo,
  ContainerComents,
  Usuario,
  Data,
  Comentario,
  CardComents
  } from './styles.js'



function CardProductDetails({idProduto}) {

  const [coments, setComents] = useState([])
  
  function getProduct() {
    try {
      api.get(`/produtos/${idProduto}`)
      .then( (res) => {
        console.log(res.data)
        setProduct(res.data)
      })
    } catch (err) {
      console.log(err.message)
    }
  }
  
  useEffect(() => {getProduct(); getComents()}, []);
  
  
  function getComents() {
      try {
        api.get(`/comentarios/${idProduto}`)
        .then( (res) => {
          console.log(res.data)
          setComents(res.data)
        })
      } catch (err) {
        console.log(err.message)
      }
    }


const [product, setProduct] = useState([])
  

    return(
      <section>
            <Container>
                <ContainerCard>
                    <ContainerTitle>
                      <ContainerProdutoTitle>
                        <Text>Voltar</Text>
                      </ContainerProdutoTitle>
                      <Text>Produto: {product.nome}</Text>
                    </ContainerTitle>
                    <ContainerColumn>
                        <ContainerImg>
                            <Img src="https://supernossoio.vtexassets.com/arquivos/ids/204625-1600-auto?v=637808076712200000&width=1600&height=auto&aspect=true"/>
                        </ContainerImg>
                        <ContainerDescription>
                            <ContainerTitulo>
                                <Titulo>{product.nome}</Titulo>
                                <TextDescription>
                                    {product.descricao}
                                </TextDescription>
                            </ContainerTitulo>
                        </ContainerDescription>
                    </ContainerColumn>
                </ContainerCard>
                <ContainerComents>
                    <Text>Comentários</Text>
                    <ButtonsType tipo='Comentar Produto'/>
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


