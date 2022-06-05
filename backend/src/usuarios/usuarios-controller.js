'use strict'

import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UsuarioController {

    async cadastrarUsuario(req, res) {
        console.log('Entrou no UsuarioController.cadastrarUsuario')
        const {nome, email, telefone, restricoes, tipo_usuario} = req.body
        const usuario = await prisma.usuarios.create({
            data: {
                nome: nome,
                email: email,
                telefone: telefone,
                restricoes: restricoes,
                tipo_usuario: tipo_usuario
            }
        })
        return res.status(200).json(usuario)
    }

    async mostrarUsuarios(req, res) {
        console.log('Entrou no UsuarioController.mostrarUsuarios')
        const usuarios = await prisma.usuarios.findMany()
        return res.status(200).json(usuarios)
    }

    async atualizarUsuario(req, res) {
        console.log('Entrou no UsuarioController.atualizarUsuarios')
        const { id_usuario } = req.params.id
        const usuarioAtualizado = await prisma.usuarios.update({
            where: {
                id_usuario: id_usuario
            },
            data: {
                
            }
        })
    }

}

export default UsuarioController