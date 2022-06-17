# Supermercado-SQ
![status](https://img.shields.io/badge/status-under%20development-yellow) ![contributors](https://img.shields.io/github/contributors/Athena-Atlantico-Bootcamp/Supermercado-SQ)
![size](https://img.shields.io/github/repo-size/Athena-Atlantico-Bootcamp/Supermercado-SQ) 
![lines](https://img.shields.io/tokei/lines/github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ)

Repositório criado para armazenar os códigos do projeto Supermercado SQ, proposto no Atlântico Academy Bootcamp Fullstack oferecido pelo [Instituto Atlântico](https://www.linkedin.com/company/instituto-atlantico/)

## :open_book: Índice
* [Sobre o Projeto](#speech_balloon-sobre-o-projeto)
* [Elicitação dos Requisitos](#memo-elicitação-de-requisitos)
* [Atores do Sistema](#busts_in_silhouette-atores-do-sistema)
* [Requisitos Funcionais](#gear-requisitos-funcionais)
* [Regras de Negócio](#briefcase-regras-de-négocio)
* [Modelagem da Visão Gerão](#world_map-modelagem-da-visão-geral)
* [Telas identificadas para o sistema](#detective-telas-identificadas-para-o-sistema)
* [Modelo de Dados - Conceitual](#bulb-modelo-de-dados---conceitual)
* [Modelo de Dados - Lógico](#bulb-modelo-de-dados---lógico)
* [Planejamento](#memo-planejamento)
* [Equipe](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ/edit/main/README.md#man_technologist-equipe)


## :speech_balloon: Sobre o Projeto

O supermercado SQ necessita de um sistema de gerenciamento de alimentos e composições alimentares.

Esse sistema poderá ser acessado pelos administradores do SQ, pelos fornecedores e pelos clientes.

O usuário poderá cadastrar produtos industrializados fornecendo quais ingredientes tem em sua composição. Dessa forma, em outros momentos será fácil pesquisar e confirmar se um produto contém ou não determinado ingrediente utilizando essa aplicação. Podendo até ser escalado o seu uso para usuários globais, como uma espécie de comunidade.

⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :memo: Elicitação de Requisitos
* Possibilidade de cadastrar, visualizar, editar e deletar produtos (utilizando banco de dados)
* O produto deve ter nome e conter seus ingredientes, imagem (opcional)
* Possibilidade de pesquisar por alimentos e visualizar os ingredientes
* Na página de visualização do alimento, ter a possibilidade de buscar por um determinado ingrediente (para confirmar se este ingrediente está presente ou não)
* Possibilidade de filtrar alimentos que não tenham determinados ingredientes
* Possibilidade de filtrar alimentos que tenham determinados ingredientes

⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :busts_in_silhouette: Atores do Sistema


⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :gear: Requisitos Funcionais


⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :briefcase: Regras de Négocio


⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :world_map: Modelagem da Visão Geral


⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :detective: Telas identificadas para o sistema


⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :bulb: Modelo de Dados - Conceitual 
![dados-conceitual](https://user-images.githubusercontent.com/100374064/170592575-a8211d3a-3fef-47e3-8df2-68595f9cbab5.jpeg)


⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :bulb: Modelo de Dados - Lógico 
![dados-logico](https://user-images.githubusercontent.com/100374064/170592780-9f3eea03-d9b9-4a49-af98-eb5c9a593acb.jpeg)


⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :memo: Planejamento

<details>
  <summary><b>Entrega 1 - Camada de dados</b></summary>
  <table>
    <tr>
      <th>Feature</th>
      <th>Stories</th>
      <th>Tasks</th>
      <th>Responsáveis</th>
      <th>Prazo</th>
    </tr>
    <tr>
      <td rowspan="5" align="center"><b>Organizar o Squad</b></td>
      <td rowspan="2">Divisão de tarefas dentro do time</td>
      <td>Falar sobre seus interesses</td>
      <td align="center">Todos</td>
      <td align="center">04/22</td>
    </tr>
    <tr>
      <td>Listar suas skills</td>
      <td align="center">Todos</td>
      <td align="center">04/22</td>
    </tr>
    <tr>
      <td rowspan="3">Planejamento preliminar</td>
      <td>Fazer um brainstorming de ideias sobre o projeto</td>
      <td align="center">Todos</td>
      <td align="center">04/22</td>
    </tr>
    <tr>
      <td>Listar e dividir as tarefas e responsabilidades</td>
      <td align="center">Todos</td>
      <td align="center">04/22</td>
    </tr>
    <tr>
      <td>Decidir dia e horário da reunião semanal</td>
      <td align="center">Todos</td>
      <td align="center">04/22</td>
    </tr>
    <tr>
      <td rowspan="6" align="center"><b>Camada de Dados</b></td>
      <td rowspan="2">Modelagem de dados</td>
      <td>Realizar a modelagem conceitual</td>
      <td align="center">Ada<b>*</b></td>
      <td align="center">19/05/2022</td>
    </tr>
    <tr>
      <td>Realizar a modelagem lógica</td>
      <td align="center">Ada<b>*</b></td>
      <td align="center">19/05/2022</td>
    </tr>
    <tr>
      <td>Modelagem de Caso de Uso</td>
      <td>Realizar a modelagem de caso de uso</td>
      <td align="center">Luiza<b>*</b></td>
      <td align="center">19/05/2022</td>
    </tr>
    <tr>
      <td>Revisão</td>
      <td>Revisar as modelagens com a professora / monitores</td>
      <td align="center">Todos</td>
      <td align="center">18/05/2022</td>
    </tr>
    <tr>
      <td rowspan="2">Banco de dados</td>
      <td>Decidir qual BD vamos utilizar</td>
      <td align="center">Todos</td>
      <td align="center">30/04/2022</td>
    </tr>
    <tr>
      <td>Criar o banco de dados</td>
      <td align="center">Anderson<b>*</b></td>
      <td align="center">19/05/2022</td>
    </tr>
    <tr>
      <td rowspan="2" align="center"><b>Entrega 01</b></td>
      <td rowspan="2">Realizar entrega 01 - Módulo Inicial</td>
      <td>Entregar Camada de dados</td>
      <td align="center">Luiza</td>
      <td align="center">21/05/2022</td>
    </tr>
    <tr>
      <td>Entregar o projeto de implementação / divisão das atividades</td>
      <td align="center">Luiza / Beatriz</td>
      <td align="center">21/05/2022</td>
    </tr>
  </table>
</details>

<details>
  <summary><b>Entrega 2 - Backend</b></summary>
  <table>
    <tr>
      <th>Feature</th>
      <th>Stories</th>
      <th>Tasks</th>
      <th>Responsáveis</th>
      <th>Prazo</th>
    </tr>
    <tr>
      <td rowspan="11" align="center"><b>Backend</b></td>
      <td>Escolher a tecnologia backend</td>
      <td>Discutir e decidir em grupo</td>
      <td align="center">Todos</td>
      <td align="center">22/05/2022</td>
    </tr>
    <tr>
      <td>Models component</td>
      <td>Implementar o models component</td>
      <td align="center">Beatriz*</td>
      <td align="center">05/06/2022</td>
    </tr>
    <tr>
      <td>CRUD Usuários</td>
      <td>Implementar o CRUD de usuários (rotas e controllers)</td>
      <td align="center">Beatriz / Anderson</td>
      <td align="center">05/06/2022</td>
    </tr>
    <tr>
      <td>CRUD Produtos</td>
      <td>Implementar o CRUD de produtos (rotas e controllers)</td>
      <td align="center">Luiza</td>
      <td align="center">07/06/2022</td>
    </tr>
    <tr>
      <td>CRUD Comentários</td>
      <td>Implementar o CRUD de comentários (rotas e controllers)</td>
      <td align="center">Ada / Leonardo / Lucas / João</td>
      <td align="center">12/06/2022</td>
    </tr>
    <tr>
      <td rowspan="2">Conectar backend com o banco de dados e testar conexão</td>
      <td>Implementar a conexão string para base de dados</td>
      <td align="center">Todos</td>
      <td align="center">18/06/2022</td>
    </tr>
    <tr>
      <td>Testar a conexão usando o Insomnia</td>
      <td align="center">Todos</td>
      <td align="center">18/06/2022</td>
    </tr>
    <tr>
      <td>Login e autenticação</td>
      <td>Implementar autenticação com JWT e Bcrypt</td>
      <td align="center">Luiza*</td>
      <td align="center">14/06/2022</td>
    </tr>
    <tr>
      <td>Documentação da API</td>
      <td>Documentação das rotas e schemas através do Swagger</td>
      <td align="center">Beatriz</td>
      <td align="center">18/06/2022</td>
    </tr>
    <tr>
      <td>Deploy do Banco de Dados</td>
      <td>Deploy através do Heroku</td>
      <td align="center">Lucas*</td>
      <td align="center">16/06/2022</td>
    </tr>
    <tr>
      <td>Deploy da API</td>
      <td>Deploy através do Heroku</td>
      <td align="center">João*</td>
      <td align="center">18/06/2022</td>
    </tr>
    <tr>
      <td align="center"><b>Entrega 02</b></td>
      <td>Realizar entrega 02 - Módulo Intermediário</td>
      <td>Entregar API testada e funcional (requisições) através de um repositório no GitHub</td>
      <td align="center"></td>
      <td align="center">18/06/2022</td>
    </tr>
  </table>
</details>

<details>
  <summary><b>Entrega 3 - Frontend</b></summary>
</details>

Obs.: Nomes marcados com * indicam que a atividade foi realizada em grupo e a pessoa estava compartilhando a tela.

⬆️ [Voltar ao índice](https://github.com/Athena-Atlantico-Bootcamp/Supermercado-SQ#open_book-%C3%ADndice)

## :man_technologist: Equipe
Equipe de desenvolvimento: Squad 3 - **Athena**

<table align="center">
  <tr align="center">
    <td>
      <a href="https://github.com/adaDiniz">
        <img src="https://avatars.githubusercontent.com/u/100374064?v=4" width=80 />
        <p>Ada<br/d>Diniz</p>
      </a>
      <p>:purple_heart:</p>
    </td>
    <td>
      <a href="https://github.com/beatrizmakowski">
        <img src="https://avatars.githubusercontent.com/u/86008015?v=4" width=80 />
        <p>Beatriz<br/>Makowski</p>
      </a>
      <p>:nerd_face:</p>
    </td>
    <td>
      <a href="https://github.com/joaovictorgit">
        <img src="https://avatars.githubusercontent.com/u/61315569?v=4" width=80 />
        <p>João Victor<br/>Almeida</p>
      </a>
      <p>🌌</p>
    </td>
    <td>
        <a href="https://github.com/leonardo-felipe">
          <img src="https://avatars.githubusercontent.com/u/60754433?v=4" width=80 />
          <p>Leonardo<br/>Felipe</p>
        </a>
        <p>😃</p>
     </td>
     <td>
        <a href="https://github.com/lucasoliv21">
          <img src="https://avatars.githubusercontent.com/u/73923109?v=4" width=80 />
          <p>Lucas<br/>Cesar</p>
        </a>
        <p>🌌</p>
      </td>
       <td>
        <a href="https://github.com/LuizaGA">
          <img src="https://avatars.githubusercontent.com/u/89354119?v=4" width=80 />
          <p>Luiza<br/>GA</p>
        </a>
        <p>:star2:</p>
      </td>
     <td>
      <a href="https://github.com/PauloAndersonN">
        <img src="https://avatars.githubusercontent.com/u/6969530?v=4" width=80 />
        <p>Anderson<br/>#</p>
      </a>
      <p>🌌</p>
    </td>
  </tr> 
   
</table>
