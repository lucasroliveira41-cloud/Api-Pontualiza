import { Router } from 'express';
import FuncRouter from './modules/funcionários/func.routes.js';
import usuarioRouter from './modules/usuários/usuário.routes.js';
import pontoRouter from './modules/ponto/ponto.routes.js';
import PontoRouter from './modules/ponto/ponto.routes.js';

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
router.use("/func/ponto",PontoRouter);
router.use("/usuario",FuncRouter);

export default router;
