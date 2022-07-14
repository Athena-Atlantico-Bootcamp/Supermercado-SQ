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



function CardProductDetails(props) {

  const [coments, setComents] = useState([])
  
  function getProduct(id_produto) {
    try {
      api.get(`/produtos/${id_produto}`)
      .then( (res) => {
        console.log(res.data)
        setProduct(res.data)
      })
    } catch (err) {
      console.log(err.message)
    }
  }
  
  useEffect(() => {getProduct(id_produto)}, [])
  
  
  function getComents(id_produto) {
      try {
        api.get(`/comentarios/${id_produto}`)
        .then( (res) => {
          console.log(res.data)
          setComents(res.data)
        })
      } catch (err) {
        console.log(err.message)
      }
    }
    
    useEffect(() => {getComents(id_produto)}, [])


const [product, setProduct] = useState([])

function getProduct() {
  try {
    api.get("/produtos/1")
    .then( (res) => {
      console.log(res.data)
      setProduct(res.data)
    })
  } catch (err) {
    console.log(err.message)
  }
}

useEffect(() => {getProduct()}, [])


function getUsers() {
    try {
      api.get("/produtos/1")
      .then( (res) => {
        console.log(res.data)
        setProduct(res.data)
      })
    } catch (err) {
      console.log(err.message)
    }
  }
  
  useEffect(() => {getProduct()}, [])



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
                                    {product.description}
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


