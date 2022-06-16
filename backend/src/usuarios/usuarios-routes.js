'use strict'

import express from 'express'
const router = express.Router()

import UsuarioController from './usuarios-controller'
import autentificacao from '../middleware/autentificacao'
const usuarioController = new UsuarioController()

/**
 * @swagger
 * components:
 *   schemas:
 *       usuarios:
 *         type: object
 *         required:
 *         - id_usuario
 *         - email
 *         - nome
 *         - telefone
 *         - restricoes
 *         - tipo_usuario
 *         properties:
 *           id_usuario:
 *             type: serial
 *             description: ID serial gerado automaticamente pelo banco de dados
 *           email: 
 *             type: string
 *             description: Email do usuário
 *           nome:
 *             type: string
 *             description: Email do usuário
 *           telefone:
 *             type: integer
 *             description: Telefone do usuário
 *           restricoes:
 *             type: string
 *             description: Restrições alimentícias do usuário
 *           tipo_usuario:
 *             type: string
 *             description: Tipo do usuário (admin, fornecedor, cliente)
 */

/**
 * @swagger
 * /usuarios:
 *   post:
 *     tags:
 *     - usuarios
 *     summary: Cadastra um novo usuário
 *     description: ""
 *     parameters:
 *     - in: body
 *       name: body
 *       description: O "objeto usuário" a ser adicionado ao banco de dados
 *       required: true
 *       schema:
 *         type: object
 *         required:
 *         - id_usuario
 *         - email
 *         - nome
 *         - telefone
 *         - restricoes
 *         - tipo_usuario
 *         properties:
 *           id_usuario:
 *             type: serial
 *             description: ID serial gerado automaticamente pelo banco de dados
 *           email: 
 *             type: string
 *             description: Email do usuário
 *           nome:
 *             type: string
 *             description: Email do usuário
 *           telefone:
 *             type: integer
 *             description: Telefone do usuário
 *           restricoes:
 *             type: string
 *             description: Restrições alimentícias do usuário
 *           tipo_usuario:
 *             type: string
 *             description: Tipo do usuário (admin, fornecedor, cliente)
 *         responses:
 *           200:
 *             description: Usuário cadastrado com sucesso
 *           400:
 *             description: Bad Request
 *           500:
 *             description: Internal Server Error
 */
// Adiciona um novo usuário ao banco de dados
router.post('/', (req, res, next) => {
    // Falta validação de dados de entrada - fazer no front??
    return usuarioController.createUser(req, res)
})

router.post('/login', (req, res, next) => {
    // Falta validação de dados de entrada - fazer no front??
    return usuarioController.login(req, res)
})

/**
 * @swagger
 * /usuarios:
 *   get:
 *     tags:
 *     - usuarios
 *     summary: Mostra todos os usuários cadastrados
 *     description: ""
 *     parameters: ""
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */
// Mostra todos os usuários cadastrados
router.get('/',autentificacao, (req, res, next) => {
    return usuarioController.showAllUsers(req, res)
})

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     tags:
 *     - usuarios
 *     summary: Mostra um usuário especificado pelo seu id
 *     description: ""
 *     parameters:
 *     - name: id_usuario
 *       in: path
 *       required: true
 *       description: O id do usuário a ser pesquisado
 *       type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Internal Server Error
 */
// Mostra um usuário especificado pelo seu id
router.get('/:id', autentificacao, (req, res, next) => {
    const id_usuario = parseInt(req.params.id)
    return usuarioController.showUserById(id_usuario, res)
})

/**
 * @swagger
 * /usuarios/{id}:
 *   patch:
 *     tags:
 *     - usuarios
 *     summary: Altera um usuário especificado pelo seu id
 *     description: ""
 *     parameters:
 *     - name: id_usuario
 *       in: path
 *       required: true
 *       description: O id do usuário a ser atualizado
 *       type: integer
 *     - body: body
 *       in: body
 *       required: true
 *       description: O json contendo os campos e valores a serem atualizados
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Internal Server Error
 */
// Altera o registro de um usuário especificado pelo seu id
router.patch('/:id', autentificacao,(req, res, next) => {
    const id_usuario = parseInt(req.params.id)
    return usuarioController.updateUser(id_usuario, req, res)
})

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     tags:
 *     - usuarios
 *     summary: Deleta um usuário especificado pelo seu id
 *     description: ""
 *     parameters:
 *     - name: id_usuario
 *       in: path
 *       required: true
 *       description: O id do usuário a ser deletado
 *       type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Internal Server Error
 */
// Deleta um usuário especificado pelo seu id
router.delete('/:id',autentificacao, (req, res, next) => {
    const id_usuario = parseInt(req.params.id)
    return usuarioController.deleteUser(id_usuario, res)
})

export default router