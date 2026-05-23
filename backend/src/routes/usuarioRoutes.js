import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController.js';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', usuarioController.cadastrar)
router.post('/login', usuarioController.login);
router.get('/perfil', verificarToken, usuarioController.exibirPerfil);

export default router;