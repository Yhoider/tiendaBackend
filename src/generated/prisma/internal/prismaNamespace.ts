import * as runtime from "@prisma/client/runtime/client"
import type * as Prisma from "../models.js"
import { type PrismaClient } from "./class.js"

export type * from '../models.js'

export type DMMF = typeof runtime.DMMF

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

/**
 * Prisma Errors
 */

export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError

export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError

export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError

export const PrismaClientInitializationError = runtime.PrismaClientInitializationError
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError

export const PrismaClientValidationError = runtime.PrismaClientValidationError
export type PrismaClientValidationError = runtime.PrismaClientValidationError

/**
 * Re-export of sql-template-tag
 */
export const sql = runtime.sqltag
export const empty = runtime.empty
export const join = runtime.join
export const raw = runtime.raw
export const Sql = runtime.Sql
export type Sql = runtime.Sql



/**
 * Decimal.js
 */
export const Decimal = runtime.Decimal
export type Decimal = runtime.Decimal

export type DecimalJsLike = runtime.DecimalJsLike

/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs
export const getExtensionContext = runtime.Extensions.getExtensionContext
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>

export type PrismaVersion = {
  client: string
  engine: string
}

/**
 * Prisma Client JS version: 7.10.1
 * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
 */
export const prismaVersion: PrismaVersion = {
  client: "7.10.1",
  engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
}

/**
 * Utility Types
 */

export type Bytes = runtime.Bytes
export type JsonObject = runtime.JsonObject
export type JsonArray = runtime.JsonArray
export type JsonValue = runtime.JsonValue
export type InputJsonObject = runtime.InputJsonObject
export type InputJsonArray = runtime.InputJsonArray
export type InputJsonValue = runtime.InputJsonValue


export const NullTypes = {
  DbNull: runtime.NullTypes.DbNull as (new (secret: never) => typeof runtime.DbNull),
  JsonNull: runtime.NullTypes.JsonNull as (new (secret: never) => typeof runtime.JsonNull),
  AnyNull: runtime.NullTypes.AnyNull as (new (secret: never) => typeof runtime.AnyNull),
}
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export const DbNull = runtime.DbNull

/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export const JsonNull = runtime.JsonNull

/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export const AnyNull = runtime.AnyNull


type SelectAndInclude = {
  select: any
  include: any
}

type SelectAndOmit = {
  select: any
  omit: any
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

export type Enumerable<T> = T | Array<T>;

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};

/**
 * Resolved type of the argument passed to the `PrismaClient` constructor.
 *
 * When called without a narrower options type (the common case), this resolves
 * to `PrismaClientOptions` directly, which produces a clear TypeScript error
 * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
 * the argument is missing or incomplete. When the user supplies a narrower
 * options type (e.g. via a literal), it falls back to `Subset` to keep
 * filtering out unknown properties.
 */
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
  [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} &
  (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})

/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} &
  K

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> =
  T extends object ?
  U extends object ?
    ((Without<T, U> & U) | (Without<U, T> & T)) & object
  : U : T


/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any>
? False
: T extends Date
? False
: T extends Uint8Array
? False
: T extends BigInt
? False
: T extends object
? True
: False


/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

/**
 * From ts-toolbelt
 */

type __Either<O extends object, K extends Key> = Omit<O, K> &
  {
    // Merge all but K
    [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
  }[K]

type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

type _Either<
  O extends object,
  K extends Key,
  strict extends Boolean
> = {
  1: EitherStrict<O, K>
  0: EitherLoose<O, K>
}[strict]

export type Either<
  O extends object,
  K extends Key,
  strict extends Boolean = 1
> = O extends unknown ? _Either<O, K, strict> : never

export type Union = any

export type PatchUndefined<O extends object, O1 extends object> = {
  [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
} & {}

/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};

type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;

type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];

export type ComputeRaw<A extends any> = A extends Function ? A : {
  [K in keyof A]: A[K];
} & {};

export type OptionalFlat<O> = {
  [K in keyof O]?: O[K];
} & {};

type _Record<K extends keyof any, T> = {
  [P in K]: T;
};

// cause typescript not to expand types and preserve names
type NoExpand<T> = T extends unknown ? T : never;

