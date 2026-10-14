import app from './app.js';

export function startServer(): void {
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
  });
}
