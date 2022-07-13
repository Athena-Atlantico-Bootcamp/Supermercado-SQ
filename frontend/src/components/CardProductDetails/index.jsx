import styled from "styled-components";
import { useState, useEffect } from 'react'
import api from '../../service/api'



function CardProductDetails(props) {


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
                      <Text>Voltar</Text> 
                      <Text>Produto: {product.nome}</Text>
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


