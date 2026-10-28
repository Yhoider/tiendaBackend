import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"

/**
 * Model carrito_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type carrito_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$carrito_itemsPayload>

export type AggregateCarrito_items = {
  _count: Carrito_itemsCountAggregateOutputType | null
  _avg: Carrito_itemsAvgAggregateOutputType | null
  _sum: Carrito_itemsSumAggregateOutputType | null
  _min: Carrito_itemsMinAggregateOutputType | null
  _max: Carrito_itemsMaxAggregateOutputType | null
}

export type Carrito_itemsAvgAggregateOutputType = {
  cantidad: number | null
}

export type Carrito_itemsSumAggregateOutputType = {
  cantidad: number | null
}

export type Carrito_itemsMinAggregateOutputType = {
  id: string | null
  carrito_id: string | null
  medicamento_id: string | null
  cantidad: number | null
}

export type Carrito_itemsMaxAggregateOutputType = {
  id: string | null
  carrito_id: string | null
  medicamento_id: string | null
  cantidad: number | null
}

export type Carrito_itemsCountAggregateOutputType = {
  id: number
  carrito_id: number
  medicamento_id: number
  cantidad: number
  _all: number
}


export type Carrito_itemsAvgAggregateInputType = {
  cantidad?: true
}

export type Carrito_itemsSumAggregateInputType = {
  cantidad?: true
}

export type Carrito_itemsMinAggregateInputType = {
  id?: true
  carrito_id?: true
  medicamento_id?: true
  cantidad?: true
}

export type Carrito_itemsMaxAggregateInputType = {
  id?: true
  carrito_id?: true
  medicamento_id?: true
  cantidad?: true
}

export type Carrito_itemsCountAggregateInputType = {
  id?: true
  carrito_id?: true
  medicamento_id?: true
  cantidad?: true
  _all?: true
}

export type Carrito_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which carrito_items to aggregate.
   */
  where?: Prisma.carrito_itemsWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of carrito_items to fetch.
   */
  orderBy?: Prisma.carrito_itemsOrderByWithRelationInput | Prisma.carrito_itemsOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.carrito_itemsWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` carrito_items from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` carrito_items.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned carrito_items
  **/
  _count?: true | Carrito_itemsCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to average
  **/
  _avg?: Carrito_itemsAvgAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to sum
  **/
  _sum?: Carrito_itemsSumAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: Carrito_itemsMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: Carrito_itemsMaxAggregateInputType
}

export type GetCarrito_itemsAggregateType<T extends Carrito_itemsAggregateArgs> = {
      [P in keyof T & keyof AggregateCarrito_items]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateCarrito_items[P]>
    : Prisma.GetScalarType<T[P], AggregateCarrito_items[P]>
}




export type carrito_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.carrito_itemsWhereInput
  orderBy?: Prisma.carrito_itemsOrderByWithAggregationInput | Prisma.carrito_itemsOrderByWithAggregationInput[]
  by: Prisma.Carrito_itemsScalarFieldEnum[] | Prisma.Carrito_itemsScalarFieldEnum
  having?: Prisma.carrito_itemsScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: Carrito_itemsCountAggregateInputType | true
  _avg?: Carrito_itemsAvgAggregateInputType
  _sum?: Carrito_itemsSumAggregateInputType
  _min?: Carrito_itemsMinAggregateInputType
  _max?: Carrito_itemsMaxAggregateInputType
}

export type Carrito_itemsGroupByOutputType = {
  id: string
  carrito_id: string
  medicamento_id: string
  cantidad: number
  _count: Carrito_itemsCountAggregateOutputType | null
  _avg: Carrito_itemsAvgAggregateOutputType | null
  _sum: Carrito_itemsSumAggregateOutputType | null
  _min: Carrito_itemsMinAggregateOutputType | null
  _max: Carrito_itemsMaxAggregateOutputType | null
}

export type GetCarrito_itemsGroupByPayload<T extends carrito_itemsGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<Carrito_itemsGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof Carrito_itemsGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], Carrito_itemsGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], Carrito_itemsGroupByOutputType[P]>
      }
    >
  >



export type carrito_itemsWhereInput = {
  AND?: Prisma.carrito_itemsWhereInput | Prisma.carrito_itemsWhereInput[]
  OR?: Prisma.carrito_itemsWhereInput[]
  NOT?: Prisma.carrito_itemsWhereInput | Prisma.carrito_itemsWhereInput[]
  id?: Prisma.UuidFilter<"carrito_items"> | string
  carrito_id?: Prisma.UuidFilter<"carrito_items"> | string
  medicamento_id?: Prisma.UuidFilter<"carrito_items"> | string
  cantidad?: Prisma.IntFilter<"carrito_items"> | number
  carritos?: Prisma.XOR<Prisma.CarritosScalarRelationFilter, Prisma.carritosWhereInput>
  medicamentos?: Prisma.XOR<Prisma.MedicamentosScalarRelationFilter, Prisma.medicamentosWhereInput>
}

