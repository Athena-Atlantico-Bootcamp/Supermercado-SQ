import styled, {css} from "styled-components";
import {PencilSimpleLine, TrashSimple, XCircle, PlusCircle, PencilSimple, Trash, } from 'phosphor-react';

export const Container = styled.div`
    
`
export const ExitCircle = styled(XCircle)`
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 10px;
    cursor: pointer;
`

export const EditCommentIcon = styled(PencilSimple)`
    padding-left: 1rem;
`
export const DeleteCommentIcon = styled(Trash)`
    padding-left: 1rem;
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
    width: 100%;
`
export const LabelModal = styled.label`
    font-size: 15px;
    color: #000000;
`

export const InputModal = styled.input`
    background-color: #FFF;
    width: 100%;
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
    width: 100%;
    height: 80px;
    border: none;
    border-radius: 5px;
`

export const InputImage = styled.input`
    background-color: #FFF;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 5px;
`

export const TextAreaModalComment = styled.textarea`
    background-color: #FFF;
    width: 100%;
    height: 150px;
    border: none;
    border-radius: 5px;
`

export const ButtonCadastrar = styled.button `
  align-items: center;
  background-color: #015F43;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  padding: 10px;
  margin: auto;
`

export const PlusCircleIcon = styled(PlusCircle) `
    margin: 5px;
    font-size: 25px;
    color: #ffffff;
`
export const AlignIcons = styled.div`
    display: flex;
    justify-content: space-around;
    bottom: -1px;
    margin-right: 55rem;
    cursor: pointer;
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
