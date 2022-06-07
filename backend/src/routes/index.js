'use strict'
import express, { Router } from 'express'
import RouterUsuarios from '../usuarios/usuarios-routes'
import RouterProdutos from '../produtos/produtos-routes'

const router = express.Router()

router.use('/produtos', RouterProdutos)
router.use('/usuarios', RouterUsuarios)
router.use('/comentarios', RouterUsuarios)

export default router
