/** Regla de negocio independiente de Express y Prisma para el catálogo. */
export interface Medicamento {
  id: string;
  nombre: string;
  precio: number;
  stock: number;
  requiereReceta: boolean;
}
