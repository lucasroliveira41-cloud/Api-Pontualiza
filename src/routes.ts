import { Router } from 'express';
import usuarioRouter from './modules/usuários/usuário.routes.js';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    mensagem: 'API Pontualiza funcionando!'
  });
});

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok'
  });
});

router.use("/usuarios",usuarioRouter);

export default router;
