import { Form, AlignArea, Container, PasswordArea, Input, Label, ContainerLogin, Title, Line, ContainerSignUp, IconEye } from "./styles";
import ButtonsType from '../../components/Buttons/index'

function Login() {
    return (
        <Container>
            <ContainerLogin>
                <AlignArea>
                <Title>Login</Title><br/><br/><br/>
                </AlignArea>
                <Form>
                    <Label>Email: </Label><br/>
                    <Input type='text'/><br/><br/>
                    <Label>Senha: </Label><br/>
                    <PasswordArea>
                    <Input type='text'/><br/><br/>
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
                <Form>
                    <Label>Nome: </Label><br/>
                    <Input type='text'/><br/><br/>
                    <Label>Telefone: </Label><br/>
                    <Input type='text'/><br/><br/>
                    <Label>Restrições: </Label><br/>
                    <Input type='text'/><br/><br/>
                    <Label>Email: </Label><br/>
                    <Input type='text'/><br/><br/>
                    <Label>Senha: </Label><br/>
                    <Input type='text'/><br/><br/>
                    <AlignArea>
                    <ButtonsType tipo='Cadastrar'/>
                    </AlignArea>
                </Form>
            </ContainerSignUp>

        </Container>
    );
}

export default Login;