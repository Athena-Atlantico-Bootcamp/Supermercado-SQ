import { useState } from 'react'
import ButtonsType from '../components/Buttons/ButtonsType'

function App() {


  return (
    <div className="App">
      <p>Tela Inicial</p>
      <div className='teste-botoes'>
        <ButtonsType tipo='Editar'/><br/>
        <ButtonsType tipo='Voltar'/><br/>
        <ButtonsType tipo='Deletar'/><br/>
        <ButtonsType tipo='Comentar Produto'/><br/>
        <ButtonsType tipo='Comentar Produto Modal'/><br/>
        <ButtonsType tipo='Logout'/><br/>
        <ButtonsType tipo='Editar Modal'/><br/>
        <ButtonsType tipo='Login'/><br/>
        <ButtonsType tipo='Cadastrar'/>
      </div>
    </div>
  )
}

export default App
