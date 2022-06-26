import React, {useState} from "react";
import './ButtonsType.css'
import {PencilSimpleLine, TrashSimple} from 'phosphor-react';





function ButtonsType({tipo}) {

    const [title, setTitle] = useState('')

    function type_icons(tipo){
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
    
    function type_buttons(tipo) {
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
        return (
            <button className={name} onClick={() => actionButton(tipo)}>{type_icons(tipo)} {res[0]}</button>
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
    }

    return(
        <div className="buttons-type">
            {type_buttons(tipo)}
        </div>
    );
}

export default ButtonsType;