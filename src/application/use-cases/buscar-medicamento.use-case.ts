import { medicamentosRepository } from "../../infrastructure/repositories/medicamentos.repository.js";

export class BuscarMedicamentoUseCase {
  async ejecutar(id: string) {
    return medicamentosRepository.buscarPorId(id);
  }
}

export const buscarMedicamentoUseCase =
  new BuscarMedicamentoUseCase();
