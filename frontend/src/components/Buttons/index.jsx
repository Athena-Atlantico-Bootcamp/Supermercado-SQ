import React, {useState} from "react";
import {
Button, 
Container, 
GreenButton,
YellowButton,
RedButton,
EditIcon,
DeleteIcon
} from './styles.js'


function ButtonsType({tipo}) {
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

    return(
        <Container>

            <Button type='submit'>{type_button(tipo)}</Button>        
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