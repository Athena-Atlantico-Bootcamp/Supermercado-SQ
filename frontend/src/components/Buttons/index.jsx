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
import api from "../../service/api.js";
import { useNavigate } from "react-router-dom";

function ButtonsType({tipo, data}) {

    const navigate = useNavigate()

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

    async function actionButton(tipo, data) {
        
        if (tipo == 'Login') {
            await api.post('/usuarios/login/', {
                email: data[0],
                senha: data[1]
            }).then(function (res){
                alert(res)
                navigate('/')
            }).catch(function (error) {
                navigate('/login')
                alert(error);
            });
        }

        if (tipo == 'Cadastrar') {
            alert(data)
            api.post('/usuarios/', {
                email: data[0],
                nome: data[1],
                senha: data[2],
                telefone: data[3],
                restricoes: data[4],
                tipo_usuario: 'usuarios'
            }).then(function (res){
                console.log(res)
                navigate('/login')
            }).catch(function (error) {
                console.error(error);
            });
        }
    }

    return(
        
        <Button>{type_button(tipo)}</Button>        
        
    );
}

export default ButtonsType;