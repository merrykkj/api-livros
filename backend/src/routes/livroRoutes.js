import { Router } from 'express';
import { livroController } from '../controllers/livroController.js';

const router = Router();

router.post('/', livroController.adicionarOuBuscar)

export default router;
