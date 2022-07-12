import styled from "styled-components";
import {PencilSimpleLine, TrashSimple} from 'phosphor-react';


export const Container = styled.div`
    
`

export const EditIcon = styled(PencilSimpleLine)`
    margin:5px;
`;

export const DeleteIcon = styled(TrashSimple)`
    margin:5px;
`

export const Button = styled.button `
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