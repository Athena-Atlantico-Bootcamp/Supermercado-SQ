'use strict'

import express from 'express'
import autentificacao from '../middleware/autentificacao'
const router = express.Router()

import ProdutoController from '../controllers/produtos-controller'
const produtoController = new ProdutoController()

/**
 * @swagger
 * components:
 *   schemas:
 *       produtos:
 *         type: object
 *         required:
 *         - id_produto
 *         - nome
 *         - ingredientes
 *         - usuarioId
 *         properties:
 *           id_produto:
 *             type: serial
 *             description: ID serial gerado automaticamente pelo banco de dados
 *           nome:
 *             type: string
 *             description: Nome do produto
 *           descricao:
 *             type: string
 *             description: Descrição do produto
 *           imagem:
 *             type: string
 *             description: Imagem do produto
 *           ingredientes:
 *             type: string
 *             description: Ingredientes do produto
 *           usuarioId:
 *             type: integer
 *             description: Id do usuário que cadastrou o produto
 */

/**
 * @swagger
 * /produtos:
 *   post:
 *     tags:
 *     - produtos
 *     summary: Cadastra um novo produto
 *     description: ""
 *     parameters:
 *     - in: body
 *       name: body
 *       description: O "objeto produto" a ser adicionado ao banco de dados
 *       required: true
 *       schema:
 *         type: object
 *         required:
 *         - nome
 *         - ingredientes
 *         - usuarioId
 *         properties:
 *           id_produto:
 *             type: serial
 *             description: ID serial gerado automaticamente pelo banco de dados
 *           nome:
 *             type: string
 *             description: Nome do produto
 *           descricao:
 *             type: string
 *             description: Descrição do produto
 *           imagem:
 *             type: string
 *             description: Caminho do arquivo de imagem do produto
 *           ingredientes:
 *             type: string
 *             description: Ingredientes do produto
 *           usuarioId:
 *             type: int
 *             description: ID do usuário que criou o produto
 *         responses:
 *           201:
 *             description: Produto cadastrado com sucesso
 *           400:
 *             description: Informação inválida (bad request)
 *           404:
 *             description: Usuário não encontrado
 */
router.post('/', autentificacao, (req, res, next) => {
  return produtoController.createProduct(req, res)
})

/**
 * @swagger
 * /produtos:
 *   get:
 *     tags:
 *     - produtos
 *     summary: Mostra todos os produtos cadastrados
 *     description: ""
 *     parameters: ""
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */

router.get('/', (req, res, next) => {
  return produtoController.showAllProducts(req, res)
})

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     tags:
 *     - produtos
 *     summary: Mostra um produtos especificado pelo seu id
 *     description: ""
 *     parameters:
 *     - name: id_produtos
 *       in: path
 *       required: true
 *       description: O id do produtos a ser pesquisado
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
  const id_produto = parseInt(req.params.id)
  return produtoController.showProductById(id_produto, res)
})

/**
 * @swagger
 * /produtos/usuario/{id}:
 *   get:
 *     tags:
 *     - produtos
 *     summary: Mostra os produtos criados pelo id do usuário
 *     description: ""
 *     parameters:
 *     - name: id_usuario
 *       in: path
 *       required: true
 *       description: O id do usuario que criou os produtos procurados
 *       type: integer
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Informação inválida
 *       500:
 *         description: Internal Server Error
 */

router.get('/usuario/:id', autentificacao, (req, res, next) => {
  const id_usuario = parseInt(req.params.id)
  return produtoController.showAllProductByUserId(id_usuario, res)
})

/**
 * @swagger
 * /produtos/ingrediente/{ingrediente}:
 *   get:
 *     tags:
 *     - produtos
 *     summary: Mostra os produtos que contém o ingrediente pesquisado
 *     description: ""
 *     parameters:
 *     - name: ingrediente
 *       in: path
 *       required: true
 *       description: O ingrediente que você deseja pesquisar os produtos que o apresentem
 *       type: string
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Informação inválida
 *       500:
 *         description: Internal Server Error
 */

router.get('/ingrediente/:ingrediente', (req, res, next) => {
  const ingrediente = req.params.ingrediente
  return produtoController.showAllProductsByIngredient(ingrediente, res)
})

/**
 * @swagger
 * /produtos/semingrediente/{ingrediente}:
 *   get:
 *     tags:
 *     - produtos
 *     summary: Mostra os produtos que não contém o ingrediente pesquisado
 *     description: ""
 *     parameters:
 *     - name: ingrediente
 *       in: path
 *       required: true
 *       description: O ingrediente que você deseja pesquisar os produtos não que o apresentem
 *       type: string
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Informação inválida
 *       500:
 *         description: Internal Server Error
 */

router.get('/semingrediente/:ingrediente', (req, res, next) => {
  const ingrediente = req.params.ingrediente
  return produtoController.showAllProductsWithoutIngredient(ingrediente, res)
})

/**
 * @swagger
 * /produtos/{id}:
 *   patch:
 *     tags:
 *     - produtos
 *     summary: Altera um produto especificado pelo seu id
 *     description: ""
 *     parameters:
 *     - name: id_produto
 *       in: path
 *       required: true
 *       description: O id do produto a ser atualizado
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
 *       500:
 *         description: Internal Server Error
 */

router.patch('/:id', autentificacao, (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.updateProduct(id_produto, req, res)
})

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     tags:
 *     - produtos
 *     summary: Deleta um produto especificado pelo seu id
 *     description: ""
 *     parameters:
 *     - name: id_produto
 *       in: path
 *       required: true
 *       description: O id do produto a ser deletado
 *       type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Internal Server Error
 */

router.delete('/:id', autentificacao, (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.deleteProduct(id_produto, res)
})

export default router
