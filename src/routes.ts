import { Router } from 'express';
import FuncRouter from './modules/funcionários/func.routes.js';
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

router.use("/func",FuncRouter);
router.use("/usuario",FuncRouter);

export default router;
