import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"

/**
 * Model receta_detalles
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type receta_detallesModel = runtime.Types.Result.DefaultSelection<Prisma.$receta_detallesPayload>

export type AggregateReceta_detalles = {
  _count: Receta_detallesCountAggregateOutputType | null
  _avg: Receta_detallesAvgAggregateOutputType | null
  _sum: Receta_detallesSumAggregateOutputType | null
  _min: Receta_detallesMinAggregateOutputType | null
  _max: Receta_detallesMaxAggregateOutputType | null
}

export type Receta_detallesAvgAggregateOutputType = {
  cantidad_prescrita: number | null
}

export type Receta_detallesSumAggregateOutputType = {
  cantidad_prescrita: number | null
}

export type Receta_detallesMinAggregateOutputType = {
  id: string | null
  receta_id: string | null
  medicamento_id: string | null
  cantidad_prescrita: number | null
  indicaciones: string | null
}

export type Receta_detallesMaxAggregateOutputType = {
  id: string | null
  receta_id: string | null
  medicamento_id: string | null
  cantidad_prescrita: number | null
  indicaciones: string | null
}

export type Receta_detallesCountAggregateOutputType = {
  id: number
  receta_id: number
  medicamento_id: number
  cantidad_prescrita: number
  indicaciones: number
  _all: number
}


export type Receta_detallesAvgAggregateInputType = {
  cantidad_prescrita?: true
}

export type Receta_detallesSumAggregateInputType = {
  cantidad_prescrita?: true
}

export type Receta_detallesMinAggregateInputType = {
  id?: true
  receta_id?: true
  medicamento_id?: true
  cantidad_prescrita?: true
  indicaciones?: true
}

export type Receta_detallesMaxAggregateInputType = {
  id?: true
  receta_id?: true
  medicamento_id?: true
  cantidad_prescrita?: true
  indicaciones?: true
}

export type Receta_detallesCountAggregateInputType = {
  id?: true
  receta_id?: true
  medicamento_id?: true
  cantidad_prescrita?: true
  indicaciones?: true
  _all?: true
}

export type Receta_detallesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which receta_detalles to aggregate.
   */
  where?: Prisma.receta_detallesWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of receta_detalles to fetch.
   */
  orderBy?: Prisma.receta_detallesOrderByWithRelationInput | Prisma.receta_detallesOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.receta_detallesWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` receta_detalles from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` receta_detalles.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned receta_detalles
  **/
  _count?: true | Receta_detallesCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to average
  **/
  _avg?: Receta_detallesAvgAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to sum
  **/
  _sum?: Receta_detallesSumAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: Receta_detallesMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: Receta_detallesMaxAggregateInputType
}

export type GetReceta_detallesAggregateType<T extends Receta_detallesAggregateArgs> = {
      [P in keyof T & keyof AggregateReceta_detalles]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateReceta_detalles[P]>
    : Prisma.GetScalarType<T[P], AggregateReceta_detalles[P]>
}




export type receta_detallesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.receta_detallesWhereInput
  orderBy?: Prisma.receta_detallesOrderByWithAggregationInput | Prisma.receta_detallesOrderByWithAggregationInput[]
  by: Prisma.Receta_detallesScalarFieldEnum[] | Prisma.Receta_detallesScalarFieldEnum
  having?: Prisma.receta_detallesScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: Receta_detallesCountAggregateInputType | true
  _avg?: Receta_detallesAvgAggregateInputType
  _sum?: Receta_detallesSumAggregateInputType
  _min?: Receta_detallesMinAggregateInputType
  _max?: Receta_detallesMaxAggregateInputType
}

export type Receta_detallesGroupByOutputType = {
  id: string
  receta_id: string
  medicamento_id: string
  cantidad_prescrita: number | null
  indicaciones: string | null
  _count: Receta_detallesCountAggregateOutputType | null
  _avg: Receta_detallesAvgAggregateOutputType | null
  _sum: Receta_detallesSumAggregateOutputType | null
  _min: Receta_detallesMinAggregateOutputType | null
  _max: Receta_detallesMaxAggregateOutputType | null
}

export type GetReceta_detallesGroupByPayload<T extends receta_detallesGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<Receta_detallesGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof Receta_detallesGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], Receta_detallesGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], Receta_detallesGroupByOutputType[P]>
      }
    >
  >



export type receta_detallesWhereInput = {
  AND?: Prisma.receta_detallesWhereInput | Prisma.receta_detallesWhereInput[]
  OR?: Prisma.receta_detallesWhereInput[]
  NOT?: Prisma.receta_detallesWhereInput | Prisma.receta_detallesWhereInput[]
  id?: Prisma.UuidFilter<"receta_detalles"> | string
  receta_id?: Prisma.UuidFilter<"receta_detalles"> | string
  medicamento_id?: Prisma.UuidFilter<"receta_detalles"> | string
  cantidad_prescrita?: Prisma.IntNullableFilter<"receta_detalles"> | number | null
  indicaciones?: Prisma.StringNullableFilter<"receta_detalles"> | string | null
  pedido_items?: Prisma.Pedido_itemsListRelationFilter
  medicamentos?: Prisma.XOR<Prisma.MedicamentosScalarRelationFilter, Prisma.medicamentosWhereInput>
  recetas?: Prisma.XOR<Prisma.RecetasScalarRelationFilter, Prisma.recetasWhereInput>
}

