import { iniciarBanco } from '../config/db.js';

export const avaliacaoModel = {
    async criar({ id_livro, id_usuario, nota, comentario, contem_spoiler }) {
        const db = await iniciarBanco();
        return await db.run(
            `INSERT INTO avaliacoes (id_livro, id_usuario, nota, comentario, contem_spoiler) 
             VALUES (?, ?, ?, ?, ?)`,
            [id_livro, id_usuario, nota, comentario, contem_spoiler]
        );
    },

    async buscarPorLivro(id_livro) {
        const db = await iniciarBanco();
        return await db.all(
            `SELECT a.*, u.nome_usuario 
             FROM avaliacoes a 
             JOIN usuarios u ON a.id_usuario = u.id 
             WHERE a.id_livro = ? 
             ORDER BY a.data_criacao DESC`,
            [id_livro]
        );
    }
};