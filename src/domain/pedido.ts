export interface PedidoItem {
  medicamentoId: string;
  cantidad: number;
}

export interface CrearPedido {
  direccionEntrega: string;
  items: PedidoItem[];
}
