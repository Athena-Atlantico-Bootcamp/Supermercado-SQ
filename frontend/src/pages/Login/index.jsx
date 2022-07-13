import { Form, AlignArea, Container, PasswordArea, Input, Label, ContainerLogin, Title, Line, ContainerSignUp, IconEye } from "./styles";
import ButtonsType from '../../components/Buttons/index'
import Header from "../../components/Header/Header";
import { useState, useRef } from "react";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";
function Login() {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [constraint, setConstraint] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    
    const formRef = useRef(null)

    function Cadastrar(e){
        e.preventDefault()
        let check_user = email.split('@')
        let type_user = ''
        if (check_user[1] == 'gmail.com') {
            type_user = 'usuario'
            
        }else {
            type_user = 'fornecedor'
        }
        console.log(type_user)
        try{
            api.post('/usuarios/', {
                email: email,
                nome: name,
                senha: password,
                telefone: parseInt(phone),
                restricoes: constraint,
                tipo_usuario: type_user,
            }).then(function (res){
                //console.log(res.data)
                setName('')
                setEmail('')
                setPassword('')
                setConstraint('')
                setPhone('')
            })
        } catch (error) {
            console.error(error)
        }
        
    }

    function Logar(e) {
        e.preventDefault()
        try{
            console.log(emailLogin)
            console.log(passwordLogin)
            api.post('/usuarios/login/', {
                email: emailLogin,
                senha: passwordLogin
            }).then(function (res){
                if (res.data.tipo_usuario == 'usuario') {
                    navigate('/perfil')
                }else {
                    navigate('/perfil-adm')
                }
            });
        } catch (error) {
            console.error(error)
        }
    }
   
    return (
        <>
            
            <Header/>

            <Container>
                <ContainerLogin>
                    <AlignArea>
                    <Title>Login</Title><br/><br/><br/>
                    </AlignArea>
                    <Form onSubmit={Logar} ref={formRef}>
                        <Label>Email: </Label><br/>
                        <Input type='text' onChange={(e) => setEmailLogin(e.target.value)} value={emailLogin}/><br/><br/>
                        <Label>Senha: </Label><br/>
                        <PasswordArea>
                        <Input type='password' onChange={(e) => setPasswordLogin(e.target.value)} value={passwordLogin}/><br/><br/>
                        <IconEye size={20} />
                        </PasswordArea>
                        <AlignArea>
                        <ButtonsType tipo='Login'/>
                        </AlignArea>
                    </Form>
                </ContainerLogin>

                <Line/>

                <ContainerSignUp>
                    <AlignArea>
                        <Title>Cadastro</Title><br/><br/><br/>
                    </AlignArea>
                    <Form onSubmit={Cadastrar} ref={formRef}>
                        <Label>Nome: </Label><br/>
                        <Input type='text' onChange={(e) => setName(e.target.value)} value={name}/><br/><br/>
                        <Label>Telefone: </Label><br/>
                        <Input type='text' onChange={(e) => setPhone(e.target.value)} value={phone}/><br/><br/>
                        <Label>Restrições: </Label><br/>
                        <Input type='text' onChange={(e) => setConstraint(e.target.value)} value={constraint}/><br/><br/>
                        <Label>Email: </Label><br/>
                        <Input type='text' onChange={(e) => setEmail(e.target.value)} value={email}/><br/><br/>
                        <Label>Senha: </Label><br/>
                        <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password}/><br/><br/>
                        <AlignArea>
                            <ButtonsType tipo='Cadastrar'/>
                        </AlignArea>
                    </Form>
                </ContainerSignUp>

            </Container>
        </>
    );
}

export default Login;