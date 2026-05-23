import { Router } from 'express';
import { avaliacaoController } from '../controllers/avaliacaoController.js';
import { verificarToken } from '../middlewares/authMiddleware.js'; // Verifique se isso aqui não está undefined

const router = Router();

router.get('/:id_livro', avaliacaoController.listarPorLivro); 
router.post('/', verificarToken, avaliacaoController.cadastrar); 

export default router;