export type carrito_itemsOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  carrito_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad?: Prisma.SortOrder
  carritos?: Prisma.carritosOrderByWithRelationInput
  medicamentos?: Prisma.medicamentosOrderByWithRelationInput
}

export type carrito_itemsWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  carrito_id_medicamento_id?: Prisma.carrito_itemsCarrito_idMedicamento_idCompoundUniqueInput
  AND?: Prisma.carrito_itemsWhereInput | Prisma.carrito_itemsWhereInput[]
  OR?: Prisma.carrito_itemsWhereInput[]
  NOT?: Prisma.carrito_itemsWhereInput | Prisma.carrito_itemsWhereInput[]
  carrito_id?: Prisma.UuidFilter<"carrito_items"> | string
  medicamento_id?: Prisma.UuidFilter<"carrito_items"> | string
  cantidad?: Prisma.IntFilter<"carrito_items"> | number
  carritos?: Prisma.XOR<Prisma.CarritosScalarRelationFilter, Prisma.carritosWhereInput>
  medicamentos?: Prisma.XOR<Prisma.MedicamentosScalarRelationFilter, Prisma.medicamentosWhereInput>
}, "id" | "carrito_id_medicamento_id">

export type carrito_itemsOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  carrito_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad?: Prisma.SortOrder
  _count?: Prisma.carrito_itemsCountOrderByAggregateInput
  _avg?: Prisma.carrito_itemsAvgOrderByAggregateInput
  _max?: Prisma.carrito_itemsMaxOrderByAggregateInput
  _min?: Prisma.carrito_itemsMinOrderByAggregateInput
  _sum?: Prisma.carrito_itemsSumOrderByAggregateInput
}

export type carrito_itemsScalarWhereWithAggregatesInput = {
  AND?: Prisma.carrito_itemsScalarWhereWithAggregatesInput | Prisma.carrito_itemsScalarWhereWithAggregatesInput[]
  OR?: Prisma.carrito_itemsScalarWhereWithAggregatesInput[]
  NOT?: Prisma.carrito_itemsScalarWhereWithAggregatesInput | Prisma.carrito_itemsScalarWhereWithAggregatesInput[]
  id?: Prisma.UuidWithAggregatesFilter<"carrito_items"> | string
  carrito_id?: Prisma.UuidWithAggregatesFilter<"carrito_items"> | string
  medicamento_id?: Prisma.UuidWithAggregatesFilter<"carrito_items"> | string
  cantidad?: Prisma.IntWithAggregatesFilter<"carrito_items"> | number
}

export type carrito_itemsCreateInput = {
  id?: string
  cantidad: number
  carritos: Prisma.carritosCreateNestedOneWithoutCarrito_itemsInput
  medicamentos: Prisma.medicamentosCreateNestedOneWithoutCarrito_itemsInput
}

export type carrito_itemsUncheckedCreateInput = {
  id?: string
  carrito_id: string
  medicamento_id: string
  cantidad: number
}

export type carrito_itemsUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
  carritos?: Prisma.carritosUpdateOneRequiredWithoutCarrito_itemsNestedInput
  medicamentos?: Prisma.medicamentosUpdateOneRequiredWithoutCarrito_itemsNestedInput
}

export type carrito_itemsUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  carrito_id?: Prisma.StringFieldUpdateOperationsInput | string
  medicamento_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
}

export type carrito_itemsCreateManyInput = {
  id?: string
  carrito_id: string
  medicamento_id: string
  cantidad: number
}

export type carrito_itemsUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
}

export type carrito_itemsUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  carrito_id?: Prisma.StringFieldUpdateOperationsInput | string
  medicamento_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
}

export type carrito_itemsCarrito_idMedicamento_idCompoundUniqueInput = {
  carrito_id: string
  medicamento_id: string
}

export type carrito_itemsCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  carrito_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad?: Prisma.SortOrder
}

export type carrito_itemsAvgOrderByAggregateInput = {
  cantidad?: Prisma.SortOrder
}

export type carrito_itemsMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  carrito_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad?: Prisma.SortOrder
}

export type carrito_itemsMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  carrito_id?: Prisma.SortOrder
  medicamento_id?: Prisma.SortOrder
  cantidad?: Prisma.SortOrder
}

export type carrito_itemsSumOrderByAggregateInput = {
  cantidad?: Prisma.SortOrder
}