// this type assumes the passed object is entirely optional
export type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
  ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
    | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
  : never>;

type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/

export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

export type Boolean = True | False

export type True = 1

export type False = 0

export type Not<B extends Boolean> = {
  0: 1
  1: 0
}[B]

export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
  ? 0 // anything `never` is false
  : A1 extends A2
  ? 1
  : 0

export type Has<U extends Union, U1 extends Union> = Not<
  Extends<Exclude<U1, U>, U1>
>

export type Or<B1 extends Boolean, B2 extends Boolean> = {
  0: {
    0: 0
    1: 1
  }
  1: {
    0: 1
    1: 1
  }
}[B1][B2]

export type Keys<U extends Union> = U extends unknown ? keyof U : never

export type GetScalarType<T, O> = O extends object ? {
  [P in keyof T]: P extends keyof O
    ? O[P]
    : never
} : never

type FieldPaths<
  T,
  U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
> = IsObject<T> extends True ? U : T

export type GetHavingFields<T> = {
  [K in keyof T]: Or<
    Or<Extends<'OR', K>, Extends<'AND', K>>,
    Extends<'NOT', K>
  > extends True
    ? // infer is only needed to not hit TS limit
      // based on the brilliant idea of Pierre-Antoine Mills
      // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
      T[K] extends infer TK
      ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
      : never
    : {} extends FieldPaths<T[K]>
    ? never
    : K
}[keyof T]

/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


export const ModelName = {
  carrito_items: 'carrito_items',
  carritos: 'carritos',
  categorias: 'categorias',
  medicamentos: 'medicamentos',
  mensajes_contacto: 'mensajes_contacto',
  pedido_items: 'pedido_items',
  pedidos: 'pedidos',
  receta_detalles: 'receta_detalles',
  recetas: 'recetas',
  roles: 'roles',
  usuarios: 'usuarios'
} as const

export type ModelName = (typeof ModelName)[keyof typeof ModelName]



export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{extArgs: runtime.Types.Extensions.InternalArgs }, runtime.Types.Utils.Record<string, any>> {
  returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>
}