export type receta_detallesOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  receta_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad_prescrita?: Prisma.SortOrderInput | Prisma.SortOrder
  indicaciones?: Prisma.SortOrderInput | Prisma.SortOrder
  pedido_items?: Prisma.pedido_itemsOrderByRelationAggregateInput
  medicamentos?: Prisma.medicamentosOrderByWithRelationInput
  recetas?: Prisma.recetasOrderByWithRelationInput
}

export type receta_detallesWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  receta_id_medicamento_id?: Prisma.receta_detallesReceta_idMedicamento_idCompoundUniqueInput
  AND?: Prisma.receta_detallesWhereInput | Prisma.receta_detallesWhereInput[]
  OR?: Prisma.receta_detallesWhereInput[]
  NOT?: Prisma.receta_detallesWhereInput | Prisma.receta_detallesWhereInput[]
  receta_id?: Prisma.UuidFilter<"receta_detalles"> | string
  medicamento_id?: Prisma.UuidFilter<"receta_detalles"> | string
  cantidad_prescrita?: Prisma.IntNullableFilter<"receta_detalles"> | number | null
  indicaciones?: Prisma.StringNullableFilter<"receta_detalles"> | string | null
  pedido_items?: Prisma.Pedido_itemsListRelationFilter
  medicamentos?: Prisma.XOR<Prisma.MedicamentosScalarRelationFilter, Prisma.medicamentosWhereInput>
  recetas?: Prisma.XOR<Prisma.RecetasScalarRelationFilter, Prisma.recetasWhereInput>
}, "id" | "receta_id_medicamento_id">

export type receta_detallesOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  receta_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad_prescrita?: Prisma.SortOrderInput | Prisma.SortOrder
  indicaciones?: Prisma.SortOrderInput | Prisma.SortOrder
  _count?: Prisma.receta_detallesCountOrderByAggregateInput
  _avg?: Prisma.receta_detallesAvgOrderByAggregateInput
  _max?: Prisma.receta_detallesMaxOrderByAggregateInput
  _min?: Prisma.receta_detallesMinOrderByAggregateInput
  _sum?: Prisma.receta_detallesSumOrderByAggregateInput
}

export type receta_detallesScalarWhereWithAggregatesInput = {
  AND?: Prisma.receta_detallesScalarWhereWithAggregatesInput | Prisma.receta_detallesScalarWhereWithAggregatesInput[]
  OR?: Prisma.receta_detallesScalarWhereWithAggregatesInput[]
  NOT?: Prisma.receta_detallesScalarWhereWithAggregatesInput | Prisma.receta_detallesScalarWhereWithAggregatesInput[]
  id?: Prisma.UuidWithAggregatesFilter<"receta_detalles"> | string
  receta_id?: Prisma.UuidWithAggregatesFilter<"receta_detalles"> | string
  medicamento_id?: Prisma.UuidWithAggregatesFilter<"receta_detalles"> | string
  cantidad_prescrita?: Prisma.IntNullableWithAggregatesFilter<"receta_detalles"> | number | null
  indicaciones?: Prisma.StringNullableWithAggregatesFilter<"receta_detalles"> | string | null
}

export type receta_detallesCreateInput = {
  id?: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
  pedido_items?: Prisma.pedido_itemsCreateNestedManyWithoutReceta_detallesInput
  medicamentos: Prisma.medicamentosCreateNestedOneWithoutReceta_detallesInput
  recetas: Prisma.recetasCreateNestedOneWithoutReceta_detallesInput
}

export type receta_detallesUncheckedCreateInput = {
  id?: string
  receta_id: string
  medicamento_id: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
  pedido_items?: Prisma.pedido_itemsUncheckedCreateNestedManyWithoutReceta_detallesInput
}

export type receta_detallesUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  pedido_items?: Prisma.pedido_itemsUpdateManyWithoutReceta_detallesNestedInput
  medicamentos?: Prisma.medicamentosUpdateOneRequiredWithoutReceta_detallesNestedInput
  recetas?: Prisma.recetasUpdateOneRequiredWithoutReceta_detallesNestedInput
}

export type receta_detallesUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  receta_id?: Prisma.StringFieldUpdateOperationsInput | string
  medicamento_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  pedido_items?: Prisma.pedido_itemsUncheckedUpdateManyWithoutReceta_detallesNestedInput
}

export type receta_detallesCreateManyInput = {
  id?: string
  receta_id: string
  medicamento_id: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
}

export type receta_detallesUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type receta_detallesUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  receta_id?: Prisma.StringFieldUpdateOperationsInput | string
  medicamento_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type Receta_detallesListRelationFilter = {
  every?: Prisma.receta_detallesWhereInput
  some?: Prisma.receta_detallesWhereInput
  none?: Prisma.receta_detallesWhereInput
}

export type receta_detallesOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type Receta_detallesNullableScalarRelationFilter = {
  is?: Prisma.receta_detallesWhereInput | null
  isNot?: Prisma.receta_detallesWhereInput | null
}

export type receta_detallesReceta_idMedicamento_idCompoundUniqueInput = {
  receta_id: string
  medicamento_id: string
}

export type receta_detallesCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  receta_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad_prescrita?: Prisma.SortOrder
  indicaciones?: Prisma.SortOrder
}

export type receta_detallesAvgOrderByAggregateInput = {
  cantidad_prescrita?: Prisma.SortOrder
}

export type receta_detallesMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  receta_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad_prescrita?: Prisma.SortOrder
  indicaciones?: Prisma.SortOrder
}

export type receta_detallesMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  receta_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad_prescrita?: Prisma.SortOrder
  indicaciones?: Prisma.SortOrder
}

