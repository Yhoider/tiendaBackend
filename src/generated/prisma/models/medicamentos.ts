import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"

/**
 * Model medicamentos
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type medicamentosModel = runtime.Types.Result.DefaultSelection<Prisma.$medicamentosPayload>

export type AggregateMedicamentos = {
  _count: MedicamentosCountAggregateOutputType | null
  _avg: MedicamentosAvgAggregateOutputType | null
  _sum: MedicamentosSumAggregateOutputType | null
  _min: MedicamentosMinAggregateOutputType | null
  _max: MedicamentosMaxAggregateOutputType | null
}

export type MedicamentosAvgAggregateOutputType = {
  precio: runtime.Decimal | null
  stock: number | null
}

export type MedicamentosSumAggregateOutputType = {
  precio: runtime.Decimal | null
  stock: number | null
}

export type MedicamentosMinAggregateOutputType = {
  id: string | null
  nombre: string | null
  descripcion: string | null
  precio: runtime.Decimal | null
  imagen_url: string | null
  categoria_id: string | null
  requiere_receta: boolean | null
  stock: number | null
  activo: boolean | null
  created_at: Date | null
  updated_at: Date | null
}

export type MedicamentosMaxAggregateOutputType = {
  id: string | null
  nombre: string | null
  descripcion: string | null
  precio: runtime.Decimal | null
  imagen_url: string | null
  categoria_id: string | null
  requiere_receta: boolean | null
  stock: number | null
  activo: boolean | null
  created_at: Date | null
  updated_at: Date | null
}

export type MedicamentosCountAggregateOutputType = {
  id: number
  nombre: number
  descripcion: number
  precio: number
  imagen_url: number
  categoria_id: number
  requiere_receta: number
  stock: number
  activo: number
  created_at: number
  updated_at: number
  _all: number
}


export type MedicamentosAvgAggregateInputType = {
  precio?: true
  stock?: true
}

export type MedicamentosSumAggregateInputType = {
  precio?: true
  stock?: true
}

export type MedicamentosMinAggregateInputType = {
  id?: true
  nombre?: true
  descripcion?: true
  precio?: true
  imagen_url?: true
  categoria_id?: true
  requiere_receta?: true
  stock?: true
  activo?: true
  created_at?: true
  updated_at?: true
}

export type MedicamentosMaxAggregateInputType = {
  id?: true
  nombre?: true
  descripcion?: true
  precio?: true
  imagen_url?: true
  categoria_id?: true
  requiere_receta?: true
  stock?: true
  activo?: true
  created_at?: true
  updated_at?: true
}

export type MedicamentosCountAggregateInputType = {
  id?: true
  nombre?: true
  descripcion?: true
  precio?: true
  imagen_url?: true
  categoria_id?: true
  requiere_receta?: true
  stock?: true
  activo?: true
  created_at?: true
  updated_at?: true
  _all?: true
}

export type MedicamentosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which medicamentos to aggregate.
   */
  where?: Prisma.medicamentosWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of medicamentos to fetch.
   */
  orderBy?: Prisma.medicamentosOrderByWithRelationInput | Prisma.medicamentosOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.medicamentosWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` medicamentos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` medicamentos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned medicamentos
  **/
  _count?: true | MedicamentosCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to average
  **/
  _avg?: MedicamentosAvgAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to sum
  **/
  _sum?: MedicamentosSumAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: MedicamentosMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: MedicamentosMaxAggregateInputType
}

export type GetMedicamentosAggregateType<T extends MedicamentosAggregateArgs> = {
      [P in keyof T & keyof AggregateMedicamentos]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateMedicamentos[P]>
    : Prisma.GetScalarType<T[P], AggregateMedicamentos[P]>
}




export type medicamentosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.medicamentosWhereInput
  orderBy?: Prisma.medicamentosOrderByWithAggregationInput | Prisma.medicamentosOrderByWithAggregationInput[]
  by: Prisma.MedicamentosScalarFieldEnum[] | Prisma.MedicamentosScalarFieldEnum
  having?: Prisma.medicamentosScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: MedicamentosCountAggregateInputType | true
  _avg?: MedicamentosAvgAggregateInputType
  _sum?: MedicamentosSumAggregateInputType
  _min?: MedicamentosMinAggregateInputType
  _max?: MedicamentosMaxAggregateInputType
}

export type MedicamentosGroupByOutputType = {
  id: string
  nombre: string
  descripcion: string | null
  precio: runtime.Decimal
  imagen_url: string | null
  categoria_id: string | null
  requiere_receta: boolean
  stock: number
  activo: boolean
  created_at: Date
  updated_at: Date
  _count: MedicamentosCountAggregateOutputType | null
  _avg: MedicamentosAvgAggregateOutputType | null
  _sum: MedicamentosSumAggregateOutputType | null
  _min: MedicamentosMinAggregateOutputType | null
  _max: MedicamentosMaxAggregateOutputType | null
}

export type GetMedicamentosGroupByPayload<T extends medicamentosGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<MedicamentosGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof MedicamentosGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], MedicamentosGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], MedicamentosGroupByOutputType[P]>
      }
    >
  >



export type medicamentosWhereInput = {
  AND?: Prisma.medicamentosWhereInput | Prisma.medicamentosWhereInput[]
  OR?: Prisma.medicamentosWhereInput[]
  NOT?: Prisma.medicamentosWhereInput | Prisma.medicamentosWhereInput[]
  id?: Prisma.UuidFilter<"medicamentos"> | string
  nombre?: Prisma.StringFilter<"medicamentos"> | string
  descripcion?: Prisma.StringNullableFilter<"medicamentos"> | string | null
  precio?: Prisma.DecimalFilter<"medicamentos"> | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.StringNullableFilter<"medicamentos"> | string | null
  categoria_id?: Prisma.UuidNullableFilter<"medicamentos"> | string | null
  requiere_receta?: Prisma.BoolFilter<"medicamentos"> | boolean
  stock?: Prisma.IntFilter<"medicamentos"> | number
  activo?: Prisma.BoolFilter<"medicamentos"> | boolean
  created_at?: Prisma.DateTimeFilter<"medicamentos"> | Date | string
  updated_at?: Prisma.DateTimeFilter<"medicamentos"> | Date | string
  carrito_items?: Prisma.Carrito_itemsListRelationFilter
  categorias?: Prisma.XOR<Prisma.CategoriasNullableScalarRelationFilter, Prisma.categoriasWhereInput> | null
  pedido_items?: Prisma.Pedido_itemsListRelationFilter
  receta_detalles?: Prisma.Receta_detallesListRelationFilter
}

