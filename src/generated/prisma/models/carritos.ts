import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.js"
import type * as Prisma from "../internal/prismaNamespace.js"

/**
 * Model carritos
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type carritosModel = runtime.Types.Result.DefaultSelection<Prisma.$carritosPayload>

export type AggregateCarritos = {
  _count: CarritosCountAggregateOutputType | null
  _min: CarritosMinAggregateOutputType | null
  _max: CarritosMaxAggregateOutputType | null
}

export type CarritosMinAggregateOutputType = {
  id: string | null
  usuario_id: string | null
  created_at: Date | null
  updated_at: Date | null
}

export type CarritosMaxAggregateOutputType = {
  id: string | null
  usuario_id: string | null
  created_at: Date | null
  updated_at: Date | null
}

export type CarritosCountAggregateOutputType = {
  id: number
  usuario_id: number
  created_at: number
  updated_at: number
  _all: number
}


export type CarritosMinAggregateInputType = {
  id?: true
  usuario_id?: true
  created_at?: true
  updated_at?: true
}

export type CarritosMaxAggregateInputType = {
  id?: true
  usuario_id?: true
  created_at?: true
  updated_at?: true
}

export type CarritosCountAggregateInputType = {
  id?: true
  usuario_id?: true
  created_at?: true
  updated_at?: true
  _all?: true
}

export type CarritosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which carritos to aggregate.
   */
  where?: Prisma.carritosWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of carritos to fetch.
   */
  orderBy?: Prisma.carritosOrderByWithRelationInput | Prisma.carritosOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: Prisma.carritosWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` carritos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` carritos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned carritos
  **/
  _count?: true | CarritosCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: CarritosMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: CarritosMaxAggregateInputType
}

export type GetCarritosAggregateType<T extends CarritosAggregateArgs> = {
      [P in keyof T & keyof AggregateCarritos]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateCarritos[P]>
    : Prisma.GetScalarType<T[P], AggregateCarritos[P]>
}




export type carritosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.carritosWhereInput
  orderBy?: Prisma.carritosOrderByWithAggregationInput | Prisma.carritosOrderByWithAggregationInput[]
  by: Prisma.CarritosScalarFieldEnum[] | Prisma.CarritosScalarFieldEnum
  having?: Prisma.carritosScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: CarritosCountAggregateInputType | true
  _min?: CarritosMinAggregateInputType
  _max?: CarritosMaxAggregateInputType
}

export type CarritosGroupByOutputType = {
  id: string
  usuario_id: string
  created_at: Date
  updated_at: Date
  _count: CarritosCountAggregateOutputType | null
  _min: CarritosMinAggregateOutputType | null
  _max: CarritosMaxAggregateOutputType | null
}

export type GetCarritosGroupByPayload<T extends carritosGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<CarritosGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof CarritosGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], CarritosGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], CarritosGroupByOutputType[P]>
      }
    >
  >



export type carritosWhereInput = {
  AND?: Prisma.carritosWhereInput | Prisma.carritosWhereInput[]
  OR?: Prisma.carritosWhereInput[]
  NOT?: Prisma.carritosWhereInput | Prisma.carritosWhereInput[]
  id?: Prisma.UuidFilter<"carritos"> | string
  usuario_id?: Prisma.UuidFilter<"carritos"> | string
  created_at?: Prisma.DateTimeFilter<"carritos"> | Date | string
  updated_at?: Prisma.DateTimeFilter<"carritos"> | Date | string
  carrito_items?: Prisma.Carrito_itemsListRelationFilter
  usuarios?: Prisma.XOR<Prisma.UsuariosScalarRelationFilter, Prisma.usuariosWhereInput>
}

export type carritosOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  usuario_id?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
  carrito_items?: Prisma.carrito_itemsOrderByRelationAggregateInput
  usuarios?: Prisma.usuariosOrderByWithRelationInput
}

