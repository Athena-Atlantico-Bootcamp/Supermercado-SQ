'use strict'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class UsuarioController {

    async cadastrarUsuario(req, res) {
        
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
        const usuarios = await prisma.usuarios.findMany()
        return res.status(200).json(usuarios)
    }

    async mostrarUsuarioPorId(id_usuario, res) {

        // Verifica se o usuário com o id especificado existe.
        let flagUsuario = await this.verificarSeUsuarioExiste(id_usuario)
        // Caso não exista, retorna status 404
        if (!flagUsuario) {
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

    async atualizarUsuario(id_usuario, req, res) {
        
        // Verifica se o usuário com o id especificado existe.
        let flagUsuario = await this.verificarSeUsuarioExiste(id_usuario)
        // Caso não exista, retorna status 404
        if (!flagUsuario) {
            return res.status(404).json('Usuário não encontrado.')
        }
        // Caso exista, atualiza o usuário

        // const usuarioAtualizado = await prisma.usuarios.update({
        //     where: {
        //         id_usuario: id_usuario
        //     },
        //     data: {
            
        //     }
        // })
        return res.status(500).json('Rota em construção')
    }

    async deletarUsuario(id_usuario, res) {

        // Verifica se o usuário com o id especificado existe.
        let flagUsuario = await this.verificarSeUsuarioExiste(id_usuario)
        // Caso não exista, retorna status 404
        if (!flagUsuario) {
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
    async verificarSeUsuarioExiste(id_usuario) {
        const usuario = await prisma.usuarios.findUnique({
            where: {
                id_usuario: id_usuario
            }
        })
        
        if (!usuario) {
            return false
        } else {
            return true
        }
    }

}

export default UsuarioController