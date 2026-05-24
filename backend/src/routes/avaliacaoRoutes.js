import { Router } from 'express';
import { avaliacaoController } from '../controllers/avaliacaoController.js';
import { verificarToken } from '../middlewares/authMiddleware.js'; 
const router = Router();

router.get('/:id_livro', avaliacaoController.listarPorLivro); 
router.post('/', verificarToken, avaliacaoController.cadastrar); 
router.get('/minhas-avaliacoes', verificarToken, avaliacaoController.listarMinhasAvaliacoes);
router.delete('/:id', verificarToken, avaliacaoController.excluir);
router.put('/:id', verificarToken, avaliacaoController.editar);

export default router;