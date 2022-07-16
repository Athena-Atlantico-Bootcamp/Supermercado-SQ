import { useState, useEffect } from 'react'
import api from '../../service/api'
import { useNavigate } from 'react-router-dom'
import Modal from "react-modal";
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

    // const [isOpen, setIsOpen] = useState(false);
    // function toggleModal() {
    //   setIsOpen(!isOpen);
    // }

    const customStyles = {
      content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto'
      }
    }

    const [modalIsOpen] = useState(false);

    function handleOpenModal(){
      setIsOpen(true);
    }

    function handleCloseModal(){
      setIsOpen(false);
      }

    const [coments, setComents] = useState([])
    const [product, setProduct] = useState([])
    const [user, setUser] = useState([])
  
    const navigate = useNavigate()
    function Redirecionar() {
        console.log('teste');
        navigate(`/`);
      }
    
    function getProduct() {
      try {
        api.get(`/produtos/${idProduto}`)
        .then( (res) => {
          setProduct(res.data)
          console.log(res.data)
        })
      } catch (err) {
        console.log(err.message)
      }
    }
    
    useEffect(() => {getUser(); getProduct(); getComents()}, []);
    
    
    function getComents() {
        try {
          api.get(`/comentarios/${idProduto}`)
          .then( (res) => {
            setComents(res.data)
            console.log(res.data)
          })
        } catch (err) {
          console.log(err.message)
        }
      }
  
      function getUser() {
        try {
          api.get(`/usuarios/`)
          .then( (res) => {
            setUser(res.data)
            console.log(res.data)
          })
        } catch (err) {
          console.log(err.message)
        }
      }
    
  

    return(
      <section>
            <Container>
                <ContainerCard>
                    <ContainerTitle>
                      <ContainerProdutoTitle>
                      <Text onClick={Redirecionar}>Voltar</Text>
                      </ContainerProdutoTitle>
                      <Text>Produto: {product.nome}</Text>
                    </ContainerTitle>
                    <ContainerColumn>
                        <ContainerImg>
                            <Img src={product.imagem}/>
                        </ContainerImg>
                        <ContainerDescription>
                            <ContainerTitulo>
                                <Titulo>{product.nome}</Titulo>
                                <TextDescription>
                                    {product.descricao}
                                </TextDescription>
                                <TextDescription>
                                    Ingredientes:
                                </TextDescription>
                                <TextDescription>
                                    {product.ingredientes}
                                </TextDescription>
                            </ContainerTitulo>
                        </ContainerDescription>
                    </ContainerColumn>
                </ContainerCard>
                <ContainerComents>
                    <Text>Comentários</Text>
                    <ButtonsType tipo='Comentar Produto' onClick={handleOpenModal}/>
                    {/* <button onClick={toggleModal}>Open modal</button> */}
                    <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    >
                      <h2>teste</h2>
                      <ButtonsType tipo='Comentar Produto' onClick={handleCloseModal}/>
                      
                    </Modal>

                </ContainerComents>
                <CardComents>
                {coments.map((coments)=>{
                        let dataFormatada = new Intl.DateTimeFormat('pt-BR').format(new Date(coments.createdAt));
                        return(
                          <>
                            <Usuario>{coments.usuario}</Usuario>
                            <Data id={coments.id}>{dataFormatada}</Data>
                            <Comentario id={coments.id}>{coments.texto_comentario}</Comentario>
                          </>
                        )
                    })}
                </CardComents>
            </Container>

      </section>
    )
  }

 
  
  export default CardProductDetails;