export type medicamentosOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  nombre?: Prisma.SortOrder
  descripcion?: Prisma.SortOrderInput | Prisma.SortOrder
  precio?: Prisma.SortOrder
  imagen_url?: Prisma.SortOrderInput | Prisma.SortOrder
  categoria_id?: Prisma.SortOrderInput | Prisma.SortOrder
  requiere_receta?: Prisma.SortOrder
  stock?: Prisma.SortOrder
  activo?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
  carrito_items?: Prisma.carrito_itemsOrderByRelationAggregateInput
  categorias?: Prisma.categoriasOrderByWithRelationInput
  pedido_items?: Prisma.pedido_itemsOrderByRelationAggregateInput
  receta_detalles?: Prisma.receta_detallesOrderByRelationAggregateInput
}

export type medicamentosWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.medicamentosWhereInput | Prisma.medicamentosWhereInput[]
  OR?: Prisma.medicamentosWhereInput[]
  NOT?: Prisma.medicamentosWhereInput | Prisma.medicamentosWhereInput[]
  nombre?: Prisma.StringFilter<"medicamentos"> | string
  descripcion?: Prisma.StringNullableFilter<"medicamentos"> | string | null
  precio?: Prisma.DecimalFilter<"medicamentos"> | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.StringNullableFilter<"medicamentos"> | string | null
  categoria_id?: Prisma.UuidNullableFilter<"medicamentos"> | string | null
  requiere_receta?: Prisma.BoolFilter<"medicamentos"> | boolean
  stock?: Prisma.IntFilter<"medicamentos"> | number
  activo?: Prisma.BoolFilter<"medicamentos"> | boolean
  created_at?: Prisma.DateTimeFilter<"medicamentos"> | Date | string
  updated_at?: Prisma.DateTimeFilter<"medicamentos"> | Date | string
  carrito_items?: Prisma.Carrito_itemsListRelationFilter
  categorias?: Prisma.XOR<Prisma.CategoriasNullableScalarRelationFilter, Prisma.categoriasWhereInput> | null
  pedido_items?: Prisma.Pedido_itemsListRelationFilter
  receta_detalles?: Prisma.Receta_detallesListRelationFilter
}, "id">

export type medicamentosOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  nombre?: Prisma.SortOrder
  descripcion?: Prisma.SortOrderInput | Prisma.SortOrder
  precio?: Prisma.SortOrder
  imagen_url?: Prisma.SortOrderInput | Prisma.SortOrder
  categoria_id?: Prisma.SortOrderInput | Prisma.SortOrder
  requiere_receta?: Prisma.SortOrder
  stock?: Prisma.SortOrder
  activo?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
  _count?: Prisma.medicamentosCountOrderByAggregateInput
  _avg?: Prisma.medicamentosAvgOrderByAggregateInput
  _max?: Prisma.medicamentosMaxOrderByAggregateInput
  _min?: Prisma.medicamentosMinOrderByAggregateInput
  _sum?: Prisma.medicamentosSumOrderByAggregateInput
}

export type medicamentosScalarWhereWithAggregatesInput = {
  AND?: Prisma.medicamentosScalarWhereWithAggregatesInput | Prisma.medicamentosScalarWhereWithAggregatesInput[]
  OR?: Prisma.medicamentosScalarWhereWithAggregatesInput[]
  NOT?: Prisma.medicamentosScalarWhereWithAggregatesInput | Prisma.medicamentosScalarWhereWithAggregatesInput[]
  id?: Prisma.UuidWithAggregatesFilter<"medicamentos"> | string
  nombre?: Prisma.StringWithAggregatesFilter<"medicamentos"> | string
  descripcion?: Prisma.StringNullableWithAggregatesFilter<"medicamentos"> | string | null
  precio?: Prisma.DecimalWithAggregatesFilter<"medicamentos"> | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.StringNullableWithAggregatesFilter<"medicamentos"> | string | null
  categoria_id?: Prisma.UuidNullableWithAggregatesFilter<"medicamentos"> | string | null
  requiere_receta?: Prisma.BoolWithAggregatesFilter<"medicamentos"> | boolean
  stock?: Prisma.IntWithAggregatesFilter<"medicamentos"> | number
  activo?: Prisma.BoolWithAggregatesFilter<"medicamentos"> | boolean
  created_at?: Prisma.DateTimeWithAggregatesFilter<"medicamentos"> | Date | string
  updated_at?: Prisma.DateTimeWithAggregatesFilter<"medicamentos"> | Date | string
}

export type medicamentosCreateInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsCreateNestedManyWithoutMedicamentosInput
  categorias?: Prisma.categoriasCreateNestedOneWithoutMedicamentosInput
  pedido_items?: Prisma.pedido_itemsCreateNestedManyWithoutMedicamentosInput
  receta_detalles?: Prisma.receta_detallesCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosUncheckedCreateInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  categoria_id?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedCreateNestedManyWithoutMedicamentosInput
  pedido_items?: Prisma.pedido_itemsUncheckedCreateNestedManyWithoutMedicamentosInput
  receta_detalles?: Prisma.receta_detallesUncheckedCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUpdateManyWithoutMedicamentosNestedInput
  categorias?: Prisma.categoriasUpdateOneWithoutMedicamentosNestedInput
  pedido_items?: Prisma.pedido_itemsUpdateManyWithoutMedicamentosNestedInput
  receta_detalles?: Prisma.receta_detallesUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  categoria_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedUpdateManyWithoutMedicamentosNestedInput
  pedido_items?: Prisma.pedido_itemsUncheckedUpdateManyWithoutMedicamentosNestedInput
  receta_detalles?: Prisma.receta_detallesUncheckedUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosCreateManyInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  categoria_id?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
}

export type medicamentosUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type medicamentosUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  categoria_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type MedicamentosScalarRelationFilter = {
  is?: Prisma.medicamentosWhereInput
  isNot?: Prisma.medicamentosWhereInput
}

export type MedicamentosListRelationFilter = {
  every?: Prisma.medicamentosWhereInput
  some?: Prisma.medicamentosWhereInput
  none?: Prisma.medicamentosWhereInput
}

export type medicamentosOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type medicamentosCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  nombre?: Prisma.SortOrder
  descripcion?: Prisma.SortOrder
  precio?: Prisma.SortOrder
  imagen_url?: Prisma.SortOrder
  categoria_id?: Prisma.SortOrder
  requiere_receta?: Prisma.SortOrder
  stock?: Prisma.SortOrder
  activo?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
}

export type medicamentosAvgOrderByAggregateInput = {
  precio?: Prisma.SortOrder
  stock?: Prisma.SortOrder
}

