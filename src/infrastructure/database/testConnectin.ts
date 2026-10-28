
import { prisma } from "./prisma.js";

async function main() {
  const resultado = await prisma.$queryRaw`SELECT 1 AS conectado`;
  console.log("Conexión correcta:", resultado);
}

main()
  .catch((error) => {
    console.error("Error de conexión:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