export type receta_detallesSumOrderByAggregateInput = {
  cantidad_prescrita?: Prisma.SortOrder
}

export type receta_detallesCreateNestedManyWithoutMedicamentosInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutMedicamentosInput, Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput> | Prisma.receta_detallesCreateWithoutMedicamentosInput[] | Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput[]
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutMedicamentosInput | Prisma.receta_detallesCreateOrConnectWithoutMedicamentosInput[]
  createMany?: Prisma.receta_detallesCreateManyMedicamentosInputEnvelope
  connect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
}

export type receta_detallesUncheckedCreateNestedManyWithoutMedicamentosInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutMedicamentosInput, Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput> | Prisma.receta_detallesCreateWithoutMedicamentosInput[] | Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput[]
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutMedicamentosInput | Prisma.receta_detallesCreateOrConnectWithoutMedicamentosInput[]
  createMany?: Prisma.receta_detallesCreateManyMedicamentosInputEnvelope
  connect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
}

export type receta_detallesUpdateManyWithoutMedicamentosNestedInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutMedicamentosInput, Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput> | Prisma.receta_detallesCreateWithoutMedicamentosInput[] | Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput[]
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutMedicamentosInput | Prisma.receta_detallesCreateOrConnectWithoutMedicamentosInput[]
  upsert?: Prisma.receta_detallesUpsertWithWhereUniqueWithoutMedicamentosInput | Prisma.receta_detallesUpsertWithWhereUniqueWithoutMedicamentosInput[]
  createMany?: Prisma.receta_detallesCreateManyMedicamentosInputEnvelope
  set?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  disconnect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  delete?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  connect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  update?: Prisma.receta_detallesUpdateWithWhereUniqueWithoutMedicamentosInput | Prisma.receta_detallesUpdateWithWhereUniqueWithoutMedicamentosInput[]
  updateMany?: Prisma.receta_detallesUpdateManyWithWhereWithoutMedicamentosInput | Prisma.receta_detallesUpdateManyWithWhereWithoutMedicamentosInput[]
  deleteMany?: Prisma.receta_detallesScalarWhereInput | Prisma.receta_detallesScalarWhereInput[]
}

export type receta_detallesUncheckedUpdateManyWithoutMedicamentosNestedInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutMedicamentosInput, Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput> | Prisma.receta_detallesCreateWithoutMedicamentosInput[] | Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput[]
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutMedicamentosInput | Prisma.receta_detallesCreateOrConnectWithoutMedicamentosInput[]
  upsert?: Prisma.receta_detallesUpsertWithWhereUniqueWithoutMedicamentosInput | Prisma.receta_detallesUpsertWithWhereUniqueWithoutMedicamentosInput[]
  createMany?: Prisma.receta_detallesCreateManyMedicamentosInputEnvelope
  set?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  disconnect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  delete?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  connect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  update?: Prisma.receta_detallesUpdateWithWhereUniqueWithoutMedicamentosInput | Prisma.receta_detallesUpdateWithWhereUniqueWithoutMedicamentosInput[]
  updateMany?: Prisma.receta_detallesUpdateManyWithWhereWithoutMedicamentosInput | Prisma.receta_detallesUpdateManyWithWhereWithoutMedicamentosInput[]
  deleteMany?: Prisma.receta_detallesScalarWhereInput | Prisma.receta_detallesScalarWhereInput[]
}

export type receta_detallesCreateNestedOneWithoutPedido_itemsInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutPedido_itemsInput, Prisma.receta_detallesUncheckedCreateWithoutPedido_itemsInput>
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutPedido_itemsInput
  connect?: Prisma.receta_detallesWhereUniqueInput
}

export type receta_detallesUpdateOneWithoutPedido_itemsNestedInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutPedido_itemsInput, Prisma.receta_detallesUncheckedCreateWithoutPedido_itemsInput>
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutPedido_itemsInput
  upsert?: Prisma.receta_detallesUpsertWithoutPedido_itemsInput
  disconnect?: Prisma.receta_detallesWhereInput | boolean
  delete?: Prisma.receta_detallesWhereInput | boolean
  connect?: Prisma.receta_detallesWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.receta_detallesUpdateToOneWithWhereWithoutPedido_itemsInput, Prisma.receta_detallesUpdateWithoutPedido_itemsInput>, Prisma.receta_detallesUncheckedUpdateWithoutPedido_itemsInput>
}

export type NullableIntFieldUpdateOperationsInput = {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type receta_detallesCreateNestedManyWithoutRecetasInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutRecetasInput, Prisma.receta_detallesUncheckedCreateWithoutRecetasInput> | Prisma.receta_detallesCreateWithoutRecetasInput[] | Prisma.receta_detallesUncheckedCreateWithoutRecetasInput[]
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutRecetasInput | Prisma.receta_detallesCreateOrConnectWithoutRecetasInput[]
  createMany?: Prisma.receta_detallesCreateManyRecetasInputEnvelope
  connect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
}

export type receta_detallesUncheckedCreateNestedManyWithoutRecetasInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutRecetasInput, Prisma.receta_detallesUncheckedCreateWithoutRecetasInput> | Prisma.receta_detallesCreateWithoutRecetasInput[] | Prisma.receta_detallesUncheckedCreateWithoutRecetasInput[]
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutRecetasInput | Prisma.receta_detallesCreateOrConnectWithoutRecetasInput[]
  createMany?: Prisma.receta_detallesCreateManyRecetasInputEnvelope
  connect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
}

