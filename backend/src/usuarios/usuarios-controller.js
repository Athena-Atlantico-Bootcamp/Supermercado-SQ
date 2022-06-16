'use strict'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UsuarioController {

    async createUser(req, res) { 
        const {nome, email, senha, telefone, restricoes, tipo_usuario} = req.body
        const senhaHash = await bcrypt.hash(senha, 8)
        const usuario = await prisma.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaHash,
                telefone: telefone,
                restricoes: restricoes,
                tipo_usuario: tipo_usuario
            }
        })
        return res.status(200).json(usuario)
    }

    async login(req,res){
        try{
            const {email, senha} = req.body
        const userEmail = await prisma.usuarios.findUnique({ where: { email }})
        if (!userEmail) {
            return res.status(400).json('Email não cadastrado')
        } 
        const compararSenha = await bcrypt.compare(senha, userEmail.senha)
        if(!compararSenha){
            return res.status(400).json('Email e/ou senha invalido')
        }
        return res.status(200).json({
            userEmail,
            token:jwt.sign({
                id: userEmail.id
            },  process.env.SECRET, { expiresIn: '1h'})
        })
        }catch(e){
            console.log(e)
            return res.status(400).json('Erro')
        }
    }

    async showAllUsers(req, res) {
        const usuarios = await prisma.usuarios.findMany()
        return res.status(200).json(usuarios)
    }

    async showUserById(id_usuario, res) {

        // Verifica se o usuário com o id especificado existe.
        let userFlag = await this.checkIfUserExists(id_usuario)
        // Caso não exista, retorna status 404
        if (!userFlag) {
            return res.status(404).json('Usuário não encontrado.')
        }
        // Caso exista, retorna status 200 + o usuário
        const usuario = await prisma.usuarios.findUnique({
            where: {
                id_usuario: id_usuario
            }
        })
        return res.status(200).json(usuario)
    }

    async updateUser(id_usuario, req, res) {
        
        // Verifica se o usuário com o id especificado existe.
        let userFlag = await this.checkIfUserExists(id_usuario)
        // Caso não exista, retorna status 404
        if (!userFlag) {
            return res.status(404).json('Usuário não encontrado.')
        }
        // Caso exista, atualiza o usuário
        const usuarioAtualizado = await prisma.usuarios.update({
            where: {
                id_usuario: id_usuario
            },
            data: req.body
        })
        return res.status(200).json(usuarioAtualizado)
    }

    async deleteUser(id_usuario, res) {

        // Verifica se o usuário com o id especificado existe.
        let userFlag = await this.checkIfUserExists(id_usuario)
        // Caso não exista, retorna status 404
        if (!userFlag) {
            return res.status(404).json('Usuário não encontrado.')
        }
        // Caso exista, deleta o usuário e retorna status 200
        const deleteUser = await prisma.usuarios.delete({
            where: {
              id_usuario: id_usuario
            }
        })
        return res.status(200).json('Usuário deletado com sucesso.')
    }

    /**
     * Verifica se um usuário com o id especificado existe no banco de dados.
     * Retorna true caso o usuário exista; false caso contrário.
     * @param {Number} id_usuario
     * @return {Boolean} Boolean
     */
    async checkIfUserExists(id_usuario) {
        const user = await prisma.usuarios.findUnique({
            where: {
                id_usuario: id_usuario
            }
        })
        
        if (!user) {
            return false
        } else {
            return true
        }
    }

}

export default UsuarioController