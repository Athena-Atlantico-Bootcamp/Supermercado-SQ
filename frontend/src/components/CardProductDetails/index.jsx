import { useState, useEffect } from 'react'
import api from '../../service/api'
import { useNavigate } from 'react-router-dom'
import Modal from "react-modal";
import ButtonsType from '../Buttons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  AlignIcons,
  Button,
  LabelModal
  } from './styles.js'


  function CardProductDetails({idProduto}) {

    const customStyles = {
      content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto'
      }
    }

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

      function avisoComentar(){

        notify()
      }

      const notify = () => {
        toast.error('Realize o login para comentar', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

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
                <ToastContainer />
                <ContainerComents>
                    <Text>Comentários</Text>
                    {idUser ? 
                      <ButtonsType tipo='Comentar Produto' tipoModal = 'Comentar Produto' data={product}/>
                    :
                    <div>
                      <Button onClick={avisoComentar}>
                        <LabelModal>Comentar</LabelModal>
                      </Button>
                    </div>
                    }
                </ContainerComents>
                <CardComents>
                {coments.map((coments)=>{
                        let dataFormatada = new Intl.DateTimeFormat('pt-BR').format(new Date(coments.createdAt));
                          return(
                          <>
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