export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
  globalOmitOptions: {
    omit: GlobalOmitOptions
  }
  meta: {
    modelProps: "carrito_items" | "carritos" | "categorias" | "medicamentos" | "mensajes_contacto" | "pedido_items" | "pedidos" | "receta_detalles" | "recetas" | "roles" | "usuarios"
    txIsolationLevel: TransactionIsolationLevel
  }
  model: {
    carrito_items: {
      payload: Prisma.$carrito_itemsPayload<ExtArgs>
      fields: Prisma.carrito_itemsFieldRefs
      operations: {
        findUnique: {
          args: Prisma.carrito_itemsFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.carrito_itemsFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload>
        }
        findFirst: {
          args: Prisma.carrito_itemsFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.carrito_itemsFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload>
        }
        findMany: {
          args: Prisma.carrito_itemsFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload>[]
        }
        create: {
          args: Prisma.carrito_itemsCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload>
        }
        createMany: {
          args: Prisma.carrito_itemsCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.carrito_itemsCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload>[]
        }
        delete: {
          args: Prisma.carrito_itemsDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload>
        }
        update: {
          args: Prisma.carrito_itemsUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload>
        }
        deleteMany: {
          args: Prisma.carrito_itemsDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.carrito_itemsUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.carrito_itemsUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload>[]
        }
        upsert: {
          args: Prisma.carrito_itemsUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_itemsPayload>
        }
        aggregate: {
          args: Prisma.Carrito_itemsAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateCarrito_items>
        }
        groupBy: {
          args: Prisma.carrito_itemsGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.Carrito_itemsGroupByOutputType>[]
        }
        count: {
          args: Prisma.carrito_itemsCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.Carrito_itemsCountAggregateOutputType> | number
        }
      }
    }
    carritos: {
      payload: Prisma.$carritosPayload<ExtArgs>
      fields: Prisma.carritosFieldRefs
      operations: {
        findUnique: {
          args: Prisma.carritosFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.carritosFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload>
        }
        findFirst: {
          args: Prisma.carritosFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.carritosFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload>
        }
        findMany: {
          args: Prisma.carritosFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload>[]
        }
        create: {
          args: Prisma.carritosCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload>
        }
        createMany: {
          args: Prisma.carritosCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.carritosCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload>[]
        }
        delete: {
          args: Prisma.carritosDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload>
        }
        update: {
          args: Prisma.carritosUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload>
        }
        deleteMany: {
          args: Prisma.carritosDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.carritosUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.carritosUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload>[]
        }
        upsert: {
          args: Prisma.carritosUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$carritosPayload>
        }
        aggregate: {
          args: Prisma.CarritosAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateCarritos>
        }
        groupBy: {
          args: Prisma.carritosGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.CarritosGroupByOutputType>[]
        }
        count: {
          args: Prisma.carritosCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.CarritosCountAggregateOutputType> | number
        }
      }
    }
    categorias: {
      payload: Prisma.$categoriasPayload<ExtArgs>
      fields: Prisma.categoriasFieldRefs
      operations: {
        findUnique: {
          args: Prisma.categoriasFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>
        }
        findFirst: {
          args: Prisma.categoriasFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>
        }
        findMany: {
          args: Prisma.categoriasFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>[]
        }
        create: {
          args: Prisma.categoriasCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>
        }
        createMany: {
          args: Prisma.categoriasCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.categoriasCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>[]
        }
        delete: {
          args: Prisma.categoriasDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>
        }
        update: {
          args: Prisma.categoriasUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>
        }
        deleteMany: {
          args: Prisma.categoriasDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.categoriasUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.categoriasUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>[]
        }
        upsert: {
          args: Prisma.categoriasUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriasPayload>
        }
        aggregate: {
          args: Prisma.CategoriasAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateCategorias>
        }
        groupBy: {
          args: Prisma.categoriasGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.CategoriasGroupByOutputType>[]
        }
        count: {
          args: Prisma.categoriasCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.CategoriasCountAggregateOutputType> | number
        }
      }
    }
    medicamentos: {
      payload: Prisma.$medicamentosPayload<ExtArgs>
      fields: Prisma.medicamentosFieldRefs
      operations: {
        findUnique: {
          args: Prisma.medicamentosFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.medicamentosFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload>
        }
        findFirst: {
          args: Prisma.medicamentosFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.medicamentosFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload>
        }
        findMany: {
          args: Prisma.medicamentosFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload>[]
        }
        create: {
          args: Prisma.medicamentosCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload>
        }
        createMany: {
          args: Prisma.medicamentosCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.medicamentosCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload>[]
        }
        delete: {
          args: Prisma.medicamentosDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload>
        }
        update: {
          args: Prisma.medicamentosUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload>
        }
        deleteMany: {
          args: Prisma.medicamentosDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.medicamentosUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.medicamentosUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload>[]
        }
        upsert: {
          args: Prisma.medicamentosUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$medicamentosPayload>
        }
        aggregate: {
          args: Prisma.MedicamentosAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateMedicamentos>
        }
        groupBy: {
          args: Prisma.medicamentosGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.MedicamentosGroupByOutputType>[]
        }
        count: {
          args: Prisma.medicamentosCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.MedicamentosCountAggregateOutputType> | number
        }
      }
    }
    mensajes_contacto: {
      payload: Prisma.$mensajes_contactoPayload<ExtArgs>
      fields: Prisma.mensajes_contactoFieldRefs
      operations: {
        findUnique: {
          args: Prisma.mensajes_contactoFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.mensajes_contactoFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload>
        }
        findFirst: {
          args: Prisma.mensajes_contactoFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.mensajes_contactoFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload>
        }
        findMany: {
          args: Prisma.mensajes_contactoFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload>[]
        }
        create: {
          args: Prisma.mensajes_contactoCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload>
        }
        createMany: {
          args: Prisma.mensajes_contactoCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.mensajes_contactoCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload>[]
        }
        delete: {
          args: Prisma.mensajes_contactoDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload>
        }
        update: {
          args: Prisma.mensajes_contactoUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload>
        }
        deleteMany: {
          args: Prisma.mensajes_contactoDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.mensajes_contactoUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.mensajes_contactoUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload>[]
        }
        upsert: {
          args: Prisma.mensajes_contactoUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$mensajes_contactoPayload>
        }
        aggregate: {
          args: Prisma.Mensajes_contactoAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateMensajes_contacto>
        }
        groupBy: {
          args: Prisma.mensajes_contactoGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.Mensajes_contactoGroupByOutputType>[]
        }
        count: {
          args: Prisma.mensajes_contactoCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.Mensajes_contactoCountAggregateOutputType> | number
        }
      }
    }
    pedido_items: {
      payload: Prisma.$pedido_itemsPayload<ExtArgs>
      fields: Prisma.pedido_itemsFieldRefs
      operations: {
        findUnique: {
          args: Prisma.pedido_itemsFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.pedido_itemsFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload>
        }
        findFirst: {
          args: Prisma.pedido_itemsFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.pedido_itemsFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload>
        }
        findMany: {
          args: Prisma.pedido_itemsFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload>[]
        }
        create: {
          args: Prisma.pedido_itemsCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload>
        }
        createMany: {
          args: Prisma.pedido_itemsCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.pedido_itemsCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload>[]
        }
        delete: {
          args: Prisma.pedido_itemsDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload>
        }
        update: {
          args: Prisma.pedido_itemsUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload>
        }
        deleteMany: {
          args: Prisma.pedido_itemsDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.pedido_itemsUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.pedido_itemsUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload>[]
        }
        upsert: {
          args: Prisma.pedido_itemsUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedido_itemsPayload>
        }
        aggregate: {
          args: Prisma.Pedido_itemsAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregatePedido_items>
        }
        groupBy: {
          args: Prisma.pedido_itemsGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.Pedido_itemsGroupByOutputType>[]
        }
        count: {
          args: Prisma.pedido_itemsCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.Pedido_itemsCountAggregateOutputType> | number
        }
      }
    }
    pedidos: {
      payload: Prisma.$pedidosPayload<ExtArgs>
      fields: Prisma.pedidosFieldRefs
      operations: {
        findUnique: {
          args: Prisma.pedidosFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.pedidosFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload>
        }
        findFirst: {
          args: Prisma.pedidosFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.pedidosFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload>
        }
        findMany: {
          args: Prisma.pedidosFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload>[]
        }
        create: {
          args: Prisma.pedidosCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload>
        }
        createMany: {
          args: Prisma.pedidosCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.pedidosCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload>[]
        }
        delete: {
          args: Prisma.pedidosDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload>
        }
        update: {
          args: Prisma.pedidosUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload>
        }
        deleteMany: {
          args: Prisma.pedidosDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.pedidosUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.pedidosUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload>[]
        }
        upsert: {
          args: Prisma.pedidosUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$pedidosPayload>
        }
        aggregate: {
          args: Prisma.PedidosAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregatePedidos>
        }
        groupBy: {
          args: Prisma.pedidosGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PedidosGroupByOutputType>[]
        }
        count: {
          args: Prisma.pedidosCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.PedidosCountAggregateOutputType> | number
        }
      }
    }
    receta_detalles: {
      payload: Prisma.$receta_detallesPayload<ExtArgs>
      fields: Prisma.receta_detallesFieldRefs
      operations: {
        findUnique: {
          args: Prisma.receta_detallesFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.receta_detallesFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload>
        }
        findFirst: {
          args: Prisma.receta_detallesFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.receta_detallesFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload>
        }
        findMany: {
          args: Prisma.receta_detallesFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload>[]
        }
        create: {
          args: Prisma.receta_detallesCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload>
        }
        createMany: {
          args: Prisma.receta_detallesCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.receta_detallesCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload>[]
        }
        delete: {
          args: Prisma.receta_detallesDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload>
        }
        update: {
          args: Prisma.receta_detallesUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload>
        }
        deleteMany: {
          args: Prisma.receta_detallesDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.receta_detallesUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.receta_detallesUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload>[]
        }
        upsert: {
          args: Prisma.receta_detallesUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$receta_detallesPayload>
        }
        aggregate: {
          args: Prisma.Receta_detallesAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateReceta_detalles>
        }
        groupBy: {
          args: Prisma.receta_detallesGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.Receta_detallesGroupByOutputType>[]
        }
        count: {
          args: Prisma.receta_detallesCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.Receta_detallesCountAggregateOutputType> | number
        }
      }
    }
    recetas: {
      payload: Prisma.$recetasPayload<ExtArgs>
      fields: Prisma.recetasFieldRefs
      operations: {
        findUnique: {
          args: Prisma.recetasFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.recetasFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload>
        }
        findFirst: {
          args: Prisma.recetasFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.recetasFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload>
        }
        findMany: {
          args: Prisma.recetasFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload>[]
        }
        create: {
          args: Prisma.recetasCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload>
        }
        createMany: {
          args: Prisma.recetasCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.recetasCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload>[]
        }
        delete: {
          args: Prisma.recetasDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload>
        }
        update: {
          args: Prisma.recetasUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload>
        }
        deleteMany: {
          args: Prisma.recetasDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.recetasUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.recetasUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload>[]
        }
        upsert: {
          args: Prisma.recetasUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$recetasPayload>
        }
        aggregate: {
          args: Prisma.RecetasAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateRecetas>
        }
        groupBy: {
          args: Prisma.recetasGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RecetasGroupByOutputType>[]
        }
        count: {
          args: Prisma.recetasCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RecetasCountAggregateOutputType> | number
        }
      }
    }
    roles: {
      payload: Prisma.$rolesPayload<ExtArgs>
      fields: Prisma.rolesFieldRefs
      operations: {
        findUnique: {
          args: Prisma.rolesFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>
        }
        findFirst: {
          args: Prisma.rolesFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>
        }
        findMany: {
          args: Prisma.rolesFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[]
        }
        create: {
          args: Prisma.rolesCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>
        }
        createMany: {
          args: Prisma.rolesCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[]
        }
        delete: {
          args: Prisma.rolesDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>
        }
        update: {
          args: Prisma.rolesUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>
        }
        deleteMany: {
          args: Prisma.rolesDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.rolesUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[]
        }
        upsert: {
          args: Prisma.rolesUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>
        }
        aggregate: {
          args: Prisma.RolesAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>
        }
        groupBy: {
          args: Prisma.rolesGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[]
        }
        count: {
          args: Prisma.rolesCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number
        }
      }
    }
    usuarios: {
      payload: Prisma.$usuariosPayload<ExtArgs>
      fields: Prisma.usuariosFieldRefs
      operations: {
        findUnique: {
          args: Prisma.usuariosFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>
        }
        findFirst: {
          args: Prisma.usuariosFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>
        }
        findMany: {
          args: Prisma.usuariosFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>[]
        }
        create: {
          args: Prisma.usuariosCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>
        }
        createMany: {
          args: Prisma.usuariosCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>[]
        }
        delete: {
          args: Prisma.usuariosDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>
        }
        update: {
          args: Prisma.usuariosUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>
        }
        deleteMany: {
          args: Prisma.usuariosDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.usuariosUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>[]
        }
        upsert: {
          args: Prisma.usuariosUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$usuariosPayload>
        }
        aggregate: {
          args: Prisma.UsuariosAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateUsuarios>
        }
        groupBy: {
          args: Prisma.usuariosGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UsuariosGroupByOutputType>[]
        }
        count: {
          args: Prisma.usuariosCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UsuariosCountAggregateOutputType> | number
        }
      }
    }
  }
} & {
  other: {
    payload: any
    operations: {
      $executeRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]],
        result: any
      }
      $executeRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
      }
      $queryRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]],
        result: any
      }
      $queryRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
      }
    }
  }
}

