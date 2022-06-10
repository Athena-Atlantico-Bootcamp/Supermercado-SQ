'use strict'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class CommentController {

  async createComment(req, res) {
    const {texto_comentario, usuarioId, produtoId} = req.body
    const comment = await prisma.comentarios.create({
      data: {
        texto_comentario,
        usuario: { connect: { id_usuario: usuarioId } },
        produto: { connect: {id_produto: produtoId} }
      }
    })
    return res.status(200).json(comment)
  }

  async showAllComments (req, res) {
    const comments = await prisma.comentarios.findMany()
    return res.status(200).json(comments)
  }

  async showCommentByProductId(id_produto, res) {
    const product = await prisma.comentarios.findMany({
      where: {
        produtoId: id_produto
      }
    })
    return res.status(200).json(product)
  }

  async showCommentByUserId(id_usuario, res) {
    const user = await prisma.comentarios.findMany({
      where: {
        usuarioId: id_usuario       
      }
    })
    return res.status(200).json(user)
  }

  async checkIfCommentsExists(id_comment) {
    const comment = await prisma.comentarios.findUnique({
      where: {
        id_comentario: id_comment
      }   
    })


    if(!comment) {
      return false;
    } else {
      return true;
    }

  }

  async updateComment(id_comment, req, res) {
    let flagComment = await this.checkIfCommentsExists(id_comment)
    
    if(!flagComment) {
      return res.status(404).json('Comentário não encontrado.')
    }

    const newComment = await prisma.comentarios.update({
      where: {
        id_comentario: id_comment  
      },
      data: req.body
    })

    return res.status(200).json(newComment)
  }

  async deleteCommentByUserId(id_comment, res) {
    let flagComment = await this.checkIfCommentsExists(id_comment)

    if(!flagComment) {
      return res.status(404).json('Comentário não encontrado.')
    }

    const comments = await prisma.comentarios.delete({
      where: {
        id_comentario: id_comment
      }
    })

    return res.status(200).json('Comentário deletado!')

  }
  
}

export default CommentController