export type medicamentosMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  nombre?: Prisma.SortOrder
  descripcion?: Prisma.SortOrder
  precio?: Prisma.SortOrder
  imagen_url?: Prisma.SortOrder
  categoria_id?: Prisma.SortOrder
  requiere_receta?: Prisma.SortOrder
  stock?: Prisma.SortOrder
  activo?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
}

export type medicamentosMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  nombre?: Prisma.SortOrder
  descripcion?: Prisma.SortOrder
  precio?: Prisma.SortOrder
  imagen_url?: Prisma.SortOrder
  categoria_id?: Prisma.SortOrder
  requiere_receta?: Prisma.SortOrder
  stock?: Prisma.SortOrder
  activo?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
}

export type medicamentosSumOrderByAggregateInput = {
  precio?: Prisma.SortOrder
  stock?: Prisma.SortOrder
}

export type medicamentosCreateNestedOneWithoutCarrito_itemsInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutCarrito_itemsInput, Prisma.medicamentosUncheckedCreateWithoutCarrito_itemsInput>
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutCarrito_itemsInput
  connect?: Prisma.medicamentosWhereUniqueInput
}

export type medicamentosUpdateOneRequiredWithoutCarrito_itemsNestedInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutCarrito_itemsInput, Prisma.medicamentosUncheckedCreateWithoutCarrito_itemsInput>
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutCarrito_itemsInput
  upsert?: Prisma.medicamentosUpsertWithoutCarrito_itemsInput
  connect?: Prisma.medicamentosWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.medicamentosUpdateToOneWithWhereWithoutCarrito_itemsInput, Prisma.medicamentosUpdateWithoutCarrito_itemsInput>, Prisma.medicamentosUncheckedUpdateWithoutCarrito_itemsInput>
}

export type medicamentosCreateNestedManyWithoutCategoriasInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutCategoriasInput, Prisma.medicamentosUncheckedCreateWithoutCategoriasInput> | Prisma.medicamentosCreateWithoutCategoriasInput[] | Prisma.medicamentosUncheckedCreateWithoutCategoriasInput[]
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutCategoriasInput | Prisma.medicamentosCreateOrConnectWithoutCategoriasInput[]
  createMany?: Prisma.medicamentosCreateManyCategoriasInputEnvelope
  connect?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
}

export type medicamentosUncheckedCreateNestedManyWithoutCategoriasInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutCategoriasInput, Prisma.medicamentosUncheckedCreateWithoutCategoriasInput> | Prisma.medicamentosCreateWithoutCategoriasInput[] | Prisma.medicamentosUncheckedCreateWithoutCategoriasInput[]
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutCategoriasInput | Prisma.medicamentosCreateOrConnectWithoutCategoriasInput[]
  createMany?: Prisma.medicamentosCreateManyCategoriasInputEnvelope
  connect?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
}

export type medicamentosUpdateManyWithoutCategoriasNestedInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutCategoriasInput, Prisma.medicamentosUncheckedCreateWithoutCategoriasInput> | Prisma.medicamentosCreateWithoutCategoriasInput[] | Prisma.medicamentosUncheckedCreateWithoutCategoriasInput[]
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutCategoriasInput | Prisma.medicamentosCreateOrConnectWithoutCategoriasInput[]
  upsert?: Prisma.medicamentosUpsertWithWhereUniqueWithoutCategoriasInput | Prisma.medicamentosUpsertWithWhereUniqueWithoutCategoriasInput[]
  createMany?: Prisma.medicamentosCreateManyCategoriasInputEnvelope
  set?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
  disconnect?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
  delete?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
  connect?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
  update?: Prisma.medicamentosUpdateWithWhereUniqueWithoutCategoriasInput | Prisma.medicamentosUpdateWithWhereUniqueWithoutCategoriasInput[]
  updateMany?: Prisma.medicamentosUpdateManyWithWhereWithoutCategoriasInput | Prisma.medicamentosUpdateManyWithWhereWithoutCategoriasInput[]
  deleteMany?: Prisma.medicamentosScalarWhereInput | Prisma.medicamentosScalarWhereInput[]
}

export type medicamentosUncheckedUpdateManyWithoutCategoriasNestedInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutCategoriasInput, Prisma.medicamentosUncheckedCreateWithoutCategoriasInput> | Prisma.medicamentosCreateWithoutCategoriasInput[] | Prisma.medicamentosUncheckedCreateWithoutCategoriasInput[]
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutCategoriasInput | Prisma.medicamentosCreateOrConnectWithoutCategoriasInput[]
  upsert?: Prisma.medicamentosUpsertWithWhereUniqueWithoutCategoriasInput | Prisma.medicamentosUpsertWithWhereUniqueWithoutCategoriasInput[]
  createMany?: Prisma.medicamentosCreateManyCategoriasInputEnvelope
  set?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
  disconnect?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
  delete?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
  connect?: Prisma.medicamentosWhereUniqueInput | Prisma.medicamentosWhereUniqueInput[]
  update?: Prisma.medicamentosUpdateWithWhereUniqueWithoutCategoriasInput | Prisma.medicamentosUpdateWithWhereUniqueWithoutCategoriasInput[]
  updateMany?: Prisma.medicamentosUpdateManyWithWhereWithoutCategoriasInput | Prisma.medicamentosUpdateManyWithWhereWithoutCategoriasInput[]
  deleteMany?: Prisma.medicamentosScalarWhereInput | Prisma.medicamentosScalarWhereInput[]
}

export type DecimalFieldUpdateOperationsInput = {
  set?: runtime.Decimal | runtime.DecimalJsLike | number | string
  increment?: runtime.Decimal | runtime.DecimalJsLike | number | string
  decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string
  multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string
  divide?: runtime.Decimal | runtime.DecimalJsLike | number | string
}

export type medicamentosCreateNestedOneWithoutPedido_itemsInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutPedido_itemsInput, Prisma.medicamentosUncheckedCreateWithoutPedido_itemsInput>
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutPedido_itemsInput
  connect?: Prisma.medicamentosWhereUniqueInput
}

export type medicamentosUpdateOneRequiredWithoutPedido_itemsNestedInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutPedido_itemsInput, Prisma.medicamentosUncheckedCreateWithoutPedido_itemsInput>
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutPedido_itemsInput
  upsert?: Prisma.medicamentosUpsertWithoutPedido_itemsInput
  connect?: Prisma.medicamentosWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.medicamentosUpdateToOneWithWhereWithoutPedido_itemsInput, Prisma.medicamentosUpdateWithoutPedido_itemsInput>, Prisma.medicamentosUncheckedUpdateWithoutPedido_itemsInput>
}

