'use strict'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class CommentController {

  async createComment(req, res) {
    const {texto_comentario, usuarioId, produtoId} = req.body
    try{
      const comment = await prisma.comentarios.create({
        data: {
          texto_comentario,
          usuario: { connect: {id_usuario: usuarioId} },
          produto: { connect: {id_produto: produtoId} }
        }
      })
       return res.status(201).json(comment)
    }
    catch (e){
       return res.status(400).json('Informação inválida')
    }
  }

  async showAllComments (req, res) {
    const comments = await prisma.comentarios.findMany()
    return res.status(200).json(comments)
  }

  async showCommentByProductId(id_produto, res) {
    try{
      const product = await prisma.comentarios.findMany({
        where: {
          produtoId: id_produto
        }
      })
      return res.status(200).json(product)
    }
    catch (e) {
      return res.status(400).json('Informação inválida')
    }  
 }

  async showCommentByUserId(id_usuario, res) {
    try{
      const user = await prisma.comentarios.findMany({
        where: {
          usuarioId: id_usuario       
        }
      })
      return res.status(200).json(user)
    }
    catch (e) {
      return res.status(400).json('Informação inválida')
    }
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
    try{
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
    catch (e) {
      return res.status(400).json('Informação inválida')
    }
  }

  async deleteCommentById(id_comment, res) {
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