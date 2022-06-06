'use strict'

import express from 'express'
const router = express.Router()

import UsuarioController from './usuarios-controller'
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
    return usuarioController.cadastrarUsuario(req, res)
})

// Retorna todos os usuários cadastrados
router.get('/', (req, res, next) => {
    return usuarioController.mostrarUsuarios(req, res)
})

// Retorna um usuário especificado pelo seu id
router.get('/:id', (req, res, next) => {
    const id_usuario = parseInt(req.params.id)
    return usuarioController.mostrarUsuarioPorId(id_usuario, res)
})

// Altera o registro de um usuário especificado pelo seu id
router.patch('/:id', (req, res, next) => {
    const id_usuario = parseInt(req.params.id)
    return usuarioController.atualizarUsuario(id_usuario, req, res)
})

// Deleta um usuário especificado pelo seu id
router.delete('/:id', (req, res, next) => {
    const id_usuario = parseInt(req.params.id)
    return usuarioController.deletarUsuario(id_usuario, res)
})

export default router