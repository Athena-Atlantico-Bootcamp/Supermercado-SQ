import styled, {css} from "styled-components";
import {PencilSimpleLine, TrashSimple, XCircle} from 'phosphor-react';

export const Container = styled.div`
    
`
export const ExitCircle = styled(XCircle)`
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 10px;
    cursor: pointer;
`

export const EditIcon = styled(PencilSimpleLine)`
    margin:5px;
`;

export const DeleteIcon = styled(TrashSimple)`
    margin:5px;
`

export const Button = styled.button `
    background-color: transparent;
    width: 9rem;
    height: 2.5rem;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    color: white;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
`;


export const GreenButton = styled(Button)`
    background-color: #015F43;    
    display: flex;
    justify-content: center;
    align-items: center;
`
export const YellowButton = styled(Button)`
    background-color: #FBA94C;    
    display: flex;
    justify-content: center;
    align-items: center;
`
export const RedButton = styled(Button)`
    background-color: #F75A68;    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerModal = styled.div`
    display: flex;
    padding: 20px;
`

export const FormModal = styled.form`
`
export const LabelModal = styled.label`
    font-size: 15px;
    color: #000000;
`

export const InputModal = styled.input`
    background-color: #FFF;
    width: 28rem;
    height: 25px;
    border: none;
    border-radius: 5px;

`
export const AlignAreaModal = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 6px;
    width: 100%;
    justify-content: center;
`

export const TextAreaModal = styled.textarea`
    background-color: #FFF;
    width: 28rem;
    height: 80px;
    border: none;
    border-radius: 5px;
`

export const InputImage = styled.input`
    background-color: #FFF;
    width: 28rem;
    height: 35px;
    border: none;
    border-radius: 5px;
`

export const TextAreaModalComment = styled.textarea`
    background-color: #FFF;
    width: 28rem;
    height: 150px;
    border: none;
    border-radius: 5px;
`

/*export const EditButton = styled(Button)`
    background-color: #015F43;    
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const RegisterButton = styled(Button)`  
    background-color: #015F43;    
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LoginButton = styled(Button)` 
    background-color: #015F43;    
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const EditModalButton = styled(Button)`
    background-color: #015F43;    
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CommentProductModalButton = styled(Button)` 
    background-color: #015F43;    
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const DeleteButton = styled(Button)`     
    background-color: #F75A68;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const BackButton = styled(Button)`     
    background-color: #FBA94C;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CommentProductButton = styled(Button)`     
    background-color: #FBA94C;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LogoutButton = styled(Button)`     
    background-color: #FBA94C;
    display: flex;
    justify-content: center;
    align-items: center;
`;

*/
