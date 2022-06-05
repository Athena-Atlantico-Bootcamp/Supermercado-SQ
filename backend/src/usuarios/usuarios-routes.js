'use strict'

import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('Entrou no post')
})

export default router