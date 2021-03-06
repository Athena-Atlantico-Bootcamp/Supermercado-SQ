import styled from 'styled-components'
import { EyeSlash } from 'phosphor-react'
import { Eye } from 'phosphor-react'

export const IconEye = styled(EyeSlash)`
  text-align: center;
`

export const IconEyeOpen = styled(Eye)`
  text-align: center;
`

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1700px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1450px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1150px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.label`
  font-size: 25px;
  color: #015f43;
  font-weight: bold;
  text-align: center;
`

export const Form = styled.form``

export const ContainerLogin = styled.div`
  flex-direction: column;
  height: 500px;
  padding: 50px;
  min-width: 300px;

  @media only screen and (max-width: 800px) {
    height: 100px;
  }
`
export const ContainerSignUp = styled.div`
  padding: 50px;
  height: 500px;
  min-width: 300px;
`
export const AlignArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Label = styled.label`
  font-size: 15px;
  color: #000000;
`
export const PasswordArea = styled.div`
  background-color: #fff;
  max-height: 30px;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  border-radius: 5px;
`

export const Line = styled.div`
  border-left: 3px solid #fba94c;
  height: 400px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    transform: rotate(90deg);
  }
`
