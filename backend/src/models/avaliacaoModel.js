import { iniciarBanco } from "../config/db.js";

export const avaliacaoModel = {
    async criar(dados) {
        const db = await iniciarBanco();

        const { id_livro, id_usuario, nota, comentario, contem_spoiler } = dados;

        return await db.run(`
        INSERT INTO avaliacoes (id_livro, id_usuario, nota, comentario, contem_spoiler) 
        VALUES (?, ?, ?, ?, ?)
        `, [id_livro, id_usuario, nota, comentario, contem_spoiler || 0]);
    }
}