export type receta_detallesUpdateManyWithoutRecetasNestedInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutRecetasInput, Prisma.receta_detallesUncheckedCreateWithoutRecetasInput> | Prisma.receta_detallesCreateWithoutRecetasInput[] | Prisma.receta_detallesUncheckedCreateWithoutRecetasInput[]
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutRecetasInput | Prisma.receta_detallesCreateOrConnectWithoutRecetasInput[]
  upsert?: Prisma.receta_detallesUpsertWithWhereUniqueWithoutRecetasInput | Prisma.receta_detallesUpsertWithWhereUniqueWithoutRecetasInput[]
  createMany?: Prisma.receta_detallesCreateManyRecetasInputEnvelope
  set?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  disconnect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  delete?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  connect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  update?: Prisma.receta_detallesUpdateWithWhereUniqueWithoutRecetasInput | Prisma.receta_detallesUpdateWithWhereUniqueWithoutRecetasInput[]
  updateMany?: Prisma.receta_detallesUpdateManyWithWhereWithoutRecetasInput | Prisma.receta_detallesUpdateManyWithWhereWithoutRecetasInput[]
  deleteMany?: Prisma.receta_detallesScalarWhereInput | Prisma.receta_detallesScalarWhereInput[]
}

export type receta_detallesUncheckedUpdateManyWithoutRecetasNestedInput = {
  create?: Prisma.XOR<Prisma.receta_detallesCreateWithoutRecetasInput, Prisma.receta_detallesUncheckedCreateWithoutRecetasInput> | Prisma.receta_detallesCreateWithoutRecetasInput[] | Prisma.receta_detallesUncheckedCreateWithoutRecetasInput[]
  connectOrCreate?: Prisma.receta_detallesCreateOrConnectWithoutRecetasInput | Prisma.receta_detallesCreateOrConnectWithoutRecetasInput[]
  upsert?: Prisma.receta_detallesUpsertWithWhereUniqueWithoutRecetasInput | Prisma.receta_detallesUpsertWithWhereUniqueWithoutRecetasInput[]
  createMany?: Prisma.receta_detallesCreateManyRecetasInputEnvelope
  set?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  disconnect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  delete?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  connect?: Prisma.receta_detallesWhereUniqueInput | Prisma.receta_detallesWhereUniqueInput[]
  update?: Prisma.receta_detallesUpdateWithWhereUniqueWithoutRecetasInput | Prisma.receta_detallesUpdateWithWhereUniqueWithoutRecetasInput[]
  updateMany?: Prisma.receta_detallesUpdateManyWithWhereWithoutRecetasInput | Prisma.receta_detallesUpdateManyWithWhereWithoutRecetasInput[]
  deleteMany?: Prisma.receta_detallesScalarWhereInput | Prisma.receta_detallesScalarWhereInput[]
}

export type receta_detallesCreateWithoutMedicamentosInput = {
  id?: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
  pedido_items?: Prisma.pedido_itemsCreateNestedManyWithoutReceta_detallesInput
  recetas: Prisma.recetasCreateNestedOneWithoutReceta_detallesInput
}

export type receta_detallesUncheckedCreateWithoutMedicamentosInput = {
  id?: string
  receta_id: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
  pedido_items?: Prisma.pedido_itemsUncheckedCreateNestedManyWithoutReceta_detallesInput
}

export type receta_detallesCreateOrConnectWithoutMedicamentosInput = {
  where: Prisma.receta_detallesWhereUniqueInput
  create: Prisma.XOR<Prisma.receta_detallesCreateWithoutMedicamentosInput, Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput>
}

export type receta_detallesCreateManyMedicamentosInputEnvelope = {
  data: Prisma.receta_detallesCreateManyMedicamentosInput | Prisma.receta_detallesCreateManyMedicamentosInput[]
  skipDuplicates?: boolean
}

export type receta_detallesUpsertWithWhereUniqueWithoutMedicamentosInput = {
  where: Prisma.receta_detallesWhereUniqueInput
  update: Prisma.XOR<Prisma.receta_detallesUpdateWithoutMedicamentosInput, Prisma.receta_detallesUncheckedUpdateWithoutMedicamentosInput>
  create: Prisma.XOR<Prisma.receta_detallesCreateWithoutMedicamentosInput, Prisma.receta_detallesUncheckedCreateWithoutMedicamentosInput>
}

export type receta_detallesUpdateWithWhereUniqueWithoutMedicamentosInput = {
  where: Prisma.receta_detallesWhereUniqueInput
  data: Prisma.XOR<Prisma.receta_detallesUpdateWithoutMedicamentosInput, Prisma.receta_detallesUncheckedUpdateWithoutMedicamentosInput>
}

export type receta_detallesUpdateManyWithWhereWithoutMedicamentosInput = {
  where: Prisma.receta_detallesScalarWhereInput
  data: Prisma.XOR<Prisma.receta_detallesUpdateManyMutationInput, Prisma.receta_detallesUncheckedUpdateManyWithoutMedicamentosInput>
}

export type receta_detallesScalarWhereInput = {
  AND?: Prisma.receta_detallesScalarWhereInput | Prisma.receta_detallesScalarWhereInput[]
  OR?: Prisma.receta_detallesScalarWhereInput[]
  NOT?: Prisma.receta_detallesScalarWhereInput | Prisma.receta_detallesScalarWhereInput[]
  id?: Prisma.UuidFilter<"receta_detalles"> | string
  receta_id?: Prisma.UuidFilter<"receta_detalles"> | string
  medicamento_id?: Prisma.UuidFilter<"receta_detalles"> | string
  cantidad_prescrita?: Prisma.IntNullableFilter<"receta_detalles"> | number | null
  indicaciones?: Prisma.StringNullableFilter<"receta_detalles"> | string | null
}

