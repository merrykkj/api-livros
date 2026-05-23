import { iniciarBanco } from '../config/db.js';

export const livroModel = {
    async buscarPorId(id_open_library) {
        const db = await iniciarBanco();
        return await db.get('SELECT * FROM livros WHERE id_open_library = ?', [id_open_library]);
    },

    async criar(dados) {
        const db = await iniciarBanco();
        const { id_open_library, titulo, autor, ano_publicacao, descricao, imagem_capa } = dados;

        return await db.run(`
            INSERT INTO livros (id_open_library, titulo, autor, ano_publicacao, descricao, imagem_capa)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [id_open_library, titulo, autor, ano_publicacao, descricao, imagem_capa]);
    }
};