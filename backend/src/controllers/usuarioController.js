import { usuarioModel } from "../models/usuarioModel.js";

export const usuarioController = {
    // Função de Cadastro
    async cadastrar(req, res) {
        const { nome_sistema, nome_usuario, email, senha, telefone, data_nascimento } = req.body;

        if (!nome_sistema || !nome_usuario || !email || !senha || !telefone || !data_nascimento) {
            return res.status(400).json({
                erro: "Todos os campos (nome, usuário, email, senha, telefone e data de nascimento) são obrigatórios!"
            });
        }

        try {
            await usuarioModel.criar({ nome_sistema, nome_usuario, email, senha, telefone, data_nascimento });
            return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
        } catch (error) {
            console.log("ERRO NO CADASTRO:", error);
            if (error.message.includes("UNIQUE constraint failed")) {
                if (error.message.includes("telefone")) {
                    return res.status(400).json({ erro: "Este número de telefone já está cadastrado." });
                }
                if (error.message.includes("email")) {
                    return res.status(400).json({ erro: "Este e-mail já está em uso." });
                }
                if (error.message.includes("nome_usuario")) {
                    return res.status(400).json({ erro: "Este nome de usuário já está em uso." });
                }
            }
            return res.status(500).json({ erro: "Erro interno ao realizar cadastro." });
        }
    },

    async login(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ erro: "E-mail e senha são obrigatórios!" });
        }

        try {
            const usuario = await usuarioModel.buscarPorEmail(email);

            if (!usuario || usuario.senha !== senha) {
                return res.status(401).json({ erro: "E-mail ou senha incorretos." });
            }

            return res.status(200).json({
                mensagem: "Login realizado com sucesso!",
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome_sistema,
                    email: usuario.email
                }
            });
        } catch (error) {
            console.log("ERRO NO LOGIN:", error);
            return res.status(500).json({ erro: "Erro interno ao realizar login." });
        }
    }
};