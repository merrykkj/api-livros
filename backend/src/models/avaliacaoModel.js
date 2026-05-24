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
    },

    async buscarPorUsuario(id_usuario) {
        const db = await iniciarBanco();
        return await db.all(
            `SELECT a.*, l.titulo, l.imagem_capa 
             FROM avaliacoes a 
             JOIN livros l ON a.id_livro = l.id_open_library 
             WHERE a.id_usuario = ? 
             ORDER BY a.data_criacao DESC`,
            [id_usuario]
        );
    },
    async deletar(id_avaliacao, id_usuario) {
        const db = await iniciarBanco();
        return await db.run(
            'DELETE FROM avaliacoes WHERE id = ? AND id_usuario = ?',
            [id_avaliacao, id_usuario]
        );
    },

    async atualizar(id_avaliacao, id_usuario, { nota, comentario }) {
        const db = await iniciarBanco();
        return await db.run(
            `UPDATE avaliacoes 
             SET nota = ?, comentario = ? 
             WHERE id = ? AND id_usuario = ?`,
            [nota, comentario, id_avaliacao, id_usuario]
        );
    }
};