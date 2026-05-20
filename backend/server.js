import express from 'express';
import { iniciarBanco } from './src/config/db.js';
import avaliacao from './src/routes/avaliacaoRoutes.js';
import usuario from './src/routes/usuarioRoutes.js';
import livro from './src/routes/livroRoutes.js'
const app = express();
const PORT = 3001;

app.use(express.json());
app.get('/', (req, res) => res.status(200).json ({
    message: "Hello World"
}))

app.get('/avaliacao', avaliacao)

app.get('/usuario', usuario)

app.get('/livro', livro)

async function ligarServidor() {
    try {
        console.log("Conectando ao banco de dados...");
        await iniciarBanco();
        console.log("Banco de dados pronto e tabelas criadas!");

        app.listen(PORT, () => {
            console.log(`🚀 Servidor backend rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar o servidor e o banco:", error);
    }
}

ligarServidor();