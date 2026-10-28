import { medicamentosRepository } from "../../infrastructure/repositories/medicamentos.repository.js";

export class ListarMedicamentosUseCase {
  async ejecutar(page: number, limit: number) {
    return medicamentosRepository.listarActivos(page, limit);
  }
}

export const listarMedicamentosUseCase =
  new ListarMedicamentosUseCase();