export type receta_detallesCreateWithoutPedido_itemsInput = {
  id?: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
  medicamentos: Prisma.medicamentosCreateNestedOneWithoutReceta_detallesInput
  recetas: Prisma.recetasCreateNestedOneWithoutReceta_detallesInput
}

export type receta_detallesUncheckedCreateWithoutPedido_itemsInput = {
  id?: string
  receta_id: string
  medicamento_id: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
}

export type receta_detallesCreateOrConnectWithoutPedido_itemsInput = {
  where: Prisma.receta_detallesWhereUniqueInput
  create: Prisma.XOR<Prisma.receta_detallesCreateWithoutPedido_itemsInput, Prisma.receta_detallesUncheckedCreateWithoutPedido_itemsInput>
}

export type receta_detallesUpsertWithoutPedido_itemsInput = {
  update: Prisma.XOR<Prisma.receta_detallesUpdateWithoutPedido_itemsInput, Prisma.receta_detallesUncheckedUpdateWithoutPedido_itemsInput>
  create: Prisma.XOR<Prisma.receta_detallesCreateWithoutPedido_itemsInput, Prisma.receta_detallesUncheckedCreateWithoutPedido_itemsInput>
  where?: Prisma.receta_detallesWhereInput
}

export type receta_detallesUpdateToOneWithWhereWithoutPedido_itemsInput = {
  where?: Prisma.receta_detallesWhereInput
  data: Prisma.XOR<Prisma.receta_detallesUpdateWithoutPedido_itemsInput, Prisma.receta_detallesUncheckedUpdateWithoutPedido_itemsInput>
}

export type receta_detallesUpdateWithoutPedido_itemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  medicamentos?: Prisma.medicamentosUpdateOneRequiredWithoutReceta_detallesNestedInput
  recetas?: Prisma.recetasUpdateOneRequiredWithoutReceta_detallesNestedInput
}

export type receta_detallesUncheckedUpdateWithoutPedido_itemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  receta_id?: Prisma.StringFieldUpdateOperationsInput | string
  medicamento_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type receta_detallesCreateWithoutRecetasInput = {
  id?: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
  pedido_items?: Prisma.pedido_itemsCreateNestedManyWithoutReceta_detallesInput
  medicamentos: Prisma.medicamentosCreateNestedOneWithoutReceta_detallesInput
}

export type receta_detallesUncheckedCreateWithoutRecetasInput = {
  id?: string
  medicamento_id: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
  pedido_items?: Prisma.pedido_itemsUncheckedCreateNestedManyWithoutReceta_detallesInput
}

export type receta_detallesCreateOrConnectWithoutRecetasInput = {
  where: Prisma.receta_detallesWhereUniqueInput
  create: Prisma.XOR<Prisma.receta_detallesCreateWithoutRecetasInput, Prisma.receta_detallesUncheckedCreateWithoutRecetasInput>
}

export type receta_detallesCreateManyRecetasInputEnvelope = {
  data: Prisma.receta_detallesCreateManyRecetasInput | Prisma.receta_detallesCreateManyRecetasInput[]
  skipDuplicates?: boolean
}

export type receta_detallesUpsertWithWhereUniqueWithoutRecetasInput = {
  where: Prisma.receta_detallesWhereUniqueInput
  update: Prisma.XOR<Prisma.receta_detallesUpdateWithoutRecetasInput, Prisma.receta_detallesUncheckedUpdateWithoutRecetasInput>
  create: Prisma.XOR<Prisma.receta_detallesCreateWithoutRecetasInput, Prisma.receta_detallesUncheckedCreateWithoutRecetasInput>
}

export type receta_detallesUpdateWithWhereUniqueWithoutRecetasInput = {
  where: Prisma.receta_detallesWhereUniqueInput
  data: Prisma.XOR<Prisma.receta_detallesUpdateWithoutRecetasInput, Prisma.receta_detallesUncheckedUpdateWithoutRecetasInput>
}

export type receta_detallesUpdateManyWithWhereWithoutRecetasInput = {
  where: Prisma.receta_detallesScalarWhereInput
  data: Prisma.XOR<Prisma.receta_detallesUpdateManyMutationInput, Prisma.receta_detallesUncheckedUpdateManyWithoutRecetasInput>
}

export type receta_detallesCreateManyMedicamentosInput = {
  id?: string
  receta_id: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
}

export type receta_detallesUpdateWithoutMedicamentosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  pedido_items?: Prisma.pedido_itemsUpdateManyWithoutReceta_detallesNestedInput
  recetas?: Prisma.recetasUpdateOneRequiredWithoutReceta_detallesNestedInput
}

export type receta_detallesUncheckedUpdateWithoutMedicamentosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  receta_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  pedido_items?: Prisma.pedido_itemsUncheckedUpdateManyWithoutReceta_detallesNestedInput
}

export type receta_detallesUncheckedUpdateManyWithoutMedicamentosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  receta_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type receta_detallesCreateManyRecetasInput = {
  id?: string
  medicamento_id: string
  cantidad_prescrita?: number | null
  indicaciones?: string | null
}

export type receta_detallesUpdateWithoutRecetasInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  pedido_items?: Prisma.pedido_itemsUpdateManyWithoutReceta_detallesNestedInput
  medicamentos?: Prisma.medicamentosUpdateOneRequiredWithoutReceta_detallesNestedInput
}