export type medicamentosCreateNestedOneWithoutReceta_detallesInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutReceta_detallesInput, Prisma.medicamentosUncheckedCreateWithoutReceta_detallesInput>
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutReceta_detallesInput
  connect?: Prisma.medicamentosWhereUniqueInput
}

export type medicamentosUpdateOneRequiredWithoutReceta_detallesNestedInput = {
  create?: Prisma.XOR<Prisma.medicamentosCreateWithoutReceta_detallesInput, Prisma.medicamentosUncheckedCreateWithoutReceta_detallesInput>
  connectOrCreate?: Prisma.medicamentosCreateOrConnectWithoutReceta_detallesInput
  upsert?: Prisma.medicamentosUpsertWithoutReceta_detallesInput
  connect?: Prisma.medicamentosWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.medicamentosUpdateToOneWithWhereWithoutReceta_detallesInput, Prisma.medicamentosUpdateWithoutReceta_detallesInput>, Prisma.medicamentosUncheckedUpdateWithoutReceta_detallesInput>
}

export type medicamentosCreateWithoutCarrito_itemsInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  categorias?: Prisma.categoriasCreateNestedOneWithoutMedicamentosInput
  pedido_items?: Prisma.pedido_itemsCreateNestedManyWithoutMedicamentosInput
  receta_detalles?: Prisma.receta_detallesCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosUncheckedCreateWithoutCarrito_itemsInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  categoria_id?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  pedido_items?: Prisma.pedido_itemsUncheckedCreateNestedManyWithoutMedicamentosInput
  receta_detalles?: Prisma.receta_detallesUncheckedCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosCreateOrConnectWithoutCarrito_itemsInput = {
  where: Prisma.medicamentosWhereUniqueInput
  create: Prisma.XOR<Prisma.medicamentosCreateWithoutCarrito_itemsInput, Prisma.medicamentosUncheckedCreateWithoutCarrito_itemsInput>
}

export type medicamentosUpsertWithoutCarrito_itemsInput = {
  update: Prisma.XOR<Prisma.medicamentosUpdateWithoutCarrito_itemsInput, Prisma.medicamentosUncheckedUpdateWithoutCarrito_itemsInput>
  create: Prisma.XOR<Prisma.medicamentosCreateWithoutCarrito_itemsInput, Prisma.medicamentosUncheckedCreateWithoutCarrito_itemsInput>
  where?: Prisma.medicamentosWhereInput
}

export type medicamentosUpdateToOneWithWhereWithoutCarrito_itemsInput = {
  where?: Prisma.medicamentosWhereInput
  data: Prisma.XOR<Prisma.medicamentosUpdateWithoutCarrito_itemsInput, Prisma.medicamentosUncheckedUpdateWithoutCarrito_itemsInput>
}

export type medicamentosUpdateWithoutCarrito_itemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  categorias?: Prisma.categoriasUpdateOneWithoutMedicamentosNestedInput
  pedido_items?: Prisma.pedido_itemsUpdateManyWithoutMedicamentosNestedInput
  receta_detalles?: Prisma.receta_detallesUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosUncheckedUpdateWithoutCarrito_itemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  categoria_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  pedido_items?: Prisma.pedido_itemsUncheckedUpdateManyWithoutMedicamentosNestedInput
  receta_detalles?: Prisma.receta_detallesUncheckedUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosCreateWithoutCategoriasInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsCreateNestedManyWithoutMedicamentosInput
  pedido_items?: Prisma.pedido_itemsCreateNestedManyWithoutMedicamentosInput
  receta_detalles?: Prisma.receta_detallesCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosUncheckedCreateWithoutCategoriasInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedCreateNestedManyWithoutMedicamentosInput
  pedido_items?: Prisma.pedido_itemsUncheckedCreateNestedManyWithoutMedicamentosInput
  receta_detalles?: Prisma.receta_detallesUncheckedCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosCreateOrConnectWithoutCategoriasInput = {
  where: Prisma.medicamentosWhereUniqueInput
  create: Prisma.XOR<Prisma.medicamentosCreateWithoutCategoriasInput, Prisma.medicamentosUncheckedCreateWithoutCategoriasInput>
}

export type medicamentosCreateManyCategoriasInputEnvelope = {
  data: Prisma.medicamentosCreateManyCategoriasInput | Prisma.medicamentosCreateManyCategoriasInput[]
  skipDuplicates?: boolean
}

export type medicamentosUpsertWithWhereUniqueWithoutCategoriasInput = {
  where: Prisma.medicamentosWhereUniqueInput
  update: Prisma.XOR<Prisma.medicamentosUpdateWithoutCategoriasInput, Prisma.medicamentosUncheckedUpdateWithoutCategoriasInput>
  create: Prisma.XOR<Prisma.medicamentosCreateWithoutCategoriasInput, Prisma.medicamentosUncheckedCreateWithoutCategoriasInput>
}

export type medicamentosUpdateWithWhereUniqueWithoutCategoriasInput = {
  where: Prisma.medicamentosWhereUniqueInput
  data: Prisma.XOR<Prisma.medicamentosUpdateWithoutCategoriasInput, Prisma.medicamentosUncheckedUpdateWithoutCategoriasInput>
}

export type medicamentosUpdateManyWithWhereWithoutCategoriasInput = {
  where: Prisma.medicamentosScalarWhereInput
  data: Prisma.XOR<Prisma.medicamentosUpdateManyMutationInput, Prisma.medicamentosUncheckedUpdateManyWithoutCategoriasInput>
}

export type medicamentosScalarWhereInput = {
  AND?: Prisma.medicamentosScalarWhereInput | Prisma.medicamentosScalarWhereInput[]
  OR?: Prisma.medicamentosScalarWhereInput[]
  NOT?: Prisma.medicamentosScalarWhereInput | Prisma.medicamentosScalarWhereInput[]
  id?: Prisma.UuidFilter<"medicamentos"> | string
  nombre?: Prisma.StringFilter<"medicamentos"> | string
  descripcion?: Prisma.StringNullableFilter<"medicamentos"> | string | null
  precio?: Prisma.DecimalFilter<"medicamentos"> | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.StringNullableFilter<"medicamentos"> | string | null
  categoria_id?: Prisma.UuidNullableFilter<"medicamentos"> | string | null
  requiere_receta?: Prisma.BoolFilter<"medicamentos"> | boolean
  stock?: Prisma.IntFilter<"medicamentos"> | number
  activo?: Prisma.BoolFilter<"medicamentos"> | boolean
  created_at?: Prisma.DateTimeFilter<"medicamentos"> | Date | string
  updated_at?: Prisma.DateTimeFilter<"medicamentos"> | Date | string
}