export type Carrito_itemsListRelationFilter = {
  every?: Prisma.carrito_itemsWhereInput
  some?: Prisma.carrito_itemsWhereInput
  none?: Prisma.carrito_itemsWhereInput
}

export type carrito_itemsOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type IntFieldUpdateOperationsInput = {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type carrito_itemsCreateNestedManyWithoutCarritosInput = {
  create?: Prisma.XOR<Prisma.carrito_itemsCreateWithoutCarritosInput, Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput> | Prisma.carrito_itemsCreateWithoutCarritosInput[] | Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput[]
  connectOrCreate?: Prisma.carrito_itemsCreateOrConnectWithoutCarritosInput | Prisma.carrito_itemsCreateOrConnectWithoutCarritosInput[]
  createMany?: Prisma.carrito_itemsCreateManyCarritosInputEnvelope
  connect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
}

export type carrito_itemsUncheckedCreateNestedManyWithoutCarritosInput = {
  create?: Prisma.XOR<Prisma.carrito_itemsCreateWithoutCarritosInput, Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput> | Prisma.carrito_itemsCreateWithoutCarritosInput[] | Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput[]
  connectOrCreate?: Prisma.carrito_itemsCreateOrConnectWithoutCarritosInput | Prisma.carrito_itemsCreateOrConnectWithoutCarritosInput[]
  createMany?: Prisma.carrito_itemsCreateManyCarritosInputEnvelope
  connect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
}

export type carrito_itemsUpdateManyWithoutCarritosNestedInput = {
  create?: Prisma.XOR<Prisma.carrito_itemsCreateWithoutCarritosInput, Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput> | Prisma.carrito_itemsCreateWithoutCarritosInput[] | Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput[]
  connectOrCreate?: Prisma.carrito_itemsCreateOrConnectWithoutCarritosInput | Prisma.carrito_itemsCreateOrConnectWithoutCarritosInput[]
  upsert?: Prisma.carrito_itemsUpsertWithWhereUniqueWithoutCarritosInput | Prisma.carrito_itemsUpsertWithWhereUniqueWithoutCarritosInput[]
  createMany?: Prisma.carrito_itemsCreateManyCarritosInputEnvelope
  set?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  disconnect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  delete?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  connect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  update?: Prisma.carrito_itemsUpdateWithWhereUniqueWithoutCarritosInput | Prisma.carrito_itemsUpdateWithWhereUniqueWithoutCarritosInput[]
  updateMany?: Prisma.carrito_itemsUpdateManyWithWhereWithoutCarritosInput | Prisma.carrito_itemsUpdateManyWithWhereWithoutCarritosInput[]
  deleteMany?: Prisma.carrito_itemsScalarWhereInput | Prisma.carrito_itemsScalarWhereInput[]
}

export type carrito_itemsUncheckedUpdateManyWithoutCarritosNestedInput = {
  create?: Prisma.XOR<Prisma.carrito_itemsCreateWithoutCarritosInput, Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput> | Prisma.carrito_itemsCreateWithoutCarritosInput[] | Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput[]
  connectOrCreate?: Prisma.carrito_itemsCreateOrConnectWithoutCarritosInput | Prisma.carrito_itemsCreateOrConnectWithoutCarritosInput[]
  upsert?: Prisma.carrito_itemsUpsertWithWhereUniqueWithoutCarritosInput | Prisma.carrito_itemsUpsertWithWhereUniqueWithoutCarritosInput[]
  createMany?: Prisma.carrito_itemsCreateManyCarritosInputEnvelope
  set?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  disconnect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  delete?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  connect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  update?: Prisma.carrito_itemsUpdateWithWhereUniqueWithoutCarritosInput | Prisma.carrito_itemsUpdateWithWhereUniqueWithoutCarritosInput[]
  updateMany?: Prisma.carrito_itemsUpdateManyWithWhereWithoutCarritosInput | Prisma.carrito_itemsUpdateManyWithWhereWithoutCarritosInput[]
  deleteMany?: Prisma.carrito_itemsScalarWhereInput | Prisma.carrito_itemsScalarWhereInput[]
}

export type carrito_itemsCreateNestedManyWithoutMedicamentosInput = {
  create?: Prisma.XOR<Prisma.carrito_itemsCreateWithoutMedicamentosInput, Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput> | Prisma.carrito_itemsCreateWithoutMedicamentosInput[] | Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput[]
  connectOrCreate?: Prisma.carrito_itemsCreateOrConnectWithoutMedicamentosInput | Prisma.carrito_itemsCreateOrConnectWithoutMedicamentosInput[]
  createMany?: Prisma.carrito_itemsCreateManyMedicamentosInputEnvelope
  connect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
}

export type carrito_itemsUncheckedCreateNestedManyWithoutMedicamentosInput = {
  create?: Prisma.XOR<Prisma.carrito_itemsCreateWithoutMedicamentosInput, Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput> | Prisma.carrito_itemsCreateWithoutMedicamentosInput[] | Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput[]
  connectOrCreate?: Prisma.carrito_itemsCreateOrConnectWithoutMedicamentosInput | Prisma.carrito_itemsCreateOrConnectWithoutMedicamentosInput[]
  createMany?: Prisma.carrito_itemsCreateManyMedicamentosInputEnvelope
  connect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
}

export type carrito_itemsUpdateManyWithoutMedicamentosNestedInput = {
  create?: Prisma.XOR<Prisma.carrito_itemsCreateWithoutMedicamentosInput, Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput> | Prisma.carrito_itemsCreateWithoutMedicamentosInput[] | Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput[]
  connectOrCreate?: Prisma.carrito_itemsCreateOrConnectWithoutMedicamentosInput | Prisma.carrito_itemsCreateOrConnectWithoutMedicamentosInput[]
  upsert?: Prisma.carrito_itemsUpsertWithWhereUniqueWithoutMedicamentosInput | Prisma.carrito_itemsUpsertWithWhereUniqueWithoutMedicamentosInput[]
  createMany?: Prisma.carrito_itemsCreateManyMedicamentosInputEnvelope
  set?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  disconnect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  delete?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  connect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  update?: Prisma.carrito_itemsUpdateWithWhereUniqueWithoutMedicamentosInput | Prisma.carrito_itemsUpdateWithWhereUniqueWithoutMedicamentosInput[]
  updateMany?: Prisma.carrito_itemsUpdateManyWithWhereWithoutMedicamentosInput | Prisma.carrito_itemsUpdateManyWithWhereWithoutMedicamentosInput[]
  deleteMany?: Prisma.carrito_itemsScalarWhereInput | Prisma.carrito_itemsScalarWhereInput[]
}

export type carrito_itemsUncheckedUpdateManyWithoutMedicamentosNestedInput = {
  create?: Prisma.XOR<Prisma.carrito_itemsCreateWithoutMedicamentosInput, Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput> | Prisma.carrito_itemsCreateWithoutMedicamentosInput[] | Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput[]
  connectOrCreate?: Prisma.carrito_itemsCreateOrConnectWithoutMedicamentosInput | Prisma.carrito_itemsCreateOrConnectWithoutMedicamentosInput[]
  upsert?: Prisma.carrito_itemsUpsertWithWhereUniqueWithoutMedicamentosInput | Prisma.carrito_itemsUpsertWithWhereUniqueWithoutMedicamentosInput[]
  createMany?: Prisma.carrito_itemsCreateManyMedicamentosInputEnvelope
  set?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  disconnect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  delete?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  connect?: Prisma.carrito_itemsWhereUniqueInput | Prisma.carrito_itemsWhereUniqueInput[]
  update?: Prisma.carrito_itemsUpdateWithWhereUniqueWithoutMedicamentosInput | Prisma.carrito_itemsUpdateWithWhereUniqueWithoutMedicamentosInput[]
  updateMany?: Prisma.carrito_itemsUpdateManyWithWhereWithoutMedicamentosInput | Prisma.carrito_itemsUpdateManyWithWhereWithoutMedicamentosInput[]
  deleteMany?: Prisma.carrito_itemsScalarWhereInput | Prisma.carrito_itemsScalarWhereInput[]
}

export type carrito_itemsCreateWithoutCarritosInput = {
  id?: string
  cantidad: number
  medicamentos: Prisma.medicamentosCreateNestedOneWithoutCarrito_itemsInput
}

export type carrito_itemsUncheckedCreateWithoutCarritosInput = {
  id?: string
  medicamento_id: string
  cantidad: number
}

export type carrito_itemsCreateOrConnectWithoutCarritosInput = {
  where: Prisma.carrito_itemsWhereUniqueInput
  create: Prisma.XOR<Prisma.carrito_itemsCreateWithoutCarritosInput, Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput>
}

export type carrito_itemsCreateManyCarritosInputEnvelope = {
  data: Prisma.carrito_itemsCreateManyCarritosInput | Prisma.carrito_itemsCreateManyCarritosInput[]
  skipDuplicates?: boolean
}

export type carrito_itemsUpsertWithWhereUniqueWithoutCarritosInput = {
  where: Prisma.carrito_itemsWhereUniqueInput
  update: Prisma.XOR<Prisma.carrito_itemsUpdateWithoutCarritosInput, Prisma.carrito_itemsUncheckedUpdateWithoutCarritosInput>
  create: Prisma.XOR<Prisma.carrito_itemsCreateWithoutCarritosInput, Prisma.carrito_itemsUncheckedCreateWithoutCarritosInput>
}

export type carrito_itemsUpdateWithWhereUniqueWithoutCarritosInput = {
  where: Prisma.carrito_itemsWhereUniqueInput
  data: Prisma.XOR<Prisma.carrito_itemsUpdateWithoutCarritosInput, Prisma.carrito_itemsUncheckedUpdateWithoutCarritosInput>
}

export type carrito_itemsUpdateManyWithWhereWithoutCarritosInput = {
  where: Prisma.carrito_itemsScalarWhereInput
  data: Prisma.XOR<Prisma.carrito_itemsUpdateManyMutationInput, Prisma.carrito_itemsUncheckedUpdateManyWithoutCarritosInput>
}

export type carrito_itemsScalarWhereInput = {
  AND?: Prisma.carrito_itemsScalarWhereInput | Prisma.carrito_itemsScalarWhereInput[]
  OR?: Prisma.carrito_itemsScalarWhereInput[]
  NOT?: Prisma.carrito_itemsScalarWhereInput | Prisma.carrito_itemsScalarWhereInput[]
  id?: Prisma.UuidFilter<"carrito_items"> | string
  carrito_id?: Prisma.UuidFilter<"carrito_items"> | string
  medicamento_id?: Prisma.UuidFilter<"carrito_items"> | string
  cantidad?: Prisma.IntFilter<"carrito_items"> | number
}

export type carrito_itemsCreateWithoutMedicamentosInput = {
  id?: string
  cantidad: number
  carritos: Prisma.carritosCreateNestedOneWithoutCarrito_itemsInput
}

export type carrito_itemsUncheckedCreateWithoutMedicamentosInput = {
  id?: string
  carrito_id: string
  cantidad: number
}

export type carrito_itemsCreateOrConnectWithoutMedicamentosInput = {
  where: Prisma.carrito_itemsWhereUniqueInput
  create: Prisma.XOR<Prisma.carrito_itemsCreateWithoutMedicamentosInput, Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput>
}

export type carrito_itemsCreateManyMedicamentosInputEnvelope = {
  data: Prisma.carrito_itemsCreateManyMedicamentosInput | Prisma.carrito_itemsCreateManyMedicamentosInput[]
  skipDuplicates?: boolean
}

export type carrito_itemsUpsertWithWhereUniqueWithoutMedicamentosInput = {
  where: Prisma.carrito_itemsWhereUniqueInput
  update: Prisma.XOR<Prisma.carrito_itemsUpdateWithoutMedicamentosInput, Prisma.carrito_itemsUncheckedUpdateWithoutMedicamentosInput>
  create: Prisma.XOR<Prisma.carrito_itemsCreateWithoutMedicamentosInput, Prisma.carrito_itemsUncheckedCreateWithoutMedicamentosInput>
}

export type carrito_itemsUpdateWithWhereUniqueWithoutMedicamentosInput = {
  where: Prisma.carrito_itemsWhereUniqueInput
  data: Prisma.XOR<Prisma.carrito_itemsUpdateWithoutMedicamentosInput, Prisma.carrito_itemsUncheckedUpdateWithoutMedicamentosInput>
}

export type carrito_itemsUpdateManyWithWhereWithoutMedicamentosInput = {
  where: Prisma.carrito_itemsScalarWhereInput
  data: Prisma.XOR<Prisma.carrito_itemsUpdateManyMutationInput, Prisma.carrito_itemsUncheckedUpdateManyWithoutMedicamentosInput>
}

export type carrito_itemsCreateManyCarritosInput = {
  id?: string
  medicamento_id: string
  cantidad: number
}

export type carrito_itemsUpdateWithoutCarritosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
  medicamentos?: Prisma.medicamentosUpdateOneRequiredWithoutCarrito_itemsNestedInput
}

