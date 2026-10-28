export interface CrearMedicamento {
  nombre: string;
  descripcion?: string;
  precio: number;
  imagen_url?: string;
  categoria_id?: string;
  requiere_receta?: boolean;
  stock?: number;
}

export interface ActualizarMedicamento {
  nombre?: string;
  descripcion?: string | null;
  precio?: number;
  imagen_url?: string | null;
  categoria_id?: string | null;
  requiere_receta?: boolean;
  stock?: number;
  activo?: boolean;
}
