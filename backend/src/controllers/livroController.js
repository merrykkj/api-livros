import axios from 'axios';
import { livroModel } from '../models/livroModel.js';

export const livroController = {
    async adicionarOuBuscar(req, res) {
        const { id_open_library } = req.body;

        if (!id_open_library) {
            return res.status(400).json({ erro: "ID da Open Library é obrigatório!" });
        }

        try {
            const livroExistente = await livroModel.buscarPorId(id_open_library);

            if (livroExistente) {
                return res.status(200).json(livroExistente);
            }

            const response = await axios.get(`https://openlibrary.org/works/${id_open_library}.json`);
            const dadosApi = response.data;

            const novoLivro = {
                id_open_library: id_open_library,
                titulo: dadosApi.title,
                autor: dadosApi.authors ? dadosApi.authors[0].author.key : "Desconhecido",
                ano_publicacao: dadosApi.first_publish_date || null,
                descricao: dadosApi.description?.value || dadosApi.description || "Sem descrição",
                imagem_capa: dadosApi.covers ? `https://covers.openlibrary.org/b/id/${dadosApi.covers[0]}-L.jpg` : null
            };

            await livroModel.criar(novoLivro);

            return res.status(201).json(novoLivro);

        } catch (error) {
            console.error("Erro no Controller de Livros:", error);
            return res.status(500).json({ erro: "Não conseguimos achar ou salvar este livro." });
        }
    }
};