export type carrito_itemsUncheckedUpdateWithoutCarritosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  medicamento_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
}

export type carrito_itemsUncheckedUpdateManyWithoutCarritosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  medicamento_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
}

export type carrito_itemsCreateManyMedicamentosInput = {
  id?: string
  carrito_id: string
  cantidad: number
}

export type carrito_itemsUpdateWithoutMedicamentosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
  carritos?: Prisma.carritosUpdateOneRequiredWithoutCarrito_itemsNestedInput
}

export type carrito_itemsUncheckedUpdateWithoutMedicamentosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  carrito_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
}

export type carrito_itemsUncheckedUpdateManyWithoutMedicamentosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  carrito_id?: Prisma.StringFieldUpdateOperationsInput | string
  cantidad?: Prisma.IntFieldUpdateOperationsInput | number
}



export type carrito_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  carrito_id?: boolean
  medicamento_id?: boolean
  cantidad?: boolean
  carritos?: boolean | Prisma.carritosDefaultArgs<ExtArgs>
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
}, ExtArgs["result"]["carrito_items"]>

export type carrito_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  carrito_id?: boolean
  medicamento_id?: boolean
  cantidad?: boolean
  carritos?: boolean | Prisma.carritosDefaultArgs<ExtArgs>
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
}, ExtArgs["result"]["carrito_items"]>