export type medicamentosCreateWithoutPedido_itemsInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsCreateNestedManyWithoutMedicamentosInput
  categorias?: Prisma.categoriasCreateNestedOneWithoutMedicamentosInput
  receta_detalles?: Prisma.receta_detallesCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosUncheckedCreateWithoutPedido_itemsInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  categoria_id?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedCreateNestedManyWithoutMedicamentosInput
  receta_detalles?: Prisma.receta_detallesUncheckedCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosCreateOrConnectWithoutPedido_itemsInput = {
  where: Prisma.medicamentosWhereUniqueInput
  create: Prisma.XOR<Prisma.medicamentosCreateWithoutPedido_itemsInput, Prisma.medicamentosUncheckedCreateWithoutPedido_itemsInput>
}

export type medicamentosUpsertWithoutPedido_itemsInput = {
  update: Prisma.XOR<Prisma.medicamentosUpdateWithoutPedido_itemsInput, Prisma.medicamentosUncheckedUpdateWithoutPedido_itemsInput>
  create: Prisma.XOR<Prisma.medicamentosCreateWithoutPedido_itemsInput, Prisma.medicamentosUncheckedCreateWithoutPedido_itemsInput>
  where?: Prisma.medicamentosWhereInput
}

export type medicamentosUpdateToOneWithWhereWithoutPedido_itemsInput = {
  where?: Prisma.medicamentosWhereInput
  data: Prisma.XOR<Prisma.medicamentosUpdateWithoutPedido_itemsInput, Prisma.medicamentosUncheckedUpdateWithoutPedido_itemsInput>
}

export type medicamentosUpdateWithoutPedido_itemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUpdateManyWithoutMedicamentosNestedInput
  categorias?: Prisma.categoriasUpdateOneWithoutMedicamentosNestedInput
  receta_detalles?: Prisma.receta_detallesUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosUncheckedUpdateWithoutPedido_itemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  categoria_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedUpdateManyWithoutMedicamentosNestedInput
  receta_detalles?: Prisma.receta_detallesUncheckedUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosCreateWithoutReceta_detallesInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsCreateNestedManyWithoutMedicamentosInput
  categorias?: Prisma.categoriasCreateNestedOneWithoutMedicamentosInput
  pedido_items?: Prisma.pedido_itemsCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosUncheckedCreateWithoutReceta_detallesInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  categoria_id?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedCreateNestedManyWithoutMedicamentosInput
  pedido_items?: Prisma.pedido_itemsUncheckedCreateNestedManyWithoutMedicamentosInput
}

export type medicamentosCreateOrConnectWithoutReceta_detallesInput = {
  where: Prisma.medicamentosWhereUniqueInput
  create: Prisma.XOR<Prisma.medicamentosCreateWithoutReceta_detallesInput, Prisma.medicamentosUncheckedCreateWithoutReceta_detallesInput>
}

export type medicamentosUpsertWithoutReceta_detallesInput = {
  update: Prisma.XOR<Prisma.medicamentosUpdateWithoutReceta_detallesInput, Prisma.medicamentosUncheckedUpdateWithoutReceta_detallesInput>
  create: Prisma.XOR<Prisma.medicamentosCreateWithoutReceta_detallesInput, Prisma.medicamentosUncheckedCreateWithoutReceta_detallesInput>
  where?: Prisma.medicamentosWhereInput
}

export type medicamentosUpdateToOneWithWhereWithoutReceta_detallesInput = {
  where?: Prisma.medicamentosWhereInput
  data: Prisma.XOR<Prisma.medicamentosUpdateWithoutReceta_detallesInput, Prisma.medicamentosUncheckedUpdateWithoutReceta_detallesInput>
}

export type medicamentosUpdateWithoutReceta_detallesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUpdateManyWithoutMedicamentosNestedInput
  categorias?: Prisma.categoriasUpdateOneWithoutMedicamentosNestedInput
  pedido_items?: Prisma.pedido_itemsUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosUncheckedUpdateWithoutReceta_detallesInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  categoria_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedUpdateManyWithoutMedicamentosNestedInput
  pedido_items?: Prisma.pedido_itemsUncheckedUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosCreateManyCategoriasInput = {
  id?: string
  nombre: string
  descripcion?: string | null
  precio: runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: string | null
  requiere_receta?: boolean
  stock?: number
  activo?: boolean
  created_at?: Date | string
  updated_at?: Date | string
}

export type medicamentosUpdateWithoutCategoriasInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUpdateManyWithoutMedicamentosNestedInput
  pedido_items?: Prisma.pedido_itemsUpdateManyWithoutMedicamentosNestedInput
  receta_detalles?: Prisma.receta_detallesUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosUncheckedUpdateWithoutCategoriasInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedUpdateManyWithoutMedicamentosNestedInput
  pedido_items?: Prisma.pedido_itemsUncheckedUpdateManyWithoutMedicamentosNestedInput
  receta_detalles?: Prisma.receta_detallesUncheckedUpdateManyWithoutMedicamentosNestedInput
}

export type medicamentosUncheckedUpdateManyWithoutCategoriasInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  nombre?: Prisma.StringFieldUpdateOperationsInput | string
  descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string
  imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  requiere_receta?: Prisma.BoolFieldUpdateOperationsInput | boolean
  stock?: Prisma.IntFieldUpdateOperationsInput | number
  activo?: Prisma.BoolFieldUpdateOperationsInput | boolean
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}


/**
 * Count Type MedicamentosCountOutputType
 */

export type MedicamentosCountOutputType = {
  carrito_items: number
  pedido_items: number
  receta_detalles: number
}

export type MedicamentosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  carrito_items?: boolean | MedicamentosCountOutputTypeCountCarrito_itemsArgs
  pedido_items?: boolean | MedicamentosCountOutputTypeCountPedido_itemsArgs
  receta_detalles?: boolean | MedicamentosCountOutputTypeCountReceta_detallesArgs
}

/**
 * MedicamentosCountOutputType without action
 */
export type MedicamentosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the MedicamentosCountOutputType
   */
  select?: Prisma.MedicamentosCountOutputTypeSelect<ExtArgs> | null
}

/**
 * MedicamentosCountOutputType without action
 */
export type MedicamentosCountOutputTypeCountCarrito_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.carrito_itemsWhereInput
}

/**
 * MedicamentosCountOutputType without action
 */
export type MedicamentosCountOutputTypeCountPedido_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.pedido_itemsWhereInput
}

