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

  async showCommentByUserId(id_usuario, res) {
  
  }

  
}