export type carrito_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  carrito_id?: boolean
  medicamento_id?: boolean
  cantidad?: boolean
  carritos?: boolean | Prisma.carritosDefaultArgs<ExtArgs>
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
}, ExtArgs["result"]["carrito_items"]>

export type carrito_itemsSelectScalar = {
  id?: boolean
  carrito_id?: boolean
  medicamento_id?: boolean
  cantidad?: boolean
}

export type carrito_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "carrito_id" | "medicamento_id" | "cantidad", ExtArgs["result"]["carrito_items"]>
export type carrito_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  carritos?: boolean | Prisma.carritosDefaultArgs<ExtArgs>
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
}
export type carrito_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  carritos?: boolean | Prisma.carritosDefaultArgs<ExtArgs>
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
}
export type carrito_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  carritos?: boolean | Prisma.carritosDefaultArgs<ExtArgs>
  medicamentos?: boolean | Prisma.medicamentosDefaultArgs<ExtArgs>
}

export type $carrito_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "carrito_items"
  objects: {
    carritos: Prisma.$carritosPayload<ExtArgs>
    medicamentos: Prisma.$medicamentosPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    carrito_id: string
    medicamento_id: string
    cantidad: number
  }, ExtArgs["result"]["carrito_items"]>
  composites: {}
}

