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
TextAreaModalComment
} from './styles.js'
import Modal from 'react-modal'

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


function ButtonsType({tipo, isModal = false, tipoModal}) {

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

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
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

    function Acao(e) {
        e.preventDefault()
        try {
            if (tipoModal == 'Fornecedor') {
                console.log(name, phone, email, constraint, password, typeAction)
            }
            if (tipoModal == 'Cadastrar Fornecedor') {

            } 

            if (tipoModal == 'Editar Produtos Modal') {

            }

        } catch (error) {
            console.log(error)
        }
    }

    function modalForm() {
        //console.log(tipoModal)

        if (tipoModal == 'Fornecedor') {
            return (
                <>  
                    <ExitCircle size={30} onClick={closeModal}/>
                    <ContainerModal>
                        <FormModal onSubmit={Acao} ref = {formRef}>
                            <LabelModal>Nome: </LabelModal><br/>
                            <InputModal type='text' onChange={(e) => setName(e.target.value)} value={name}/><br/><br/>
                            <LabelModal>Telefone: </LabelModal><br/>
                            <InputModal type='text' onChange={(e) => setPhone(e.target.value)} value={phone}/><br/><br/>
                            <LabelModal>Restrições: </LabelModal><br/>
                            <InputModal type='text' onChange={(e) => setConstraint(e.target.value)} value={constraint}/><br/><br/>
                            <LabelModal>Email: </LabelModal><br/>
                            <InputModal type='email' onChange={(e) => setEmail(e.target.value)} value={email}/><br/><br/>
                            <LabelModal>Senha: </LabelModal><br/>
                            <InputModal type='password' onChange={(e) => setPassword(e.target.value)} value={password}/><br/><br/>
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
                                <Button type='submit' onClick={()=>setTypeAction('Cadastrar')}> {type_button('Editar Modal')} </Button>
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
        if (tipo == 'Deletar' || tipo == 'Cadastrar' || tipo == 'Login' || isModal == true) {
            return <Button type='submit' > {type_button(tipo)} </Button>
        } else {
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

/*function type_icons(tipo){
        if (tipo == 'Editar'){
            return <PencilSimpleLine className="edit-icon" size={20} />
        }
        if (tipo == 'Deletar') {
            return <TrashSimple className="delete-icon" size={20} />
        } 
        else {
            return;
        }
    }
    
    /*function type_buttons(tipo) {
        let name = ''
        
        if (tipo == 'Editar') {
            name = 'edit-button'
        }
        if (tipo == 'Deletar') {
            name = 'delete-button'
        }
        if(tipo == 'Voltar') {
            name = 'back-button'
        }
        if (tipo == 'Cadastrar') {
            name = 'register-button'
        }
        if (tipo == 'Comentar Produto'){
            name = 'comment-product-button'
        }
        if (tipo == 'Logout'){
            name = 'logout-button'
        }
        if (tipo == 'Login'){
            name = 'login-button'
        }
        if (tipo == 'Editar Modal'){
            name = 'edit-modal-button'
        }
        if (tipo == 'Comentar Produto Modal') {
            name = 'comment-product-modal-button'
        }
        let res = tipo.split(' ') 
        //className={name} onClick={() => actionButton(tipo)}
        return (
            <Button>{type_icons(tipo)} {res[0]}</Button>
        );
    }
    
    function actionButton(tipo){
        
        if(tipo == 'Editar') {
            console.log(tipo)
            
        }
        if(tipo == 'Deletar') {
            console.log(tipo)
        }
        if(tipo == 'Voltar') {
            console.log(tipo)
        }
    }*/