export type carritosWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  usuario_id?: string
  AND?: Prisma.carritosWhereInput | Prisma.carritosWhereInput[]
  OR?: Prisma.carritosWhereInput[]
  NOT?: Prisma.carritosWhereInput | Prisma.carritosWhereInput[]
  created_at?: Prisma.DateTimeFilter<"carritos"> | Date | string
  updated_at?: Prisma.DateTimeFilter<"carritos"> | Date | string
  carrito_items?: Prisma.Carrito_itemsListRelationFilter
  usuarios?: Prisma.XOR<Prisma.UsuariosScalarRelationFilter, Prisma.usuariosWhereInput>
}, "id" | "usuario_id">

export type carritosOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  usuario_id?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
  _count?: Prisma.carritosCountOrderByAggregateInput
  _max?: Prisma.carritosMaxOrderByAggregateInput
  _min?: Prisma.carritosMinOrderByAggregateInput
}

export type carritosScalarWhereWithAggregatesInput = {
  AND?: Prisma.carritosScalarWhereWithAggregatesInput | Prisma.carritosScalarWhereWithAggregatesInput[]
  OR?: Prisma.carritosScalarWhereWithAggregatesInput[]
  NOT?: Prisma.carritosScalarWhereWithAggregatesInput | Prisma.carritosScalarWhereWithAggregatesInput[]
  id?: Prisma.UuidWithAggregatesFilter<"carritos"> | string
  usuario_id?: Prisma.UuidWithAggregatesFilter<"carritos"> | string
  created_at?: Prisma.DateTimeWithAggregatesFilter<"carritos"> | Date | string
  updated_at?: Prisma.DateTimeWithAggregatesFilter<"carritos"> | Date | string
}

export type carritosCreateInput = {
  id?: string
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsCreateNestedManyWithoutCarritosInput
  usuarios: Prisma.usuariosCreateNestedOneWithoutCarritosInput
}

export type carritosUncheckedCreateInput = {
  id?: string
  usuario_id: string
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedCreateNestedManyWithoutCarritosInput
}

export type carritosUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUpdateManyWithoutCarritosNestedInput
  usuarios?: Prisma.usuariosUpdateOneRequiredWithoutCarritosNestedInput
}

export type carritosUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  usuario_id?: Prisma.StringFieldUpdateOperationsInput | string
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedUpdateManyWithoutCarritosNestedInput
}

export type carritosCreateManyInput = {
  id?: string
  usuario_id: string
  created_at?: Date | string
  updated_at?: Date | string
}

export type carritosUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type carritosUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  usuario_id?: Prisma.StringFieldUpdateOperationsInput | string
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type CarritosScalarRelationFilter = {
  is?: Prisma.carritosWhereInput
  isNot?: Prisma.carritosWhereInput
}

export type carritosCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  usuario_id?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
}

export type carritosMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  usuario_id?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
}

export type carritosMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  usuario_id?: Prisma.SortOrder
  created_at?: Prisma.SortOrder
  updated_at?: Prisma.SortOrder
}

export type CarritosNullableScalarRelationFilter = {
  is?: Prisma.carritosWhereInput | null
  isNot?: Prisma.carritosWhereInput | null
}

export type carritosCreateNestedOneWithoutCarrito_itemsInput = {
  create?: Prisma.XOR<Prisma.carritosCreateWithoutCarrito_itemsInput, Prisma.carritosUncheckedCreateWithoutCarrito_itemsInput>
  connectOrCreate?: Prisma.carritosCreateOrConnectWithoutCarrito_itemsInput
  connect?: Prisma.carritosWhereUniqueInput
}

export type carritosUpdateOneRequiredWithoutCarrito_itemsNestedInput = {
  create?: Prisma.XOR<Prisma.carritosCreateWithoutCarrito_itemsInput, Prisma.carritosUncheckedCreateWithoutCarrito_itemsInput>
  connectOrCreate?: Prisma.carritosCreateOrConnectWithoutCarrito_itemsInput
  upsert?: Prisma.carritosUpsertWithoutCarrito_itemsInput
  connect?: Prisma.carritosWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.carritosUpdateToOneWithWhereWithoutCarrito_itemsInput, Prisma.carritosUpdateWithoutCarrito_itemsInput>, Prisma.carritosUncheckedUpdateWithoutCarrito_itemsInput>
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date | string
}

