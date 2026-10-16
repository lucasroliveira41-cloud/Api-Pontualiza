import "dotenv/config";
import app from './app.js';
import Database from "./config/database.js";

export async function startServer(){
  const port = Number(process.env.PORT) || 3001;

  await Database.connect();

  app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
  });
}

startServer();