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

app.use('/avaliacoes', avaliacao)

app.use('/usuarios', usuario)

app.use('/livros', livro)

app.listen(3001, () => {
    console.log("Servidor rodando e rotas ativas! 🚀");
});