export type carritosCreateNestedOneWithoutUsuariosInput = {
  create?: Prisma.XOR<Prisma.carritosCreateWithoutUsuariosInput, Prisma.carritosUncheckedCreateWithoutUsuariosInput>
  connectOrCreate?: Prisma.carritosCreateOrConnectWithoutUsuariosInput
  connect?: Prisma.carritosWhereUniqueInput
}

export type carritosUncheckedCreateNestedOneWithoutUsuariosInput = {
  create?: Prisma.XOR<Prisma.carritosCreateWithoutUsuariosInput, Prisma.carritosUncheckedCreateWithoutUsuariosInput>
  connectOrCreate?: Prisma.carritosCreateOrConnectWithoutUsuariosInput
  connect?: Prisma.carritosWhereUniqueInput
}

export type carritosUpdateOneWithoutUsuariosNestedInput = {
  create?: Prisma.XOR<Prisma.carritosCreateWithoutUsuariosInput, Prisma.carritosUncheckedCreateWithoutUsuariosInput>
  connectOrCreate?: Prisma.carritosCreateOrConnectWithoutUsuariosInput
  upsert?: Prisma.carritosUpsertWithoutUsuariosInput
  disconnect?: Prisma.carritosWhereInput | boolean
  delete?: Prisma.carritosWhereInput | boolean
  connect?: Prisma.carritosWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.carritosUpdateToOneWithWhereWithoutUsuariosInput, Prisma.carritosUpdateWithoutUsuariosInput>, Prisma.carritosUncheckedUpdateWithoutUsuariosInput>
}

export type carritosUncheckedUpdateOneWithoutUsuariosNestedInput = {
  create?: Prisma.XOR<Prisma.carritosCreateWithoutUsuariosInput, Prisma.carritosUncheckedCreateWithoutUsuariosInput>
  connectOrCreate?: Prisma.carritosCreateOrConnectWithoutUsuariosInput
  upsert?: Prisma.carritosUpsertWithoutUsuariosInput
  disconnect?: Prisma.carritosWhereInput | boolean
  delete?: Prisma.carritosWhereInput | boolean
  connect?: Prisma.carritosWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.carritosUpdateToOneWithWhereWithoutUsuariosInput, Prisma.carritosUpdateWithoutUsuariosInput>, Prisma.carritosUncheckedUpdateWithoutUsuariosInput>
}

export type carritosCreateWithoutCarrito_itemsInput = {
  id?: string
  created_at?: Date | string
  updated_at?: Date | string
  usuarios: Prisma.usuariosCreateNestedOneWithoutCarritosInput
}

export type carritosUncheckedCreateWithoutCarrito_itemsInput = {
  id?: string
  usuario_id: string
  created_at?: Date | string
  updated_at?: Date | string
}

export type carritosCreateOrConnectWithoutCarrito_itemsInput = {
  where: Prisma.carritosWhereUniqueInput
  create: Prisma.XOR<Prisma.carritosCreateWithoutCarrito_itemsInput, Prisma.carritosUncheckedCreateWithoutCarrito_itemsInput>
}

export type carritosUpsertWithoutCarrito_itemsInput = {
  update: Prisma.XOR<Prisma.carritosUpdateWithoutCarrito_itemsInput, Prisma.carritosUncheckedUpdateWithoutCarrito_itemsInput>
  create: Prisma.XOR<Prisma.carritosCreateWithoutCarrito_itemsInput, Prisma.carritosUncheckedCreateWithoutCarrito_itemsInput>
  where?: Prisma.carritosWhereInput
}

export type carritosUpdateToOneWithWhereWithoutCarrito_itemsInput = {
  where?: Prisma.carritosWhereInput
  data: Prisma.XOR<Prisma.carritosUpdateWithoutCarrito_itemsInput, Prisma.carritosUncheckedUpdateWithoutCarrito_itemsInput>
}

export type carritosUpdateWithoutCarrito_itemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  usuarios?: Prisma.usuariosUpdateOneRequiredWithoutCarritosNestedInput
}

