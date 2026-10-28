import { medicamentosRepository } from "../../infrastructure/repositories/medicamentos.repository.js";

export class ListarMedicamentosUseCase {
  async ejecutar(page: number, limit: number, categoria?: string) {
    return medicamentosRepository.listarActivos(page, limit, categoria);
  }
}

export const listarMedicamentosUseCase =
  new ListarMedicamentosUseCase();