/**
 * MedicamentosCountOutputType without action
 */
export type MedicamentosCountOutputTypeCountReceta_detallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.receta_detallesWhereInput
}


export type medicamentosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  nombre?: boolean
  descripcion?: boolean
  precio?: boolean
  imagen_url?: boolean
  categoria_id?: boolean
  requiere_receta?: boolean
  stock?: boolean
  activo?: boolean
  created_at?: boolean
  updated_at?: boolean
  carrito_items?: boolean | Prisma.medicamentos$carrito_itemsArgs<ExtArgs>
  categorias?: boolean | Prisma.medicamentos$categoriasArgs<ExtArgs>
  pedido_items?: boolean | Prisma.medicamentos$pedido_itemsArgs<ExtArgs>
  receta_detalles?: boolean | Prisma.medicamentos$receta_detallesArgs<ExtArgs>
  _count?: boolean | Prisma.MedicamentosCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["medicamentos"]>

export type medicamentosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  nombre?: boolean
  descripcion?: boolean
  precio?: boolean
  imagen_url?: boolean
  categoria_id?: boolean
  requiere_receta?: boolean
  stock?: boolean
  activo?: boolean
  created_at?: boolean
  updated_at?: boolean
  categorias?: boolean | Prisma.medicamentos$categoriasArgs<ExtArgs>
}, ExtArgs["result"]["medicamentos"]>

export type medicamentosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  nombre?: boolean
  descripcion?: boolean
  precio?: boolean
  imagen_url?: boolean
  categoria_id?: boolean
  requiere_receta?: boolean
  stock?: boolean
  activo?: boolean
  created_at?: boolean
  updated_at?: boolean
  categorias?: boolean | Prisma.medicamentos$categoriasArgs<ExtArgs>
}, ExtArgs["result"]["medicamentos"]>

export type medicamentosSelectScalar = {
  id?: boolean
  nombre?: boolean
  descripcion?: boolean
  precio?: boolean
  imagen_url?: boolean
  categoria_id?: boolean
  requiere_receta?: boolean
  stock?: boolean
  activo?: boolean
  created_at?: boolean
  updated_at?: boolean
}

export type medicamentosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "imagen_url" | "categoria_id" | "requiere_receta" | "stock" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["medicamentos"]>
export type medicamentosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  carrito_items?: boolean | Prisma.medicamentos$carrito_itemsArgs<ExtArgs>
  categorias?: boolean | Prisma.medicamentos$categoriasArgs<ExtArgs>
  pedido_items?: boolean | Prisma.medicamentos$pedido_itemsArgs<ExtArgs>
  receta_detalles?: boolean | Prisma.medicamentos$receta_detallesArgs<ExtArgs>
  _count?: boolean | Prisma.MedicamentosCountOutputTypeDefaultArgs<ExtArgs>
}
export type medicamentosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  categorias?: boolean | Prisma.medicamentos$categoriasArgs<ExtArgs>
}
export type medicamentosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  categorias?: boolean | Prisma.medicamentos$categoriasArgs<ExtArgs>
}

export type $medicamentosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "medicamentos"
  objects: {
    carrito_items: Prisma.$carrito_itemsPayload<ExtArgs>[]
    categorias: Prisma.$categoriasPayload<ExtArgs> | null
    pedido_items: Prisma.$pedido_itemsPayload<ExtArgs>[]
    receta_detalles: Prisma.$receta_detallesPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    nombre: string
    descripcion: string | null
    precio: runtime.Decimal
    imagen_url: string | null
    categoria_id: string | null
    requiere_receta: boolean
    stock: number
    activo: boolean
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["medicamentos"]>
  composites: {}
}

export type medicamentosGetPayload<S extends boolean | null | undefined | medicamentosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$medicamentosPayload, S>

export type medicamentosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<medicamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MedicamentosCountAggregateInputType | true
  }