export type carritosUncheckedUpdateWithoutCarrito_itemsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  usuario_id?: Prisma.StringFieldUpdateOperationsInput | string
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type carritosCreateWithoutUsuariosInput = {
  id?: string
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsCreateNestedManyWithoutCarritosInput
}

export type carritosUncheckedCreateWithoutUsuariosInput = {
  id?: string
  created_at?: Date | string
  updated_at?: Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedCreateNestedManyWithoutCarritosInput
}

export type carritosCreateOrConnectWithoutUsuariosInput = {
  where: Prisma.carritosWhereUniqueInput
  create: Prisma.XOR<Prisma.carritosCreateWithoutUsuariosInput, Prisma.carritosUncheckedCreateWithoutUsuariosInput>
}

export type carritosUpsertWithoutUsuariosInput = {
  update: Prisma.XOR<Prisma.carritosUpdateWithoutUsuariosInput, Prisma.carritosUncheckedUpdateWithoutUsuariosInput>
  create: Prisma.XOR<Prisma.carritosCreateWithoutUsuariosInput, Prisma.carritosUncheckedCreateWithoutUsuariosInput>
  where?: Prisma.carritosWhereInput
}

export type carritosUpdateToOneWithWhereWithoutUsuariosInput = {
  where?: Prisma.carritosWhereInput
  data: Prisma.XOR<Prisma.carritosUpdateWithoutUsuariosInput, Prisma.carritosUncheckedUpdateWithoutUsuariosInput>
}

export type carritosUpdateWithoutUsuariosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUpdateManyWithoutCarritosNestedInput
}

export type carritosUncheckedUpdateWithoutUsuariosInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  carrito_items?: Prisma.carrito_itemsUncheckedUpdateManyWithoutCarritosNestedInput
}


/**
 * Count Type CarritosCountOutputType
 */

export type CarritosCountOutputType = {
  carrito_items: number
}

export type CarritosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  carrito_items?: boolean | CarritosCountOutputTypeCountCarrito_itemsArgs
}

/**
 * CarritosCountOutputType without action
 */
export type CarritosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the CarritosCountOutputType
   */
  select?: Prisma.CarritosCountOutputTypeSelect<ExtArgs> | null
}

/**
 * CarritosCountOutputType without action
 */
export type CarritosCountOutputTypeCountCarrito_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.carrito_itemsWhereInput
}


export type carritosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  usuario_id?: boolean
  created_at?: boolean
  updated_at?: boolean
  carrito_items?: boolean | Prisma.carritos$carrito_itemsArgs<ExtArgs>
  usuarios?: boolean | Prisma.usuariosDefaultArgs<ExtArgs>
  _count?: boolean | Prisma.CarritosCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["carritos"]>

export type carritosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  usuario_id?: boolean
  created_at?: boolean
  updated_at?: boolean
  usuarios?: boolean | Prisma.usuariosDefaultArgs<ExtArgs>
}, ExtArgs["result"]["carritos"]>

export type carritosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  usuario_id?: boolean
  created_at?: boolean
  updated_at?: boolean
  usuarios?: boolean | Prisma.usuariosDefaultArgs<ExtArgs>
}, ExtArgs["result"]["carritos"]>

export type carritosSelectScalar = {
  id?: boolean
  usuario_id?: boolean
  created_at?: boolean
  updated_at?: boolean
}

export type carritosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario_id" | "created_at" | "updated_at", ExtArgs["result"]["carritos"]>
export type carritosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  carrito_items?: boolean | Prisma.carritos$carrito_itemsArgs<ExtArgs>
  usuarios?: boolean | Prisma.usuariosDefaultArgs<ExtArgs>
  _count?: boolean | Prisma.CarritosCountOutputTypeDefaultArgs<ExtArgs>
}
export type carritosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  usuarios?: boolean | Prisma.usuariosDefaultArgs<ExtArgs>
}
export type carritosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  usuarios?: boolean | Prisma.usuariosDefaultArgs<ExtArgs>
}

