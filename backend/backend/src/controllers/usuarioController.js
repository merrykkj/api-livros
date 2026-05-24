import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { usuarioModel } from "../models/usuarioModel.js";

export const usuarioController = {
    async cadastrar(req, res) {
        const { nome_sistema, nome_usuario, email, senha, telefone, data_nascimento } = req.body;

        if (!nome_sistema || !nome_usuario || !email || !senha || !telefone || !data_nascimento) {
            return res.status(400).json({
                erro: "Todos os campos são obrigatórios!"
            });
        }

        try {
            const saltRounds = 10;
            const senhaHash = await bcrypt.hash(senha, saltRounds);

            await usuarioModel.criar({
                nome_sistema,
                nome_usuario,
                email,
                senha: senhaHash,
                telefone,
                data_nascimento
            });

            return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
        } catch (error) {
            console.log("ERRO NO CADASTRO:", error);
            if (error.message.includes("UNIQUE constraint failed")) {
                if (error.message.includes("telefone")) return res.status(400).json({ erro: "Este número de telefone já está cadastrado." });
                if (error.message.includes("email")) return res.status(400).json({ erro: "Este e-mail já está em uso." });
                if (error.message.includes("nome_usuario")) return res.status(400).json({ erro: "Este nome de usuário já está em uso." });
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

            if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
                return res.status(401).json({ erro: "E-mail ou senha incorretos." });
            }

            const SECRET_KEY = "10e30c5f5992bc46ae3fc51e71d1322174db6a86258bf3462c5830df3e64ea59";

            const token = jwt.sign(
                { id: usuario.id, email: usuario.email },
                SECRET_KEY,
                { expiresIn: '30d' }
            );

            return res.status(200).json({
                mensagem: "Login realizado com sucesso!",
                token: token,
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
    },

    async exibirPerfil(req, res) {
        try {
            const id = req.usuarioLogado.id;

            const usuario = await usuarioModel.buscarPorId(id);

            if (!usuario) {
                return res.status(404).json({ erro: "Usuário não encontrado." });
            }

            const { senha, ...dadosPublicos } = usuario;

            return res.status(200).json(dadosPublicos);
        } catch (error) {
            console.log("ERRO AO EXIBIR PERFIL:", error);
            return res.status(500).json({ erro: "Erro ao buscar dados do perfil." });
        }
    }
};