/**
 * Enums
 */

export const TransactionIsolationLevel = runtime.makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
} as const)

export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


export const Carrito_itemsScalarFieldEnum = {
  id: 'id',
  carrito_id: 'carrito_id',
  medicamento_id: 'medicamento_id',
  cantidad: 'cantidad'
} as const

export type Carrito_itemsScalarFieldEnum = (typeof Carrito_itemsScalarFieldEnum)[keyof typeof Carrito_itemsScalarFieldEnum]


export const CarritosScalarFieldEnum = {
  id: 'id',
  usuario_id: 'usuario_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
} as const

export type CarritosScalarFieldEnum = (typeof CarritosScalarFieldEnum)[keyof typeof CarritosScalarFieldEnum]


export const CategoriasScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  descripcion: 'descripcion',
  activo: 'activo'
} as const

export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


export const MedicamentosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  descripcion: 'descripcion',
  precio: 'precio',
  imagen_url: 'imagen_url',
  categoria_id: 'categoria_id',
  requiere_receta: 'requiere_receta',
  stock: 'stock',
  activo: 'activo',
  created_at: 'created_at',
  updated_at: 'updated_at'
} as const

export type MedicamentosScalarFieldEnum = (typeof MedicamentosScalarFieldEnum)[keyof typeof MedicamentosScalarFieldEnum]


