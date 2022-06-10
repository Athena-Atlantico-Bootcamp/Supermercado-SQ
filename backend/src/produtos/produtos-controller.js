'use strict'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class ProdutoController {
  async createProduct(req, res) {
    const { nome, descricao, imagem, ingredientes, usuarioId } = req.body
    const product = await prisma.produtos.create({
      data: {
        nome,
        descricao,
        imagem,
        ingredientes,
        usuario: { connect: { id_usuario: usuarioId } }
      }
    })
    return res.status(200).json(product)
  }

  async showAllProducts(req, res) {
    const products = await prisma.produtos.findMany()
    return res.status(200).json(products)
  }

  async showAllProductsByIngredient(ingrediente, res) {
    const allProducts = await prisma.produtos.findMany()
    let products = []
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].ingredientes.includes(`${ingrediente}`)) {
        products.push(allProducts[i])
      }
    }
    return res.status(200).json(products)
  }

  async checkIfProductExists(id_produto) {
    const product = await prisma.produtos.findUnique({
      where: {
        id_produto: id_produto
      }
    })

    if (!product) {
      return false
    } else {
      return true
    }
  }

  async showAllProductById(id_produto, res) {
    let flagProduct = await this.checkIfProductExists(id_produto)

    if (!flagProduct) {
      return res.status(404).json('Produto não encontrado.')
    }

    const product = await prisma.produtos.findUnique({
      where: {
        id_produto: id_produto
      }
    })
    return res.status(200).json(product)
  }

  async showAllProductByUserId(id_usuario, res) {
    const product = await prisma.produtos.findMany({
      where: {
        usuarioId: id_usuario
      }
    })
    return res.status(200).json(product)
  }

  async updateProduct(id_produto, req, res) {
    let flagProduct = await this.checkIfProductExists(id_produto)

    if (!flagProduct) {
      return res.status(404).json('Produto não encontrado.')
    }

    const newProduct = await prisma.produtos.update({
      where: {
        id_produto: id_produto
      },
      data: req.body
    })
    return res.status(200).json(newProduct)
  }

  async deleteProduct(id_produto, res) {
    let flagProduct = await this.checkIfProductExists(id_produto)

    if (!flagProduct) {
      return res.status(404).json('Produto não encontrado.')
    }

    const deleteProduct = await prisma.produtos.delete({
      where: {
        id_produto: id_produto
      }
    })
    return res.status(200).json('Produto deletado com sucesso.')
  }
}

export default ProdutoController
