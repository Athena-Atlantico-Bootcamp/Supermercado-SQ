'use strict'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class ProdutoController {
  async cadastrarProduto(req, res) {
    const { nome, descricao, imagem, ingredientes, usuarioId } = req.body
    const produto = await prisma.produtos.create({
      data: {
        nome,
        descricao,
        imagem,
        ingredientes,
        usuario: { connect: { id_usuario: usuarioId } }
      }
    })
    return res.status(200).json(produto)
  }

  async mostrarProdutos(req, res) {
    const produtos = await prisma.produtos.findMany()
    return res.status(200).json(produtos)
  }

  async verificarSeProdutoExiste(id_produto) {
    const produto = await prisma.produtos.findUnique({
      where: {
        id_produto: id_produto
      }
    })

    if (!produto) {
      return false
    } else {
      return true
    }
  }

  async mostrarProdutoPorId(id_produto, res) {
    let flagProduto = await this.verificarSeProdutoExiste(id_produto)

    if (!flagProduto) {
      return res.status(404).json('Produto não encontrado.')
    }

    const produto = await prisma.produtos.findUnique({
      where: {
        id_produto: id_produto
      }
    })
    return res.status(200).json(produto)
  }

  async mostrarProdutoPorIdUsuario(id_usuario, res) {
    const produto = await prisma.produtos.findMany({
      where: {
        usuarioId: id_usuario
      }
    })
    return res.status(200).json(produto)
  }

  async atualizarProduto(id_produto, req, res) {
    let flagProduto = await this.verificarSeProdutoExiste(id_produto)

    if (!flagProduto) {
      return res.status(404).json('Produto não encontrado.')
    }

    const produtoAtualizado = await prisma.produtos.update({
      where: {
        id_produto: id_produto
      },
      data: req.body
    })
    return res.status(200).json(produtoAtualizado)
  }

  async deletarProduto(id_produto, res) {
    let flagProduto = await this.verificarSeProdutoExiste(id_produto)

    if (!flagProduto) {
      return res.status(404).json('Produto não encontrado.')
    }

    const produtoDeletado = await prisma.produtos.delete({
      where: {
        id_produto: id_produto
      }
    })
    return res.status(200).json('Usuário deletado com sucesso.')
  }
}

export default ProdutoController
