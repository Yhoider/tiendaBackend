
import { prisma } from "../database/prisma.js";
import type {
  ActualizarMedicamento,
  CrearMedicamento,
} from "../../domain/medicamento-input.js";

export class MedicamentosRepository {
  private readonly includeCategory = {
    categorias: { select: { id: true, nombre: true } },
  } as const;

  async listarActivos(page: number, limit: number) {

    const where = { activo: true, requiere_receta: false };
    const [data, total] = await prisma.$transaction([
      prisma.medicamentos.findMany({
      where: {
        activo: true,
        requiere_receta: false,
      },
      include: this.includeCategory,
      orderBy: {
        nombre: "asc",
      },
      skip: (page - 1) * limit,
      take: limit,
      }),
      prisma.medicamentos.count({ where }),
    ]);
    return { data, total };
  }

  async buscarPorId(id: string) {
    return prisma.medicamentos.findFirst({
      where: {
        id,
        activo: true,
        requiere_receta: false,
      },
      include: this.includeCategory,
    });
  }

  async crear(data: CrearMedicamento) {
    return prisma.medicamentos.create({ data, include: this.includeCategory });
  }

  async actualizar(id: string, data: ActualizarMedicamento) {
    const exists = await prisma.medicamentos.findUnique({ where: { id }, select: { id: true } });
    if (!exists) return null;
    return prisma.medicamentos.update({ where: { id }, data, include: this.includeCategory });
  }

  async eliminar(id: string) {
    const exists = await prisma.medicamentos.findUnique({ where: { id }, select: { id: true } });
    if (!exists) return false;
    await prisma.medicamentos.update({ where: { id }, data: { activo: false } });
    return true;
  }
}

export const medicamentosRepository = new MedicamentosRepository();