export type receta_detallesUncheckedUpdateWithoutRecetasInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  medicamento_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  pedido_items?: Prisma.pedido_itemsUncheckedUpdateManyWithoutReceta_detallesNestedInput
}

export type receta_detallesUncheckedUpdateManyWithoutRecetasInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  medicamento_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad_prescrita?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  indicaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}


/**
 * Count Type Receta_detallesCountOutputType
 */

export type Receta_detallesCountOutputType = {
  pedido_items: number
}

export type Receta_detallesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  pedido_items?: boolean | Receta_detallesCountOutputTypeCountPedido_itemsArgs
}

/**
 * Receta_detallesCountOutputType without action
 */
export type Receta_detallesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Receta_detallesCountOutputType
   */
  select?: Prisma.Receta_detallesCountOutputTypeSelect<ExtArgs> | null
}

/**
 * Receta_detallesCountOutputType without action
 */
export type Receta_detallesCountOutputTypeCountPedido_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.pedido_itemsWhereInput
}


export type receta_detallesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  receta_id?: boolean
  medicamento_id?: boolean
  cantidad_prescrita?: boolean
  indicaciones?: boolean
  pedido_items?: boolean | Prisma.receta_detalles$pedido_itemsArgs<ExtArgs>
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
  recetas?: boolean | Prisma.recetasDefaultArgs<ExtArgs>
  _count?: boolean | Prisma.Receta_detallesCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["receta_detalles"]>

export type receta_detallesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  receta_id?: boolean
  medicamento_id?: boolean
  cantidad_prescrita?: boolean
  indicaciones?: boolean
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
  recetas?: boolean | Prisma.recetasDefaultArgs<ExtArgs>
}, ExtArgs["result"]["receta_detalles"]>

export type receta_detallesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  receta_id?: boolean
  medicamento_id?: boolean
  cantidad_prescrita?: boolean
  indicaciones?: boolean
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
  recetas?: boolean | Prisma.recetasDefaultArgs<ExtArgs>
}, ExtArgs["result"]["receta_detalles"]>

export type receta_detallesSelectScalar = {
  id?: boolean
  receta_id?: boolean
  medicamento_id?: boolean
  cantidad_prescrita?: boolean
  indicaciones?: boolean
}

export type receta_detallesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "receta_id" | "medicamento_id" | "cantidad_prescrita" | "indicaciones", ExtArgs["result"]["receta_detalles"]>
export type receta_detallesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  pedido_items?: boolean | Prisma.receta_detalles$pedido_itemsArgs<ExtArgs>
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
  recetas?: boolean | Prisma.recetasDefaultArgs<ExtArgs>
  _count?: boolean | Prisma.Receta_detallesCountOutputTypeDefaultArgs<ExtArgs>
}
export type receta_detallesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
  recetas?: boolean | Prisma.recetasDefaultArgs<ExtArgs>
}
export type receta_detallesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
  recetas?: boolean | Prisma.recetasDefaultArgs<ExtArgs>
}

export type $receta_detallesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "receta_detalles"
  objects: {
    pedido_items: Prisma.$pedido_itemsPayload<ExtArgs>[]
    medicamentos: Prisma.$medicamentosPayload<ExtArgs>
    recetas: Prisma.$recetasPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    receta_id: string
    medicamento_id: string
    cantidad_prescrita: number | null
    indicaciones: string | null
  }, ExtArgs["result"]["receta_detalles"]>
  composites: {}
}

export type receta_detallesGetPayload<S extends boolean | null | undefined | receta_detallesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload, S>

export type receta_detallesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<receta_detallesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Receta_detallesCountAggregateInputType | true
  }

