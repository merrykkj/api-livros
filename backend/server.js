import express from 'express';
import { iniciarBanco } from './src/config/db.js';
import avaliacao from './src/routes/avaliacaoRoutes.js';
import usuario from './src/routes/usuarioRoutes.js';
import livro from './src/routes/livroRoutes.js'
const app = express();
const PORT = 3001;

app.use(express.json());

iniciarBanco().then(() => {
    console.log("Banco de dados pronto e tabelas criadas.");
}).catch((erro) => {
    console.error("Erro ao inicializar o banco:", erro);
});

app.get('/', (req, res) => res.status(200).json ({
    message: "Hello World"
}))

app.use('/avaliacoes', avaliacao)

app.use('/usuarios', usuario)

app.use('/livros', livro)

app.listen(3001, () => {
    console.log("Servidor rodando e rotas ativas! 🚀");
});