import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    box-sizing: border-box;
    padding: 4rem 8rem 4rem 5rem;

    @media only screen and (max-width: 1070px) {
        padding: 4rem;
    }

    @media only screen and (max-width: 950px) {
        padding: 2rem;
    }

    @media only screen and (max-width: 768px) {
        padding: 1rem;
    }
`

export const ContainerTitulo = styled.div` 
    display: flex;
    justify-content: center;
`

export const Titulo = styled.p` 
    font-size: 2rem;
    font-weight: bold;
    color: #015F43;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 570px) {
        text-align: center;
    }
`

export const ContainerProdutos = styled.div` 
    box-sizing: border-box;
    width: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 0.5rem;

    @media only screen and (max-width: 1300px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 950px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 570px) {
        grid-template-columns: 1fr;
    }
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
