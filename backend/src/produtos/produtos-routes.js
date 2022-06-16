'use strict'

import express from 'express'
import autentificacao from '../middleware/autentificacao'
const router = express.Router()

import ProdutoController from './produtos-controller'
const produtoController = new ProdutoController()

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
router.post('/',autentificacao, (req, res, next) => {
  return produtoController.createProduct(req, res)
})

router.get('/', (req, res, next) => {
  return produtoController.showAllProducts(req, res)
})

router.get('/:id', (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.showProductById(id_produto, res)
})

router.get('/usuario/:id',autentificacao, (req, res, next) => {
  const id_usuario = parseInt(req.params.id)
  return produtoController.showAllProductByUserId(id_usuario, res)
})

router.get('/ingrediente/:ingrediente', (req, res, next) => {
  const ingrediente = req.params.ingrediente
  return produtoController.showAllProductsByIngredient(ingrediente, res)
})

router.get('/semingrediente/:ingrediente', (req, res, next) => {
  const ingrediente = req.params.ingrediente
  return produtoController.showAllProductsWithoutIngredient(ingrediente, res)
})

router.patch('/:id',autentificacao, (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.updateProduct(id_produto, req, res)
})

router.delete('/:id',autentificacao, (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.deleteProduct(id_produto, res)
})

export default router