export interface receta_detallesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receta_detalles'], meta: { name: 'receta_detalles' } }
  /**
   * Find zero or one Receta_detalles that matches the filter.
   * @param {receta_detallesFindUniqueArgs} args - Arguments to find a Receta_detalles
   * @example
   * // Get one Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends receta_detallesFindUniqueArgs>(args: Prisma.SelectSubset<T, receta_detallesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__receta_detallesClient<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one Receta_detalles that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {receta_detallesFindUniqueOrThrowArgs} args - Arguments to find a Receta_detalles
   * @example
   * // Get one Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends receta_detallesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, receta_detallesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__receta_detallesClient<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Receta_detalles that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {receta_detallesFindFirstArgs} args - Arguments to find a Receta_detalles
   * @example
   * // Get one Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends receta_detallesFindFirstArgs>(args?: Prisma.SelectSubset<T, receta_detallesFindFirstArgs<ExtArgs>>): Prisma.Prisma__receta_detallesClient<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Receta_detalles that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {receta_detallesFindFirstOrThrowArgs} args - Arguments to find a Receta_detalles
   * @example
   * // Get one Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends receta_detallesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, receta_detallesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__receta_detallesClient<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more Receta_detalles that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {receta_detallesFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.findMany()
   * 
   * // Get first 10 Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const receta_detallesWithIdOnly = await prisma.receta_detalles.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends receta_detallesFindManyArgs>(args?: Prisma.SelectSubset<T, receta_detallesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a Receta_detalles.
   * @param {receta_detallesCreateArgs} args - Arguments to create a Receta_detalles.
   * @example
   * // Create one Receta_detalles
   * const Receta_detalles = await prisma.receta_detalles.create({
   *   data: {
   *     // ... data to create a Receta_detalles
   *   }
   * })
   * 
   */
  create<T extends receta_detallesCreateArgs>(args: Prisma.SelectSubset<T, receta_detallesCreateArgs<ExtArgs>>): Prisma.Prisma__receta_detallesClient<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many Receta_detalles.
   * @param {receta_detallesCreateManyArgs} args - Arguments to create many Receta_detalles.
   * @example
   * // Create many Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends receta_detallesCreateManyArgs>(args?: Prisma.SelectSubset<T, receta_detallesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many Receta_detalles and returns the data saved in the database.
   * @param {receta_detallesCreateManyAndReturnArgs} args - Arguments to create many Receta_detalles.
   * @example
   * // Create many Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many Receta_detalles and only return the `id`
   * const receta_detallesWithIdOnly = await prisma.receta_detalles.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends receta_detallesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, receta_detallesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a Receta_detalles.
   * @param {receta_detallesDeleteArgs} args - Arguments to delete one Receta_detalles.
   * @example
   * // Delete one Receta_detalles
   * const Receta_detalles = await prisma.receta_detalles.delete({
   *   where: {
   *     // ... filter to delete one Receta_detalles
   *   }
   * })
   * 
   */
  delete<T extends receta_detallesDeleteArgs>(args: Prisma.SelectSubset<T, receta_detallesDeleteArgs<ExtArgs>>): Prisma.Prisma__receta_detallesClient<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one Receta_detalles.
   * @param {receta_detallesUpdateArgs} args - Arguments to update one Receta_detalles.
   * @example
   * // Update one Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends receta_detallesUpdateArgs>(args: Prisma.SelectSubset<T, receta_detallesUpdateArgs<ExtArgs>>): Prisma.Prisma__receta_detallesClient<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more Receta_detalles.
   * @param {receta_detallesDeleteManyArgs} args - Arguments to filter Receta_detalles to delete.
   * @example
   * // Delete a few Receta_detalles
   * const { count } = await prisma.receta_detalles.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends receta_detallesDeleteManyArgs>(args?: Prisma.SelectSubset<T, receta_detallesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Receta_detalles.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {receta_detallesUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends receta_detallesUpdateManyArgs>(args: Prisma.SelectSubset<T, receta_detallesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Receta_detalles and returns the data updated in the database.
   * @param {receta_detallesUpdateManyAndReturnArgs} args - Arguments to update many Receta_detalles.
   * @example
   * // Update many Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more Receta_detalles and only return the `id`
   * const receta_detallesWithIdOnly = await prisma.receta_detalles.updateManyAndReturn({
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
  updateManyAndReturn<T extends receta_detallesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, receta_detallesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one Receta_detalles.
   * @param {receta_detallesUpsertArgs} args - Arguments to update or create a Receta_detalles.
   * @example
   * // Update or create a Receta_detalles
   * const receta_detalles = await prisma.receta_detalles.upsert({
   *   create: {
   *     // ... data to create a Receta_detalles
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Receta_detalles we want to update
   *   }
   * })
   */
  upsert<T extends receta_detallesUpsertArgs>(args: Prisma.SelectSubset<T, receta_detallesUpsertArgs<ExtArgs>>): Prisma.Prisma__receta_detallesClient<runtime.Types.Result.GetResult<Prisma.$receta_detallesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of Receta_detalles.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {receta_detallesCountArgs} args - Arguments to filter Receta_detalles to count.
   * @example
   * // Count the number of Receta_detalles
   * const count = await prisma.receta_detalles.count({
   *   where: {
   *     // ... the filter for the Receta_detalles we want to count
   *   }
   * })
  **/
  count<T extends receta_detallesCountArgs>(
    args?: Prisma.Subset<T, receta_detallesCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Receta_detallesCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a Receta_detalles.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {Receta_detallesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
  aggregate<T extends Receta_detallesAggregateArgs>(args: Prisma.Subset<T, Receta_detallesAggregateArgs>): Prisma.PrismaPromise<GetReceta_detallesAggregateType<T>>

  /**
   * Group by Receta_detalles.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {receta_detallesGroupByArgs} args - Group by arguments.
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
    T extends receta_detallesGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: receta_detallesGroupByArgs['orderBy'] }
      : { orderBy?: receta_detallesGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, receta_detallesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceta_detallesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the receta_detalles model
 */
readonly fields: receta_detallesFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for receta_detalles.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__receta_detallesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  pedido_items<T extends Prisma.receta_detalles$pedido_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.receta_detalles$pedido_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  medicamentos<T extends Prisma.medicamentosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.medicamentosDefaultArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  recetas<T extends Prisma.recetasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.recetasDefaultArgs<ExtArgs>>): Prisma.Prisma__recetasClient<runtime.Types.Result.GetResult<Prisma.$recetasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
 * Fields of the receta_detalles model
 */
export interface receta_detallesFieldRefs {
  readonly id: Prisma.FieldRef<"receta_detalles", 'String'>
  readonly receta_id: Prisma.FieldRef<"receta_detalles", 'String'>
  readonly medicamento_id: Prisma.FieldRef<"receta_detalles", 'String'>
  readonly cantidad_prescrita: Prisma.FieldRef<"receta_detalles", 'Int'>
  readonly indicaciones: Prisma.FieldRef<"receta_detalles", 'String'>
}
    

// Custom InputTypes
/**
 * receta_detalles findUnique
 */
export type receta_detallesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which receta_detalles to fetch.
   */
  where: Prisma.receta_detallesWhereUniqueInput
}

/**
 * receta_detalles findUniqueOrThrow
 */
export type receta_detallesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which receta_detalles to fetch.
   */
  where: Prisma.receta_detallesWhereUniqueInput
}

/**
 * receta_detalles findFirst
 */
export type receta_detallesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which receta_detalles to fetch.
   */
  where?: Prisma.receta_detallesWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of receta_detalles to fetch.
   */
  orderBy?: Prisma.receta_detallesOrderByWithRelationInput | Prisma.receta_detallesOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for receta_detalles.
   */
  cursor?: Prisma.receta_detallesWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` receta_detalles from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` receta_detalles.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of receta_detalles.
   */
  distinct?: Prisma.Receta_detallesScalarFieldEnum | Prisma.Receta_detallesScalarFieldEnum[]
}

/**
 * receta_detalles findFirstOrThrow
 */
export type receta_detallesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which receta_detalles to fetch.
   */
  where?: Prisma.receta_detallesWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of receta_detalles to fetch.
   */
  orderBy?: Prisma.receta_detallesOrderByWithRelationInput | Prisma.receta_detallesOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for receta_detalles.
   */
  cursor?: Prisma.receta_detallesWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` receta_detalles from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` receta_detalles.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of receta_detalles.
   */
  distinct?: Prisma.Receta_detallesScalarFieldEnum | Prisma.Receta_detallesScalarFieldEnum[]
}

/**
 * receta_detalles findMany
 */
export type receta_detallesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which receta_detalles to fetch.
   */
  where?: Prisma.receta_detallesWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of receta_detalles to fetch.
   */
  orderBy?: Prisma.receta_detallesOrderByWithRelationInput | Prisma.receta_detallesOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing receta_detalles.
   */
  cursor?: Prisma.receta_detallesWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` receta_detalles from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` receta_detalles.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of receta_detalles.
   */
  distinct?: Prisma.Receta_detallesScalarFieldEnum | Prisma.Receta_detallesScalarFieldEnum[]
}

/**
 * receta_detalles create
 */
export type receta_detallesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * The data needed to create a receta_detalles.
   */
  data: Prisma.XOR<Prisma.receta_detallesCreateInput, Prisma.receta_detallesUncheckedCreateInput>
}