export interface medicamentosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medicamentos'], meta: { name: 'medicamentos' } }
  /**
   * Find zero or one Medicamentos that matches the filter.
   * @param {medicamentosFindUniqueArgs} args - Arguments to find a Medicamentos
   * @example
   * // Get one Medicamentos
   * const medicamentos = await prisma.medicamentos.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends medicamentosFindUniqueArgs>(args: Prisma.SelectSubset<T, medicamentosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one Medicamentos that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {medicamentosFindUniqueOrThrowArgs} args - Arguments to find a Medicamentos
   * @example
   * // Get one Medicamentos
   * const medicamentos = await prisma.medicamentos.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends medicamentosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, medicamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Medicamentos that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {medicamentosFindFirstArgs} args - Arguments to find a Medicamentos
   * @example
   * // Get one Medicamentos
   * const medicamentos = await prisma.medicamentos.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends medicamentosFindFirstArgs>(args?: Prisma.SelectSubset<T, medicamentosFindFirstArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Medicamentos that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {medicamentosFindFirstOrThrowArgs} args - Arguments to find a Medicamentos
   * @example
   * // Get one Medicamentos
   * const medicamentos = await prisma.medicamentos.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends medicamentosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, medicamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more Medicamentos that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {medicamentosFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Medicamentos
   * const medicamentos = await prisma.medicamentos.findMany()
   * 
   * // Get first 10 Medicamentos
   * const medicamentos = await prisma.medicamentos.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const medicamentosWithIdOnly = await prisma.medicamentos.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends medicamentosFindManyArgs>(args?: Prisma.SelectSubset<T, medicamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a Medicamentos.
   * @param {medicamentosCreateArgs} args - Arguments to create a Medicamentos.
   * @example
   * // Create one Medicamentos
   * const Medicamentos = await prisma.medicamentos.create({
   *   data: {
   *     // ... data to create a Medicamentos
   *   }
   * })
   * 
   */
  create<T extends medicamentosCreateArgs>(args: Prisma.SelectSubset<T, medicamentosCreateArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many Medicamentos.
   * @param {medicamentosCreateManyArgs} args - Arguments to create many Medicamentos.
   * @example
   * // Create many Medicamentos
   * const medicamentos = await prisma.medicamentos.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends medicamentosCreateManyArgs>(args?: Prisma.SelectSubset<T, medicamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many Medicamentos and returns the data saved in the database.
   * @param {medicamentosCreateManyAndReturnArgs} args - Arguments to create many Medicamentos.
   * @example
   * // Create many Medicamentos
   * const medicamentos = await prisma.medicamentos.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many Medicamentos and only return the `id`
   * const medicamentosWithIdOnly = await prisma.medicamentos.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends medicamentosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, medicamentosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a Medicamentos.
   * @param {medicamentosDeleteArgs} args - Arguments to delete one Medicamentos.
   * @example
   * // Delete one Medicamentos
   * const Medicamentos = await prisma.medicamentos.delete({
   *   where: {
   *     // ... filter to delete one Medicamentos
   *   }
   * })
   * 
   */
  delete<T extends medicamentosDeleteArgs>(args: Prisma.SelectSubset<T, medicamentosDeleteArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one Medicamentos.
   * @param {medicamentosUpdateArgs} args - Arguments to update one Medicamentos.
   * @example
   * // Update one Medicamentos
   * const medicamentos = await prisma.medicamentos.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends medicamentosUpdateArgs>(args: Prisma.SelectSubset<T, medicamentosUpdateArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more Medicamentos.
   * @param {medicamentosDeleteManyArgs} args - Arguments to filter Medicamentos to delete.
   * @example
   * // Delete a few Medicamentos
   * const { count } = await prisma.medicamentos.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends medicamentosDeleteManyArgs>(args?: Prisma.SelectSubset<T, medicamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Medicamentos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {medicamentosUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Medicamentos
   * const medicamentos = await prisma.medicamentos.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends medicamentosUpdateManyArgs>(args: Prisma.SelectSubset<T, medicamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Medicamentos and returns the data updated in the database.
   * @param {medicamentosUpdateManyAndReturnArgs} args - Arguments to update many Medicamentos.
   * @example
   * // Update many Medicamentos
   * const medicamentos = await prisma.medicamentos.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more Medicamentos and only return the `id`
   * const medicamentosWithIdOnly = await prisma.medicamentos.updateManyAndReturn({
   *   select: { id: true },
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  updateManyAndReturn<T extends medicamentosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, medicamentosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one Medicamentos.
   * @param {medicamentosUpsertArgs} args - Arguments to update or create a Medicamentos.
   * @example
   * // Update or create a Medicamentos
   * const medicamentos = await prisma.medicamentos.upsert({
   *   create: {
   *     // ... data to create a Medicamentos
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Medicamentos we want to update
   *   }
   * })
   */
  upsert<T extends medicamentosUpsertArgs>(args: Prisma.SelectSubset<T, medicamentosUpsertArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of Medicamentos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {medicamentosCountArgs} args - Arguments to filter Medicamentos to count.
   * @example
   * // Count the number of Medicamentos
   * const count = await prisma.medicamentos.count({
   *   where: {
   *     // ... the filter for the Medicamentos we want to count
   *   }
   * })
  **/
  count<T extends medicamentosCountArgs>(
    args?: Prisma.Subset<T, medicamentosCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], MedicamentosCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a Medicamentos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {MedicamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
   * @example
   * // Ordered by age ascending
   * // Where email contains prisma.io
   * // Limited to the 10 users
   * const aggregations = await prisma.user.aggregate({
   *   _avg: {
   *     age: true,
   *   },
   *   where: {
   *     email: {
   *       contains: "prisma.io",
   *     },
   *   },
   *   orderBy: {
   *     age: "asc",
   *   },
   *   take: 10,
   * })
  **/
  aggregate<T extends MedicamentosAggregateArgs>(args: Prisma.Subset<T, MedicamentosAggregateArgs>): Prisma.PrismaPromise<GetMedicamentosAggregateType<T>>

  /**
   * Group by Medicamentos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {medicamentosGroupByArgs} args - Group by arguments.
   * @example
   * // Group by city, order by createdAt, get count
   * const result = await prisma.user.groupBy({
   *   by: ['city', 'createdAt'],
   *   orderBy: {
   *     createdAt: true
   *   },
   *   _count: {
   *     _all: true
   *   },
   * })
   * 
  **/
  groupBy<
    T extends medicamentosGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: medicamentosGroupByArgs['orderBy'] }
      : { orderBy?: medicamentosGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, medicamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the medicamentos model
 */
readonly fields: medicamentosFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for medicamentos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__medicamentosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  carrito_items<T extends Prisma.medicamentos$carrito_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.medicamentos$carrito_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  categorias<T extends Prisma.medicamentos$categoriasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.medicamentos$categoriasArgs<ExtArgs>>): Prisma.Prisma__categoriasClient<runtime.Types.Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
  pedido_items<T extends Prisma.medicamentos$pedido_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.medicamentos$pedido_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  receta_detalles<T extends Prisma.medicamentos$receta_detallesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.medicamentos$receta_detallesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




/**
 * Fields of the medicamentos model
 */
export interface medicamentosFieldRefs {
  readonly id: Prisma.FieldRef<"medicamentos", 'String'>
  readonly nombre: Prisma.FieldRef<"medicamentos", 'String'>
  readonly descripcion: Prisma.FieldRef<"medicamentos", 'String'>
  readonly precio: Prisma.FieldRef<"medicamentos", 'Decimal'>
  readonly imagen_url: Prisma.FieldRef<"medicamentos", 'String'>
  readonly categoria_id: Prisma.FieldRef<"medicamentos", 'String'>
  readonly requiere_receta: Prisma.FieldRef<"medicamentos", 'Boolean'>
  readonly stock: Prisma.FieldRef<"medicamentos", 'Int'>
  readonly activo: Prisma.FieldRef<"medicamentos", 'Boolean'>
  readonly created_at: Prisma.FieldRef<"medicamentos", 'DateTime'>
  readonly updated_at: Prisma.FieldRef<"medicamentos", 'DateTime'>
}
    

// Custom InputTypes
/**
 * medicamentos findUnique
 */
export type medicamentosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
  /**
   * Filter, which medicamentos to fetch.
   */
  where: Prisma.medicamentosWhereUniqueInput
}

/**
 * medicamentos findUniqueOrThrow
 */
export type medicamentosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
  /**
   * Filter, which medicamentos to fetch.
   */
  where: Prisma.medicamentosWhereUniqueInput
}

/**
 * medicamentos findFirst
 */
export type medicamentosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
  /**
   * Filter, which medicamentos to fetch.
   */
  where?: Prisma.medicamentosWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of medicamentos to fetch.
   */
  orderBy?: Prisma.medicamentosOrderByWithRelationInput | Prisma.medicamentosOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for medicamentos.
   */
  cursor?: Prisma.medicamentosWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` medicamentos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` medicamentos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of medicamentos.
   */
  distinct?: Prisma.MedicamentosScalarFieldEnum | Prisma.MedicamentosScalarFieldEnum[]
}

/**
 * medicamentos findFirstOrThrow
 */
export type medicamentosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
  /**
   * Filter, which medicamentos to fetch.
   */
  where?: Prisma.medicamentosWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of medicamentos to fetch.
   */
  orderBy?: Prisma.medicamentosOrderByWithRelationInput | Prisma.medicamentosOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for medicamentos.
   */
  cursor?: Prisma.medicamentosWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` medicamentos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` medicamentos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of medicamentos.
   */
  distinct?: Prisma.MedicamentosScalarFieldEnum | Prisma.MedicamentosScalarFieldEnum[]
}

/**
 * medicamentos findMany
 */
export type medicamentosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
  /**
   * Filter, which medicamentos to fetch.
   */
  where?: Prisma.medicamentosWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of medicamentos to fetch.
   */
  orderBy?: Prisma.medicamentosOrderByWithRelationInput | Prisma.medicamentosOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing medicamentos.
   */
  cursor?: Prisma.medicamentosWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` medicamentos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` medicamentos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of medicamentos.
   */
  distinct?: Prisma.MedicamentosScalarFieldEnum | Prisma.MedicamentosScalarFieldEnum[]
}

/**
 * medicamentos create
 */
export type medicamentosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
  /**
   * The data needed to create a medicamentos.
   */
  data: Prisma.XOR<Prisma.medicamentosCreateInput, Prisma.medicamentosUncheckedCreateInput>
}

/**
 * medicamentos createMany
 */
export type medicamentosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many medicamentos.
   */
  data: Prisma.medicamentosCreateManyInput | Prisma.medicamentosCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * medicamentos createManyAndReturn
 */
export type medicamentosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * The data used to create many medicamentos.
   */
  data: Prisma.medicamentosCreateManyInput | Prisma.medicamentosCreateManyInput[]
  skipDuplicates?: boolean
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosIncludeCreateManyAndReturn<ExtArgs> | null
}

/**
 * medicamentos update
 */
export type medicamentosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
  /**
   * The data needed to update a medicamentos.
   */
  data: Prisma.XOR<Prisma.medicamentosUpdateInput, Prisma.medicamentosUncheckedUpdateInput>
  /**
   * Choose, which medicamentos to update.
   */
  where: Prisma.medicamentosWhereUniqueInput
}

/**
 * medicamentos updateMany
 */
export type medicamentosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update medicamentos.
   */
  data: Prisma.XOR<Prisma.medicamentosUpdateManyMutationInput, Prisma.medicamentosUncheckedUpdateManyInput>
  /**
   * Filter which medicamentos to update
   */
  where?: Prisma.medicamentosWhereInput
  /**
   * Limit how many medicamentos to update.
   */
  limit?: number
}

/**
 * medicamentos updateManyAndReturn
 */
export type medicamentosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * The data used to update medicamentos.
   */
  data: Prisma.XOR<Prisma.medicamentosUpdateManyMutationInput, Prisma.medicamentosUncheckedUpdateManyInput>
  /**
   * Filter which medicamentos to update
   */
  where?: Prisma.medicamentosWhereInput
  /**
   * Limit how many medicamentos to update.
   */
  limit?: number
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosIncludeUpdateManyAndReturn<ExtArgs> | null
}

