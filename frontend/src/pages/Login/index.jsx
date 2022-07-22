import { Form, AlignArea, Container, PasswordArea, Input, Label, ContainerLogin, Title, Line, ContainerSignUp, IconEye , IconEyeOpen} from "./styles";
import ButtonsType from '../../components/Buttons/index'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { useState, useRef } from "react";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [constraint, setConstraint] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [showPasswordLogin, setShowPasswordLogin] = useState(false)
    
    const formRef = useRef(null)

    function Cadastrar(e){
        CheckDadosCadastrar()
        e.preventDefault()
        let check_user = email.split('@')
        let type_user = ''
        if (check_user[1] == 'gmail.com') {
            type_user = 'usuario'
            
        }else {
            type_user = 'fornecedor'
        }
        try{
            api.post('/usuarios/', {
                email: email,
                nome: name,
                senha: password,
                telefone: parseInt(phone),
                restricoes: constraint,
                tipo_usuario: type_user,
            }).then(function (res){
                setName('')
                setEmail('')
                setPassword('')
                setConstraint('')
                setPhone('')
                notifyCadastro()
            })
        } catch (error) {
            console.error(error)
        }
        
    }

    function Logar(e) {
        CheckDadosLogin()
        e.preventDefault()
        try{
            api.post('/usuarios/login/', {
                email: emailLogin,
                senha: passwordLogin
            }).then(function (res){
                localStorage.setItem('@usuario', JSON.stringify(res.data.userEmail.id_usuario))
                localStorage.setItem('@tipo_usuario', JSON.stringify(res.data.userEmail.tipo_usuario))
                localStorage.setItem('@token', JSON.stringify(res.data.token))
                if (JSON.parse(localStorage.getItem('@tipo_usuario')) == 'usuario') {
                    navigate('/perfil')
                }else {
                    navigate('/perfil-adm')
                }
            });
        } catch (error) {
            console.error(error)
        }
    }

    const notify = () => {
        toast.error('Por favor, preencher todos os campos obrigatórios', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    const notifyCadastro = () => {
        toast.success('Usuário cadastrado com sucesso', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    function CheckDadosCadastrar(){
        if (name == '' || phone =='' || email == '' || password == ''){
            notify();
        }
    }

    function CheckDadosLogin(){
        if (emailLogin == '' || passwordLogin == ''){
            notify();
            return
        }
    }
   
    return (
        <>
            
            <Header/>

            <Container>
                <ToastContainer />
                <ContainerLogin>
                    <AlignArea>
                    <Title>Login</Title><br/><br/><br/>
                    </AlignArea>
                    <Form onSubmit={Logar} ref={formRef}>
                        <Label>Email: </Label><br/>
                        <Input type='email' onChange={(e) => setEmailLogin(e.target.value)} value={emailLogin}/><br/><br/>
                        <Label>Senha: </Label><br/>
                        <PasswordArea>
                        <Input type={showPasswordLogin ? 'text' : 'password'} onChange={(e) => setPasswordLogin(e.target.value)} value={passwordLogin}/><br/><br/>
                        {showPasswordLogin 
                        ? 
                            <IconEye size={20} onClick={() => setShowPasswordLogin(!showPasswordLogin)}/>
                        : 
                            <IconEyeOpen size={20} onClick={() => setShowPasswordLogin(!showPasswordLogin)}/>}
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
                        <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email}/><br/><br/>
                        <Label>Senha: </Label><br/>
                        <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password}/><br/><br/>
                        <AlignArea>
                            <ButtonsType tipo='Cadastrar'/>
                        </AlignArea>
                    </Form>
                </ContainerSignUp>

            </Container>
            <Footer />
        </>
    );
}

export default Login;