import { avaliacaoModel } from '../models/avaliacaoModel.js';

export const avaliacaoController = {
    async cadastrar(req, res) {
        const { id_livro, nota, comentario, contem_spoiler } = req.body;
        const id_usuario = req.usuarioLogado.id;

        if (!nota || !id_livro) {
            return res.status(400).json({ erro: "Livro e nota são obrigatórios!" });
        }

        if (nota < 1 || nota > 5) {
            return res.status(400).json({ erro: "A nota deve ser entre 1 e 5!" });
        }

        try {
            await avaliacaoModel.criar({
                id_livro,
                id_usuario, 
                nota,
                comentario,
                contem_spoiler: contem_spoiler || 0 
            });

            return res.status(201).json({ mensagem: "Avaliação criada com sucesso!" });
        } catch (error) {
            console.error("ERRO AVALIAÇÃO:", error);
            
            if (error.message.includes("FOREIGN KEY constraint failed")) {
                return res.status(400).json({ 
                    erro: "Não foi possível avaliar. Verifique se o livro está cadastrado no catálogo local." 
                });
            }

            return res.status(500).json({ erro: "Erro interno ao salvar avaliação." });
        }
    },

    async listarPorLivro(req, res) {
        const { id_livro } = req.params;

        if (!id_livro) {
            return res.status(400).json({ erro: "O ID do livro é necessário." });
        }

        try {
            const avaliacoes = await avaliacaoModel.buscarPorLivro(id_livro);
            return res.status(200).json(avaliacoes);
        } catch (error) {
            console.error("ERRO LISTAGEM:", error);
            return res.status(500).json({ erro: "Erro ao buscar avaliações no banco." });
        }
    }
};