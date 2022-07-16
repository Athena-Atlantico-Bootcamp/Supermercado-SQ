import React, {useState, useRef} from "react";
import {
Button, 
Container, 
GreenButton,
YellowButton,
RedButton,
EditIcon,
DeleteIcon,
ContainerModal,
FormModal,
LabelModal,
InputModal,
AlignAreaModal,
ExitCircle,
TextAreaModal,
InputImage,
TextAreaModalComment,
PlusCircleIcon,
ButtonCadastrar
} from './styles.js'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom' 
import api from "../../service/api.js";

Modal.setAppElement('#root')

const styleModal = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%,-50%)',
        border: '1px solid #ccc',
        background: '#f5f5f5',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '16px',
        outline: 'none',
        padding: '20px'
    }
}


function ButtonsType({tipo, isModal = false, tipoModal, data}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const formRef = useRef(null)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [constraint, setConstraint] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [typeAction, setTypeAction] = useState('')
    const [nameProd,setNameProd] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [ingredient, setIngredient] = useState('')
    const [comment, setComment] = useState('')
    const navigate = useNavigate()
    const tokenUser = JSON.parse(localStorage.getItem('@token'));
    function openModal() {
        setIsOpen(true);
        if (data) {
            setName(data.nome)
            setEmail(data.email)
            setConstraint(data.restricoes)
            setPhone(data.telefone)
            setNameProd(data.nome)
            setIngredient(data.ingredientes)
            setDescription(data.descricao)
            setImage(data.imagem)
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    function logout() {
        localStorage.removeItem('@token');
        localStorage.removeItem('@usuario');
        localStorage.removeItem('@tipo_usuario');
        navigate('/')
    }

    function type_icons(tipo){
        if (tipo == 'Editar'){
            return <EditIcon size={20}/>
        }
        if (tipo == 'Deletar') {
            return <DeleteIcon size={20} />
        } 
        else {
            return;
        }
    }

    function type_button(tipo) {
        let res = tipo.split(' ')
        if (tipo == 'Editar' || tipo == 'Cadastrar' || tipo == 'Login') {
            return <GreenButton>{type_icons(res[0])} {res[0]}</GreenButton>
        }
        if (tipo == 'Deletar') {
            return <RedButton>{type_icons(res[0])} {res[0]}</RedButton>
        }
        if(tipo == 'Voltar' || tipo == 'Logout' || tipo == 'Comentar Produto' ) {
            return <YellowButton>{type_icons(tipo)} {res[0]}</YellowButton>
        }
        
        if (tipo == 'Editar Modal' || tipo == 'Comentar Produto Modal') {
            return <GreenButton>{type_icons(tipo)} {res[0]}</GreenButton>
        }
    }

    function editUser() {
        try {
            api.patch(`/usuarios/${data.id_usuario}`, {
                email: email,
                nome: name,
                telefone: parseInt(phone),
                restricoes: constraint                
            }, {headers: {
                "Authorization": `Bearer ${tokenUser}`}}).then((res) => {
                alert('Dados do usuário atualizados')
                closeModal()
                window.location.reload()
            })
            
        } catch (error) {
            console.error(error)
        }
    }
    function deletar(){
        console.log('teste ', data.id_usuario)
        let rotaDeletar = '';
        let mensagem = '';
        let isUser=false;
        if (window.confirm("Deseja realmente excluir?")) {
            if(data.id_produto){
                rotaDeletar = `/produtos/${data.id_produto}`;
                mensagem = 'Produto deletado'
            }else if (data.id_comentario){
                rotaDeletar = `/comentarios/${data.id_comentario}`;
                mensagem = 'Comentário deletado'
            } else if (data.id_usuario){
                rotaDeletar = `/usuarios/${data.id_usuario}`;
                mensagem = 'Usuário deletado'
                isUser = true
            }
            try{
                console.log('eeeeeeentrou ', rotaDeletar)
                api.delete(`${rotaDeletar}`, {
                    headers: {
                        "Authorization": `Bearer ${tokenUser}`}
                }).then((res)=>{
                    alert(mensagem)
                    if (isUser){
                        logout()
                    } else {
                        window.location.reload()
                    }
                })
            } catch (err){
                console.error(err)
            }
        }
    }

    function editProd() {
        try {
            api.patch(`/produtos/${data.id_produto}`, {
                nome: nameProd,
                descricao: description,
                imagem: image,
                ingredientes: ingredient
            }, {headers: {
                "Authorization": `Bearer ${tokenUser}`}}).then((res) => {
                alert('Dados do usuário atualizados')
                closeModal()
                window.location.reload()
            })
            
        } catch (error) {
            console.error(error)
        }
    }

    function signUpProduct() {
        try {
            api.post('/produtos', {
                nome: nameProd,
                descricao: description,
                imagem: image,
                ingredientes: ingredient,
                usuarioId: JSON.parse(localStorage.getItem('@usuario'))
            }, {headers: {"Authorization": `Bearer ${tokenUser}`}})
            .then((res) => {
                closeModal()
                window.location.reload()
            })
        } catch (error) {
            console.error(error)
        }
    }

    function Acao(e) {
        try {
            e.preventDefault()
            if (tipoModal == 'Fornecedor') {
                if (typeAction == 'Editar Modal') {
                    editUser()
                } else if (typeAction == 'Deletar'){
                    deletar()
                }
            }
            if (tipoModal == 'Cadastrar Fornecedor') {

            } 

            if (tipoModal == 'Editar Produtos Modal') {
                if (typeAction == 'Editar') {
                    editProd()
                }
            }

            if (tipoModal == 'Cadastrar Produtos Modal') {
                if (typeAction == 'Cadastrar') {
                    signUpProduct()
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    function modalForm() {


        if (tipoModal == 'Fornecedor') {
            return (
                <>  
                    <ExitCircle size={30} onClick={closeModal}/>
                    <ContainerModal>
                        <FormModal onSubmit={Acao} ref = {formRef}>
                            <LabelModal>Nome: </LabelModal><br/>
                            <InputModal type='text' onChange={(e) => setName(e.target.value)} value={name} /><br/><br/>
                            <LabelModal>Telefone: </LabelModal><br/>
                            <InputModal type='text' onChange={(e) => setPhone(e.target.value)} value={phone}/><br/><br/>
                            <LabelModal>Restrições: </LabelModal><br/>
                            <InputModal type='text' onChange={(e) => setConstraint(e.target.value)} value={constraint}/><br/><br/>
                            <LabelModal>Email: </LabelModal><br/>
                            <InputModal type='email' onChange={(e) => setEmail(e.target.value)} value={email}/><br/><br/>
                            <AlignAreaModal>
                                <Button type='submit' onClick={()=>setTypeAction('Editar Modal')}> {type_button('Editar Modal')} </Button>
                                <Button type='submit' onClick={()=>setTypeAction('Deletar')}> {type_button('Deletar')} </Button>
                            </AlignAreaModal>
                        </FormModal>
                        {/*<ButtonsType tipo='Voltar' isModal={true} />
                        <ButtonsType tipo='Deletar' isModal={true} />
                        <ButtonsType tipo='Editar Modal' isModal={true} />*/}
                    </ContainerModal>
                </>
            );
        }

        if (tipoModal == 'Cadastrar Fornecedor') {
            return (
                <>
                    <ExitCircle size={30} onClick={closeModal}/>
                    <ContainerModal>
                        <FormModal onSubmit={Acao} ref = {formRef}>
                            <LabelModal>Nome: </LabelModal><br/>
                            <InputModal type='text' onChange={(e) => setName(e.target.value)} value={name}/><br/><br/>
                            <LabelModal>Telefone: </LabelModal><br/>
                            <InputModal type='text' onChange={(e) => setPhone(e.target.value)} value={phone}/><br/><br/>
                            <LabelModal>Email: </LabelModal><br/>
                            <InputModal type='email' onChange={(e) => setEmail(e.target.value)} value={email}/><br/><br/>
                            <LabelModal>Senha: </LabelModal><br/>
                            <InputModal type='password' onChange={(e) => setPassword(e.target.value)} value={password}/><br/><br/>
                            <AlignAreaModal>
                                <Button type='submit' onClick={()=>setTypeAction('Cadastrar')}> {type_button('Cadastrar')} </Button>
                            </AlignAreaModal>
                        </FormModal>
                        
                    </ContainerModal>
                </>
            );
        }

        if (tipoModal == 'Editar Produtos Modal' || tipoModal == 'Cadastrar Produtos Modal') {
            return (
                <>
                    <ExitCircle size={30} onClick={closeModal}/>
                    <ContainerModal>
                        <FormModal onSubmit={Acao} ref = {formRef}>
                            <LabelModal>Nome do Produto: </LabelModal><br/>
                            <InputModal type='text' onChange={(e) => setNameProd(e.target.value)} value={nameProd}/><br/><br/>
                            <LabelModal>Descrição: </LabelModal><br/>
                            <TextAreaModal onChange={(e) => setDescription(e.target.value)} value={description}/> <br/><br/>
                            <LabelModal>Ingredientes: </LabelModal><br/>
                            <TextAreaModal onChange={(e) => setIngredient(e.target.value)} value={ingredient}/> <br/><br/>
                            <LabelModal>Imagem: </LabelModal><br/>
                            <InputImage onChange={(e) => setImage(e.target.value)} value={image}/> <br/><br/>
                            <AlignAreaModal>
                                {tipoModal == 'Cadastrar Produtos Modal' ? 
                                <Button type='submit' onClick={()=>setTypeAction('Cadastrar')}> {type_button('Cadastrar')} </Button> : 
                                <Button type='submit' onClick={()=>setTypeAction('Editar')}> {type_button('Editar Modal')} </Button>
                                }
                                
                                {tipoModal != 'Cadastrar Produtos Modal' ?
                                    <Button type='submit' onClick={()=>setTypeAction('Deletar')}> {type_button('Deletar')} </Button> : null}
                            </AlignAreaModal>
                        </FormModal>
                        
                    </ContainerModal>
                </>
            );
        }

        else {
            return (
                <>
                  <ExitCircle size={30} onClick={closeModal}/>
                    <ContainerModal>
                        <FormModal onSubmit={Acao} ref = {formRef}>
                            <LabelModal>Comentário: </LabelModal><br/>
                            <TextAreaModalComment onChange={(e) => setComment(e.target.value)} value={comment}/> <br/><br/>
                            <AlignAreaModal>
                                <Button type='submit' onClick={()=>setTypeAction('Cadastrar')}> {type_button('Comentar Produto Modal')} </Button>
                            </AlignAreaModal>
                        </FormModal>
                        
                    </ContainerModal>  
                </>
            );
        }
    }

    function typeButtonModal(tipo) {
        if (tipo == 'Deletar' || tipo == 'Cadastrar' || tipo == 'Login' || tipo == 'Logout' || isModal == true) {
            if (tipo == 'Deletar'){
                return <Button type='submit' onClick={deletar}> {type_button(tipo)} </Button> 
            }
            else if (tipo == 'Logout') {
             return <Button type='submit' onClick={logout}> {type_button(tipo)} </Button>    
            } 
            else {
                return <Button type='submit' > {type_button(tipo)} </Button>
            }
        } else {
            if (tipo == 'Cadastrar Novo Produto') {
                return <ButtonCadastrar type='submit' onClick={openModal}><PlusCircleIcon /> Cadastrar novo produto</ButtonCadastrar>
            }
            return <Button type='submit' onClick={openModal} > {type_button(tipo)} </Button>
        }
    }

    return(
        <Container>
            {typeButtonModal(tipo)}
                 
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={styleModal}
            >
                {modalForm()}
            </Modal>      
        </Container>
            );
}

export default ButtonsType;