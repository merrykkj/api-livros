import { Router } from 'express';
import { iniciarBanco } from '../config/db.js'; 

const router = Router();

router.post('/usuarios', async (req, res) => {
    const { nome_sistema, nome_usuario, email, senha, foto_perfil, biografia } = req.body;

    if (!nome_sistema || !nome_usuario || !email || !senha) {
        return res.status(400).json({ 
            erro: "Os campos nome_sistema, nome_usuario, email e senha são obrigatórios!" 
        });
    }

    try {
        const db = await iniciarBanco();
        const resultado = await db.run(`
            INSERT INTO usuarios (nome_sistema, nome_usuario, email, senha, foto_perfil, biografia)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [nome_sistema, nome_usuario, email, senha, foto_perfil || null, biografia || null]);
        
        res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso!",
            id_usuario: resultado.lastID,
            usuario: { nome_sistema, nome_usuario, email }
        });

    } catch (error) {
        console.error("Erro ao cadastrar no banco:", error);

        if (error.message.includes("UNIQUE constraint failed")) {
            return res.status(400).json({ 
                erro: "O nome de usuário ou e-mail já está cadastrado." 
            });
        }

        res.status(500).json({ erro: "Erro interno ao cadastrar o usuário." });
    }
});

export default router;