export const Mensajes_contactoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  correo: 'correo',
  asunto: 'asunto',
  mensaje: 'mensaje',
  estado: 'estado',
  created_at: 'created_at'
} as const

export type Mensajes_contactoScalarFieldEnum = (typeof Mensajes_contactoScalarFieldEnum)[keyof typeof Mensajes_contactoScalarFieldEnum]


export const Pedido_itemsScalarFieldEnum = {
  id: 'id',
  pedido_id: 'pedido_id',
  medicamento_id: 'medicamento_id',
  receta_detalle_id: 'receta_detalle_id',
  nombre_producto: 'nombre_producto',
  precio_unitario: 'precio_unitario',
  cantidad: 'cantidad',
  subtotal: 'subtotal'
} as const

export type Pedido_itemsScalarFieldEnum = (typeof Pedido_itemsScalarFieldEnum)[keyof typeof Pedido_itemsScalarFieldEnum]


export const PedidosScalarFieldEnum = {
  id: 'id',
  usuario_id: 'usuario_id',
  estado: 'estado',
  subtotal: 'subtotal',
  total: 'total',
  direccion_entrega: 'direccion_entrega',
  created_at: 'created_at',
  updated_at: 'updated_at'
} as const

export type PedidosScalarFieldEnum = (typeof PedidosScalarFieldEnum)[keyof typeof PedidosScalarFieldEnum]


