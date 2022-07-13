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