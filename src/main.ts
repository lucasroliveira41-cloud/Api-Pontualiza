import 'dotenv/config';
import { connectDatabase } from './config/database.js';
import { startServer } from './server.js';

async function main(): Promise<void> {
  await connectDatabase();
  startServer();
}

main().catch((error: unknown) => {
  console.error('Erro ao iniciar a API:', error);
  process.exitCode = 1;
});