export type carrito_itemsGetPayload<S extends boolean | null | undefined | carrito_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload, S>

export type carrito_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<carrito_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Carrito_itemsCountAggregateInputType | true
  }

export interface carrito_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carrito_items'], meta: { name: 'carrito_items' } }
  /**
   * Find zero or one Carrito_items that matches the filter.
   * @param {carrito_itemsFindUniqueArgs} args - Arguments to find a Carrito_items
   * @example
   * // Get one Carrito_items
   * const carrito_items = await prisma.carrito_items.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends carrito_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, carrito_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__carrito_itemsClient<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one Carrito_items that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {carrito_itemsFindUniqueOrThrowArgs} args - Arguments to find a Carrito_items
   * @example
   * // Get one Carrito_items
   * const carrito_items = await prisma.carrito_items.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends carrito_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, carrito_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__carrito_itemsClient<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Carrito_items that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carrito_itemsFindFirstArgs} args - Arguments to find a Carrito_items
   * @example
   * // Get one Carrito_items
   * const carrito_items = await prisma.carrito_items.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends carrito_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, carrito_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__carrito_itemsClient<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Carrito_items that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carrito_itemsFindFirstOrThrowArgs} args - Arguments to find a Carrito_items
   * @example
   * // Get one Carrito_items
   * const carrito_items = await prisma.carrito_items.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends carrito_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, carrito_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__carrito_itemsClient<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more Carrito_items that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carrito_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Carrito_items
   * const carrito_items = await prisma.carrito_items.findMany()
   * 
   * // Get first 10 Carrito_items
   * const carrito_items = await prisma.carrito_items.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const carrito_itemsWithIdOnly = await prisma.carrito_items.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends carrito_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, carrito_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a Carrito_items.
   * @param {carrito_itemsCreateArgs} args - Arguments to create a Carrito_items.
   * @example
   * // Create one Carrito_items
   * const Carrito_items = await prisma.carrito_items.create({
   *   data: {
   *     // ... data to create a Carrito_items
   *   }
   * })
   * 
   */
  create<T extends carrito_itemsCreateArgs>(args: Prisma.SelectSubset<T, carrito_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__carrito_itemsClient<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many Carrito_items.
   * @param {carrito_itemsCreateManyArgs} args - Arguments to create many Carrito_items.
   * @example
   * // Create many Carrito_items
   * const carrito_items = await prisma.carrito_items.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends carrito_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, carrito_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many Carrito_items and returns the data saved in the database.
   * @param {carrito_itemsCreateManyAndReturnArgs} args - Arguments to create many Carrito_items.
   * @example
   * // Create many Carrito_items
   * const carrito_items = await prisma.carrito_items.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many Carrito_items and only return the `id`
   * const carrito_itemsWithIdOnly = await prisma.carrito_items.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends carrito_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, carrito_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a Carrito_items.
   * @param {carrito_itemsDeleteArgs} args - Arguments to delete one Carrito_items.
   * @example
   * // Delete one Carrito_items
   * const Carrito_items = await prisma.carrito_items.delete({
   *   where: {
   *     // ... filter to delete one Carrito_items
   *   }
   * })
   * 
   */
  delete<T extends carrito_itemsDeleteArgs>(args: Prisma.SelectSubset<T, carrito_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__carrito_itemsClient<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one Carrito_items.
   * @param {carrito_itemsUpdateArgs} args - Arguments to update one Carrito_items.
   * @example
   * // Update one Carrito_items
   * const carrito_items = await prisma.carrito_items.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends carrito_itemsUpdateArgs>(args: Prisma.SelectSubset<T, carrito_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__carrito_itemsClient<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more Carrito_items.
   * @param {carrito_itemsDeleteManyArgs} args - Arguments to filter Carrito_items to delete.
   * @example
   * // Delete a few Carrito_items
   * const { count } = await prisma.carrito_items.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends carrito_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, carrito_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Carrito_items.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carrito_itemsUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Carrito_items
   * const carrito_items = await prisma.carrito_items.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends carrito_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, carrito_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Carrito_items and returns the data updated in the database.
   * @param {carrito_itemsUpdateManyAndReturnArgs} args - Arguments to update many Carrito_items.
   * @example
   * // Update many Carrito_items
   * const carrito_items = await prisma.carrito_items.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more Carrito_items and only return the `id`
   * const carrito_itemsWithIdOnly = await prisma.carrito_items.updateManyAndReturn({
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
  updateManyAndReturn<T extends carrito_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, carrito_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one Carrito_items.
   * @param {carrito_itemsUpsertArgs} args - Arguments to update or create a Carrito_items.
   * @example
   * // Update or create a Carrito_items
   * const carrito_items = await prisma.carrito_items.upsert({
   *   create: {
   *     // ... data to create a Carrito_items
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Carrito_items we want to update
   *   }
   * })
   */
  upsert<T extends carrito_itemsUpsertArgs>(args: Prisma.SelectSubset<T, carrito_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__carrito_itemsClient<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of Carrito_items.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carrito_itemsCountArgs} args - Arguments to filter Carrito_items to count.
   * @example
   * // Count the number of Carrito_items
   * const count = await prisma.carrito_items.count({
   *   where: {
   *     // ... the filter for the Carrito_items we want to count
   *   }
   * })
  **/
  count<T extends carrito_itemsCountArgs>(
    args?: Prisma.Subset<T, carrito_itemsCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], Carrito_itemsCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a Carrito_items.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {Carrito_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
  aggregate<T extends Carrito_itemsAggregateArgs>(args: Prisma.Subset<T, Carrito_itemsAggregateArgs>): Prisma.PrismaPromise<GetCarrito_itemsAggregateType<T>>

  /**
   * Group by Carrito_items.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carrito_itemsGroupByArgs} args - Group by arguments.
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
    T extends carrito_itemsGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: carrito_itemsGroupByArgs['orderBy'] }
      : { orderBy?: carrito_itemsGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, carrito_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrito_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the carrito_items model
 */
readonly fields: carrito_itemsFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for carrito_items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__carrito_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  carritos<T extends Prisma.carritosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carritosDefaultArgs<ExtArgs>>): Prisma.Prisma__carritosClient<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  medicamentos<T extends Prisma.medicamentosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.medicamentosDefaultArgs<ExtArgs>>): Prisma.Prisma__medicamentosClient<runtime.Types.Result.GetResult<Prisma.$medicamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
 * Fields of the carrito_items model
 */
export interface carrito_itemsFieldRefs {
  readonly id: Prisma.FieldRef<"carrito_items", 'String'>
  readonly carrito_id: Prisma.FieldRef<"carrito_items", 'String'>
  readonly medicamento_id: Prisma.FieldRef<"carrito_items", 'String'>
  readonly cantidad: Prisma.FieldRef<"carrito_items", 'Int'>
}
    

// Custom InputTypes
/**
 * carrito_items findUnique
 */
export type carrito_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which carrito_items to fetch.
   */
  where: Prisma.carrito_itemsWhereUniqueInput
}

/**
 * carrito_items findUniqueOrThrow
 */
export type carrito_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which carrito_items to fetch.
   */
  where: Prisma.carrito_itemsWhereUniqueInput
}

/**
 * carrito_items findFirst
 */
export type carrito_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which carrito_items to fetch.
   */
  where?: Prisma.carrito_itemsWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of carrito_items to fetch.
   */
  orderBy?: Prisma.carrito_itemsOrderByWithRelationInput | Prisma.carrito_itemsOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for carrito_items.
   */
  cursor?: Prisma.carrito_itemsWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` carrito_items from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` carrito_items.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of carrito_items.
   */
  distinct?: Prisma.Carrito_itemsScalarFieldEnum | Prisma.Carrito_itemsScalarFieldEnum[]
}

/**
 * carrito_items findFirstOrThrow
 */
export type carrito_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which carrito_items to fetch.
   */
  where?: Prisma.carrito_itemsWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of carrito_items to fetch.
   */
  orderBy?: Prisma.carrito_itemsOrderByWithRelationInput | Prisma.carrito_itemsOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for carrito_items.
   */
  cursor?: Prisma.carrito_itemsWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` carrito_items from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` carrito_items.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of carrito_items.
   */
  distinct?: Prisma.Carrito_itemsScalarFieldEnum | Prisma.Carrito_itemsScalarFieldEnum[]
}

