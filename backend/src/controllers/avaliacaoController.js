import {avaliacaoModel} from '../models/avaliacaoModel.js';

export const avaliacaoController = {
    async cadastrar(req, res) {
        const { id_livro, id_usuario, nota, comentario, contem_spoiler } = req.body;

        if( !nota || !id_usuario || !id_livro ) {
            return res.status(400).json ({ erro: "Faltam informações obrigatorias!"});
        }

        if ( nota < 1 || nota > 5 ) {
            return res.status(400).json ({erro: "A nota deve ser entre 1 e 5!"});
        }
        
        try {
            await avaliacaoModel.criar(req.body);
            res.status(201).json({mensagem: "Avaliação criada com sucesso!"})
        } catch (error) {
                console.error(error);
                return res.status(500).json({erro: "Erro ao salvar avaliação no banco."})
            
        }
    }
}