export type $carritosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "carritos"
  objects: {
    carrito_items: Prisma.$carrito_itemsPayload<ExtArgs>[]
    usuarios: Prisma.$usuariosPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    usuario_id: string
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["carritos"]>
  composites: {}
}

export type carritosGetPayload<S extends boolean | null | undefined | carritosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$carritosPayload, S>

export type carritosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<carritosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CarritosCountAggregateInputType | true
  }

export interface carritosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carritos'], meta: { name: 'carritos' } }
  /**
   * Find zero or one Carritos that matches the filter.
   * @param {carritosFindUniqueArgs} args - Arguments to find a Carritos
   * @example
   * // Get one Carritos
   * const carritos = await prisma.carritos.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends carritosFindUniqueArgs>(args: Prisma.SelectSubset<T, carritosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__carritosClient<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one Carritos that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {carritosFindUniqueOrThrowArgs} args - Arguments to find a Carritos
   * @example
   * // Get one Carritos
   * const carritos = await prisma.carritos.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends carritosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, carritosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__carritosClient<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Carritos that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carritosFindFirstArgs} args - Arguments to find a Carritos
   * @example
   * // Get one Carritos
   * const carritos = await prisma.carritos.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends carritosFindFirstArgs>(args?: Prisma.SelectSubset<T, carritosFindFirstArgs<ExtArgs>>): Prisma.Prisma__carritosClient<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Carritos that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carritosFindFirstOrThrowArgs} args - Arguments to find a Carritos
   * @example
   * // Get one Carritos
   * const carritos = await prisma.carritos.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends carritosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, carritosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__carritosClient<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more Carritos that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carritosFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Carritos
   * const carritos = await prisma.carritos.findMany()
   * 
   * // Get first 10 Carritos
   * const carritos = await prisma.carritos.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const carritosWithIdOnly = await prisma.carritos.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends carritosFindManyArgs>(args?: Prisma.SelectSubset<T, carritosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a Carritos.
   * @param {carritosCreateArgs} args - Arguments to create a Carritos.
   * @example
   * // Create one Carritos
   * const Carritos = await prisma.carritos.create({
   *   data: {
   *     // ... data to create a Carritos
   *   }
   * })
   * 
   */
  create<T extends carritosCreateArgs>(args: Prisma.SelectSubset<T, carritosCreateArgs<ExtArgs>>): Prisma.Prisma__carritosClient<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many Carritos.
   * @param {carritosCreateManyArgs} args - Arguments to create many Carritos.
   * @example
   * // Create many Carritos
   * const carritos = await prisma.carritos.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends carritosCreateManyArgs>(args?: Prisma.SelectSubset<T, carritosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Create many Carritos and returns the data saved in the database.
   * @param {carritosCreateManyAndReturnArgs} args - Arguments to create many Carritos.
   * @example
   * // Create many Carritos
   * const carritos = await prisma.carritos.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Create many Carritos and only return the `id`
   * const carritosWithIdOnly = await prisma.carritos.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * 
   */
  createManyAndReturn<T extends carritosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, carritosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  /**
   * Delete a Carritos.
   * @param {carritosDeleteArgs} args - Arguments to delete one Carritos.
   * @example
   * // Delete one Carritos
   * const Carritos = await prisma.carritos.delete({
   *   where: {
   *     // ... filter to delete one Carritos
   *   }
   * })
   * 
   */
  delete<T extends carritosDeleteArgs>(args: Prisma.SelectSubset<T, carritosDeleteArgs<ExtArgs>>): Prisma.Prisma__carritosClient<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one Carritos.
   * @param {carritosUpdateArgs} args - Arguments to update one Carritos.
   * @example
   * // Update one Carritos
   * const carritos = await prisma.carritos.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends carritosUpdateArgs>(args: Prisma.SelectSubset<T, carritosUpdateArgs<ExtArgs>>): Prisma.Prisma__carritosClient<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more Carritos.
   * @param {carritosDeleteManyArgs} args - Arguments to filter Carritos to delete.
   * @example
   * // Delete a few Carritos
   * const { count } = await prisma.carritos.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends carritosDeleteManyArgs>(args?: Prisma.SelectSubset<T, carritosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Carritos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carritosUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Carritos
   * const carritos = await prisma.carritos.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends carritosUpdateManyArgs>(args: Prisma.SelectSubset<T, carritosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  /**
   * Update zero or more Carritos and returns the data updated in the database.
   * @param {carritosUpdateManyAndReturnArgs} args - Arguments to update many Carritos.
   * @example
   * // Update many Carritos
   * const carritos = await prisma.carritos.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * 
   * // Update zero or more Carritos and only return the `id`
   * const carritosWithIdOnly = await prisma.carritos.updateManyAndReturn({
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
  updateManyAndReturn<T extends carritosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, carritosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  /**
   * Create or update one Carritos.
   * @param {carritosUpsertArgs} args - Arguments to update or create a Carritos.
   * @example
   * // Update or create a Carritos
   * const carritos = await prisma.carritos.upsert({
   *   create: {
   *     // ... data to create a Carritos
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Carritos we want to update
   *   }
   * })
   */
  upsert<T extends carritosUpsertArgs>(args: Prisma.SelectSubset<T, carritosUpsertArgs<ExtArgs>>): Prisma.Prisma__carritosClient<runtime.Types.Result.GetResult<Prisma.$carritosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of Carritos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carritosCountArgs} args - Arguments to filter Carritos to count.
   * @example
   * // Count the number of Carritos
   * const count = await prisma.carritos.count({
   *   where: {
   *     // ... the filter for the Carritos we want to count
   *   }
   * })
  **/
  count<T extends carritosCountArgs>(
    args?: Prisma.Subset<T, carritosCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], CarritosCountAggregateOutputType>
      : number
  >

  /**
   * Allows you to perform aggregations operations on a Carritos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {CarritosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
  aggregate<T extends CarritosAggregateArgs>(args: Prisma.Subset<T, CarritosAggregateArgs>): Prisma.PrismaPromise<GetCarritosAggregateType<T>>

  /**
   * Group by Carritos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {carritosGroupByArgs} args - Group by arguments.
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
    T extends carritosGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: carritosGroupByArgs['orderBy'] }
      : { orderBy?: carritosGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, carritosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
/**
 * Fields of the carritos model
 */
readonly fields: carritosFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for carritos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__carritosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  carrito_items<T extends Prisma.carritos$carrito_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carritos$carrito_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  usuarios<T extends Prisma.usuariosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuariosDefaultArgs<ExtArgs>>): Prisma.Prisma__usuariosClient<runtime.Types.Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
 * Fields of the carritos model
 */
export interface carritosFieldRefs {
  readonly id: Prisma.FieldRef<"carritos", 'String'>
  readonly usuario_id: Prisma.FieldRef<"carritos", 'String'>
  readonly created_at: Prisma.FieldRef<"carritos", 'DateTime'>
  readonly updated_at: Prisma.FieldRef<"carritos", 'DateTime'>
}
    

// Custom InputTypes
/**
 * carritos findUnique
 */
export type carritosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
  /**
   * Filter, which carritos to fetch.
   */
  where: Prisma.carritosWhereUniqueInput
}