/**
 * carrito_items findMany
 */
export type carrito_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter, which carrito_items to fetch.
   */
  where?: Prisma.carrito_itemsWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of carrito_items to fetch.
   */
  orderBy?: Prisma.carrito_itemsOrderByWithRelationInput | Prisma.carrito_itemsOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing carrito_items.
   */
  cursor?: Prisma.carrito_itemsWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` carrito_items from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` carrito_items.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of carrito_items.
   */
  distinct?: Prisma.Carrito_itemsScalarFieldEnum | Prisma.Carrito_itemsScalarFieldEnum[]
}

/**
 * carrito_items create
 */
export type carrito_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * The data needed to create a carrito_items.
   */
  data: Prisma.XOR<Prisma.carrito_itemsCreateInput, Prisma.carrito_itemsUncheckedCreateInput>
}

/**
 * carrito_items createMany
 */
export type carrito_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many carrito_items.
   */
  data: Prisma.carrito_itemsCreateManyInput | Prisma.carrito_itemsCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * carrito_items createManyAndReturn
 */
export type carrito_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carrito_items
   */
  select?: Prisma.carrito_itemsSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the carrito_items
   */
  omit?: Prisma.carrito_itemsOmit<ExtArgs> | null
  /**
   * The data used to create many carrito_items.
   */
  data: Prisma.carrito_itemsCreateManyInput | Prisma.carrito_itemsCreateManyInput[]
  skipDuplicates?: boolean
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carrito_itemsIncludeCreateManyAndReturn<ExtArgs> | null
}

