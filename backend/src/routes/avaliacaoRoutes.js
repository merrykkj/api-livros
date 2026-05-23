import { Router } from 'express';
import { avaliacaoController } from '../controllers/avaliacaoController.js';
const router = Router();

router.post('/', avaliacaoController.cadastrar)


export default router;