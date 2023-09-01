
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model brands
 * 
 */
export type brands = $Result.DefaultSelection<Prisma.$brandsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Movies
 * 
 */
export type Movies = $Result.DefaultSelection<Prisma.$MoviesPayload>
/**
 * Model Series
 * 
 */
export type Series = $Result.DefaultSelection<Prisma.$SeriesPayload>
/**
 * Model Popcorn
 * 
 */
export type Popcorn = $Result.DefaultSelection<Prisma.$PopcornPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RecipeType: {
  SWEET: 'SWEET',
  SALTY: 'SALTY',
  SOUR: 'SOUR',
  BITTER: 'BITTER'
};

export type RecipeType = (typeof RecipeType)[keyof typeof RecipeType]

}

export type RecipeType = $Enums.RecipeType

export const RecipeType: typeof $Enums.RecipeType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brands
 * const brands = await prisma.brands.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Brands
   * const brands = await prisma.brands.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.brands`: Exposes CRUD operations for the **brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.brandsDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.movies`: Exposes CRUD operations for the **Movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.MoviesDelegate<ExtArgs>;

  /**
   * `prisma.series`: Exposes CRUD operations for the **Series** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.series.findMany()
    * ```
    */
  get series(): Prisma.SeriesDelegate<ExtArgs>;

  /**
   * `prisma.popcorn`: Exposes CRUD operations for the **Popcorn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Popcorns
    * const popcorns = await prisma.popcorn.findMany()
    * ```
    */
  get popcorn(): Prisma.PopcornDelegate<ExtArgs>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
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

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
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
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
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
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    brands: 'brands',
    User: 'User',
    Movies: 'Movies',
    Series: 'Series',
    Popcorn: 'Popcorn',
    Genre: 'Genre'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'brands' | 'user' | 'movies' | 'series' | 'popcorn' | 'genre'
      txIsolationLevel: never
    },
    model: {
      brands: {
        payload: Prisma.$brandsPayload<ExtArgs>
        fields: Prisma.brandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.brandsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$brandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.brandsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          findFirst: {
            args: Prisma.brandsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$brandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.brandsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          findMany: {
            args: Prisma.brandsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>[]
          }
          create: {
            args: Prisma.brandsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          createMany: {
            args: Prisma.brandsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.brandsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          update: {
            args: Prisma.brandsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          deleteMany: {
            args: Prisma.brandsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.brandsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.brandsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrands>
          }
          groupBy: {
            args: Prisma.brandsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.brandsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.brandsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.brandsCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Movies: {
        payload: Prisma.$MoviesPayload<ExtArgs>
        fields: Prisma.MoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoviesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoviesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findFirst: {
            args: Prisma.MoviesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoviesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findMany: {
            args: Prisma.MoviesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          create: {
            args: Prisma.MoviesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          createMany: {
            args: Prisma.MoviesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MoviesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          update: {
            args: Prisma.MoviesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          deleteMany: {
            args: Prisma.MoviesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MoviesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MoviesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.MoviesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MoviesFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MoviesAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MoviesCountArgs<ExtArgs>,
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
      Series: {
        payload: Prisma.$SeriesPayload<ExtArgs>
        fields: Prisma.SeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findFirst: {
            args: Prisma.SeriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findMany: {
            args: Prisma.SeriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          create: {
            args: Prisma.SeriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          createMany: {
            args: Prisma.SeriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SeriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          update: {
            args: Prisma.SeriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          deleteMany: {
            args: Prisma.SeriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SeriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          aggregate: {
            args: Prisma.SeriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSeries>
          }
          groupBy: {
            args: Prisma.SeriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SeriesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SeriesFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SeriesAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SeriesCountArgs<ExtArgs>,
            result: $Utils.Optional<SeriesCountAggregateOutputType> | number
          }
        }
      }
      Popcorn: {
        payload: Prisma.$PopcornPayload<ExtArgs>
        fields: Prisma.PopcornFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PopcornFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PopcornPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PopcornFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PopcornPayload>
          }
          findFirst: {
            args: Prisma.PopcornFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PopcornPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PopcornFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PopcornPayload>
          }
          findMany: {
            args: Prisma.PopcornFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PopcornPayload>[]
          }
          create: {
            args: Prisma.PopcornCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PopcornPayload>
          }
          createMany: {
            args: Prisma.PopcornCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PopcornDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PopcornPayload>
          }
          update: {
            args: Prisma.PopcornUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PopcornPayload>
          }
          deleteMany: {
            args: Prisma.PopcornDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PopcornUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PopcornUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PopcornPayload>
          }
          aggregate: {
            args: Prisma.PopcornAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePopcorn>
          }
          groupBy: {
            args: Prisma.PopcornGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PopcornGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PopcornFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PopcornAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PopcornCountArgs<ExtArgs>,
            result: $Utils.Optional<PopcornCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GenreFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.GenreAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>,
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    movies: number
    series: number
    Popcorn: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    movies?: boolean | UserCountOutputTypeCountMoviesArgs
    series?: boolean | UserCountOutputTypeCountSeriesArgs
    Popcorn?: boolean | UserCountOutputTypeCountPopcornArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPopcornArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PopcornWhereInput
  }



  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    Movies: number
    Series: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Movies?: boolean | GenreCountOutputTypeCountMoviesArgs
    Series?: boolean | GenreCountOutputTypeCountSeriesArgs
  }

  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountSeriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsMinAggregateOutputType = {
    id: string | null
    img: string | null
    href: string | null
  }

  export type BrandsMaxAggregateOutputType = {
    id: string | null
    img: string | null
    href: string | null
  }

  export type BrandsCountAggregateOutputType = {
    id: number
    img: number
    href: number
    _all: number
  }


  export type BrandsMinAggregateInputType = {
    id?: true
    img?: true
    href?: true
  }

  export type BrandsMaxAggregateInputType = {
    id?: true
    img?: true
    href?: true
  }

  export type BrandsCountAggregateInputType = {
    id?: true
    img?: true
    href?: true
    _all?: true
  }

  export type BrandsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which brands to aggregate.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type brandsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: brandsWhereInput
    orderBy?: brandsOrderByWithAggregationInput | brandsOrderByWithAggregationInput[]
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum
    having?: brandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsCountAggregateInputType | true
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }

  export type BrandsGroupByOutputType = {
    id: string
    img: string
    href: string
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends brandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type brandsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img?: boolean
    href?: boolean
  }, ExtArgs["result"]["brands"]>

  export type brandsSelectScalar = {
    id?: boolean
    img?: boolean
    href?: boolean
  }


  export type $brandsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "brands"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      img: string
      href: string
    }, ExtArgs["result"]["brands"]>
    composites: {}
  }


  type brandsGetPayload<S extends boolean | null | undefined | brandsDefaultArgs> = $Result.GetResult<Prisma.$brandsPayload, S>

  type brandsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<brandsFindManyArgs, 'select' | 'include'> & {
      select?: BrandsCountAggregateInputType | true
    }

  export interface brandsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['brands'], meta: { name: 'brands' } }
    /**
     * Find zero or one Brands that matches the filter.
     * @param {brandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends brandsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, brandsFindUniqueArgs<ExtArgs>>
    ): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Brands that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {brandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends brandsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, brandsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends brandsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, brandsFindFirstArgs<ExtArgs>>
    ): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends brandsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, brandsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends brandsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, brandsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Brands.
     * @param {brandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
    **/
    create<T extends brandsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, brandsCreateArgs<ExtArgs>>
    ): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Brands.
     *     @param {brandsCreateManyArgs} args - Arguments to create many Brands.
     *     @example
     *     // Create many Brands
     *     const brands = await prisma.brands.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends brandsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, brandsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brands.
     * @param {brandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
    **/
    delete<T extends brandsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, brandsDeleteArgs<ExtArgs>>
    ): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Brands.
     * @param {brandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends brandsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, brandsUpdateArgs<ExtArgs>>
    ): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Brands.
     * @param {brandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends brandsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, brandsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends brandsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, brandsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brands.
     * @param {brandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
    **/
    upsert<T extends brandsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, brandsUpsertArgs<ExtArgs>>
    ): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * @param {brandsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const brands = await prisma.brands.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: brandsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Brands.
     * @param {brandsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const brands = await prisma.brands.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: brandsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends brandsCountArgs>(
      args?: Subset<T, brandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsGroupByArgs} args - Group by arguments.
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
      T extends brandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: brandsGroupByArgs['orderBy'] }
        : { orderBy?: brandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, brandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the brands model
   */
  readonly fields: brandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__brandsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the brands model
   */ 
  interface brandsFieldRefs {
    readonly id: FieldRef<"brands", 'String'>
    readonly img: FieldRef<"brands", 'String'>
    readonly href: FieldRef<"brands", 'String'>
  }
    

  // Custom InputTypes

  /**
   * brands findUnique
   */
  export type brandsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where: brandsWhereUniqueInput
  }


  /**
   * brands findUniqueOrThrow
   */
  export type brandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where: brandsWhereUniqueInput
  }


  /**
   * brands findFirst
   */
  export type brandsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }


  /**
   * brands findFirstOrThrow
   */
  export type brandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }


  /**
   * brands findMany
   */
  export type brandsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }


  /**
   * brands create
   */
  export type brandsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * The data needed to create a brands.
     */
    data: XOR<brandsCreateInput, brandsUncheckedCreateInput>
  }


  /**
   * brands createMany
   */
  export type brandsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many brands.
     */
    data: brandsCreateManyInput | brandsCreateManyInput[]
  }


  /**
   * brands update
   */
  export type brandsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * The data needed to update a brands.
     */
    data: XOR<brandsUpdateInput, brandsUncheckedUpdateInput>
    /**
     * Choose, which brands to update.
     */
    where: brandsWhereUniqueInput
  }


  /**
   * brands updateMany
   */
  export type brandsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update brands.
     */
    data: XOR<brandsUpdateManyMutationInput, brandsUncheckedUpdateManyInput>
    /**
     * Filter which brands to update
     */
    where?: brandsWhereInput
  }


  /**
   * brands upsert
   */
  export type brandsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * The filter to search for the brands to update in case it exists.
     */
    where: brandsWhereUniqueInput
    /**
     * In case the brands found by the `where` argument doesn't exist, create a new brands with this data.
     */
    create: XOR<brandsCreateInput, brandsUncheckedCreateInput>
    /**
     * In case the brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<brandsUpdateInput, brandsUncheckedUpdateInput>
  }


  /**
   * brands delete
   */
  export type brandsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Filter which brands to delete.
     */
    where: brandsWhereUniqueInput
  }


  /**
   * brands deleteMany
   */
  export type brandsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which brands to delete
     */
    where?: brandsWhereInput
  }


  /**
   * brands findRaw
   */
  export type brandsFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * brands aggregateRaw
   */
  export type brandsAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * brands without action
   */
  export type brandsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nickname: string | null
    email: string | null
    name: string | null
    picture: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nickname: string | null
    email: string | null
    name: string | null
    picture: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nickname: number
    email: number
    name: number
    picture: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    name?: true
    picture?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    name?: true
    picture?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    name?: true
    picture?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nickname: string
    email: string
    name: string
    picture: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    movies?: boolean | User$moviesArgs<ExtArgs>
    series?: boolean | User$seriesArgs<ExtArgs>
    Popcorn?: boolean | User$PopcornArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nickname?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    movies?: boolean | User$moviesArgs<ExtArgs>
    series?: boolean | User$seriesArgs<ExtArgs>
    Popcorn?: boolean | User$PopcornArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs>[]
      series: Prisma.$SeriesPayload<ExtArgs>[]
      Popcorn: Prisma.$PopcornPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      nickname: string
      email: string
      name: string
      picture: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movies<T extends User$moviesArgs<ExtArgs> = {}>(args?: Subset<T, User$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findMany'> | Null>;

    series<T extends User$seriesArgs<ExtArgs> = {}>(args?: Subset<T, User$seriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findMany'> | Null>;

    Popcorn<T extends User$PopcornArgs<ExtArgs> = {}>(args?: Subset<T, User$PopcornArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.movies
   */
  export type User$moviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    cursor?: MoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * User.series
   */
  export type User$seriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    cursor?: SeriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }


  /**
   * User.Popcorn
   */
  export type User$PopcornArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    where?: PopcornWhereInput
    orderBy?: PopcornOrderByWithRelationInput | PopcornOrderByWithRelationInput[]
    cursor?: PopcornWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PopcornScalarFieldEnum | PopcornScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    score: number | null
  }

  export type MoviesSumAggregateOutputType = {
    score: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: string | null
    name: string | null
    poster_image: string | null
    poster_image_id: string | null
    score: number | null
    critique: string | null
    userId: string | null
    genreId: string | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    poster_image: string | null
    poster_image_id: string | null
    score: number | null
    critique: string | null
    userId: string | null
    genreId: string | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    name: number
    poster_image: number
    poster_image_id: number
    score: number
    critique: number
    userId: number
    genreId: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    score?: true
  }

  export type MoviesSumAggregateInputType = {
    score?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    name?: true
    poster_image?: true
    poster_image_id?: true
    score?: true
    critique?: true
    userId?: true
    genreId?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    name?: true
    poster_image?: true
    poster_image_id?: true
    score?: true
    critique?: true
    userId?: true
    genreId?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    name?: true
    poster_image?: true
    poster_image_id?: true
    score?: true
    critique?: true
    userId?: true
    genreId?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to aggregate.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type MoviesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithAggregationInput | MoviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: MoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
    genreId: string
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends MoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type MoviesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    poster_image?: boolean
    poster_image_id?: boolean
    score?: boolean
    critique?: boolean
    userId?: boolean
    genreId?: boolean
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectScalar = {
    id?: boolean
    name?: boolean
    poster_image?: boolean
    poster_image_id?: boolean
    score?: boolean
    critique?: boolean
    userId?: boolean
    genreId?: boolean
  }

  export type MoviesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MoviesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Movies"
    objects: {
      genre: Prisma.$GenrePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      poster_image: string
      poster_image_id: string
      score: number
      critique: string
      userId: string
      genreId: string
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }


  type MoviesGetPayload<S extends boolean | null | undefined | MoviesDefaultArgs> = $Result.GetResult<Prisma.$MoviesPayload, S>

  type MoviesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MoviesFindManyArgs, 'select' | 'include'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface MoviesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movies'], meta: { name: 'Movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {MoviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MoviesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesFindUniqueArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Movies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MoviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MoviesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MoviesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindFirstArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MoviesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MoviesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Movies.
     * @param {MoviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
    **/
    create<T extends MoviesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesCreateArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Movies.
     *     @param {MoviesCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movies = await prisma.movies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MoviesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movies.
     * @param {MoviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
    **/
    delete<T extends MoviesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesDeleteArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Movies.
     * @param {MoviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MoviesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpdateArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {MoviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MoviesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MoviesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movies.
     * @param {MoviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
    **/
    upsert<T extends MoviesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpsertArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * @param {MoviesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movies = await prisma.movies.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MoviesFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Movies.
     * @param {MoviesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movies = await prisma.movies.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MoviesAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MoviesCountArgs>(
      args?: Subset<T, MoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesGroupByArgs} args - Group by arguments.
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
      T extends MoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviesGroupByArgs['orderBy'] }
        : { orderBy?: MoviesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movies model
   */
  readonly fields: MoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Movies model
   */ 
  interface MoviesFieldRefs {
    readonly id: FieldRef<"Movies", 'String'>
    readonly name: FieldRef<"Movies", 'String'>
    readonly poster_image: FieldRef<"Movies", 'String'>
    readonly poster_image_id: FieldRef<"Movies", 'String'>
    readonly score: FieldRef<"Movies", 'Int'>
    readonly critique: FieldRef<"Movies", 'String'>
    readonly userId: FieldRef<"Movies", 'String'>
    readonly genreId: FieldRef<"Movies", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Movies findUnique
   */
  export type MoviesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }


  /**
   * Movies findUniqueOrThrow
   */
  export type MoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }


  /**
   * Movies findFirst
   */
  export type MoviesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * Movies findFirstOrThrow
   */
  export type MoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * Movies findMany
   */
  export type MoviesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * Movies create
   */
  export type MoviesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a Movies.
     */
    data: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
  }


  /**
   * Movies createMany
   */
  export type MoviesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
  }


  /**
   * Movies update
   */
  export type MoviesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a Movies.
     */
    data: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
    /**
     * Choose, which Movies to update.
     */
    where: MoviesWhereUniqueInput
  }


  /**
   * Movies updateMany
   */
  export type MoviesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
  }


  /**
   * Movies upsert
   */
  export type MoviesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the Movies to update in case it exists.
     */
    where: MoviesWhereUniqueInput
    /**
     * In case the Movies found by the `where` argument doesn't exist, create a new Movies with this data.
     */
    create: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
    /**
     * In case the Movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
  }


  /**
   * Movies delete
   */
  export type MoviesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter which Movies to delete.
     */
    where: MoviesWhereUniqueInput
  }


  /**
   * Movies deleteMany
   */
  export type MoviesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MoviesWhereInput
  }


  /**
   * Movies findRaw
   */
  export type MoviesFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Movies aggregateRaw
   */
  export type MoviesAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Movies without action
   */
  export type MoviesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
  }



  /**
   * Model Series
   */

  export type AggregateSeries = {
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  export type SeriesAvgAggregateOutputType = {
    score: number | null
  }

  export type SeriesSumAggregateOutputType = {
    score: number | null
  }

  export type SeriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    poster_image: string | null
    poster_image_id: string | null
    score: number | null
    critique: string | null
    userId: string | null
    genreId: string | null
  }

  export type SeriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    poster_image: string | null
    poster_image_id: string | null
    score: number | null
    critique: string | null
    userId: string | null
    genreId: string | null
  }

  export type SeriesCountAggregateOutputType = {
    id: number
    name: number
    poster_image: number
    poster_image_id: number
    score: number
    critique: number
    userId: number
    genreId: number
    _all: number
  }


  export type SeriesAvgAggregateInputType = {
    score?: true
  }

  export type SeriesSumAggregateInputType = {
    score?: true
  }

  export type SeriesMinAggregateInputType = {
    id?: true
    name?: true
    poster_image?: true
    poster_image_id?: true
    score?: true
    critique?: true
    userId?: true
    genreId?: true
  }

  export type SeriesMaxAggregateInputType = {
    id?: true
    name?: true
    poster_image?: true
    poster_image_id?: true
    score?: true
    critique?: true
    userId?: true
    genreId?: true
  }

  export type SeriesCountAggregateInputType = {
    id?: true
    name?: true
    poster_image?: true
    poster_image_id?: true
    score?: true
    critique?: true
    userId?: true
    genreId?: true
    _all?: true
  }

  export type SeriesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to aggregate.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesMaxAggregateInputType
  }

  export type GetSeriesAggregateType<T extends SeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeries[P]>
      : GetScalarType<T[P], AggregateSeries[P]>
  }




  export type SeriesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithAggregationInput | SeriesOrderByWithAggregationInput[]
    by: SeriesScalarFieldEnum[] | SeriesScalarFieldEnum
    having?: SeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCountAggregateInputType | true
    _avg?: SeriesAvgAggregateInputType
    _sum?: SeriesSumAggregateInputType
    _min?: SeriesMinAggregateInputType
    _max?: SeriesMaxAggregateInputType
  }

  export type SeriesGroupByOutputType = {
    id: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
    genreId: string
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  type GetSeriesGroupByPayload<T extends SeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesGroupByOutputType[P]>
        }
      >
    >


  export type SeriesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    poster_image?: boolean
    poster_image_id?: boolean
    score?: boolean
    critique?: boolean
    userId?: boolean
    genreId?: boolean
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectScalar = {
    id?: boolean
    name?: boolean
    poster_image?: boolean
    poster_image_id?: boolean
    score?: boolean
    critique?: boolean
    userId?: boolean
    genreId?: boolean
  }

  export type SeriesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SeriesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Series"
    objects: {
      genre: Prisma.$GenrePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      poster_image: string
      poster_image_id: string
      score: number
      critique: string
      userId: string
      genreId: string
    }, ExtArgs["result"]["series"]>
    composites: {}
  }


  type SeriesGetPayload<S extends boolean | null | undefined | SeriesDefaultArgs> = $Result.GetResult<Prisma.$SeriesPayload, S>

  type SeriesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SeriesFindManyArgs, 'select' | 'include'> & {
      select?: SeriesCountAggregateInputType | true
    }

  export interface SeriesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Series'], meta: { name: 'Series' } }
    /**
     * Find zero or one Series that matches the filter.
     * @param {SeriesFindUniqueArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesFindUniqueArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Series that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SeriesFindUniqueOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesFindFirstArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Series that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.series.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.series.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesWithIdOnly = await prisma.series.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SeriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Series.
     * @param {SeriesCreateArgs} args - Arguments to create a Series.
     * @example
     * // Create one Series
     * const Series = await prisma.series.create({
     *   data: {
     *     // ... data to create a Series
     *   }
     * })
     * 
    **/
    create<T extends SeriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesCreateArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Series.
     *     @param {SeriesCreateManyArgs} args - Arguments to create many Series.
     *     @example
     *     // Create many Series
     *     const series = await prisma.series.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SeriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Series.
     * @param {SeriesDeleteArgs} args - Arguments to delete one Series.
     * @example
     * // Delete one Series
     * const Series = await prisma.series.delete({
     *   where: {
     *     // ... filter to delete one Series
     *   }
     * })
     * 
    **/
    delete<T extends SeriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesDeleteArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Series.
     * @param {SeriesUpdateArgs} args - Arguments to update one Series.
     * @example
     * // Update one Series
     * const series = await prisma.series.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesUpdateArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Series.
     * @param {SeriesDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.series.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SeriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Series.
     * @param {SeriesUpsertArgs} args - Arguments to update or create a Series.
     * @example
     * // Update or create a Series
     * const series = await prisma.series.upsert({
     *   create: {
     *     // ... data to create a Series
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Series we want to update
     *   }
     * })
    **/
    upsert<T extends SeriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SeriesUpsertArgs<ExtArgs>>
    ): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Series that matches the filter.
     * @param {SeriesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const series = await prisma.series.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SeriesFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Series.
     * @param {SeriesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const series = await prisma.series.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SeriesAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.series.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SeriesCountArgs>(
      args?: Subset<T, SeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeriesAggregateArgs>(args: Subset<T, SeriesAggregateArgs>): Prisma.PrismaPromise<GetSeriesAggregateType<T>>

    /**
     * Group by Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGroupByArgs} args - Group by arguments.
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
      T extends SeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesGroupByArgs['orderBy'] }
        : { orderBy?: SeriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Series model
   */
  readonly fields: SeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Series.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Series model
   */ 
  interface SeriesFieldRefs {
    readonly id: FieldRef<"Series", 'String'>
    readonly name: FieldRef<"Series", 'String'>
    readonly poster_image: FieldRef<"Series", 'String'>
    readonly poster_image_id: FieldRef<"Series", 'String'>
    readonly score: FieldRef<"Series", 'Int'>
    readonly critique: FieldRef<"Series", 'String'>
    readonly userId: FieldRef<"Series", 'String'>
    readonly genreId: FieldRef<"Series", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Series findUnique
   */
  export type SeriesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }


  /**
   * Series findUniqueOrThrow
   */
  export type SeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }


  /**
   * Series findFirst
   */
  export type SeriesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }


  /**
   * Series findFirstOrThrow
   */
  export type SeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }


  /**
   * Series findMany
   */
  export type SeriesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }


  /**
   * Series create
   */
  export type SeriesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Series.
     */
    data: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
  }


  /**
   * Series createMany
   */
  export type SeriesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
  }


  /**
   * Series update
   */
  export type SeriesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Series.
     */
    data: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
    /**
     * Choose, which Series to update.
     */
    where: SeriesWhereUniqueInput
  }


  /**
   * Series updateMany
   */
  export type SeriesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
  }


  /**
   * Series upsert
   */
  export type SeriesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Series to update in case it exists.
     */
    where: SeriesWhereUniqueInput
    /**
     * In case the Series found by the `where` argument doesn't exist, create a new Series with this data.
     */
    create: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
    /**
     * In case the Series was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
  }


  /**
   * Series delete
   */
  export type SeriesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter which Series to delete.
     */
    where: SeriesWhereUniqueInput
  }


  /**
   * Series deleteMany
   */
  export type SeriesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SeriesWhereInput
  }


  /**
   * Series findRaw
   */
  export type SeriesFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Series aggregateRaw
   */
  export type SeriesAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Series without action
   */
  export type SeriesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
  }



  /**
   * Model Popcorn
   */

  export type AggregatePopcorn = {
    _count: PopcornCountAggregateOutputType | null
    _min: PopcornMinAggregateOutputType | null
    _max: PopcornMaxAggregateOutputType | null
  }

  export type PopcornMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    image_id: string | null
    type: $Enums.RecipeType | null
    link: string | null
    userId: string | null
  }

  export type PopcornMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    image_id: string | null
    type: $Enums.RecipeType | null
    link: string | null
    userId: string | null
  }

  export type PopcornCountAggregateOutputType = {
    id: number
    name: number
    image: number
    image_id: number
    type: number
    link: number
    userId: number
    _all: number
  }


  export type PopcornMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    image_id?: true
    type?: true
    link?: true
    userId?: true
  }

  export type PopcornMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    image_id?: true
    type?: true
    link?: true
    userId?: true
  }

  export type PopcornCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    image_id?: true
    type?: true
    link?: true
    userId?: true
    _all?: true
  }

  export type PopcornAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Popcorn to aggregate.
     */
    where?: PopcornWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Popcorns to fetch.
     */
    orderBy?: PopcornOrderByWithRelationInput | PopcornOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PopcornWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Popcorns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Popcorns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Popcorns
    **/
    _count?: true | PopcornCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PopcornMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PopcornMaxAggregateInputType
  }

  export type GetPopcornAggregateType<T extends PopcornAggregateArgs> = {
        [P in keyof T & keyof AggregatePopcorn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePopcorn[P]>
      : GetScalarType<T[P], AggregatePopcorn[P]>
  }




  export type PopcornGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PopcornWhereInput
    orderBy?: PopcornOrderByWithAggregationInput | PopcornOrderByWithAggregationInput[]
    by: PopcornScalarFieldEnum[] | PopcornScalarFieldEnum
    having?: PopcornScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PopcornCountAggregateInputType | true
    _min?: PopcornMinAggregateInputType
    _max?: PopcornMaxAggregateInputType
  }

  export type PopcornGroupByOutputType = {
    id: string
    name: string
    image: string
    image_id: string
    type: $Enums.RecipeType
    link: string
    userId: string
    _count: PopcornCountAggregateOutputType | null
    _min: PopcornMinAggregateOutputType | null
    _max: PopcornMaxAggregateOutputType | null
  }

  type GetPopcornGroupByPayload<T extends PopcornGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PopcornGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PopcornGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PopcornGroupByOutputType[P]>
            : GetScalarType<T[P], PopcornGroupByOutputType[P]>
        }
      >
    >


  export type PopcornSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    image_id?: boolean
    type?: boolean
    link?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["popcorn"]>

  export type PopcornSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    image_id?: boolean
    type?: boolean
    link?: boolean
    userId?: boolean
  }

  export type PopcornInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PopcornPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Popcorn"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      image: string
      image_id: string
      type: $Enums.RecipeType
      link: string
      userId: string
    }, ExtArgs["result"]["popcorn"]>
    composites: {}
  }


  type PopcornGetPayload<S extends boolean | null | undefined | PopcornDefaultArgs> = $Result.GetResult<Prisma.$PopcornPayload, S>

  type PopcornCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PopcornFindManyArgs, 'select' | 'include'> & {
      select?: PopcornCountAggregateInputType | true
    }

  export interface PopcornDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Popcorn'], meta: { name: 'Popcorn' } }
    /**
     * Find zero or one Popcorn that matches the filter.
     * @param {PopcornFindUniqueArgs} args - Arguments to find a Popcorn
     * @example
     * // Get one Popcorn
     * const popcorn = await prisma.popcorn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PopcornFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PopcornFindUniqueArgs<ExtArgs>>
    ): Prisma__PopcornClient<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Popcorn that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PopcornFindUniqueOrThrowArgs} args - Arguments to find a Popcorn
     * @example
     * // Get one Popcorn
     * const popcorn = await prisma.popcorn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PopcornFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PopcornFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PopcornClient<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Popcorn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PopcornFindFirstArgs} args - Arguments to find a Popcorn
     * @example
     * // Get one Popcorn
     * const popcorn = await prisma.popcorn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PopcornFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PopcornFindFirstArgs<ExtArgs>>
    ): Prisma__PopcornClient<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Popcorn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PopcornFindFirstOrThrowArgs} args - Arguments to find a Popcorn
     * @example
     * // Get one Popcorn
     * const popcorn = await prisma.popcorn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PopcornFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PopcornFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PopcornClient<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Popcorns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PopcornFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Popcorns
     * const popcorns = await prisma.popcorn.findMany()
     * 
     * // Get first 10 Popcorns
     * const popcorns = await prisma.popcorn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const popcornWithIdOnly = await prisma.popcorn.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PopcornFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PopcornFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Popcorn.
     * @param {PopcornCreateArgs} args - Arguments to create a Popcorn.
     * @example
     * // Create one Popcorn
     * const Popcorn = await prisma.popcorn.create({
     *   data: {
     *     // ... data to create a Popcorn
     *   }
     * })
     * 
    **/
    create<T extends PopcornCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PopcornCreateArgs<ExtArgs>>
    ): Prisma__PopcornClient<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Popcorns.
     *     @param {PopcornCreateManyArgs} args - Arguments to create many Popcorns.
     *     @example
     *     // Create many Popcorns
     *     const popcorn = await prisma.popcorn.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PopcornCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PopcornCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Popcorn.
     * @param {PopcornDeleteArgs} args - Arguments to delete one Popcorn.
     * @example
     * // Delete one Popcorn
     * const Popcorn = await prisma.popcorn.delete({
     *   where: {
     *     // ... filter to delete one Popcorn
     *   }
     * })
     * 
    **/
    delete<T extends PopcornDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PopcornDeleteArgs<ExtArgs>>
    ): Prisma__PopcornClient<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Popcorn.
     * @param {PopcornUpdateArgs} args - Arguments to update one Popcorn.
     * @example
     * // Update one Popcorn
     * const popcorn = await prisma.popcorn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PopcornUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PopcornUpdateArgs<ExtArgs>>
    ): Prisma__PopcornClient<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Popcorns.
     * @param {PopcornDeleteManyArgs} args - Arguments to filter Popcorns to delete.
     * @example
     * // Delete a few Popcorns
     * const { count } = await prisma.popcorn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PopcornDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PopcornDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Popcorns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PopcornUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Popcorns
     * const popcorn = await prisma.popcorn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PopcornUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PopcornUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Popcorn.
     * @param {PopcornUpsertArgs} args - Arguments to update or create a Popcorn.
     * @example
     * // Update or create a Popcorn
     * const popcorn = await prisma.popcorn.upsert({
     *   create: {
     *     // ... data to create a Popcorn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Popcorn we want to update
     *   }
     * })
    **/
    upsert<T extends PopcornUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PopcornUpsertArgs<ExtArgs>>
    ): Prisma__PopcornClient<$Result.GetResult<Prisma.$PopcornPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Popcorns that matches the filter.
     * @param {PopcornFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const popcorn = await prisma.popcorn.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PopcornFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Popcorn.
     * @param {PopcornAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const popcorn = await prisma.popcorn.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PopcornAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Popcorns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PopcornCountArgs} args - Arguments to filter Popcorns to count.
     * @example
     * // Count the number of Popcorns
     * const count = await prisma.popcorn.count({
     *   where: {
     *     // ... the filter for the Popcorns we want to count
     *   }
     * })
    **/
    count<T extends PopcornCountArgs>(
      args?: Subset<T, PopcornCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PopcornCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Popcorn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PopcornAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PopcornAggregateArgs>(args: Subset<T, PopcornAggregateArgs>): Prisma.PrismaPromise<GetPopcornAggregateType<T>>

    /**
     * Group by Popcorn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PopcornGroupByArgs} args - Group by arguments.
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
      T extends PopcornGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PopcornGroupByArgs['orderBy'] }
        : { orderBy?: PopcornGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PopcornGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPopcornGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Popcorn model
   */
  readonly fields: PopcornFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Popcorn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PopcornClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Popcorn model
   */ 
  interface PopcornFieldRefs {
    readonly id: FieldRef<"Popcorn", 'String'>
    readonly name: FieldRef<"Popcorn", 'String'>
    readonly image: FieldRef<"Popcorn", 'String'>
    readonly image_id: FieldRef<"Popcorn", 'String'>
    readonly type: FieldRef<"Popcorn", 'RecipeType'>
    readonly link: FieldRef<"Popcorn", 'String'>
    readonly userId: FieldRef<"Popcorn", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Popcorn findUnique
   */
  export type PopcornFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    /**
     * Filter, which Popcorn to fetch.
     */
    where: PopcornWhereUniqueInput
  }


  /**
   * Popcorn findUniqueOrThrow
   */
  export type PopcornFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    /**
     * Filter, which Popcorn to fetch.
     */
    where: PopcornWhereUniqueInput
  }


  /**
   * Popcorn findFirst
   */
  export type PopcornFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    /**
     * Filter, which Popcorn to fetch.
     */
    where?: PopcornWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Popcorns to fetch.
     */
    orderBy?: PopcornOrderByWithRelationInput | PopcornOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Popcorns.
     */
    cursor?: PopcornWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Popcorns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Popcorns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Popcorns.
     */
    distinct?: PopcornScalarFieldEnum | PopcornScalarFieldEnum[]
  }


  /**
   * Popcorn findFirstOrThrow
   */
  export type PopcornFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    /**
     * Filter, which Popcorn to fetch.
     */
    where?: PopcornWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Popcorns to fetch.
     */
    orderBy?: PopcornOrderByWithRelationInput | PopcornOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Popcorns.
     */
    cursor?: PopcornWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Popcorns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Popcorns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Popcorns.
     */
    distinct?: PopcornScalarFieldEnum | PopcornScalarFieldEnum[]
  }


  /**
   * Popcorn findMany
   */
  export type PopcornFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    /**
     * Filter, which Popcorns to fetch.
     */
    where?: PopcornWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Popcorns to fetch.
     */
    orderBy?: PopcornOrderByWithRelationInput | PopcornOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Popcorns.
     */
    cursor?: PopcornWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Popcorns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Popcorns.
     */
    skip?: number
    distinct?: PopcornScalarFieldEnum | PopcornScalarFieldEnum[]
  }


  /**
   * Popcorn create
   */
  export type PopcornCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    /**
     * The data needed to create a Popcorn.
     */
    data: XOR<PopcornCreateInput, PopcornUncheckedCreateInput>
  }


  /**
   * Popcorn createMany
   */
  export type PopcornCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Popcorns.
     */
    data: PopcornCreateManyInput | PopcornCreateManyInput[]
  }


  /**
   * Popcorn update
   */
  export type PopcornUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    /**
     * The data needed to update a Popcorn.
     */
    data: XOR<PopcornUpdateInput, PopcornUncheckedUpdateInput>
    /**
     * Choose, which Popcorn to update.
     */
    where: PopcornWhereUniqueInput
  }


  /**
   * Popcorn updateMany
   */
  export type PopcornUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Popcorns.
     */
    data: XOR<PopcornUpdateManyMutationInput, PopcornUncheckedUpdateManyInput>
    /**
     * Filter which Popcorns to update
     */
    where?: PopcornWhereInput
  }


  /**
   * Popcorn upsert
   */
  export type PopcornUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    /**
     * The filter to search for the Popcorn to update in case it exists.
     */
    where: PopcornWhereUniqueInput
    /**
     * In case the Popcorn found by the `where` argument doesn't exist, create a new Popcorn with this data.
     */
    create: XOR<PopcornCreateInput, PopcornUncheckedCreateInput>
    /**
     * In case the Popcorn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PopcornUpdateInput, PopcornUncheckedUpdateInput>
  }


  /**
   * Popcorn delete
   */
  export type PopcornDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
    /**
     * Filter which Popcorn to delete.
     */
    where: PopcornWhereUniqueInput
  }


  /**
   * Popcorn deleteMany
   */
  export type PopcornDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Popcorns to delete
     */
    where?: PopcornWhereInput
  }


  /**
   * Popcorn findRaw
   */
  export type PopcornFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Popcorn aggregateRaw
   */
  export type PopcornAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Popcorn without action
   */
  export type PopcornDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Popcorn
     */
    select?: PopcornSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PopcornInclude<ExtArgs> | null
  }



  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
    moviesId: string | null
    seriesId: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    moviesId: string | null
    seriesId: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    moviesId: number
    seriesId: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    moviesId?: true
    seriesId?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    moviesId?: true
    seriesId?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    moviesId?: true
    seriesId?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    moviesId: string | null
    seriesId: string | null
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    moviesId?: boolean
    seriesId?: boolean
    Movies?: boolean | Genre$MoviesArgs<ExtArgs>
    Series?: boolean | Genre$SeriesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    moviesId?: boolean
    seriesId?: boolean
  }

  export type GenreInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Movies?: boolean | Genre$MoviesArgs<ExtArgs>
    Series?: boolean | Genre$SeriesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GenrePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      Movies: Prisma.$MoviesPayload<ExtArgs>[]
      Series: Prisma.$SeriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      moviesId: string | null
      seriesId: string | null
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }


  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GenreFindManyArgs, 'select' | 'include'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreCreateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * @param {GenreFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const genre = await prisma.genre.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GenreFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Genre.
     * @param {GenreAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const genre = await prisma.genre.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GenreAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Movies<T extends Genre$MoviesArgs<ExtArgs> = {}>(args?: Subset<T, Genre$MoviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findMany'> | Null>;

    Series<T extends Genre$SeriesArgs<ExtArgs> = {}>(args?: Subset<T, Genre$SeriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly moviesId: FieldRef<"Genre", 'String'>
    readonly seriesId: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }


  /**
   * Genre findRaw
   */
  export type GenreFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genre aggregateRaw
   */
  export type GenreAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genre.Movies
   */
  export type Genre$MoviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    cursor?: MoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * Genre.Series
   */
  export type Genre$SeriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SeriesInclude<ExtArgs> | null
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    cursor?: SeriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }


  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const BrandsScalarFieldEnum: {
    id: 'id',
    img: 'img',
    href: 'href'
  };

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    email: 'email',
    name: 'name',
    picture: 'picture'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    poster_image: 'poster_image',
    poster_image_id: 'poster_image_id',
    score: 'score',
    critique: 'critique',
    userId: 'userId',
    genreId: 'genreId'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const SeriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    poster_image: 'poster_image',
    poster_image_id: 'poster_image_id',
    score: 'score',
    critique: 'critique',
    userId: 'userId',
    genreId: 'genreId'
  };

  export type SeriesScalarFieldEnum = (typeof SeriesScalarFieldEnum)[keyof typeof SeriesScalarFieldEnum]


  export const PopcornScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    image_id: 'image_id',
    type: 'type',
    link: 'link',
    userId: 'userId'
  };

  export type PopcornScalarFieldEnum = (typeof PopcornScalarFieldEnum)[keyof typeof PopcornScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    moviesId: 'moviesId',
    seriesId: 'seriesId'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'RecipeType'
   */
  export type EnumRecipeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipeType'>
    


  /**
   * Reference to a field of type 'RecipeType[]'
   */
  export type ListEnumRecipeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecipeType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type brandsWhereInput = {
    AND?: brandsWhereInput | brandsWhereInput[]
    OR?: brandsWhereInput[]
    NOT?: brandsWhereInput | brandsWhereInput[]
    id?: StringFilter<"brands"> | string
    img?: StringFilter<"brands"> | string
    href?: StringFilter<"brands"> | string
  }

  export type brandsOrderByWithRelationInput = {
    id?: SortOrder
    img?: SortOrder
    href?: SortOrder
  }

  export type brandsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: brandsWhereInput | brandsWhereInput[]
    OR?: brandsWhereInput[]
    NOT?: brandsWhereInput | brandsWhereInput[]
    img?: StringFilter<"brands"> | string
    href?: StringFilter<"brands"> | string
  }, "id">

  export type brandsOrderByWithAggregationInput = {
    id?: SortOrder
    img?: SortOrder
    href?: SortOrder
    _count?: brandsCountOrderByAggregateInput
    _max?: brandsMaxOrderByAggregateInput
    _min?: brandsMinOrderByAggregateInput
  }

  export type brandsScalarWhereWithAggregatesInput = {
    AND?: brandsScalarWhereWithAggregatesInput | brandsScalarWhereWithAggregatesInput[]
    OR?: brandsScalarWhereWithAggregatesInput[]
    NOT?: brandsScalarWhereWithAggregatesInput | brandsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"brands"> | string
    img?: StringWithAggregatesFilter<"brands"> | string
    href?: StringWithAggregatesFilter<"brands"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    picture?: StringFilter<"User"> | string
    movies?: MoviesListRelationFilter
    series?: SeriesListRelationFilter
    Popcorn?: PopcornListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    movies?: MoviesOrderByRelationAggregateInput
    series?: SeriesOrderByRelationAggregateInput
    Popcorn?: PopcornOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nickname?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    picture?: StringFilter<"User"> | string
    movies?: MoviesListRelationFilter
    series?: SeriesListRelationFilter
    Popcorn?: PopcornListRelationFilter
  }, "id" | "nickname" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    picture?: StringWithAggregatesFilter<"User"> | string
  }

  export type MoviesWhereInput = {
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    id?: StringFilter<"Movies"> | string
    name?: StringFilter<"Movies"> | string
    poster_image?: StringFilter<"Movies"> | string
    poster_image_id?: StringFilter<"Movies"> | string
    score?: IntFilter<"Movies"> | number
    critique?: StringFilter<"Movies"> | string
    userId?: StringFilter<"Movies"> | string
    genreId?: StringFilter<"Movies"> | string
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MoviesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
    genre?: GenreOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type MoviesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    name?: StringFilter<"Movies"> | string
    poster_image?: StringFilter<"Movies"> | string
    poster_image_id?: StringFilter<"Movies"> | string
    score?: IntFilter<"Movies"> | number
    critique?: StringFilter<"Movies"> | string
    userId?: StringFilter<"Movies"> | string
    genreId?: StringFilter<"Movies"> | string
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MoviesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
    _count?: MoviesCountOrderByAggregateInput
    _avg?: MoviesAvgOrderByAggregateInput
    _max?: MoviesMaxOrderByAggregateInput
    _min?: MoviesMinOrderByAggregateInput
    _sum?: MoviesSumOrderByAggregateInput
  }

  export type MoviesScalarWhereWithAggregatesInput = {
    AND?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    OR?: MoviesScalarWhereWithAggregatesInput[]
    NOT?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movies"> | string
    name?: StringWithAggregatesFilter<"Movies"> | string
    poster_image?: StringWithAggregatesFilter<"Movies"> | string
    poster_image_id?: StringWithAggregatesFilter<"Movies"> | string
    score?: IntWithAggregatesFilter<"Movies"> | number
    critique?: StringWithAggregatesFilter<"Movies"> | string
    userId?: StringWithAggregatesFilter<"Movies"> | string
    genreId?: StringWithAggregatesFilter<"Movies"> | string
  }

  export type SeriesWhereInput = {
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    id?: StringFilter<"Series"> | string
    name?: StringFilter<"Series"> | string
    poster_image?: StringFilter<"Series"> | string
    poster_image_id?: StringFilter<"Series"> | string
    score?: IntFilter<"Series"> | number
    critique?: StringFilter<"Series"> | string
    userId?: StringFilter<"Series"> | string
    genreId?: StringFilter<"Series"> | string
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SeriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
    genre?: GenreOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type SeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    name?: StringFilter<"Series"> | string
    poster_image?: StringFilter<"Series"> | string
    poster_image_id?: StringFilter<"Series"> | string
    score?: IntFilter<"Series"> | number
    critique?: StringFilter<"Series"> | string
    userId?: StringFilter<"Series"> | string
    genreId?: StringFilter<"Series"> | string
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SeriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
    _count?: SeriesCountOrderByAggregateInput
    _avg?: SeriesAvgOrderByAggregateInput
    _max?: SeriesMaxOrderByAggregateInput
    _min?: SeriesMinOrderByAggregateInput
    _sum?: SeriesSumOrderByAggregateInput
  }

  export type SeriesScalarWhereWithAggregatesInput = {
    AND?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    OR?: SeriesScalarWhereWithAggregatesInput[]
    NOT?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Series"> | string
    name?: StringWithAggregatesFilter<"Series"> | string
    poster_image?: StringWithAggregatesFilter<"Series"> | string
    poster_image_id?: StringWithAggregatesFilter<"Series"> | string
    score?: IntWithAggregatesFilter<"Series"> | number
    critique?: StringWithAggregatesFilter<"Series"> | string
    userId?: StringWithAggregatesFilter<"Series"> | string
    genreId?: StringWithAggregatesFilter<"Series"> | string
  }

  export type PopcornWhereInput = {
    AND?: PopcornWhereInput | PopcornWhereInput[]
    OR?: PopcornWhereInput[]
    NOT?: PopcornWhereInput | PopcornWhereInput[]
    id?: StringFilter<"Popcorn"> | string
    name?: StringFilter<"Popcorn"> | string
    image?: StringFilter<"Popcorn"> | string
    image_id?: StringFilter<"Popcorn"> | string
    type?: EnumRecipeTypeFilter<"Popcorn"> | $Enums.RecipeType
    link?: StringFilter<"Popcorn"> | string
    userId?: StringFilter<"Popcorn"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PopcornOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    image_id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PopcornWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PopcornWhereInput | PopcornWhereInput[]
    OR?: PopcornWhereInput[]
    NOT?: PopcornWhereInput | PopcornWhereInput[]
    name?: StringFilter<"Popcorn"> | string
    image?: StringFilter<"Popcorn"> | string
    image_id?: StringFilter<"Popcorn"> | string
    type?: EnumRecipeTypeFilter<"Popcorn"> | $Enums.RecipeType
    link?: StringFilter<"Popcorn"> | string
    userId?: StringFilter<"Popcorn"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PopcornOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    image_id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    _count?: PopcornCountOrderByAggregateInput
    _max?: PopcornMaxOrderByAggregateInput
    _min?: PopcornMinOrderByAggregateInput
  }

  export type PopcornScalarWhereWithAggregatesInput = {
    AND?: PopcornScalarWhereWithAggregatesInput | PopcornScalarWhereWithAggregatesInput[]
    OR?: PopcornScalarWhereWithAggregatesInput[]
    NOT?: PopcornScalarWhereWithAggregatesInput | PopcornScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Popcorn"> | string
    name?: StringWithAggregatesFilter<"Popcorn"> | string
    image?: StringWithAggregatesFilter<"Popcorn"> | string
    image_id?: StringWithAggregatesFilter<"Popcorn"> | string
    type?: EnumRecipeTypeWithAggregatesFilter<"Popcorn"> | $Enums.RecipeType
    link?: StringWithAggregatesFilter<"Popcorn"> | string
    userId?: StringWithAggregatesFilter<"Popcorn"> | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    moviesId?: StringNullableFilter<"Genre"> | string | null
    seriesId?: StringNullableFilter<"Genre"> | string | null
    Movies?: MoviesListRelationFilter
    Series?: SeriesListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    moviesId?: SortOrder
    seriesId?: SortOrder
    Movies?: MoviesOrderByRelationAggregateInput
    Series?: SeriesOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    moviesId?: StringNullableFilter<"Genre"> | string | null
    seriesId?: StringNullableFilter<"Genre"> | string | null
    Movies?: MoviesListRelationFilter
    Series?: SeriesListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    moviesId?: SortOrder
    seriesId?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
    moviesId?: StringNullableWithAggregatesFilter<"Genre"> | string | null
    seriesId?: StringNullableWithAggregatesFilter<"Genre"> | string | null
  }

  export type brandsCreateInput = {
    id?: string
    img: string
    href: string
  }

  export type brandsUncheckedCreateInput = {
    id?: string
    img: string
    href: string
  }

  export type brandsUpdateInput = {
    img?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
  }

  export type brandsUncheckedUpdateInput = {
    img?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
  }

  export type brandsCreateManyInput = {
    id?: string
    img: string
    href: string
  }

  export type brandsUpdateManyMutationInput = {
    img?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
  }

  export type brandsUncheckedUpdateManyInput = {
    img?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    nickname: string
    email: string
    name: string
    picture: string
    movies?: MoviesCreateNestedManyWithoutUserInput
    series?: SeriesCreateNestedManyWithoutUserInput
    Popcorn?: PopcornCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nickname: string
    email: string
    name: string
    picture: string
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    series?: SeriesUncheckedCreateNestedManyWithoutUserInput
    Popcorn?: PopcornUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUpdateManyWithoutUserNestedInput
    series?: SeriesUpdateManyWithoutUserNestedInput
    Popcorn?: PopcornUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    series?: SeriesUncheckedUpdateManyWithoutUserNestedInput
    Popcorn?: PopcornUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nickname: string
    email: string
    name: string
    picture: string
  }

  export type UserUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesCreateInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    genre: GenreCreateNestedOneWithoutMoviesInput
    User: UserCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
    genreId: string
  }

  export type MoviesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutMoviesNestedInput
    User?: UserUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesCreateManyInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
    genreId: string
  }

  export type MoviesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type SeriesCreateInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    genre: GenreCreateNestedOneWithoutSeriesInput
    User: UserCreateNestedOneWithoutSeriesInput
  }

  export type SeriesUncheckedCreateInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
    genreId: string
  }

  export type SeriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutSeriesNestedInput
    User?: UserUpdateOneRequiredWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type SeriesCreateManyInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
    genreId: string
  }

  export type SeriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
  }

  export type SeriesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type PopcornCreateInput = {
    id?: string
    name: string
    image: string
    image_id: string
    type: $Enums.RecipeType
    link: string
    user: UserCreateNestedOneWithoutPopcornInput
  }

  export type PopcornUncheckedCreateInput = {
    id?: string
    name: string
    image: string
    image_id: string
    type: $Enums.RecipeType
    link: string
    userId: string
  }

  export type PopcornUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecipeTypeFieldUpdateOperationsInput | $Enums.RecipeType
    link?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPopcornNestedInput
  }

  export type PopcornUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecipeTypeFieldUpdateOperationsInput | $Enums.RecipeType
    link?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PopcornCreateManyInput = {
    id?: string
    name: string
    image: string
    image_id: string
    type: $Enums.RecipeType
    link: string
    userId: string
  }

  export type PopcornUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecipeTypeFieldUpdateOperationsInput | $Enums.RecipeType
    link?: StringFieldUpdateOperationsInput | string
  }

  export type PopcornUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecipeTypeFieldUpdateOperationsInput | $Enums.RecipeType
    link?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    moviesId?: string | null
    seriesId?: string | null
    Movies?: MoviesCreateNestedManyWithoutGenreInput
    Series?: SeriesCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    moviesId?: string | null
    seriesId?: string | null
    Movies?: MoviesUncheckedCreateNestedManyWithoutGenreInput
    Series?: SeriesUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    moviesId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    Movies?: MoviesUpdateManyWithoutGenreNestedInput
    Series?: SeriesUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    moviesId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    Movies?: MoviesUncheckedUpdateManyWithoutGenreNestedInput
    Series?: SeriesUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
    moviesId?: string | null
    seriesId?: string | null
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    moviesId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    moviesId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type brandsCountOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    href?: SortOrder
  }

  export type brandsMaxOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    href?: SortOrder
  }

  export type brandsMinOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    href?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MoviesListRelationFilter = {
    every?: MoviesWhereInput
    some?: MoviesWhereInput
    none?: MoviesWhereInput
  }

  export type SeriesListRelationFilter = {
    every?: SeriesWhereInput
    some?: SeriesWhereInput
    none?: SeriesWhereInput
  }

  export type PopcornListRelationFilter = {
    every?: PopcornWhereInput
    some?: PopcornWhereInput
    none?: PopcornWhereInput
  }

  export type MoviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PopcornOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GenreRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MoviesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
  }

  export type MoviesAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type MoviesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
  }

  export type MoviesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
  }

  export type MoviesSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SeriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
  }

  export type SeriesAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
  }

  export type SeriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    poster_image?: SortOrder
    poster_image_id?: SortOrder
    score?: SortOrder
    critique?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
  }

  export type SeriesSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumRecipeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipeType | EnumRecipeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecipeType[] | ListEnumRecipeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipeType[] | ListEnumRecipeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipeTypeFilter<$PrismaModel> | $Enums.RecipeType
  }

  export type PopcornCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    image_id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type PopcornMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    image_id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type PopcornMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    image_id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type EnumRecipeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipeType | EnumRecipeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecipeType[] | ListEnumRecipeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipeType[] | ListEnumRecipeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipeTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecipeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipeTypeFilter<$PrismaModel>
    _max?: NestedEnumRecipeTypeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    moviesId?: SortOrder
    seriesId?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    moviesId?: SortOrder
    seriesId?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    moviesId?: SortOrder
    seriesId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MoviesCreateNestedManyWithoutUserInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type SeriesCreateNestedManyWithoutUserInput = {
    create?: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput> | SeriesCreateWithoutUserInput[] | SeriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutUserInput | SeriesCreateOrConnectWithoutUserInput[]
    createMany?: SeriesCreateManyUserInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type PopcornCreateNestedManyWithoutUserInput = {
    create?: XOR<PopcornCreateWithoutUserInput, PopcornUncheckedCreateWithoutUserInput> | PopcornCreateWithoutUserInput[] | PopcornUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PopcornCreateOrConnectWithoutUserInput | PopcornCreateOrConnectWithoutUserInput[]
    createMany?: PopcornCreateManyUserInputEnvelope
    connect?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
  }

  export type MoviesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type SeriesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput> | SeriesCreateWithoutUserInput[] | SeriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutUserInput | SeriesCreateOrConnectWithoutUserInput[]
    createMany?: SeriesCreateManyUserInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type PopcornUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PopcornCreateWithoutUserInput, PopcornUncheckedCreateWithoutUserInput> | PopcornCreateWithoutUserInput[] | PopcornUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PopcornCreateOrConnectWithoutUserInput | PopcornCreateOrConnectWithoutUserInput[]
    createMany?: PopcornCreateManyUserInputEnvelope
    connect?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
  }

  export type MoviesUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutUserInput | MoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutUserInput | MoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutUserInput | MoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type SeriesUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput> | SeriesCreateWithoutUserInput[] | SeriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutUserInput | SeriesCreateOrConnectWithoutUserInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutUserInput | SeriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeriesCreateManyUserInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutUserInput | SeriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutUserInput | SeriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type PopcornUpdateManyWithoutUserNestedInput = {
    create?: XOR<PopcornCreateWithoutUserInput, PopcornUncheckedCreateWithoutUserInput> | PopcornCreateWithoutUserInput[] | PopcornUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PopcornCreateOrConnectWithoutUserInput | PopcornCreateOrConnectWithoutUserInput[]
    upsert?: PopcornUpsertWithWhereUniqueWithoutUserInput | PopcornUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PopcornCreateManyUserInputEnvelope
    set?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
    disconnect?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
    delete?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
    connect?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
    update?: PopcornUpdateWithWhereUniqueWithoutUserInput | PopcornUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PopcornUpdateManyWithWhereWithoutUserInput | PopcornUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PopcornScalarWhereInput | PopcornScalarWhereInput[]
  }

  export type MoviesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutUserInput | MoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutUserInput | MoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutUserInput | MoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type SeriesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput> | SeriesCreateWithoutUserInput[] | SeriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutUserInput | SeriesCreateOrConnectWithoutUserInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutUserInput | SeriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeriesCreateManyUserInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutUserInput | SeriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutUserInput | SeriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type PopcornUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PopcornCreateWithoutUserInput, PopcornUncheckedCreateWithoutUserInput> | PopcornCreateWithoutUserInput[] | PopcornUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PopcornCreateOrConnectWithoutUserInput | PopcornCreateOrConnectWithoutUserInput[]
    upsert?: PopcornUpsertWithWhereUniqueWithoutUserInput | PopcornUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PopcornCreateManyUserInputEnvelope
    set?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
    disconnect?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
    delete?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
    connect?: PopcornWhereUniqueInput | PopcornWhereUniqueInput[]
    update?: PopcornUpdateWithWhereUniqueWithoutUserInput | PopcornUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PopcornUpdateManyWithWhereWithoutUserInput | PopcornUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PopcornScalarWhereInput | PopcornScalarWhereInput[]
  }

  export type GenreCreateNestedOneWithoutMoviesInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput
    connect?: GenreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMoviesInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GenreUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput
    upsert?: GenreUpsertWithoutMoviesInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutMoviesInput, GenreUpdateWithoutMoviesInput>, GenreUncheckedUpdateWithoutMoviesInput>
  }

  export type UserUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    upsert?: UserUpsertWithoutMoviesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoviesInput, UserUpdateWithoutMoviesInput>, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type GenreCreateNestedOneWithoutSeriesInput = {
    create?: XOR<GenreCreateWithoutSeriesInput, GenreUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: GenreCreateOrConnectWithoutSeriesInput
    connect?: GenreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSeriesInput = {
    create?: XOR<UserCreateWithoutSeriesInput, UserUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeriesInput
    connect?: UserWhereUniqueInput
  }

  export type GenreUpdateOneRequiredWithoutSeriesNestedInput = {
    create?: XOR<GenreCreateWithoutSeriesInput, GenreUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: GenreCreateOrConnectWithoutSeriesInput
    upsert?: GenreUpsertWithoutSeriesInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutSeriesInput, GenreUpdateWithoutSeriesInput>, GenreUncheckedUpdateWithoutSeriesInput>
  }

  export type UserUpdateOneRequiredWithoutSeriesNestedInput = {
    create?: XOR<UserCreateWithoutSeriesInput, UserUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeriesInput
    upsert?: UserUpsertWithoutSeriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeriesInput, UserUpdateWithoutSeriesInput>, UserUncheckedUpdateWithoutSeriesInput>
  }

  export type UserCreateNestedOneWithoutPopcornInput = {
    create?: XOR<UserCreateWithoutPopcornInput, UserUncheckedCreateWithoutPopcornInput>
    connectOrCreate?: UserCreateOrConnectWithoutPopcornInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRecipeTypeFieldUpdateOperationsInput = {
    set?: $Enums.RecipeType
  }

  export type UserUpdateOneRequiredWithoutPopcornNestedInput = {
    create?: XOR<UserCreateWithoutPopcornInput, UserUncheckedCreateWithoutPopcornInput>
    connectOrCreate?: UserCreateOrConnectWithoutPopcornInput
    upsert?: UserUpsertWithoutPopcornInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPopcornInput, UserUpdateWithoutPopcornInput>, UserUncheckedUpdateWithoutPopcornInput>
  }

  export type MoviesCreateNestedManyWithoutGenreInput = {
    create?: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput> | MoviesCreateWithoutGenreInput[] | MoviesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutGenreInput | MoviesCreateOrConnectWithoutGenreInput[]
    createMany?: MoviesCreateManyGenreInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type SeriesCreateNestedManyWithoutGenreInput = {
    create?: XOR<SeriesCreateWithoutGenreInput, SeriesUncheckedCreateWithoutGenreInput> | SeriesCreateWithoutGenreInput[] | SeriesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutGenreInput | SeriesCreateOrConnectWithoutGenreInput[]
    createMany?: SeriesCreateManyGenreInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type MoviesUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput> | MoviesCreateWithoutGenreInput[] | MoviesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutGenreInput | MoviesCreateOrConnectWithoutGenreInput[]
    createMany?: MoviesCreateManyGenreInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type SeriesUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<SeriesCreateWithoutGenreInput, SeriesUncheckedCreateWithoutGenreInput> | SeriesCreateWithoutGenreInput[] | SeriesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutGenreInput | SeriesCreateOrConnectWithoutGenreInput[]
    createMany?: SeriesCreateManyGenreInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type MoviesUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput> | MoviesCreateWithoutGenreInput[] | MoviesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutGenreInput | MoviesCreateOrConnectWithoutGenreInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutGenreInput | MoviesUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: MoviesCreateManyGenreInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutGenreInput | MoviesUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutGenreInput | MoviesUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type SeriesUpdateManyWithoutGenreNestedInput = {
    create?: XOR<SeriesCreateWithoutGenreInput, SeriesUncheckedCreateWithoutGenreInput> | SeriesCreateWithoutGenreInput[] | SeriesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutGenreInput | SeriesCreateOrConnectWithoutGenreInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutGenreInput | SeriesUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: SeriesCreateManyGenreInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutGenreInput | SeriesUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutGenreInput | SeriesUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type MoviesUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput> | MoviesCreateWithoutGenreInput[] | MoviesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutGenreInput | MoviesCreateOrConnectWithoutGenreInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutGenreInput | MoviesUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: MoviesCreateManyGenreInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutGenreInput | MoviesUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutGenreInput | MoviesUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type SeriesUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<SeriesCreateWithoutGenreInput, SeriesUncheckedCreateWithoutGenreInput> | SeriesCreateWithoutGenreInput[] | SeriesUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutGenreInput | SeriesCreateOrConnectWithoutGenreInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutGenreInput | SeriesUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: SeriesCreateManyGenreInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutGenreInput | SeriesUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutGenreInput | SeriesUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRecipeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipeType | EnumRecipeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecipeType[] | ListEnumRecipeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipeType[] | ListEnumRecipeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipeTypeFilter<$PrismaModel> | $Enums.RecipeType
  }

  export type NestedEnumRecipeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecipeType | EnumRecipeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecipeType[] | ListEnumRecipeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecipeType[] | ListEnumRecipeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecipeTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecipeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecipeTypeFilter<$PrismaModel>
    _max?: NestedEnumRecipeTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type MoviesCreateWithoutUserInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    genre: GenreCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    genreId: string
  }

  export type MoviesCreateOrConnectWithoutUserInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
  }

  export type MoviesCreateManyUserInputEnvelope = {
    data: MoviesCreateManyUserInput | MoviesCreateManyUserInput[]
  }

  export type SeriesCreateWithoutUserInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    genre: GenreCreateNestedOneWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    genreId: string
  }

  export type SeriesCreateOrConnectWithoutUserInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput>
  }

  export type SeriesCreateManyUserInputEnvelope = {
    data: SeriesCreateManyUserInput | SeriesCreateManyUserInput[]
  }

  export type PopcornCreateWithoutUserInput = {
    id?: string
    name: string
    image: string
    image_id: string
    type: $Enums.RecipeType
    link: string
  }

  export type PopcornUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    image: string
    image_id: string
    type: $Enums.RecipeType
    link: string
  }

  export type PopcornCreateOrConnectWithoutUserInput = {
    where: PopcornWhereUniqueInput
    create: XOR<PopcornCreateWithoutUserInput, PopcornUncheckedCreateWithoutUserInput>
  }

  export type PopcornCreateManyUserInputEnvelope = {
    data: PopcornCreateManyUserInput | PopcornCreateManyUserInput[]
  }

  export type MoviesUpsertWithWhereUniqueWithoutUserInput = {
    where: MoviesWhereUniqueInput
    update: XOR<MoviesUpdateWithoutUserInput, MoviesUncheckedUpdateWithoutUserInput>
    create: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
  }

  export type MoviesUpdateWithWhereUniqueWithoutUserInput = {
    where: MoviesWhereUniqueInput
    data: XOR<MoviesUpdateWithoutUserInput, MoviesUncheckedUpdateWithoutUserInput>
  }

  export type MoviesUpdateManyWithWhereWithoutUserInput = {
    where: MoviesScalarWhereInput
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyWithoutUserInput>
  }

  export type MoviesScalarWhereInput = {
    AND?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    OR?: MoviesScalarWhereInput[]
    NOT?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    id?: StringFilter<"Movies"> | string
    name?: StringFilter<"Movies"> | string
    poster_image?: StringFilter<"Movies"> | string
    poster_image_id?: StringFilter<"Movies"> | string
    score?: IntFilter<"Movies"> | number
    critique?: StringFilter<"Movies"> | string
    userId?: StringFilter<"Movies"> | string
    genreId?: StringFilter<"Movies"> | string
  }

  export type SeriesUpsertWithWhereUniqueWithoutUserInput = {
    where: SeriesWhereUniqueInput
    update: XOR<SeriesUpdateWithoutUserInput, SeriesUncheckedUpdateWithoutUserInput>
    create: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput>
  }

  export type SeriesUpdateWithWhereUniqueWithoutUserInput = {
    where: SeriesWhereUniqueInput
    data: XOR<SeriesUpdateWithoutUserInput, SeriesUncheckedUpdateWithoutUserInput>
  }

  export type SeriesUpdateManyWithWhereWithoutUserInput = {
    where: SeriesScalarWhereInput
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyWithoutUserInput>
  }

  export type SeriesScalarWhereInput = {
    AND?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
    OR?: SeriesScalarWhereInput[]
    NOT?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
    id?: StringFilter<"Series"> | string
    name?: StringFilter<"Series"> | string
    poster_image?: StringFilter<"Series"> | string
    poster_image_id?: StringFilter<"Series"> | string
    score?: IntFilter<"Series"> | number
    critique?: StringFilter<"Series"> | string
    userId?: StringFilter<"Series"> | string
    genreId?: StringFilter<"Series"> | string
  }

  export type PopcornUpsertWithWhereUniqueWithoutUserInput = {
    where: PopcornWhereUniqueInput
    update: XOR<PopcornUpdateWithoutUserInput, PopcornUncheckedUpdateWithoutUserInput>
    create: XOR<PopcornCreateWithoutUserInput, PopcornUncheckedCreateWithoutUserInput>
  }

  export type PopcornUpdateWithWhereUniqueWithoutUserInput = {
    where: PopcornWhereUniqueInput
    data: XOR<PopcornUpdateWithoutUserInput, PopcornUncheckedUpdateWithoutUserInput>
  }

  export type PopcornUpdateManyWithWhereWithoutUserInput = {
    where: PopcornScalarWhereInput
    data: XOR<PopcornUpdateManyMutationInput, PopcornUncheckedUpdateManyWithoutUserInput>
  }

  export type PopcornScalarWhereInput = {
    AND?: PopcornScalarWhereInput | PopcornScalarWhereInput[]
    OR?: PopcornScalarWhereInput[]
    NOT?: PopcornScalarWhereInput | PopcornScalarWhereInput[]
    id?: StringFilter<"Popcorn"> | string
    name?: StringFilter<"Popcorn"> | string
    image?: StringFilter<"Popcorn"> | string
    image_id?: StringFilter<"Popcorn"> | string
    type?: EnumRecipeTypeFilter<"Popcorn"> | $Enums.RecipeType
    link?: StringFilter<"Popcorn"> | string
    userId?: StringFilter<"Popcorn"> | string
  }

  export type GenreCreateWithoutMoviesInput = {
    id?: string
    name: string
    moviesId?: string | null
    seriesId?: string | null
    Series?: SeriesCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutMoviesInput = {
    id?: string
    name: string
    moviesId?: string | null
    seriesId?: string | null
    Series?: SeriesUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
  }

  export type UserCreateWithoutMoviesInput = {
    id?: string
    nickname: string
    email: string
    name: string
    picture: string
    series?: SeriesCreateNestedManyWithoutUserInput
    Popcorn?: PopcornCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoviesInput = {
    id?: string
    nickname: string
    email: string
    name: string
    picture: string
    series?: SeriesUncheckedCreateNestedManyWithoutUserInput
    Popcorn?: PopcornUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoviesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
  }

  export type GenreUpsertWithoutMoviesInput = {
    update: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutMoviesInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
  }

  export type GenreUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
    moviesId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    Series?: SeriesUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
    moviesId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    Series?: SeriesUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type UserUpsertWithoutMoviesInput = {
    update: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoviesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type UserUpdateWithoutMoviesInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    series?: SeriesUpdateManyWithoutUserNestedInput
    Popcorn?: PopcornUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoviesInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    series?: SeriesUncheckedUpdateManyWithoutUserNestedInput
    Popcorn?: PopcornUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GenreCreateWithoutSeriesInput = {
    id?: string
    name: string
    moviesId?: string | null
    seriesId?: string | null
    Movies?: MoviesCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutSeriesInput = {
    id?: string
    name: string
    moviesId?: string | null
    seriesId?: string | null
    Movies?: MoviesUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutSeriesInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutSeriesInput, GenreUncheckedCreateWithoutSeriesInput>
  }

  export type UserCreateWithoutSeriesInput = {
    id?: string
    nickname: string
    email: string
    name: string
    picture: string
    movies?: MoviesCreateNestedManyWithoutUserInput
    Popcorn?: PopcornCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSeriesInput = {
    id?: string
    nickname: string
    email: string
    name: string
    picture: string
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    Popcorn?: PopcornUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSeriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeriesInput, UserUncheckedCreateWithoutSeriesInput>
  }

  export type GenreUpsertWithoutSeriesInput = {
    update: XOR<GenreUpdateWithoutSeriesInput, GenreUncheckedUpdateWithoutSeriesInput>
    create: XOR<GenreCreateWithoutSeriesInput, GenreUncheckedCreateWithoutSeriesInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutSeriesInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutSeriesInput, GenreUncheckedUpdateWithoutSeriesInput>
  }

  export type GenreUpdateWithoutSeriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    moviesId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    Movies?: MoviesUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutSeriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    moviesId?: NullableStringFieldUpdateOperationsInput | string | null
    seriesId?: NullableStringFieldUpdateOperationsInput | string | null
    Movies?: MoviesUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type UserUpsertWithoutSeriesInput = {
    update: XOR<UserUpdateWithoutSeriesInput, UserUncheckedUpdateWithoutSeriesInput>
    create: XOR<UserCreateWithoutSeriesInput, UserUncheckedCreateWithoutSeriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeriesInput, UserUncheckedUpdateWithoutSeriesInput>
  }

  export type UserUpdateWithoutSeriesInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUpdateManyWithoutUserNestedInput
    Popcorn?: PopcornUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSeriesInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    Popcorn?: PopcornUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPopcornInput = {
    id?: string
    nickname: string
    email: string
    name: string
    picture: string
    movies?: MoviesCreateNestedManyWithoutUserInput
    series?: SeriesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPopcornInput = {
    id?: string
    nickname: string
    email: string
    name: string
    picture: string
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    series?: SeriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPopcornInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPopcornInput, UserUncheckedCreateWithoutPopcornInput>
  }

  export type UserUpsertWithoutPopcornInput = {
    update: XOR<UserUpdateWithoutPopcornInput, UserUncheckedUpdateWithoutPopcornInput>
    create: XOR<UserCreateWithoutPopcornInput, UserUncheckedCreateWithoutPopcornInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPopcornInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPopcornInput, UserUncheckedUpdateWithoutPopcornInput>
  }

  export type UserUpdateWithoutPopcornInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUpdateManyWithoutUserNestedInput
    series?: SeriesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPopcornInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    series?: SeriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MoviesCreateWithoutGenreInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    User: UserCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutGenreInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
  }

  export type MoviesCreateOrConnectWithoutGenreInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput>
  }

  export type MoviesCreateManyGenreInputEnvelope = {
    data: MoviesCreateManyGenreInput | MoviesCreateManyGenreInput[]
  }

  export type SeriesCreateWithoutGenreInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    User: UserCreateNestedOneWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutGenreInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
  }

  export type SeriesCreateOrConnectWithoutGenreInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutGenreInput, SeriesUncheckedCreateWithoutGenreInput>
  }

  export type SeriesCreateManyGenreInputEnvelope = {
    data: SeriesCreateManyGenreInput | SeriesCreateManyGenreInput[]
  }

  export type MoviesUpsertWithWhereUniqueWithoutGenreInput = {
    where: MoviesWhereUniqueInput
    update: XOR<MoviesUpdateWithoutGenreInput, MoviesUncheckedUpdateWithoutGenreInput>
    create: XOR<MoviesCreateWithoutGenreInput, MoviesUncheckedCreateWithoutGenreInput>
  }

  export type MoviesUpdateWithWhereUniqueWithoutGenreInput = {
    where: MoviesWhereUniqueInput
    data: XOR<MoviesUpdateWithoutGenreInput, MoviesUncheckedUpdateWithoutGenreInput>
  }

  export type MoviesUpdateManyWithWhereWithoutGenreInput = {
    where: MoviesScalarWhereInput
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyWithoutGenreInput>
  }

  export type SeriesUpsertWithWhereUniqueWithoutGenreInput = {
    where: SeriesWhereUniqueInput
    update: XOR<SeriesUpdateWithoutGenreInput, SeriesUncheckedUpdateWithoutGenreInput>
    create: XOR<SeriesCreateWithoutGenreInput, SeriesUncheckedCreateWithoutGenreInput>
  }

  export type SeriesUpdateWithWhereUniqueWithoutGenreInput = {
    where: SeriesWhereUniqueInput
    data: XOR<SeriesUpdateWithoutGenreInput, SeriesUncheckedUpdateWithoutGenreInput>
  }

  export type SeriesUpdateManyWithWhereWithoutGenreInput = {
    where: SeriesScalarWhereInput
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyWithoutGenreInput>
  }

  export type MoviesCreateManyUserInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    genreId: string
  }

  export type SeriesCreateManyUserInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    genreId: string
  }

  export type PopcornCreateManyUserInput = {
    id?: string
    name: string
    image: string
    image_id: string
    type: $Enums.RecipeType
    link: string
  }

  export type MoviesUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type SeriesUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type SeriesUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type PopcornUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecipeTypeFieldUpdateOperationsInput | $Enums.RecipeType
    link?: StringFieldUpdateOperationsInput | string
  }

  export type PopcornUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecipeTypeFieldUpdateOperationsInput | $Enums.RecipeType
    link?: StringFieldUpdateOperationsInput | string
  }

  export type PopcornUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecipeTypeFieldUpdateOperationsInput | $Enums.RecipeType
    link?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesCreateManyGenreInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
  }

  export type SeriesCreateManyGenreInput = {
    id?: string
    name: string
    poster_image: string
    poster_image_id: string
    score: number
    critique: string
    userId: string
  }

  export type MoviesUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MoviesUncheckedUpdateManyWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SeriesUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SeriesUncheckedUpdateManyWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    poster_image?: StringFieldUpdateOperationsInput | string
    poster_image_id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    critique?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreCountOutputTypeDefaultArgs instead
     */
    export type GenreCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GenreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use brandsDefaultArgs instead
     */
    export type brandsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = brandsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MoviesDefaultArgs instead
     */
    export type MoviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MoviesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeriesDefaultArgs instead
     */
    export type SeriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SeriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PopcornDefaultArgs instead
     */
    export type PopcornArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PopcornDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreDefaultArgs instead
     */
    export type GenreArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GenreDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}