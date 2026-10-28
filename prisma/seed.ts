import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL ?? process.env.DIRECT_URL;
if (!connectionString) throw new Error("DATABASE_URL es obligatoria para ejecutar el seed");

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

const catalogo = [
  { nombre: "Acetaminofén 500 mg", descripcion: "Analgésico y antipirético.", precio: 8500, stock: 100, categoria: "Analgésicos" },
  { nombre: "Ibuprofeno 400 mg", descripcion: "Antiinflamatorio no esteroideo.", precio: 12000, stock: 80, categoria: "Antiinflamatorios" },
  { nombre: "Loratadina 10 mg", descripcion: "Alivio de síntomas de alergia.", precio: 10500, stock: 60, categoria: "Antialérgicos" },
  { nombre: "Omeprazol 20 mg", descripcion: "Protector gástrico.", precio: 15000, stock: 70, categoria: "Digestivos" },
  { nombre: "Vitamina C 1 g", descripcion: "Suplemento de vitamina C.", precio: 18000, stock: 50, categoria: "Vitaminas" },
  { nombre: "Amoxicilina 500 mg", descripcion: "Antibiótico de venta bajo fórmula médica.", precio: 28000, stock: 30, categoria: "Antibióticos", requiere_receta: true },
];

async function main() {
  await prisma.roles.upsert({ where: { nombre: "admin" }, update: {}, create: { nombre: "admin", descripcion: "Administrador" } });
  await prisma.roles.upsert({ where: { nombre: "cliente" }, update: {}, create: { nombre: "cliente", descripcion: "Cliente" } });
  await prisma.roles.upsert({ where: { nombre: "supervisor" }, update: {}, create: { nombre: "supervisor", descripcion: "Supervisor" } });
  for (const item of catalogo) {
    const categoria = await prisma.categorias.upsert({ where: { nombre: item.categoria }, update: {}, create: { nombre: item.categoria } });
    await prisma.medicamentos.upsert({
      where: { id: `00000000-0000-4000-8000-${String(catalogo.indexOf(item) + 1).padStart(12, "0")}` },
      update: { nombre: item.nombre, descripcion: item.descripcion, precio: item.precio, stock: item.stock, categoria_id: categoria.id, requiere_receta: item.requiere_receta ?? false, activo: true },
      create: { id: `00000000-0000-4000-8000-${String(catalogo.indexOf(item) + 1).padStart(12, "0")}`, nombre: item.nombre, descripcion: item.descripcion, precio: item.precio, stock: item.stock, categoria_id: categoria.id, requiere_receta: item.requiere_receta ?? false },
    });
  }
}

main().then(() => prisma.$disconnect()).catch(async (error) => { console.error(error); await prisma.$disconnect(); process.exit(1); });
