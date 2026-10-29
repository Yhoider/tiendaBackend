import "dotenv/config";
import bcrypt from "bcrypt";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

const nombre = process.env.ADMIN_NAME?.trim();
const correo = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const contraseña = process.env.ADMIN_PASSWORD;
const connectionString = process.env.DATABASE_URL ?? process.env.DIRECT_URL;

if (!connectionString) throw new Error("DATABASE_URL es obligatoria para crear el administrador");
if (!nombre || !correo || !contraseña) {
  throw new Error("Define ADMIN_NAME, ADMIN_EMAIL y ADMIN_PASSWORD antes de ejecutar este comando");
}
if (contraseña.length < 8) throw new Error("La contraseña debe tener al menos 8 caracteres");

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

async function main() {
  const existente = await prisma.usuarios.findUnique({ where: { correo } });
  if (existente) {
    throw new Error("Ya existe una cuenta con ese correo; no se modificó ningún usuario");
  }

  const rolAdmin = await prisma.roles.findUnique({ where: { nombre: "admin" } });
  if (!rolAdmin) {
    throw new Error('No existe el rol "admin". Ejecuta primero: npm run seed');
  }

  await prisma.usuarios.create({
    data: {
      nombre,
      correo,
      password_hash: await bcrypt.hash(contraseña, 12),
      rol_id: rolAdmin.id,
      activo: true,
    },
  });

  console.log(`Administrador creado: ${correo}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