export const Receta_detallesScalarFieldEnum = {
  id: 'id',
  receta_id: 'receta_id',
  medicamento_id: 'medicamento_id',
  cantidad_prescrita: 'cantidad_prescrita',
  indicaciones: 'indicaciones'
} as const

export type Receta_detallesScalarFieldEnum = (typeof Receta_detallesScalarFieldEnum)[keyof typeof Receta_detallesScalarFieldEnum]


export const RecetasScalarFieldEnum = {
  id: 'id',
  usuario_id: 'usuario_id',
  archivo_url: 'archivo_url',
  estado: 'estado',
  revisado_por: 'revisado_por',
  fecha_revision: 'fecha_revision',
  observaciones: 'observaciones',
  created_at: 'created_at'
} as const

export type RecetasScalarFieldEnum = (typeof RecetasScalarFieldEnum)[keyof typeof RecetasScalarFieldEnum]


export const RolesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  descripcion: 'descripcion'
} as const

export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


export const UsuariosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  correo: 'correo',
  password_hash: 'password_hash',
  rol_id: 'rol_id',
  activo: 'activo',
  created_at: 'created_at',
  updated_at: 'updated_at'
} as const

export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


export const SortOrder = {
  asc: 'asc',
  desc: 'desc'
} as const

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export const QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
} as const

export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


export const NullsOrder = {
  first: 'first',
  last: 'last'
} as const

export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]



/**
 * Field references
 */


/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    

/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
  count: number
}

export const defineExtension = runtime.Extensions.defineExtension as unknown as runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>
export type DefaultPrismaClient = PrismaClient
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
/**
 * Options common to all variants of `PrismaClientOptions`, regardless of whether you connect to your database through a driver adapter or through Prisma Accelerate.
 */
