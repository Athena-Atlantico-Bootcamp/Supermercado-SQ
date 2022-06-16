'use strict'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class ProdutoController {
  async createProduct(req, res) {
    const { nome, descricao, imagem, ingredientes, usuarioId } = req.body
    try{
      //verificar se o usuário existe
      const userExist = await prisma.usuarios.findUnique({ where: { id_usuario: usuarioId} });
      if (!userExist) {
        return res.status(404).json("Usuário não encontrado");
      }
      const product = await prisma.produtos.create({
        data: {
          nome,
          descricao,
          imagem,
          ingredientes,
          usuario: { connect: { id_usuario: usuarioId } }
        }
      })
      return res.status(201).json(product)
    }catch(e){
      return res.status(400).json(`Informação inválida`)
    }
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

  async showAllProductsWithoutIngredient(ingrediente, res) {
    const allProducts = await prisma.produtos.findMany()
    let products = []
    for (let i = 0; i < allProducts.length; i++) {
      if (!allProducts[i].ingredientes.includes(`${ingrediente}`)) {
        products.push(allProducts[i])
      }
    }
    return res.status(200).json(products)
  }

  async showProductById(id_produto, res) {
    const productExist = await prisma.produtos.findUnique({ where: { id_produto } });
    if (!productExist) {
      return res.status(400).json("Produto não encontrado");
    }
    const product = await prisma.produtos.findUnique({
      where: {
        id_produto
      }
    })
    return res.status(200).json(product)
  }

  async showAllProductByUserId(id_usuario, res) {
    const userExist = await prisma.usuarios.findUnique({ where: { id_usuario } });
    if (!userExist) {
      return res.status(400).json("Usuário não encontrado");
    }
    const product = await prisma.produtos.findMany({
      where: {
        usuarioId: id_usuario
      }
    })
    return res.status(200).json(product)
  }

  async updateProduct(id_produto, req, res) {
    try{
      const productExist = await prisma.produtos.findUnique({ where: { id_produto } });
      if (!productExist) {
        return res.status(400).json("Produto não encontrado");
      }  
      const newProduct = await prisma.produtos.update({
        where: {
          id_produto
        },
        data: req.body
      })
      return res.status(200).json(newProduct)
    }catch(e){
      return res.status(400).json(`Informação inválida`)
    }
  }

  async deleteProduct(id_produto, res) {
    const productExist = await prisma.produtos.findUnique({ where: { id_produto } });
    if (!productExist) {
      return res.status(400).json("Produto não encontrado");
    }  
    const deleteProduct = await prisma.produtos.delete({
      where: {
        id_produto
      }
    })
    return res.status(200).json('Produto deletado com sucesso.')
  }
}

export default ProdutoController
