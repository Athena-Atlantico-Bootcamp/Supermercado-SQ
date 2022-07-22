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
  CardComents,
  AlignComments,
  EditCommentIcon,
  DeleteCommentIcon,
  AlignIcons
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

    /*const [modalIsOpen] = useState(false);

    function handleOpenModal(){
      setIsOpen(true);
    }

    function handleCloseModal(){
      setIsOpen(false);
      }
      */
    const [coments, setComents] = useState([])
    const [product, setProduct] = useState([])
    const [user, setUser] = useState([])
    const tokenUser = JSON.parse(localStorage.getItem('@token'));
    const idUser = JSON.parse(localStorage.getItem('@usuario'))
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

    function getUser() {
      try {
        api.get(`/usuarios/`)
            .then((res) => {
              setUser(res.data)
            })
          
      } catch (error) {
        console.error(error)
      }
    }
    
    useEffect(() => {getUser(); getProduct(); getComents()}, []);
    
    
     function getComents() {
        try {
          api.get(`/comentarios/${idProduto}`)
          .then( (res) => { 
            setComents(res.data)
            
          })


        } catch(err) {
          
          console.error(err.message)
        }
      }

      function getUserById(id) {
        let nome = ''
        user.map((u) => {
          if (u.id_usuario == id) {
            nome = u.nome
          }
        })
        return nome
      }

      //console.log("Usuarios",user)
      //getUserById(93)

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
                    <ButtonsType tipo='Comentar Produto' tipoModal = 'Comentar Produto' data={product}/>
                    {/* <button onClick={toggleModal}>Open modal</button> */}
                    {/*<Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    >
                      <h2>teste</h2>
                      <ButtonsType tipo='Comentar Produto'/>
                      
                    </Modal>*/}

                </ContainerComents>
                <CardComents>
                {coments.map((coments)=>{
                        let dataFormatada = new Intl.DateTimeFormat('pt-BR').format(new Date(coments.createdAt));
                          return(
                          <>
                            {/* <Usuario>{coments.us}</Usuario> */}
                            <AlignComments>
                              <Usuario key={coments.usuarioId}>{getUserById(coments.usuarioId)}</Usuario>
                              {idUser == coments.usuarioId ? 
                                <ButtonsType tipo='Editar Deletar Comentario' tipoModal = 'Comentar Produto' data={coments}/>
                              : null}
                              <Data key={coments.id}>{dataFormatada}</Data>
                            </AlignComments>
                            <Comentario key={coments.id}>{coments.texto_comentario}</Comentario>
                          </>
                        )
                    })}
                </CardComents>
            </Container>

      </section>
    )
  }

 
  
  export default CardProductDetails;