/**
 * carritos findUniqueOrThrow
 */
export type carritosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
  /**
   * Filter, which carritos to fetch.
   */
  where: Prisma.carritosWhereUniqueInput
}

/**
 * carritos findFirst
 */
export type carritosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
  /**
   * Filter, which carritos to fetch.
   */
  where?: Prisma.carritosWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of carritos to fetch.
   */
  orderBy?: Prisma.carritosOrderByWithRelationInput | Prisma.carritosOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for carritos.
   */
  cursor?: Prisma.carritosWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` carritos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` carritos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of carritos.
   */
  distinct?: Prisma.CarritosScalarFieldEnum | Prisma.CarritosScalarFieldEnum[]
}

/**
 * carritos findFirstOrThrow
 */
export type carritosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
  /**
   * Filter, which carritos to fetch.
   */
  where?: Prisma.carritosWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of carritos to fetch.
   */
  orderBy?: Prisma.carritosOrderByWithRelationInput | Prisma.carritosOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for carritos.
   */
  cursor?: Prisma.carritosWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` carritos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` carritos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of carritos.
   */
  distinct?: Prisma.CarritosScalarFieldEnum | Prisma.CarritosScalarFieldEnum[]
}

/**
 * carritos findMany
 */
export type carritosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
  /**
   * Filter, which carritos to fetch.
   */
  where?: Prisma.carritosWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of carritos to fetch.
   */
  orderBy?: Prisma.carritosOrderByWithRelationInput | Prisma.carritosOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing carritos.
   */
  cursor?: Prisma.carritosWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` carritos from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` carritos.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of carritos.
   */
  distinct?: Prisma.CarritosScalarFieldEnum | Prisma.CarritosScalarFieldEnum[]
}