export interface PrismaClientBaseOptions {
  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat
  /**
   * @example
   * ```
   * // Shorthand for `emit: 'stdout'`
   * log: ['query', 'info', 'warn', 'error']
   * 
   * // Emit as events only
   * log: [
   *   { emit: 'event', level: 'query' },
   *   { emit: 'event', level: 'info' },
   *   { emit: 'event', level: 'warn' }
   *   { emit: 'event', level: 'error' }
   * ]
   * 
   * / Emit as events and log to stdout
   * og: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * 
   * ```
   * Read more in our [docs](https://pris.ly/d/logging).
   */
  log?: (LogLevel | LogDefinition)[]
  /**
   * The default values for transactionOptions
   * maxWait ?= 2000
   * timeout ?= 5000
   */
  transactionOptions?: {
    maxWait?: number
    timeout?: number
    isolationLevel?: TransactionIsolationLevel
  }
  /**
   * Global configuration for omitting model fields by default.
   * 
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   omit: {
   *     user: {
   *       password: true
   *     }
   *   }
   * })
   * ```
   */
  omit?: GlobalOmitConfig
  /**
   * SQL commenter plugins that add metadata to SQL queries as comments.
   * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
   * 
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter,
   *   comments: [
   *     traceContext(),
   *     queryInsights(),
   *   ],
   * })
   * ```
   */
  comments?: runtime.SqlCommenterPlugin[]
  /**
   * Optional maximum size for the query plan cache. If not provided, a default size will be used.
   * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
   * performance for applications that execute a large number of unique queries, while a smaller
   * cache size can reduce memory usage.
   * 
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter,
   *   queryPlanCacheMaxSize: 100,
   * })
   * ```
   */
  queryPlanCacheMaxSize?: number
}

/**
 * `PrismaClient` options for connecting to your database through Prisma Accelerate instead of a driver adapter.
 * 
 * Learn more: https://pris.ly/d/accelerate
 */
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
  /**
   * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
   * 
   * Learn more: https://pris.ly/d/accelerate
   */
  accelerateUrl: string
  adapter?: never
}

/**
 * `PrismaClient` options for connecting to your database through a driver adapter. This is the common case in Prisma 7.
 * 
 * Learn more: https://pris.ly/d/driver-adapters
 */
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
  /**
   * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
   * 
   * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
   * 
   * Learn more: https://pris.ly/d/driver-adapters
   * 
   * @example
   * ```ts
   * import { PrismaPg } from '@prisma/adapter-pg'
   * import { PrismaClient } from './generated/prisma/client'
   * 
   * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * const prisma = new PrismaClient({ adapter })
   * ```
   */
  adapter: runtime.SqlDriverAdapterFactory
  accelerateUrl?: never
}

/**
 * Options passed to the `PrismaClient` constructor.
 * 
 * A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**. See {@link PrismaClientOptionsWithAdapter} and {@link PrismaClientOptionsWithAccelerateUrl} for the two variants. All other properties live in {@link PrismaClientBaseOptions} and are optional.
 * 
 * Learn more about driver adapters: https://pris.ly/d/driver-adapters
 */
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter
export type GlobalOmitConfig = {
  carrito_items?: Prisma.carrito_itemsOmit
  carritos?: Prisma.carritosOmit
  categorias?: Prisma.categoriasOmit
  medicamentos?: Prisma.medicamentosOmit
  mensajes_contacto?: Prisma.mensajes_contactoOmit
  pedido_items?: Prisma.pedido_itemsOmit
  pedidos?: Prisma.pedidosOmit
  receta_detalles?: Prisma.receta_detallesOmit
  recetas?: Prisma.recetasOmit
  roles?: Prisma.rolesOmit
  usuarios?: Prisma.usuariosOmit
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

export type GetLogType<T> = CheckIsLogLevel<
  T extends LogDefinition ? T['level'] : T
>;

export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
  ? GetLogType<T[number]>
  : never;

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}
/* End Types for Logging */


export type PrismaAction =
  | 'findUnique'
  | 'findUniqueOrThrow'
  | 'findMany'
  | 'findFirst'
  | 'findFirstOrThrow'
  | 'create'
  | 'createMany'
  | 'createManyAndReturn'
  | 'update'
  | 'updateMany'
  | 'updateManyAndReturn'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'
  | 'count'
  | 'runCommandRaw'
  | 'findRaw'
  | 'groupBy'

/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>

