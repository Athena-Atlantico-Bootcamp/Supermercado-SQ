const jwt = require('jsonwebtoken')

function autentificacao(req,res, next){
    const authHeader = req.headers.authorization
    if (!authHeader){
        return res.status(400).json('Não tem token')
    }
    const token = authHeader.replace('Bearer', '').trim()
    jwt.verify(token, process.env.SECRET,(err, decoded) => {
        if (err){
            return res.status(400).json('Token inválido ou expirado')
        }
        req.userId = decoded.id
        return next()
    })

}

export default autentificacao