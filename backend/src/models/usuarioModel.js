import { iniciarBanco } from '../config/db.js';

export const usuarioModel = {
    async criar(dados) {
        const db = await iniciarBanco();
        const { nome_sistema, nome_usuario, email, senha, telefone, data_nascimento } = dados;

        return await db.run(`
        INSERT INTO usuarios (nome_sistema, nome_usuario, email, senha, telefone, data_nascimento)
        VALUES (?, ?, ?, ?, ?, ?)
    `, [nome_sistema, nome_usuario, email, senha, telefone, data_nascimento]);
    },
    async buscarPorEmail(email) {
        const db = await iniciarBanco();
        return await db.get('SELECT * FROM usuarios WHERE email = ?', [email]);
    }
};