/**
 * medicamentos upsert
 */
export type medicamentosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
  /**
   * The filter to search for the medicamentos to update in case it exists.
   */
  where: Prisma.medicamentosWhereUniqueInput
  /**
   * In case the medicamentos found by the `where` argument doesn't exist, create a new medicamentos with this data.
   */
  create: Prisma.XOR<Prisma.medicamentosCreateInput, Prisma.medicamentosUncheckedCreateInput>
  /**
   * In case the medicamentos was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.medicamentosUpdateInput, Prisma.medicamentosUncheckedUpdateInput>
}

/**
 * medicamentos delete
 */
export type medicamentosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
  /**
   * Filter which medicamentos to delete.
   */
  where: Prisma.medicamentosWhereUniqueInput
}

/**
 * medicamentos deleteMany
 */
export type medicamentosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which medicamentos to delete
   */
  where?: Prisma.medicamentosWhereInput
  /**
   * Limit how many medicamentos to delete.
   */
  limit?: number
}

/**
 * medicamentos.carrito_items
 */
export type medicamentos$carrito_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carrito_items
   */
  select?: Prisma.carrito_itemsSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carrito_items
   */
  omit?: Prisma.carrito_itemsOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carrito_itemsInclude<ExtArgs> | null
  where?: Prisma.carrito_itemsWhereInput
  orderBy?: Prisma.carrito_itemsOrderByWithRelationInput | Prisma.carrito_itemsOrderByWithRelationInput[]
  cursor?: Prisma.carrito_itemsWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.Carrito_itemsScalarFieldEnum | Prisma.Carrito_itemsScalarFieldEnum[]
}

/**
 * medicamentos.categorias
 */
export type medicamentos$categoriasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the categorias
   */
  select?: Prisma.categoriasSelect<ExtArgs> | null
  /**
   * Omit specific fields from the categorias
   */
  omit?: Prisma.categoriasOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.categoriasInclude<ExtArgs> | null
  where?: Prisma.categoriasWhereInput
}

/**
 * medicamentos.pedido_items
 */
export type medicamentos$pedido_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the pedido_items
   */
  select?: Prisma.pedido_itemsSelect<ExtArgs> | null
  /**
   * Omit specific fields from the pedido_items
   */
  omit?: Prisma.pedido_itemsOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.pedido_itemsInclude<ExtArgs> | null
  where?: Prisma.pedido_itemsWhereInput
  orderBy?: Prisma.pedido_itemsOrderByWithRelationInput | Prisma.pedido_itemsOrderByWithRelationInput[]
  cursor?: Prisma.pedido_itemsWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.Pedido_itemsScalarFieldEnum | Prisma.Pedido_itemsScalarFieldEnum[]
}

/**
 * medicamentos.receta_detalles
 */
export type medicamentos$receta_detallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the receta_detalles
   */
  select?: Prisma.receta_detallesSelect<ExtArgs> | null
  /**
   * Omit specific fields from the receta_detalles
   */
  omit?: Prisma.receta_detallesOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.receta_detallesInclude<ExtArgs> | null
  where?: Prisma.receta_detallesWhereInput
  orderBy?: Prisma.receta_detallesOrderByWithRelationInput | Prisma.receta_detallesOrderByWithRelationInput[]
  cursor?: Prisma.receta_detallesWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.Receta_detallesScalarFieldEnum | Prisma.Receta_detallesScalarFieldEnum[]
}

/**
 * medicamentos without action
 */
export type medicamentosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the medicamentos
   */
  select?: Prisma.medicamentosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the medicamentos
   */
  omit?: Prisma.medicamentosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.medicamentosInclude<ExtArgs> | null
}
