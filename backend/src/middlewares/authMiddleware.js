import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ erro: "Acesso negado. Token não fornecido." });
    }

    try {
        const SECRET_KEY = "10e30c5f5992bc46ae3fc51e71d1322174db6a86258bf3462c5830df3e64ea59";
        const decoded = jwt.verify(token, SECRET_KEY);
        
        req.usuarioLogado = decoded;
        
        next();
    } catch (error) {
        return res.status(403).json({ erro: "Token inválido ou expirado." });
    }
};