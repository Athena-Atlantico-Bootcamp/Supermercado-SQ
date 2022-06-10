'use strict'
import express, { Router } from 'express'
import RouterUsuarios from '../usuarios/usuarios-routes'
import RouterProdutos from '../produtos/produtos-routes'
import RouterComentarios from '../comentarios/comentarios-routes'

const router = express.Router()

router.use('/produtos', RouterProdutos)
router.use('/usuarios', RouterUsuarios)
router.use('/comentarios', RouterComentarios)

export default router
