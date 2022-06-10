'use strict'

import express from 'express'
const router = express.Router()

import ProdutoController from './produtos-controller'
const produtoController = new ProdutoController()

router.post('/', (req, res, next) => {
  return produtoController.createProduct(req, res)
})

router.get('/', (req, res, next) => {
  return produtoController.showAllProducts(req, res)
})

router.get('/:id', (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.showAllProductById(id_produto, res)
})

router.get('/usuario/:id', (req, res, next) => {
  const id_usuario = parseInt(req.params.id)
  return produtoController.showAllProductByUserId(id_usuario, res)
})

router.get('/ingrediente/:ingrediente', (req, res, next) => {
  const ingrediente = req.params.ingrediente
  return produtoController.showAllProductsByIngredient(ingrediente, res)
})

router.patch('/:id', (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.updateProduct(id_produto, req, res)
})

router.delete('/:id', (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.deleteProduct(id_produto, res)
})

export default router