/**
 * carritos create
 */
export type carritosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
  /**
   * The data needed to create a carritos.
   */
  data: Prisma.XOR<Prisma.carritosCreateInput, Prisma.carritosUncheckedCreateInput>
}

/**
 * carritos createMany
 */
export type carritosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to create many carritos.
   */
  data: Prisma.carritosCreateManyInput | Prisma.carritosCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * carritos createManyAndReturn
 */
export type carritosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelectCreateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * The data used to create many carritos.
   */
  data: Prisma.carritosCreateManyInput | Prisma.carritosCreateManyInput[]
  skipDuplicates?: boolean
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosIncludeCreateManyAndReturn<ExtArgs> | null
}

/**
 * carritos update
 */
export type carritosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
  /**
   * The data needed to update a carritos.
   */
  data: Prisma.XOR<Prisma.carritosUpdateInput, Prisma.carritosUncheckedUpdateInput>
  /**
   * Choose, which carritos to update.
   */
  where: Prisma.carritosWhereUniqueInput
}

/**
 * carritos updateMany
 */
export type carritosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * The data used to update carritos.
   */
  data: Prisma.XOR<Prisma.carritosUpdateManyMutationInput, Prisma.carritosUncheckedUpdateManyInput>
  /**
   * Filter which carritos to update
   */
  where?: Prisma.carritosWhereInput
  /**
   * Limit how many carritos to update.
   */
  limit?: number
}

/**
 * carritos updateManyAndReturn
 */
export type carritosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelectUpdateManyAndReturn<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * The data used to update carritos.
   */
  data: Prisma.XOR<Prisma.carritosUpdateManyMutationInput, Prisma.carritosUncheckedUpdateManyInput>
  /**
   * Filter which carritos to update
   */
  where?: Prisma.carritosWhereInput
  /**
   * Limit how many carritos to update.
   */
  limit?: number
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosIncludeUpdateManyAndReturn<ExtArgs> | null
}

/**
 * carritos upsert
 */
export type carritosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
  /**
   * The filter to search for the carritos to update in case it exists.
   */
  where: Prisma.carritosWhereUniqueInput
  /**
   * In case the carritos found by the `where` argument doesn't exist, create a new carritos with this data.
   */
  create: Prisma.XOR<Prisma.carritosCreateInput, Prisma.carritosUncheckedCreateInput>
  /**
   * In case the carritos was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.carritosUpdateInput, Prisma.carritosUncheckedUpdateInput>
}

/**
 * carritos delete
 */
export type carritosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
  /**
   * Filter which carritos to delete.
   */
  where: Prisma.carritosWhereUniqueInput
}

/**
 * carritos deleteMany
 */
export type carritosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Filter which carritos to delete
   */
  where?: Prisma.carritosWhereInput
  /**
   * Limit how many carritos to delete.
   */
  limit?: number
}

/**
 * carritos.carrito_items
 */
export type carritos$carrito_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * carritos without action
 */
export type carritosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the carritos
   */
  select?: Prisma.carritosSelect<ExtArgs> | null
  /**
   * Omit specific fields from the carritos
   */
  omit?: Prisma.carritosOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.carritosInclude<ExtArgs> | null
}
