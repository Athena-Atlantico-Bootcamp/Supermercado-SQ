import { Form, AlignArea, Container, PasswordArea, Input, Label, ContainerLogin, Title, Line, ContainerSignUp, IconEye } from "./styles";
import ButtonsType from '../../components/Buttons/index'
import Header from "../../components/Header/Header";
import { useState, useRef } from "react";
import api from "../../service/api";
function Login() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [constraint, setConstraint] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const formRef = useRef(null)

    function Cadastrar(data){
        e.preventDefault()
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

    function Logar(data) {
        e.preventDefault()
        alert(data)
        api.post('/usuarios/login/', {
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
   
    return (
        <>
            
            <Header/>

            <Container>
                <ContainerLogin>
                    <AlignArea>
                    <Title>Login</Title><br/><br/><br/>
                    </AlignArea>
                    <Form onSubmit={() => Logar([email,password])} ref={formRef}>
                        <Label>Email: </Label><br/>
                        <Input type='text' onChange={(e) => setEmail(e.target.value)}/><br/><br/>
                        <Label>Senha: </Label><br/>
                        <PasswordArea>
                        <Input type='password' onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                        <IconEye size={20} />
                        </PasswordArea>
                        <AlignArea>
                        <ButtonsType tipo='Login' data={[email,password]} type='submit'/>
                        </AlignArea>
                    </Form>
                </ContainerLogin>

                <Line/>

                <ContainerSignUp>
                    <AlignArea>
                    <Title>Cadastro</Title><br/><br/><br/>
                    </AlignArea>
                    <Form>
                        <Label>Nome: </Label><br/>
                        <Input type='text' onChange={(e) => setName(e.target.value)}/><br/><br/>
                        <Label>Telefone: </Label><br/>
                        <Input type='text' onChange={(e) => setPhone(e.target.value)}/><br/><br/>
                        <Label>Restrições: </Label><br/>
                        <Input type='text' onChange={(e) => setConstraint(e.target.value)}/><br/><br/>
                        <Label>Email: </Label><br/>
                        <Input type='email' onChange={(e) => setEmail(e.target.value)}/><br/><br/>
                        <Label>Senha: </Label><br/>
                        <Input type='password' onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                        <AlignArea>
                        <ButtonsType tipo='Cadastrar' data={[name, phone, constraint, email, password]}/>
                        </AlignArea>
                    </Form>
                </ContainerSignUp>

            </Container>
        </>
    );
}

export default Login;