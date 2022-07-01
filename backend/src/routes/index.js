'use strict'
import express, { Router } from 'express'
import RouterUsuarios from './usuarios-routes'
import RouterProdutos from './produtos-routes'
import RouterComentarios from './comentarios-routes'

const router = express.Router()

router.use('/produtos', RouterProdutos)
router.use('/usuarios', RouterUsuarios)
router.use('/comentarios', RouterComentarios)

export default router
