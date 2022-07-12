'use strict'

import express from 'express'
import autentificacao from '../middleware/autentificacao'
const router = express.Router()

import CommentController from '../controllers/comentarios-controller'
const commentController = new CommentController();

/**
 * @swagger
 * components:
 *   schemas:
 *       comentarios:
 *         type: object
 *         required:
 *         - id_comentario
 *         - texto_comentario
 *         - createdAt
 *         - usuarioId
 *         - produtoId
 *         properties:
 *           id_comentario:
 *             type: serial
 *             description: ID serial gerado automaticamente pelo banco de dados
 *           texto_comentario:
 *             type: string
 *             description: Texto que o usuário escreveu
 *           createdAt:
 *             type: date-time
 *             description: Dia e hora que o usuário escreveu o texto, gerado automaticamente pelo banco de dados
 *           usuarioId:
 *             type: integer
 *             description: ID do usuário que escreveu o comentário
 *           produtoId:
 *             type: integer
 *             description: ID do produto onde o comentário está sendo feito
 */

/**
 * @swagger
 * /comentarios:
 *   post:
 *     tags:
 *     - comentarios
 *     summary: Cadastra um novo comentario
 *     description: ""
 *     parameters:
 *     - in: body
 *       name: body
 *       description: O "objeto comentario" a ser adicionado ao banco de dados
 *       required: true
 *       schema:
 *         type: object
 *         required:
 *         - texto_comentario
 *         - usuarioId
 *         - produtoId
 *         properties:
 *           id_comentario:
 *             type: serial
 *             description: ID serial gerado automaticamente pelo banco de dados
 *           texto_comentario:
 *             type: string
 *             description: Texto do comentário
 *           usuarioId:
 *             type: string
 *             description: ID do usuario que escreveu o comentário
 *           produtoId:
 *             type: string
 *             description: ID do produto onde o comentário foi feito
 *           createdAt:
 *             type: date-time
 *             description: Data e hora que o comentário foi feito
 *         responses:
 *           201:
 *             description: Comentário cadastrado com sucesso
 *           400:
 *             description: Informação inválida (bad request)
 */

router.post('/', autentificacao, (req, res, next) => {
    return commentController.createComment(req,res)
})

/**
 * @swagger
 * /comentarios:
 *   get:
 *     tags:
 *     - comentarios
 *     summary: Mostra todos os comentarios cadastrados
 *     description: ""
 *     parameters: ""
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */

router.get('/', (req, res, next) => {
    return commentController.showAllComments(req,res)
})

/**
 * @swagger
 * /comentarios/{id}:
 *   get:
 *     tags:
 *     - comentarios
 *     summary: Mostra um comentario especificado pelo id do produto
 *     description: ""
 *     parameters:
 *     - name: id_produto
 *       in: path
 *       required: true
 *       description: O id do produto a ser pesquisado
 *       type: integer
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Informação inválida
 *       500:
 *         description: Internal Server Error
 */

router.get('/:id', (req, res, next) => {
    const id_product = parseInt(req.params.id)
    return commentController.showCommentByProductId(id_product, res)
})

/**
 * @swagger
 * /comentarios/usuario/{id}:
 *   get:
 *     tags:
 *     - comentarios
 *     summary: Mostra um comentario especificado pelo id do usuário
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
 *       400:
 *         description: Informação inválida
 *       500:
 *         description: Internal Server Error
 */


router.get('/usuario/:id', autentificacao,(req, res, next) => {
    const id_usuario = parseInt(req.params.id)
    return commentController.showCommentByUserId(id_usuario, res)
})   

/**
 * @swagger
 * /comentarios/{id}:
 *   patch:
 *     tags:
 *     - comentarios
 *     summary: Altera um comentario especificado pelo seu id
 *     description: ""
 *     parameters:
 *     - name: id_comentario
 *       in: path
 *       required: true
 *       description: O id do comentario a ser atualizado
 *       type: integer
 *     - body: body
 *       in: body
 *       required: true
 *       description: O json contendo os campos e valores a serem atualizados
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Informação inválida
 *       404:
 *         description: Comentário não encontrado
 *       500:
 *         description: Internal Server Error
 */

router.patch('/:id',autentificacao, (req, res, next) => {
    const id_comment = parseInt(req.params.id)
    return commentController.updateComment(id_comment, req, res)
})

/**
 * @swagger
 * /comentarios/{id}:
 *   delete:
 *     tags:
 *     - comentarios
 *     summary: Deleta um comentario especificado pelo seu id
 *     description: ""
 *     parameters:
 *     - name: id_comentario
 *       in: path
 *       required: true
 *       description: O id do comentario a ser deletado
 *       type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Comentário não encontrado
 *       500:
 *         description: Internal Server Error
 */

router.delete('/:id',autentificacao, (req, res, next) => {
    const id_comment = parseInt(req.params.id)
    return commentController.deleteCommentById(id_comment, res)
})

export default router;