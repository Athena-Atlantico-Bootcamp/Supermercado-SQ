'use strict'

import express from 'express'
const router = express.Router()

import CommentController from './comentarios-controller'
const commentController = new CommentController();

router.post('/', (req, res, next) => {
    return commentController.createComment(req,res)
})

router.get('/', (req, res, next) => {
    return commentController.showAllComments(req,res)
})

router.get('/:id', (req, res, next) => {
    const id_product = parseInt(req.params.id)
    return commentController.showCommentByProductId(id_product, res)
})

router.patch('/:id', (req, res, next) => {
    const id_comment = parseInt(req.params.id)
    return commentController.updateComment(id_comment, req, res)
})

router.delete('/:id', (req, res, next) => {
    const id_comment = parseInt(req.params.id)
    return commentController.deleteCommentById(id_comment, res)
})

export default router;