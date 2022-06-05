'use strict'
import express, { Router } from 'express'
import RouterUsuarios from '../usuarios/usuarios-routes'

const router = express.Router()

router.use('/produtos', RouterUsuarios)
router.use('/usuarios', RouterUsuarios)
router.use('/comentarios', RouterUsuarios)

export default router