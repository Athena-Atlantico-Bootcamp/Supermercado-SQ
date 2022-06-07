'use strict'

import express from 'express'
const router = express.Router()

import ProdutoController from './produtos-controller'
const produtoController = new ProdutoController()

router.post('/', (req, res, next) => {
  return produtoController.cadastrarProduto(req, res)
})

router.get('/', (req, res, next) => {
  return produtoController.mostrarProdutos(req, res)
})

router.get('/:id', (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.mostrarProdutoPorId(id_produto, res)
})

router.get('/usuario/:id', (req, res, next) => {
  const id_usuario = parseInt(req.params.id)
  console.log(req.params)
  return produtoController.mostrarProdutoPorIdUsuario(id_usuario, res)
})

router.patch('/:id', (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.atualizarProduto(id_produto, req, res)
})

router.delete('/:id', (req, res, next) => {
  const id_produto = parseInt(req.params.id)
  return produtoController.deletarProduto(id_produto, res)
})

export default router