/**
 * carrito_items update
 */
export type carrito_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * The data needed to update a carrito_items.
   */
  data: Prisma.XOR<Prisma.carrito_itemsUpdateInput, Prisma.carrito_itemsUncheckedUpdateInput>
  /**
   * Choose, which carrito_items to update.
   */
  where: Prisma.carrito_itemsWhereUniqueInput
}

/**
 * carrito_items updateMany
 */
export type carrito_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update carrito_items.
   */
  data: Prisma.XOR<Prisma.carrito_itemsUpdateManyMutationInput, Prisma.carrito_itemsUncheckedUpdateManyInput>
  /**
   * Filter which carrito_items to update
   */
  where?: Prisma.carrito_itemsWhereInput
  /**
   * Limit how many carrito_items to update.
   */
  limit?: number
}

/**
 * carrito_items updateManyAndReturn
 */
export type carrito_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carrito_items
   */
  select?: Prisma.carrito_itemsSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the carrito_items
   */
  omit?: Prisma.carrito_itemsOmit<ExtArgs> | null
  /**
   * The data used to update carrito_items.
   */
  data: Prisma.XOR<Prisma.carrito_itemsUpdateManyMutationInput, Prisma.carrito_itemsUncheckedUpdateManyInput>
  /**
   * Filter which carrito_items to update
   */
  where?: Prisma.carrito_itemsWhereInput
  /**
   * Limit how many carrito_items to update.
   */
  limit?: number
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carrito_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
}

/**
 * carrito_items upsert
 */
export type carrito_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * The filter to search for the carrito_items to update in case it exists.
   */
  where: Prisma.carrito_itemsWhereUniqueInput
  /**
   * In case the carrito_items found by the `where` argument doesn't exist, create a new carrito_items with this data.
   */
  create: Prisma.XOR<Prisma.carrito_itemsCreateInput, Prisma.carrito_itemsUncheckedCreateInput>
  /**
   * In case the carrito_items was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.carrito_itemsUpdateInput, Prisma.carrito_itemsUncheckedUpdateInput>
}

/**
 * carrito_items delete
 */
export type carrito_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
  /**
   * Filter which carrito_items to delete.
   */
  where: Prisma.carrito_itemsWhereUniqueInput
}

/**
 * carrito_items deleteMany
 */
export type carrito_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which carrito_items to delete
   */
  where?: Prisma.carrito_itemsWhereInput
  /**
   * Limit how many carrito_items to delete.
   */
  limit?: number
}

/**
 * carrito_items without action
 */
export type carrito_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
}