/**
 * receta_detalles createMany
 */
export type receta_detallesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many receta_detalles.
   */
  data: Prisma.receta_detallesCreateManyInput | Prisma.receta_detallesCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * receta_detalles createManyAndReturn
 */
export type receta_detallesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the receta_detalles
   */
  select?: Prisma.receta_detallesSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the receta_detalles
   */
  omit?: Prisma.receta_detallesOmit<ExtArgs> | null
  /**
   * The data used to create many receta_detalles.
   */
  data: Prisma.receta_detallesCreateManyInput | Prisma.receta_detallesCreateManyInput[]
  skipDuplicates?: boolean
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.receta_detallesIncludeCreateManyAndReturn<ExtArgs> | null
}

/**
 * receta_detalles update
 */
export type receta_detallesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * The data needed to update a receta_detalles.
   */
  data: Prisma.XOR<Prisma.receta_detallesUpdateInput, Prisma.receta_detallesUncheckedUpdateInput>
  /**
   * Choose, which receta_detalles to update.
   */
  where: Prisma.receta_detallesWhereUniqueInput
}

/**
 * receta_detalles updateMany
 */
export type receta_detallesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update receta_detalles.
   */
  data: Prisma.XOR<Prisma.receta_detallesUpdateManyMutationInput, Prisma.receta_detallesUncheckedUpdateManyInput>
  /**
   * Filter which receta_detalles to update
   */
  where?: Prisma.receta_detallesWhereInput
  /**
   * Limit how many receta_detalles to update.
   */
  limit?: number
}

/**
 * receta_detalles updateManyAndReturn
 */
export type receta_detallesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the receta_detalles
   */
  select?: Prisma.receta_detallesSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the receta_detalles
   */
  omit?: Prisma.receta_detallesOmit<ExtArgs> | null
  /**
   * The data used to update receta_detalles.
   */
  data: Prisma.XOR<Prisma.receta_detallesUpdateManyMutationInput, Prisma.receta_detallesUncheckedUpdateManyInput>
  /**
   * Filter which receta_detalles to update
   */
  where?: Prisma.receta_detallesWhereInput
  /**
   * Limit how many receta_detalles to update.
   */
  limit?: number
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.receta_detallesIncludeUpdateManyAndReturn<ExtArgs> | null
}

/**
 * receta_detalles upsert
 */
export type receta_detallesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * The filter to search for the receta_detalles to update in case it exists.
   */
  where: Prisma.receta_detallesWhereUniqueInput
  /**
   * In case the receta_detalles found by the `where` argument doesn't exist, create a new receta_detalles with this data.
   */
  create: Prisma.XOR<Prisma.receta_detallesCreateInput, Prisma.receta_detallesUncheckedCreateInput>
  /**
   * In case the receta_detalles was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.receta_detallesUpdateInput, Prisma.receta_detallesUncheckedUpdateInput>
}

/**
 * receta_detalles delete
 */
export type receta_detallesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter which receta_detalles to delete.
   */
  where: Prisma.receta_detallesWhereUniqueInput
}

/**
 * receta_detalles deleteMany
 */
export type receta_detallesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which receta_detalles to delete
   */
  where?: Prisma.receta_detallesWhereInput
  /**
   * Limit how many receta_detalles to delete.
   */
  limit?: number
}

/**
 * receta_detalles.pedido_items
 */
export type receta_detalles$pedido_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * receta_detalles without action
 */
export type receta_detallesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
}
