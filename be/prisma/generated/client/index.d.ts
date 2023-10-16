
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Division
 * 
 */
export type Division = $Result.DefaultSelection<Prisma.$DivisionPayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model WorksProgram
 * 
 */
export type WorksProgram = $Result.DefaultSelection<Prisma.$WorksProgramPayload>
/**
 * Model RoutineTask
 * 
 */
export type RoutineTask = $Result.DefaultSelection<Prisma.$RoutineTaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  GURU: 'GURU',
  STAFF: 'STAFF',
  KEPALA_SEKOLAH: 'KEPALA_SEKOLAH',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Category_Works: {
  ROUTINE: 'ROUTINE',
  INCIDENTAL: 'INCIDENTAL'
};

export type Category_Works = (typeof Category_Works)[keyof typeof Category_Works]


export const Status: {
  ON_PROCESS: 'ON_PROCESS',
  DONE: 'DONE',
  UNFINISHED: 'UNFINISHED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Category_Routine: {
  ROUTINE: 'ROUTINE',
  REGULATION: 'REGULATION',
  CHALLENGE: 'CHALLENGE',
  REQUEST: 'REQUEST',
  DEADLINE: 'DEADLINE'
};

export type Category_Routine = (typeof Category_Routine)[keyof typeof Category_Routine]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Category_Works = $Enums.Category_Works

export const Category_Works: typeof $Enums.Category_Works

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Category_Routine = $Enums.Category_Routine

export const Category_Routine: typeof $Enums.Category_Routine

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.division`: Exposes CRUD operations for the **Division** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.division.findMany()
    * ```
    */
  get division(): Prisma.DivisionDelegate<ExtArgs>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs>;

  /**
   * `prisma.worksProgram`: Exposes CRUD operations for the **WorksProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorksPrograms
    * const worksPrograms = await prisma.worksProgram.findMany()
    * ```
    */
  get worksProgram(): Prisma.WorksProgramDelegate<ExtArgs>;

  /**
   * `prisma.routineTask`: Exposes CRUD operations for the **RoutineTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineTasks
    * const routineTasks = await prisma.routineTask.findMany()
    * ```
    */
  get routineTask(): Prisma.RoutineTaskDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.4.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
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
    User: 'User',
    Division: 'Division',
    Position: 'Position',
    WorksProgram: 'WorksProgram',
    RoutineTask: 'RoutineTask'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'division' | 'position' | 'worksProgram' | 'routineTask'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Division: {
        payload: Prisma.$DivisionPayload<ExtArgs>
        fields: Prisma.DivisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findFirst: {
            args: Prisma.DivisionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findMany: {
            args: Prisma.DivisionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          create: {
            args: Prisma.DivisionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          createMany: {
            args: Prisma.DivisionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DivisionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          update: {
            args: Prisma.DivisionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          deleteMany: {
            args: Prisma.DivisionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DivisionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DivisionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          aggregate: {
            args: Prisma.DivisionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDivision>
          }
          groupBy: {
            args: Prisma.DivisionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DivisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisionCountArgs<ExtArgs>,
            result: $Utils.Optional<DivisionCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>,
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      WorksProgram: {
        payload: Prisma.$WorksProgramPayload<ExtArgs>
        fields: Prisma.WorksProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorksProgramFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorksProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorksProgramFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorksProgramPayload>
          }
          findFirst: {
            args: Prisma.WorksProgramFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorksProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorksProgramFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorksProgramPayload>
          }
          findMany: {
            args: Prisma.WorksProgramFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorksProgramPayload>[]
          }
          create: {
            args: Prisma.WorksProgramCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorksProgramPayload>
          }
          createMany: {
            args: Prisma.WorksProgramCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WorksProgramDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorksProgramPayload>
          }
          update: {
            args: Prisma.WorksProgramUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorksProgramPayload>
          }
          deleteMany: {
            args: Prisma.WorksProgramDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WorksProgramUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WorksProgramUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorksProgramPayload>
          }
          aggregate: {
            args: Prisma.WorksProgramAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorksProgram>
          }
          groupBy: {
            args: Prisma.WorksProgramGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorksProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorksProgramCountArgs<ExtArgs>,
            result: $Utils.Optional<WorksProgramCountAggregateOutputType> | number
          }
        }
      }
      RoutineTask: {
        payload: Prisma.$RoutineTaskPayload<ExtArgs>
        fields: Prisma.RoutineTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineTaskPayload>
          }
          findFirst: {
            args: Prisma.RoutineTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineTaskPayload>
          }
          findMany: {
            args: Prisma.RoutineTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineTaskPayload>[]
          }
          create: {
            args: Prisma.RoutineTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineTaskPayload>
          }
          createMany: {
            args: Prisma.RoutineTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoutineTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineTaskPayload>
          }
          update: {
            args: Prisma.RoutineTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineTaskPayload>
          }
          deleteMany: {
            args: Prisma.RoutineTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoutineTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineTaskPayload>
          }
          aggregate: {
            args: Prisma.RoutineTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoutineTask>
          }
          groupBy: {
            args: Prisma.RoutineTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoutineTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<RoutineTaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
   * Count Type DivisionCountOutputType
   */

  export type DivisionCountOutputType = {
    positions: number
    worksPrograms: number
    routines: number
  }

  export type DivisionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | DivisionCountOutputTypeCountPositionsArgs
    worksPrograms?: boolean | DivisionCountOutputTypeCountWorksProgramsArgs
    routines?: boolean | DivisionCountOutputTypeCountRoutinesArgs
  }

  // Custom InputTypes

  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionCountOutputType
     */
    select?: DivisionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeCountPositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
  }


  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeCountWorksProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksProgramWhereInput
  }


  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeCountRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineTaskWhereInput
  }



  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    worksPrograms: number
    routines: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksPrograms?: boolean | PositionCountOutputTypeCountWorksProgramsArgs
    routines?: boolean | PositionCountOutputTypeCountRoutinesArgs
  }

  // Custom InputTypes

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountWorksProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksProgramWhereInput
  }


  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineTaskWhereInput
  }



  /**
   * Count Type WorksProgramCountOutputType
   */

  export type WorksProgramCountOutputType = {
    routineTasks: number
  }

  export type WorksProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routineTasks?: boolean | WorksProgramCountOutputTypeCountRoutineTasksArgs
  }

  // Custom InputTypes

  /**
   * WorksProgramCountOutputType without action
   */
  export type WorksProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgramCountOutputType
     */
    select?: WorksProgramCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WorksProgramCountOutputType without action
   */
  export type WorksProgramCountOutputTypeCountRoutineTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineTaskWhereInput
  }



  /**
   * Models
   */

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
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    name: string
    email: string
    password: string
    role: $Enums.Role
    created_at: Date
    updated_at: Date
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    divisions?: boolean | User$divisionsArgs<ExtArgs>
    positions?: boolean | User$positionsArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    divisions?: boolean | User$divisionsArgs<ExtArgs>
    positions?: boolean | User$positionsArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      divisions: Prisma.$DivisionPayload<ExtArgs> | null
      positions: Prisma.$PositionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    divisions<T extends User$divisionsArgs<ExtArgs> = {}>(args?: Subset<T, User$divisionsArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    positions<T extends User$positionsArgs<ExtArgs> = {}>(args?: Subset<T, User$positionsArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.divisions
   */
  export type User$divisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    where?: DivisionWhereInput
  }


  /**
   * User.positions
   */
  export type User$positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    where?: PositionWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Division
   */

  export type AggregateDivision = {
    _count: DivisionCountAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  export type DivisionMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type DivisionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type DivisionCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type DivisionMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type DivisionMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type DivisionCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type DivisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Division to aggregate.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Divisions
    **/
    _count?: true | DivisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionMaxAggregateInputType
  }

  export type GetDivisionAggregateType<T extends DivisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDivision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivision[P]>
      : GetScalarType<T[P], AggregateDivision[P]>
  }




  export type DivisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionWhereInput
    orderBy?: DivisionOrderByWithAggregationInput | DivisionOrderByWithAggregationInput[]
    by: DivisionScalarFieldEnum[] | DivisionScalarFieldEnum
    having?: DivisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionCountAggregateInputType | true
    _min?: DivisionMinAggregateInputType
    _max?: DivisionMaxAggregateInputType
  }

  export type DivisionGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: DivisionCountAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  type GetDivisionGroupByPayload<T extends DivisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionGroupByOutputType[P]>
        }
      >
    >


  export type DivisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    positions?: boolean | Division$positionsArgs<ExtArgs>
    worksPrograms?: boolean | Division$worksProgramsArgs<ExtArgs>
    routines?: boolean | Division$routinesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type DivisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    positions?: boolean | Division$positionsArgs<ExtArgs>
    worksPrograms?: boolean | Division$worksProgramsArgs<ExtArgs>
    routines?: boolean | Division$routinesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DivisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Division"
    objects: {
      positions: Prisma.$PositionPayload<ExtArgs>[]
      worksPrograms: Prisma.$WorksProgramPayload<ExtArgs>[]
      routines: Prisma.$RoutineTaskPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["division"]>
    composites: {}
  }


  type DivisionGetPayload<S extends boolean | null | undefined | DivisionDefaultArgs> = $Result.GetResult<Prisma.$DivisionPayload, S>

  type DivisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DivisionFindManyArgs, 'select' | 'include'> & {
      select?: DivisionCountAggregateInputType | true
    }

  export interface DivisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Division'], meta: { name: 'Division' } }
    /**
     * Find zero or one Division that matches the filter.
     * @param {DivisionFindUniqueArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DivisionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionFindUniqueArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Division that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DivisionFindUniqueOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DivisionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Division that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DivisionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionFindFirstArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Division that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DivisionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisions
     * const divisions = await prisma.division.findMany()
     * 
     * // Get first 10 Divisions
     * const divisions = await prisma.division.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisionWithIdOnly = await prisma.division.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DivisionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Division.
     * @param {DivisionCreateArgs} args - Arguments to create a Division.
     * @example
     * // Create one Division
     * const Division = await prisma.division.create({
     *   data: {
     *     // ... data to create a Division
     *   }
     * })
     * 
    **/
    create<T extends DivisionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionCreateArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Divisions.
     *     @param {DivisionCreateManyArgs} args - Arguments to create many Divisions.
     *     @example
     *     // Create many Divisions
     *     const division = await prisma.division.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DivisionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Division.
     * @param {DivisionDeleteArgs} args - Arguments to delete one Division.
     * @example
     * // Delete one Division
     * const Division = await prisma.division.delete({
     *   where: {
     *     // ... filter to delete one Division
     *   }
     * })
     * 
    **/
    delete<T extends DivisionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionDeleteArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Division.
     * @param {DivisionUpdateArgs} args - Arguments to update one Division.
     * @example
     * // Update one Division
     * const division = await prisma.division.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DivisionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionUpdateArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Divisions.
     * @param {DivisionDeleteManyArgs} args - Arguments to filter Divisions to delete.
     * @example
     * // Delete a few Divisions
     * const { count } = await prisma.division.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DivisionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DivisionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Division.
     * @param {DivisionUpsertArgs} args - Arguments to update or create a Division.
     * @example
     * // Update or create a Division
     * const division = await prisma.division.upsert({
     *   create: {
     *     // ... data to create a Division
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Division we want to update
     *   }
     * })
    **/
    upsert<T extends DivisionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionUpsertArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionCountArgs} args - Arguments to filter Divisions to count.
     * @example
     * // Count the number of Divisions
     * const count = await prisma.division.count({
     *   where: {
     *     // ... the filter for the Divisions we want to count
     *   }
     * })
    **/
    count<T extends DivisionCountArgs>(
      args?: Subset<T, DivisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DivisionAggregateArgs>(args: Subset<T, DivisionAggregateArgs>): Prisma.PrismaPromise<GetDivisionAggregateType<T>>

    /**
     * Group by Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionGroupByArgs} args - Group by arguments.
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
      T extends DivisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisionGroupByArgs['orderBy'] }
        : { orderBy?: DivisionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DivisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Division model
   */
  readonly fields: DivisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Division.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    positions<T extends Division$positionsArgs<ExtArgs> = {}>(args?: Subset<T, Division$positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findMany'> | Null>;

    worksPrograms<T extends Division$worksProgramsArgs<ExtArgs> = {}>(args?: Subset<T, Division$worksProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'findMany'> | Null>;

    routines<T extends Division$routinesArgs<ExtArgs> = {}>(args?: Subset<T, Division$routinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Division model
   */ 
  interface DivisionFieldRefs {
    readonly id: FieldRef<"Division", 'String'>
    readonly name: FieldRef<"Division", 'String'>
    readonly userId: FieldRef<"Division", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Division findUnique
   */
  export type DivisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }


  /**
   * Division findUniqueOrThrow
   */
  export type DivisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }


  /**
   * Division findFirst
   */
  export type DivisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }


  /**
   * Division findFirstOrThrow
   */
  export type DivisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }


  /**
   * Division findMany
   */
  export type DivisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }


  /**
   * Division create
   */
  export type DivisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Division.
     */
    data: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
  }


  /**
   * Division createMany
   */
  export type DivisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Divisions.
     */
    data: DivisionCreateManyInput | DivisionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Division update
   */
  export type DivisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Division.
     */
    data: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
    /**
     * Choose, which Division to update.
     */
    where: DivisionWhereUniqueInput
  }


  /**
   * Division updateMany
   */
  export type DivisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionWhereInput
  }


  /**
   * Division upsert
   */
  export type DivisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Division to update in case it exists.
     */
    where: DivisionWhereUniqueInput
    /**
     * In case the Division found by the `where` argument doesn't exist, create a new Division with this data.
     */
    create: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
    /**
     * In case the Division was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
  }


  /**
   * Division delete
   */
  export type DivisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter which Division to delete.
     */
    where: DivisionWhereUniqueInput
  }


  /**
   * Division deleteMany
   */
  export type DivisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisions to delete
     */
    where?: DivisionWhereInput
  }


  /**
   * Division.positions
   */
  export type Division$positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    cursor?: PositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }


  /**
   * Division.worksPrograms
   */
  export type Division$worksProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    where?: WorksProgramWhereInput
    orderBy?: WorksProgramOrderByWithRelationInput | WorksProgramOrderByWithRelationInput[]
    cursor?: WorksProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksProgramScalarFieldEnum | WorksProgramScalarFieldEnum[]
  }


  /**
   * Division.routines
   */
  export type Division$routinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    where?: RoutineTaskWhereInput
    orderBy?: RoutineTaskOrderByWithRelationInput | RoutineTaskOrderByWithRelationInput[]
    cursor?: RoutineTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineTaskScalarFieldEnum | RoutineTaskScalarFieldEnum[]
  }


  /**
   * Division without action
   */
  export type DivisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
  }



  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionMinAggregateOutputType = {
    id: string | null
    name: string | null
    divisionId: string | null
    userId: string | null
  }

  export type PositionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    divisionId: string | null
    userId: string | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    name: number
    divisionId: number
    userId: number
    _all: number
  }


  export type PositionMinAggregateInputType = {
    id?: true
    name?: true
    divisionId?: true
    userId?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    name?: true
    divisionId?: true
    userId?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    name?: true
    divisionId?: true
    userId?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    id: string
    name: string
    divisionId: string
    userId: string
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    divisionId?: boolean
    userId?: boolean
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    worksPrograms?: boolean | Position$worksProgramsArgs<ExtArgs>
    routines?: boolean | Position$routinesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    id?: boolean
    name?: boolean
    divisionId?: boolean
    userId?: boolean
  }

  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    worksPrograms?: boolean | Position$worksProgramsArgs<ExtArgs>
    routines?: boolean | Position$routinesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      division: Prisma.$DivisionPayload<ExtArgs>
      worksPrograms: Prisma.$WorksProgramPayload<ExtArgs>[]
      routines: Prisma.$RoutineTaskPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      divisionId: string
      userId: string
    }, ExtArgs["result"]["position"]>
    composites: {}
  }


  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PositionFindManyArgs, 'select' | 'include'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PositionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Position that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PositionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PositionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
    **/
    create<T extends PositionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PositionCreateArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Positions.
     *     @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     *     @example
     *     // Create many Positions
     *     const position = await prisma.position.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PositionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
    **/
    delete<T extends PositionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PositionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PositionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PositionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
    **/
    upsert<T extends PositionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
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
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    division<T extends DivisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DivisionDefaultArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    worksPrograms<T extends Position$worksProgramsArgs<ExtArgs> = {}>(args?: Subset<T, Position$worksProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'findMany'> | Null>;

    routines<T extends Position$routinesArgs<ExtArgs> = {}>(args?: Subset<T, Position$routinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Position model
   */ 
  interface PositionFieldRefs {
    readonly id: FieldRef<"Position", 'String'>
    readonly name: FieldRef<"Position", 'String'>
    readonly divisionId: FieldRef<"Position", 'String'>
    readonly userId: FieldRef<"Position", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }


  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }


  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }


  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }


  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }


  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }


  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }


  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
  }


  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }


  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }


  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
  }


  /**
   * Position.worksPrograms
   */
  export type Position$worksProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    where?: WorksProgramWhereInput
    orderBy?: WorksProgramOrderByWithRelationInput | WorksProgramOrderByWithRelationInput[]
    cursor?: WorksProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksProgramScalarFieldEnum | WorksProgramScalarFieldEnum[]
  }


  /**
   * Position.routines
   */
  export type Position$routinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    where?: RoutineTaskWhereInput
    orderBy?: RoutineTaskOrderByWithRelationInput | RoutineTaskOrderByWithRelationInput[]
    cursor?: RoutineTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineTaskScalarFieldEnum | RoutineTaskScalarFieldEnum[]
  }


  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
  }



  /**
   * Model WorksProgram
   */

  export type AggregateWorksProgram = {
    _count: WorksProgramCountAggregateOutputType | null
    _min: WorksProgramMinAggregateOutputType | null
    _max: WorksProgramMaxAggregateOutputType | null
  }

  export type WorksProgramMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.Category_Works | null
    plan: string | null
    indicator: string | null
    time: Date | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
    divisionId: string | null
    positionId: string | null
  }

  export type WorksProgramMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.Category_Works | null
    plan: string | null
    indicator: string | null
    time: Date | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
    divisionId: string | null
    positionId: string | null
  }

  export type WorksProgramCountAggregateOutputType = {
    id: number
    name: number
    category: number
    plan: number
    indicator: number
    time: number
    status: number
    created_at: number
    updated_at: number
    divisionId: number
    positionId: number
    _all: number
  }


  export type WorksProgramMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    plan?: true
    indicator?: true
    time?: true
    status?: true
    created_at?: true
    updated_at?: true
    divisionId?: true
    positionId?: true
  }

  export type WorksProgramMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    plan?: true
    indicator?: true
    time?: true
    status?: true
    created_at?: true
    updated_at?: true
    divisionId?: true
    positionId?: true
  }

  export type WorksProgramCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    plan?: true
    indicator?: true
    time?: true
    status?: true
    created_at?: true
    updated_at?: true
    divisionId?: true
    positionId?: true
    _all?: true
  }

  export type WorksProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorksProgram to aggregate.
     */
    where?: WorksProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksPrograms to fetch.
     */
    orderBy?: WorksProgramOrderByWithRelationInput | WorksProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorksProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorksPrograms
    **/
    _count?: true | WorksProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorksProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorksProgramMaxAggregateInputType
  }

  export type GetWorksProgramAggregateType<T extends WorksProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateWorksProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorksProgram[P]>
      : GetScalarType<T[P], AggregateWorksProgram[P]>
  }




  export type WorksProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksProgramWhereInput
    orderBy?: WorksProgramOrderByWithAggregationInput | WorksProgramOrderByWithAggregationInput[]
    by: WorksProgramScalarFieldEnum[] | WorksProgramScalarFieldEnum
    having?: WorksProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorksProgramCountAggregateInputType | true
    _min?: WorksProgramMinAggregateInputType
    _max?: WorksProgramMaxAggregateInputType
  }

  export type WorksProgramGroupByOutputType = {
    id: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time: Date
    status: $Enums.Status
    created_at: Date
    updated_at: Date
    divisionId: string
    positionId: string
    _count: WorksProgramCountAggregateOutputType | null
    _min: WorksProgramMinAggregateOutputType | null
    _max: WorksProgramMaxAggregateOutputType | null
  }

  type GetWorksProgramGroupByPayload<T extends WorksProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorksProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorksProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorksProgramGroupByOutputType[P]>
            : GetScalarType<T[P], WorksProgramGroupByOutputType[P]>
        }
      >
    >


  export type WorksProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    plan?: boolean
    indicator?: boolean
    time?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    divisionId?: boolean
    positionId?: boolean
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    routineTasks?: boolean | WorksProgram$routineTasksArgs<ExtArgs>
    _count?: boolean | WorksProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksProgram"]>

  export type WorksProgramSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    plan?: boolean
    indicator?: boolean
    time?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    divisionId?: boolean
    positionId?: boolean
  }

  export type WorksProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    routineTasks?: boolean | WorksProgram$routineTasksArgs<ExtArgs>
    _count?: boolean | WorksProgramCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WorksProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorksProgram"
    objects: {
      division: Prisma.$DivisionPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
      routineTasks: Prisma.$RoutineTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: $Enums.Category_Works
      plan: string
      indicator: string
      time: Date
      status: $Enums.Status
      created_at: Date
      updated_at: Date
      divisionId: string
      positionId: string
    }, ExtArgs["result"]["worksProgram"]>
    composites: {}
  }


  type WorksProgramGetPayload<S extends boolean | null | undefined | WorksProgramDefaultArgs> = $Result.GetResult<Prisma.$WorksProgramPayload, S>

  type WorksProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorksProgramFindManyArgs, 'select' | 'include'> & {
      select?: WorksProgramCountAggregateInputType | true
    }

  export interface WorksProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorksProgram'], meta: { name: 'WorksProgram' } }
    /**
     * Find zero or one WorksProgram that matches the filter.
     * @param {WorksProgramFindUniqueArgs} args - Arguments to find a WorksProgram
     * @example
     * // Get one WorksProgram
     * const worksProgram = await prisma.worksProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorksProgramFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WorksProgramFindUniqueArgs<ExtArgs>>
    ): Prisma__WorksProgramClient<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WorksProgram that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorksProgramFindUniqueOrThrowArgs} args - Arguments to find a WorksProgram
     * @example
     * // Get one WorksProgram
     * const worksProgram = await prisma.worksProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorksProgramFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorksProgramFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WorksProgramClient<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WorksProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksProgramFindFirstArgs} args - Arguments to find a WorksProgram
     * @example
     * // Get one WorksProgram
     * const worksProgram = await prisma.worksProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorksProgramFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WorksProgramFindFirstArgs<ExtArgs>>
    ): Prisma__WorksProgramClient<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WorksProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksProgramFindFirstOrThrowArgs} args - Arguments to find a WorksProgram
     * @example
     * // Get one WorksProgram
     * const worksProgram = await prisma.worksProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorksProgramFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorksProgramFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WorksProgramClient<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WorksPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksProgramFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorksPrograms
     * const worksPrograms = await prisma.worksProgram.findMany()
     * 
     * // Get first 10 WorksPrograms
     * const worksPrograms = await prisma.worksProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worksProgramWithIdOnly = await prisma.worksProgram.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorksProgramFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorksProgramFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WorksProgram.
     * @param {WorksProgramCreateArgs} args - Arguments to create a WorksProgram.
     * @example
     * // Create one WorksProgram
     * const WorksProgram = await prisma.worksProgram.create({
     *   data: {
     *     // ... data to create a WorksProgram
     *   }
     * })
     * 
    **/
    create<T extends WorksProgramCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WorksProgramCreateArgs<ExtArgs>>
    ): Prisma__WorksProgramClient<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WorksPrograms.
     *     @param {WorksProgramCreateManyArgs} args - Arguments to create many WorksPrograms.
     *     @example
     *     // Create many WorksPrograms
     *     const worksProgram = await prisma.worksProgram.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorksProgramCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorksProgramCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorksProgram.
     * @param {WorksProgramDeleteArgs} args - Arguments to delete one WorksProgram.
     * @example
     * // Delete one WorksProgram
     * const WorksProgram = await prisma.worksProgram.delete({
     *   where: {
     *     // ... filter to delete one WorksProgram
     *   }
     * })
     * 
    **/
    delete<T extends WorksProgramDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WorksProgramDeleteArgs<ExtArgs>>
    ): Prisma__WorksProgramClient<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WorksProgram.
     * @param {WorksProgramUpdateArgs} args - Arguments to update one WorksProgram.
     * @example
     * // Update one WorksProgram
     * const worksProgram = await prisma.worksProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorksProgramUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WorksProgramUpdateArgs<ExtArgs>>
    ): Prisma__WorksProgramClient<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WorksPrograms.
     * @param {WorksProgramDeleteManyArgs} args - Arguments to filter WorksPrograms to delete.
     * @example
     * // Delete a few WorksPrograms
     * const { count } = await prisma.worksProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorksProgramDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorksProgramDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorksPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorksPrograms
     * const worksProgram = await prisma.worksProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorksProgramUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WorksProgramUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorksProgram.
     * @param {WorksProgramUpsertArgs} args - Arguments to update or create a WorksProgram.
     * @example
     * // Update or create a WorksProgram
     * const worksProgram = await prisma.worksProgram.upsert({
     *   create: {
     *     // ... data to create a WorksProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorksProgram we want to update
     *   }
     * })
    **/
    upsert<T extends WorksProgramUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WorksProgramUpsertArgs<ExtArgs>>
    ): Prisma__WorksProgramClient<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WorksPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksProgramCountArgs} args - Arguments to filter WorksPrograms to count.
     * @example
     * // Count the number of WorksPrograms
     * const count = await prisma.worksProgram.count({
     *   where: {
     *     // ... the filter for the WorksPrograms we want to count
     *   }
     * })
    **/
    count<T extends WorksProgramCountArgs>(
      args?: Subset<T, WorksProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorksProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorksProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorksProgramAggregateArgs>(args: Subset<T, WorksProgramAggregateArgs>): Prisma.PrismaPromise<GetWorksProgramAggregateType<T>>

    /**
     * Group by WorksProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksProgramGroupByArgs} args - Group by arguments.
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
      T extends WorksProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorksProgramGroupByArgs['orderBy'] }
        : { orderBy?: WorksProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorksProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorksProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorksProgram model
   */
  readonly fields: WorksProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorksProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorksProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    division<T extends DivisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DivisionDefaultArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    routineTasks<T extends WorksProgram$routineTasksArgs<ExtArgs> = {}>(args?: Subset<T, WorksProgram$routineTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the WorksProgram model
   */ 
  interface WorksProgramFieldRefs {
    readonly id: FieldRef<"WorksProgram", 'String'>
    readonly name: FieldRef<"WorksProgram", 'String'>
    readonly category: FieldRef<"WorksProgram", 'Category_Works'>
    readonly plan: FieldRef<"WorksProgram", 'String'>
    readonly indicator: FieldRef<"WorksProgram", 'String'>
    readonly time: FieldRef<"WorksProgram", 'DateTime'>
    readonly status: FieldRef<"WorksProgram", 'Status'>
    readonly created_at: FieldRef<"WorksProgram", 'DateTime'>
    readonly updated_at: FieldRef<"WorksProgram", 'DateTime'>
    readonly divisionId: FieldRef<"WorksProgram", 'String'>
    readonly positionId: FieldRef<"WorksProgram", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WorksProgram findUnique
   */
  export type WorksProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    /**
     * Filter, which WorksProgram to fetch.
     */
    where: WorksProgramWhereUniqueInput
  }


  /**
   * WorksProgram findUniqueOrThrow
   */
  export type WorksProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    /**
     * Filter, which WorksProgram to fetch.
     */
    where: WorksProgramWhereUniqueInput
  }


  /**
   * WorksProgram findFirst
   */
  export type WorksProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    /**
     * Filter, which WorksProgram to fetch.
     */
    where?: WorksProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksPrograms to fetch.
     */
    orderBy?: WorksProgramOrderByWithRelationInput | WorksProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorksPrograms.
     */
    cursor?: WorksProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorksPrograms.
     */
    distinct?: WorksProgramScalarFieldEnum | WorksProgramScalarFieldEnum[]
  }


  /**
   * WorksProgram findFirstOrThrow
   */
  export type WorksProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    /**
     * Filter, which WorksProgram to fetch.
     */
    where?: WorksProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksPrograms to fetch.
     */
    orderBy?: WorksProgramOrderByWithRelationInput | WorksProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorksPrograms.
     */
    cursor?: WorksProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorksPrograms.
     */
    distinct?: WorksProgramScalarFieldEnum | WorksProgramScalarFieldEnum[]
  }


  /**
   * WorksProgram findMany
   */
  export type WorksProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    /**
     * Filter, which WorksPrograms to fetch.
     */
    where?: WorksProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorksPrograms to fetch.
     */
    orderBy?: WorksProgramOrderByWithRelationInput | WorksProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorksPrograms.
     */
    cursor?: WorksProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorksPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorksPrograms.
     */
    skip?: number
    distinct?: WorksProgramScalarFieldEnum | WorksProgramScalarFieldEnum[]
  }


  /**
   * WorksProgram create
   */
  export type WorksProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a WorksProgram.
     */
    data: XOR<WorksProgramCreateInput, WorksProgramUncheckedCreateInput>
  }


  /**
   * WorksProgram createMany
   */
  export type WorksProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorksPrograms.
     */
    data: WorksProgramCreateManyInput | WorksProgramCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WorksProgram update
   */
  export type WorksProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a WorksProgram.
     */
    data: XOR<WorksProgramUpdateInput, WorksProgramUncheckedUpdateInput>
    /**
     * Choose, which WorksProgram to update.
     */
    where: WorksProgramWhereUniqueInput
  }


  /**
   * WorksProgram updateMany
   */
  export type WorksProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorksPrograms.
     */
    data: XOR<WorksProgramUpdateManyMutationInput, WorksProgramUncheckedUpdateManyInput>
    /**
     * Filter which WorksPrograms to update
     */
    where?: WorksProgramWhereInput
  }


  /**
   * WorksProgram upsert
   */
  export type WorksProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the WorksProgram to update in case it exists.
     */
    where: WorksProgramWhereUniqueInput
    /**
     * In case the WorksProgram found by the `where` argument doesn't exist, create a new WorksProgram with this data.
     */
    create: XOR<WorksProgramCreateInput, WorksProgramUncheckedCreateInput>
    /**
     * In case the WorksProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorksProgramUpdateInput, WorksProgramUncheckedUpdateInput>
  }


  /**
   * WorksProgram delete
   */
  export type WorksProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
    /**
     * Filter which WorksProgram to delete.
     */
    where: WorksProgramWhereUniqueInput
  }


  /**
   * WorksProgram deleteMany
   */
  export type WorksProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorksPrograms to delete
     */
    where?: WorksProgramWhereInput
  }


  /**
   * WorksProgram.routineTasks
   */
  export type WorksProgram$routineTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    where?: RoutineTaskWhereInput
    orderBy?: RoutineTaskOrderByWithRelationInput | RoutineTaskOrderByWithRelationInput[]
    cursor?: RoutineTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineTaskScalarFieldEnum | RoutineTaskScalarFieldEnum[]
  }


  /**
   * WorksProgram without action
   */
  export type WorksProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksProgram
     */
    select?: WorksProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorksProgramInclude<ExtArgs> | null
  }



  /**
   * Model RoutineTask
   */

  export type AggregateRoutineTask = {
    _count: RoutineTaskCountAggregateOutputType | null
    _min: RoutineTaskMinAggregateOutputType | null
    _max: RoutineTaskMaxAggregateOutputType | null
  }

  export type RoutineTaskMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.Status | null
    time: Date | null
    category: $Enums.Category_Routine | null
    divisionId: string | null
    positionId: string | null
    worksProgramId: string | null
  }

  export type RoutineTaskMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.Status | null
    time: Date | null
    category: $Enums.Category_Routine | null
    divisionId: string | null
    positionId: string | null
    worksProgramId: string | null
  }

  export type RoutineTaskCountAggregateOutputType = {
    id: number
    name: number
    status: number
    time: number
    category: number
    divisionId: number
    positionId: number
    worksProgramId: number
    _all: number
  }


  export type RoutineTaskMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    time?: true
    category?: true
    divisionId?: true
    positionId?: true
    worksProgramId?: true
  }

  export type RoutineTaskMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    time?: true
    category?: true
    divisionId?: true
    positionId?: true
    worksProgramId?: true
  }

  export type RoutineTaskCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    time?: true
    category?: true
    divisionId?: true
    positionId?: true
    worksProgramId?: true
    _all?: true
  }

  export type RoutineTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineTask to aggregate.
     */
    where?: RoutineTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineTasks to fetch.
     */
    orderBy?: RoutineTaskOrderByWithRelationInput | RoutineTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineTasks
    **/
    _count?: true | RoutineTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineTaskMaxAggregateInputType
  }

  export type GetRoutineTaskAggregateType<T extends RoutineTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineTask[P]>
      : GetScalarType<T[P], AggregateRoutineTask[P]>
  }




  export type RoutineTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineTaskWhereInput
    orderBy?: RoutineTaskOrderByWithAggregationInput | RoutineTaskOrderByWithAggregationInput[]
    by: RoutineTaskScalarFieldEnum[] | RoutineTaskScalarFieldEnum
    having?: RoutineTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineTaskCountAggregateInputType | true
    _min?: RoutineTaskMinAggregateInputType
    _max?: RoutineTaskMaxAggregateInputType
  }

  export type RoutineTaskGroupByOutputType = {
    id: string
    name: string
    status: $Enums.Status
    time: Date
    category: $Enums.Category_Routine
    divisionId: string
    positionId: string
    worksProgramId: string
    _count: RoutineTaskCountAggregateOutputType | null
    _min: RoutineTaskMinAggregateOutputType | null
    _max: RoutineTaskMaxAggregateOutputType | null
  }

  type GetRoutineTaskGroupByPayload<T extends RoutineTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineTaskGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineTaskGroupByOutputType[P]>
        }
      >
    >


  export type RoutineTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    time?: boolean
    category?: boolean
    divisionId?: boolean
    positionId?: boolean
    worksProgramId?: boolean
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    worksProgram?: boolean | WorksProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineTask"]>

  export type RoutineTaskSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    time?: boolean
    category?: boolean
    divisionId?: boolean
    positionId?: boolean
    worksProgramId?: boolean
  }

  export type RoutineTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    worksProgram?: boolean | WorksProgramDefaultArgs<ExtArgs>
  }


  export type $RoutineTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineTask"
    objects: {
      division: Prisma.$DivisionPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
      worksProgram: Prisma.$WorksProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.Status
      time: Date
      category: $Enums.Category_Routine
      divisionId: string
      positionId: string
      worksProgramId: string
    }, ExtArgs["result"]["routineTask"]>
    composites: {}
  }


  type RoutineTaskGetPayload<S extends boolean | null | undefined | RoutineTaskDefaultArgs> = $Result.GetResult<Prisma.$RoutineTaskPayload, S>

  type RoutineTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoutineTaskFindManyArgs, 'select' | 'include'> & {
      select?: RoutineTaskCountAggregateInputType | true
    }

  export interface RoutineTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineTask'], meta: { name: 'RoutineTask' } }
    /**
     * Find zero or one RoutineTask that matches the filter.
     * @param {RoutineTaskFindUniqueArgs} args - Arguments to find a RoutineTask
     * @example
     * // Get one RoutineTask
     * const routineTask = await prisma.routineTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoutineTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__RoutineTaskClient<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RoutineTask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoutineTaskFindUniqueOrThrowArgs} args - Arguments to find a RoutineTask
     * @example
     * // Get one RoutineTask
     * const routineTask = await prisma.routineTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoutineTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoutineTaskClient<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RoutineTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineTaskFindFirstArgs} args - Arguments to find a RoutineTask
     * @example
     * // Get one RoutineTask
     * const routineTask = await prisma.routineTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoutineTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineTaskFindFirstArgs<ExtArgs>>
    ): Prisma__RoutineTaskClient<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RoutineTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineTaskFindFirstOrThrowArgs} args - Arguments to find a RoutineTask
     * @example
     * // Get one RoutineTask
     * const routineTask = await prisma.routineTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoutineTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoutineTaskClient<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RoutineTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineTaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineTasks
     * const routineTasks = await prisma.routineTask.findMany()
     * 
     * // Get first 10 RoutineTasks
     * const routineTasks = await prisma.routineTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineTaskWithIdOnly = await prisma.routineTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoutineTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RoutineTask.
     * @param {RoutineTaskCreateArgs} args - Arguments to create a RoutineTask.
     * @example
     * // Create one RoutineTask
     * const RoutineTask = await prisma.routineTask.create({
     *   data: {
     *     // ... data to create a RoutineTask
     *   }
     * })
     * 
    **/
    create<T extends RoutineTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineTaskCreateArgs<ExtArgs>>
    ): Prisma__RoutineTaskClient<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RoutineTasks.
     *     @param {RoutineTaskCreateManyArgs} args - Arguments to create many RoutineTasks.
     *     @example
     *     // Create many RoutineTasks
     *     const routineTask = await prisma.routineTask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoutineTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoutineTask.
     * @param {RoutineTaskDeleteArgs} args - Arguments to delete one RoutineTask.
     * @example
     * // Delete one RoutineTask
     * const RoutineTask = await prisma.routineTask.delete({
     *   where: {
     *     // ... filter to delete one RoutineTask
     *   }
     * })
     * 
    **/
    delete<T extends RoutineTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineTaskDeleteArgs<ExtArgs>>
    ): Prisma__RoutineTaskClient<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RoutineTask.
     * @param {RoutineTaskUpdateArgs} args - Arguments to update one RoutineTask.
     * @example
     * // Update one RoutineTask
     * const routineTask = await prisma.routineTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoutineTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineTaskUpdateArgs<ExtArgs>>
    ): Prisma__RoutineTaskClient<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RoutineTasks.
     * @param {RoutineTaskDeleteManyArgs} args - Arguments to filter RoutineTasks to delete.
     * @example
     * // Delete a few RoutineTasks
     * const { count } = await prisma.routineTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoutineTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineTasks
     * const routineTask = await prisma.routineTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoutineTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoutineTask.
     * @param {RoutineTaskUpsertArgs} args - Arguments to update or create a RoutineTask.
     * @example
     * // Update or create a RoutineTask
     * const routineTask = await prisma.routineTask.upsert({
     *   create: {
     *     // ... data to create a RoutineTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineTask we want to update
     *   }
     * })
    **/
    upsert<T extends RoutineTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineTaskUpsertArgs<ExtArgs>>
    ): Prisma__RoutineTaskClient<$Result.GetResult<Prisma.$RoutineTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RoutineTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineTaskCountArgs} args - Arguments to filter RoutineTasks to count.
     * @example
     * // Count the number of RoutineTasks
     * const count = await prisma.routineTask.count({
     *   where: {
     *     // ... the filter for the RoutineTasks we want to count
     *   }
     * })
    **/
    count<T extends RoutineTaskCountArgs>(
      args?: Subset<T, RoutineTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineTaskAggregateArgs>(args: Subset<T, RoutineTaskAggregateArgs>): Prisma.PrismaPromise<GetRoutineTaskAggregateType<T>>

    /**
     * Group by RoutineTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineTaskGroupByArgs} args - Group by arguments.
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
      T extends RoutineTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineTaskGroupByArgs['orderBy'] }
        : { orderBy?: RoutineTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineTask model
   */
  readonly fields: RoutineTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    division<T extends DivisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DivisionDefaultArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    worksProgram<T extends WorksProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorksProgramDefaultArgs<ExtArgs>>): Prisma__WorksProgramClient<$Result.GetResult<Prisma.$WorksProgramPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the RoutineTask model
   */ 
  interface RoutineTaskFieldRefs {
    readonly id: FieldRef<"RoutineTask", 'String'>
    readonly name: FieldRef<"RoutineTask", 'String'>
    readonly status: FieldRef<"RoutineTask", 'Status'>
    readonly time: FieldRef<"RoutineTask", 'DateTime'>
    readonly category: FieldRef<"RoutineTask", 'Category_Routine'>
    readonly divisionId: FieldRef<"RoutineTask", 'String'>
    readonly positionId: FieldRef<"RoutineTask", 'String'>
    readonly worksProgramId: FieldRef<"RoutineTask", 'String'>
  }
    

  // Custom InputTypes

  /**
   * RoutineTask findUnique
   */
  export type RoutineTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoutineTask to fetch.
     */
    where: RoutineTaskWhereUniqueInput
  }


  /**
   * RoutineTask findUniqueOrThrow
   */
  export type RoutineTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoutineTask to fetch.
     */
    where: RoutineTaskWhereUniqueInput
  }


  /**
   * RoutineTask findFirst
   */
  export type RoutineTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoutineTask to fetch.
     */
    where?: RoutineTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineTasks to fetch.
     */
    orderBy?: RoutineTaskOrderByWithRelationInput | RoutineTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineTasks.
     */
    cursor?: RoutineTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineTasks.
     */
    distinct?: RoutineTaskScalarFieldEnum | RoutineTaskScalarFieldEnum[]
  }


  /**
   * RoutineTask findFirstOrThrow
   */
  export type RoutineTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoutineTask to fetch.
     */
    where?: RoutineTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineTasks to fetch.
     */
    orderBy?: RoutineTaskOrderByWithRelationInput | RoutineTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineTasks.
     */
    cursor?: RoutineTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineTasks.
     */
    distinct?: RoutineTaskScalarFieldEnum | RoutineTaskScalarFieldEnum[]
  }


  /**
   * RoutineTask findMany
   */
  export type RoutineTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    /**
     * Filter, which RoutineTasks to fetch.
     */
    where?: RoutineTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineTasks to fetch.
     */
    orderBy?: RoutineTaskOrderByWithRelationInput | RoutineTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineTasks.
     */
    cursor?: RoutineTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineTasks.
     */
    skip?: number
    distinct?: RoutineTaskScalarFieldEnum | RoutineTaskScalarFieldEnum[]
  }


  /**
   * RoutineTask create
   */
  export type RoutineTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineTask.
     */
    data: XOR<RoutineTaskCreateInput, RoutineTaskUncheckedCreateInput>
  }


  /**
   * RoutineTask createMany
   */
  export type RoutineTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineTasks.
     */
    data: RoutineTaskCreateManyInput | RoutineTaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RoutineTask update
   */
  export type RoutineTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineTask.
     */
    data: XOR<RoutineTaskUpdateInput, RoutineTaskUncheckedUpdateInput>
    /**
     * Choose, which RoutineTask to update.
     */
    where: RoutineTaskWhereUniqueInput
  }


  /**
   * RoutineTask updateMany
   */
  export type RoutineTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineTasks.
     */
    data: XOR<RoutineTaskUpdateManyMutationInput, RoutineTaskUncheckedUpdateManyInput>
    /**
     * Filter which RoutineTasks to update
     */
    where?: RoutineTaskWhereInput
  }


  /**
   * RoutineTask upsert
   */
  export type RoutineTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineTask to update in case it exists.
     */
    where: RoutineTaskWhereUniqueInput
    /**
     * In case the RoutineTask found by the `where` argument doesn't exist, create a new RoutineTask with this data.
     */
    create: XOR<RoutineTaskCreateInput, RoutineTaskUncheckedCreateInput>
    /**
     * In case the RoutineTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineTaskUpdateInput, RoutineTaskUncheckedUpdateInput>
  }


  /**
   * RoutineTask delete
   */
  export type RoutineTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
    /**
     * Filter which RoutineTask to delete.
     */
    where: RoutineTaskWhereUniqueInput
  }


  /**
   * RoutineTask deleteMany
   */
  export type RoutineTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineTasks to delete
     */
    where?: RoutineTaskWhereInput
  }


  /**
   * RoutineTask without action
   */
  export type RoutineTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineTask
     */
    select?: RoutineTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineTaskInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DivisionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type DivisionScalarFieldEnum = (typeof DivisionScalarFieldEnum)[keyof typeof DivisionScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    divisionId: 'divisionId',
    userId: 'userId'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const WorksProgramScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    plan: 'plan',
    indicator: 'indicator',
    time: 'time',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    divisionId: 'divisionId',
    positionId: 'positionId'
  };

  export type WorksProgramScalarFieldEnum = (typeof WorksProgramScalarFieldEnum)[keyof typeof WorksProgramScalarFieldEnum]


  export const RoutineTaskScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    time: 'time',
    category: 'category',
    divisionId: 'divisionId',
    positionId: 'positionId',
    worksProgramId: 'worksProgramId'
  };

  export type RoutineTaskScalarFieldEnum = (typeof RoutineTaskScalarFieldEnum)[keyof typeof RoutineTaskScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category_Works'
   */
  export type EnumCategory_WorksFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category_Works'>
    


  /**
   * Reference to a field of type 'Category_Works[]'
   */
  export type ListEnumCategory_WorksFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category_Works[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Category_Routine'
   */
  export type EnumCategory_RoutineFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category_Routine'>
    


  /**
   * Reference to a field of type 'Category_Routine[]'
   */
  export type ListEnumCategory_RoutineFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category_Routine[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    divisions?: XOR<DivisionNullableRelationFilter, DivisionWhereInput> | null
    positions?: XOR<PositionNullableRelationFilter, PositionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    divisions?: DivisionOrderByWithRelationInput
    positions?: PositionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    divisions?: XOR<DivisionNullableRelationFilter, DivisionWhereInput> | null
    positions?: XOR<PositionNullableRelationFilter, PositionWhereInput> | null
  }, "id" | "name" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DivisionWhereInput = {
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    id?: StringFilter<"Division"> | string
    name?: StringFilter<"Division"> | string
    userId?: StringFilter<"Division"> | string
    positions?: PositionListRelationFilter
    worksPrograms?: WorksProgramListRelationFilter
    routines?: RoutineTaskListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DivisionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    positions?: PositionOrderByRelationAggregateInput
    worksPrograms?: WorksProgramOrderByRelationAggregateInput
    routines?: RoutineTaskOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type DivisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    name?: StringFilter<"Division"> | string
    positions?: PositionListRelationFilter
    worksPrograms?: WorksProgramListRelationFilter
    routines?: RoutineTaskListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type DivisionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: DivisionCountOrderByAggregateInput
    _max?: DivisionMaxOrderByAggregateInput
    _min?: DivisionMinOrderByAggregateInput
  }

  export type DivisionScalarWhereWithAggregatesInput = {
    AND?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    OR?: DivisionScalarWhereWithAggregatesInput[]
    NOT?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Division"> | string
    name?: StringWithAggregatesFilter<"Division"> | string
    userId?: StringWithAggregatesFilter<"Division"> | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    id?: StringFilter<"Position"> | string
    name?: StringFilter<"Position"> | string
    divisionId?: StringFilter<"Position"> | string
    userId?: StringFilter<"Position"> | string
    division?: XOR<DivisionRelationFilter, DivisionWhereInput>
    worksPrograms?: WorksProgramListRelationFilter
    routines?: RoutineTaskListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    divisionId?: SortOrder
    userId?: SortOrder
    division?: DivisionOrderByWithRelationInput
    worksPrograms?: WorksProgramOrderByRelationAggregateInput
    routines?: RoutineTaskOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    name?: StringFilter<"Position"> | string
    divisionId?: StringFilter<"Position"> | string
    division?: XOR<DivisionRelationFilter, DivisionWhereInput>
    worksPrograms?: WorksProgramListRelationFilter
    routines?: RoutineTaskListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    divisionId?: SortOrder
    userId?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Position"> | string
    name?: StringWithAggregatesFilter<"Position"> | string
    divisionId?: StringWithAggregatesFilter<"Position"> | string
    userId?: StringWithAggregatesFilter<"Position"> | string
  }

  export type WorksProgramWhereInput = {
    AND?: WorksProgramWhereInput | WorksProgramWhereInput[]
    OR?: WorksProgramWhereInput[]
    NOT?: WorksProgramWhereInput | WorksProgramWhereInput[]
    id?: StringFilter<"WorksProgram"> | string
    name?: StringFilter<"WorksProgram"> | string
    category?: EnumCategory_WorksFilter<"WorksProgram"> | $Enums.Category_Works
    plan?: StringFilter<"WorksProgram"> | string
    indicator?: StringFilter<"WorksProgram"> | string
    time?: DateTimeFilter<"WorksProgram"> | Date | string
    status?: EnumStatusFilter<"WorksProgram"> | $Enums.Status
    created_at?: DateTimeFilter<"WorksProgram"> | Date | string
    updated_at?: DateTimeFilter<"WorksProgram"> | Date | string
    divisionId?: StringFilter<"WorksProgram"> | string
    positionId?: StringFilter<"WorksProgram"> | string
    division?: XOR<DivisionRelationFilter, DivisionWhereInput>
    position?: XOR<PositionRelationFilter, PositionWhereInput>
    routineTasks?: RoutineTaskListRelationFilter
  }

  export type WorksProgramOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    plan?: SortOrder
    indicator?: SortOrder
    time?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
    division?: DivisionOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
    routineTasks?: RoutineTaskOrderByRelationAggregateInput
  }

  export type WorksProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorksProgramWhereInput | WorksProgramWhereInput[]
    OR?: WorksProgramWhereInput[]
    NOT?: WorksProgramWhereInput | WorksProgramWhereInput[]
    name?: StringFilter<"WorksProgram"> | string
    category?: EnumCategory_WorksFilter<"WorksProgram"> | $Enums.Category_Works
    plan?: StringFilter<"WorksProgram"> | string
    indicator?: StringFilter<"WorksProgram"> | string
    time?: DateTimeFilter<"WorksProgram"> | Date | string
    status?: EnumStatusFilter<"WorksProgram"> | $Enums.Status
    created_at?: DateTimeFilter<"WorksProgram"> | Date | string
    updated_at?: DateTimeFilter<"WorksProgram"> | Date | string
    divisionId?: StringFilter<"WorksProgram"> | string
    positionId?: StringFilter<"WorksProgram"> | string
    division?: XOR<DivisionRelationFilter, DivisionWhereInput>
    position?: XOR<PositionRelationFilter, PositionWhereInput>
    routineTasks?: RoutineTaskListRelationFilter
  }, "id">

  export type WorksProgramOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    plan?: SortOrder
    indicator?: SortOrder
    time?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
    _count?: WorksProgramCountOrderByAggregateInput
    _max?: WorksProgramMaxOrderByAggregateInput
    _min?: WorksProgramMinOrderByAggregateInput
  }

  export type WorksProgramScalarWhereWithAggregatesInput = {
    AND?: WorksProgramScalarWhereWithAggregatesInput | WorksProgramScalarWhereWithAggregatesInput[]
    OR?: WorksProgramScalarWhereWithAggregatesInput[]
    NOT?: WorksProgramScalarWhereWithAggregatesInput | WorksProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorksProgram"> | string
    name?: StringWithAggregatesFilter<"WorksProgram"> | string
    category?: EnumCategory_WorksWithAggregatesFilter<"WorksProgram"> | $Enums.Category_Works
    plan?: StringWithAggregatesFilter<"WorksProgram"> | string
    indicator?: StringWithAggregatesFilter<"WorksProgram"> | string
    time?: DateTimeWithAggregatesFilter<"WorksProgram"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"WorksProgram"> | $Enums.Status
    created_at?: DateTimeWithAggregatesFilter<"WorksProgram"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"WorksProgram"> | Date | string
    divisionId?: StringWithAggregatesFilter<"WorksProgram"> | string
    positionId?: StringWithAggregatesFilter<"WorksProgram"> | string
  }

  export type RoutineTaskWhereInput = {
    AND?: RoutineTaskWhereInput | RoutineTaskWhereInput[]
    OR?: RoutineTaskWhereInput[]
    NOT?: RoutineTaskWhereInput | RoutineTaskWhereInput[]
    id?: StringFilter<"RoutineTask"> | string
    name?: StringFilter<"RoutineTask"> | string
    status?: EnumStatusFilter<"RoutineTask"> | $Enums.Status
    time?: DateTimeFilter<"RoutineTask"> | Date | string
    category?: EnumCategory_RoutineFilter<"RoutineTask"> | $Enums.Category_Routine
    divisionId?: StringFilter<"RoutineTask"> | string
    positionId?: StringFilter<"RoutineTask"> | string
    worksProgramId?: StringFilter<"RoutineTask"> | string
    division?: XOR<DivisionRelationFilter, DivisionWhereInput>
    position?: XOR<PositionRelationFilter, PositionWhereInput>
    worksProgram?: XOR<WorksProgramRelationFilter, WorksProgramWhereInput>
  }

  export type RoutineTaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    time?: SortOrder
    category?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
    worksProgramId?: SortOrder
    division?: DivisionOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
    worksProgram?: WorksProgramOrderByWithRelationInput
  }

  export type RoutineTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineTaskWhereInput | RoutineTaskWhereInput[]
    OR?: RoutineTaskWhereInput[]
    NOT?: RoutineTaskWhereInput | RoutineTaskWhereInput[]
    name?: StringFilter<"RoutineTask"> | string
    status?: EnumStatusFilter<"RoutineTask"> | $Enums.Status
    time?: DateTimeFilter<"RoutineTask"> | Date | string
    category?: EnumCategory_RoutineFilter<"RoutineTask"> | $Enums.Category_Routine
    divisionId?: StringFilter<"RoutineTask"> | string
    positionId?: StringFilter<"RoutineTask"> | string
    worksProgramId?: StringFilter<"RoutineTask"> | string
    division?: XOR<DivisionRelationFilter, DivisionWhereInput>
    position?: XOR<PositionRelationFilter, PositionWhereInput>
    worksProgram?: XOR<WorksProgramRelationFilter, WorksProgramWhereInput>
  }, "id">

  export type RoutineTaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    time?: SortOrder
    category?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
    worksProgramId?: SortOrder
    _count?: RoutineTaskCountOrderByAggregateInput
    _max?: RoutineTaskMaxOrderByAggregateInput
    _min?: RoutineTaskMinOrderByAggregateInput
  }

  export type RoutineTaskScalarWhereWithAggregatesInput = {
    AND?: RoutineTaskScalarWhereWithAggregatesInput | RoutineTaskScalarWhereWithAggregatesInput[]
    OR?: RoutineTaskScalarWhereWithAggregatesInput[]
    NOT?: RoutineTaskScalarWhereWithAggregatesInput | RoutineTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoutineTask"> | string
    name?: StringWithAggregatesFilter<"RoutineTask"> | string
    status?: EnumStatusWithAggregatesFilter<"RoutineTask"> | $Enums.Status
    time?: DateTimeWithAggregatesFilter<"RoutineTask"> | Date | string
    category?: EnumCategory_RoutineWithAggregatesFilter<"RoutineTask"> | $Enums.Category_Routine
    divisionId?: StringWithAggregatesFilter<"RoutineTask"> | string
    positionId?: StringWithAggregatesFilter<"RoutineTask"> | string
    worksProgramId?: StringWithAggregatesFilter<"RoutineTask"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    divisions?: DivisionCreateNestedOneWithoutUserInput
    positions?: PositionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    divisions?: DivisionUncheckedCreateNestedOneWithoutUserInput
    positions?: PositionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    divisions?: DivisionUpdateOneWithoutUserNestedInput
    positions?: PositionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    divisions?: DivisionUncheckedUpdateOneWithoutUserNestedInput
    positions?: PositionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisionCreateInput = {
    id?: string
    name: string
    positions?: PositionCreateNestedManyWithoutDivisionInput
    worksPrograms?: WorksProgramCreateNestedManyWithoutDivisionInput
    routines?: RoutineTaskCreateNestedManyWithoutDivisionInput
    user: UserCreateNestedOneWithoutDivisionsInput
  }

  export type DivisionUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    positions?: PositionUncheckedCreateNestedManyWithoutDivisionInput
    worksPrograms?: WorksProgramUncheckedCreateNestedManyWithoutDivisionInput
    routines?: RoutineTaskUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positions?: PositionUpdateManyWithoutDivisionNestedInput
    worksPrograms?: WorksProgramUpdateManyWithoutDivisionNestedInput
    routines?: RoutineTaskUpdateManyWithoutDivisionNestedInput
    user?: UserUpdateOneRequiredWithoutDivisionsNestedInput
  }

  export type DivisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    positions?: PositionUncheckedUpdateManyWithoutDivisionNestedInput
    worksPrograms?: WorksProgramUncheckedUpdateManyWithoutDivisionNestedInput
    routines?: RoutineTaskUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type DivisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DivisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PositionCreateInput = {
    id?: string
    name: string
    division: DivisionCreateNestedOneWithoutPositionsInput
    worksPrograms?: WorksProgramCreateNestedManyWithoutPositionInput
    routines?: RoutineTaskCreateNestedManyWithoutPositionInput
    user: UserCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateInput = {
    id?: string
    name: string
    divisionId: string
    userId: string
    worksPrograms?: WorksProgramUncheckedCreateNestedManyWithoutPositionInput
    routines?: RoutineTaskUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    division?: DivisionUpdateOneRequiredWithoutPositionsNestedInput
    worksPrograms?: WorksProgramUpdateManyWithoutPositionNestedInput
    routines?: RoutineTaskUpdateManyWithoutPositionNestedInput
    user?: UserUpdateOneRequiredWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    divisionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    worksPrograms?: WorksProgramUncheckedUpdateManyWithoutPositionNestedInput
    routines?: RoutineTaskUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    id?: string
    name: string
    divisionId: string
    userId: string
  }

  export type PositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    divisionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorksProgramCreateInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    division: DivisionCreateNestedOneWithoutWorksProgramsInput
    position: PositionCreateNestedOneWithoutWorksProgramsInput
    routineTasks?: RoutineTaskCreateNestedManyWithoutWorksProgramInput
  }

  export type WorksProgramUncheckedCreateInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    divisionId: string
    positionId: string
    routineTasks?: RoutineTaskUncheckedCreateNestedManyWithoutWorksProgramInput
  }

  export type WorksProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutWorksProgramsNestedInput
    position?: PositionUpdateOneRequiredWithoutWorksProgramsNestedInput
    routineTasks?: RoutineTaskUpdateManyWithoutWorksProgramNestedInput
  }

  export type WorksProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    divisionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    routineTasks?: RoutineTaskUncheckedUpdateManyWithoutWorksProgramNestedInput
  }

  export type WorksProgramCreateManyInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    divisionId: string
    positionId: string
  }

  export type WorksProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    divisionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineTaskCreateInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    division: DivisionCreateNestedOneWithoutRoutinesInput
    position: PositionCreateNestedOneWithoutRoutinesInput
    worksProgram: WorksProgramCreateNestedOneWithoutRoutineTasksInput
  }

  export type RoutineTaskUncheckedCreateInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    divisionId: string
    positionId: string
    worksProgramId: string
  }

  export type RoutineTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    division?: DivisionUpdateOneRequiredWithoutRoutinesNestedInput
    position?: PositionUpdateOneRequiredWithoutRoutinesNestedInput
    worksProgram?: WorksProgramUpdateOneRequiredWithoutRoutineTasksNestedInput
  }

  export type RoutineTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    divisionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    worksProgramId?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineTaskCreateManyInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    divisionId: string
    positionId: string
    worksProgramId: string
  }

  export type RoutineTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
  }

  export type RoutineTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    divisionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    worksProgramId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DivisionNullableRelationFilter = {
    is?: DivisionWhereInput | null
    isNot?: DivisionWhereInput | null
  }

  export type PositionNullableRelationFilter = {
    is?: PositionWhereInput | null
    isNot?: PositionWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PositionListRelationFilter = {
    every?: PositionWhereInput
    some?: PositionWhereInput
    none?: PositionWhereInput
  }

  export type WorksProgramListRelationFilter = {
    every?: WorksProgramWhereInput
    some?: WorksProgramWhereInput
    none?: WorksProgramWhereInput
  }

  export type RoutineTaskListRelationFilter = {
    every?: RoutineTaskWhereInput
    some?: RoutineTaskWhereInput
    none?: RoutineTaskWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorksProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DivisionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type DivisionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type DivisionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type DivisionRelationFilter = {
    is?: DivisionWhereInput
    isNot?: DivisionWhereInput
  }

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    divisionId?: SortOrder
    userId?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    divisionId?: SortOrder
    userId?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    divisionId?: SortOrder
    userId?: SortOrder
  }

  export type EnumCategory_WorksFilter<$PrismaModel = never> = {
    equals?: $Enums.Category_Works | EnumCategory_WorksFieldRefInput<$PrismaModel>
    in?: $Enums.Category_Works[] | ListEnumCategory_WorksFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category_Works[] | ListEnumCategory_WorksFieldRefInput<$PrismaModel>
    not?: NestedEnumCategory_WorksFilter<$PrismaModel> | $Enums.Category_Works
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type PositionRelationFilter = {
    is?: PositionWhereInput
    isNot?: PositionWhereInput
  }

  export type WorksProgramCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    plan?: SortOrder
    indicator?: SortOrder
    time?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
  }

  export type WorksProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    plan?: SortOrder
    indicator?: SortOrder
    time?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
  }

  export type WorksProgramMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    plan?: SortOrder
    indicator?: SortOrder
    time?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
  }

  export type EnumCategory_WorksWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category_Works | EnumCategory_WorksFieldRefInput<$PrismaModel>
    in?: $Enums.Category_Works[] | ListEnumCategory_WorksFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category_Works[] | ListEnumCategory_WorksFieldRefInput<$PrismaModel>
    not?: NestedEnumCategory_WorksWithAggregatesFilter<$PrismaModel> | $Enums.Category_Works
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategory_WorksFilter<$PrismaModel>
    _max?: NestedEnumCategory_WorksFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumCategory_RoutineFilter<$PrismaModel = never> = {
    equals?: $Enums.Category_Routine | EnumCategory_RoutineFieldRefInput<$PrismaModel>
    in?: $Enums.Category_Routine[] | ListEnumCategory_RoutineFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category_Routine[] | ListEnumCategory_RoutineFieldRefInput<$PrismaModel>
    not?: NestedEnumCategory_RoutineFilter<$PrismaModel> | $Enums.Category_Routine
  }

  export type WorksProgramRelationFilter = {
    is?: WorksProgramWhereInput
    isNot?: WorksProgramWhereInput
  }

  export type RoutineTaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    time?: SortOrder
    category?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
    worksProgramId?: SortOrder
  }

  export type RoutineTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    time?: SortOrder
    category?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
    worksProgramId?: SortOrder
  }

  export type RoutineTaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    time?: SortOrder
    category?: SortOrder
    divisionId?: SortOrder
    positionId?: SortOrder
    worksProgramId?: SortOrder
  }

  export type EnumCategory_RoutineWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category_Routine | EnumCategory_RoutineFieldRefInput<$PrismaModel>
    in?: $Enums.Category_Routine[] | ListEnumCategory_RoutineFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category_Routine[] | ListEnumCategory_RoutineFieldRefInput<$PrismaModel>
    not?: NestedEnumCategory_RoutineWithAggregatesFilter<$PrismaModel> | $Enums.Category_Routine
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategory_RoutineFilter<$PrismaModel>
    _max?: NestedEnumCategory_RoutineFilter<$PrismaModel>
  }

  export type DivisionCreateNestedOneWithoutUserInput = {
    create?: XOR<DivisionCreateWithoutUserInput, DivisionUncheckedCreateWithoutUserInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutUserInput
    connect?: DivisionWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutUserInput = {
    create?: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput
    connect?: PositionWhereUniqueInput
  }

  export type DivisionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DivisionCreateWithoutUserInput, DivisionUncheckedCreateWithoutUserInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutUserInput
    connect?: DivisionWhereUniqueInput
  }

  export type PositionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput
    connect?: PositionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DivisionUpdateOneWithoutUserNestedInput = {
    create?: XOR<DivisionCreateWithoutUserInput, DivisionUncheckedCreateWithoutUserInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutUserInput
    upsert?: DivisionUpsertWithoutUserInput
    disconnect?: DivisionWhereInput | boolean
    delete?: DivisionWhereInput | boolean
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutUserInput, DivisionUpdateWithoutUserInput>, DivisionUncheckedUpdateWithoutUserInput>
  }

  export type PositionUpdateOneWithoutUserNestedInput = {
    create?: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput
    upsert?: PositionUpsertWithoutUserInput
    disconnect?: PositionWhereInput | boolean
    delete?: PositionWhereInput | boolean
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutUserInput, PositionUpdateWithoutUserInput>, PositionUncheckedUpdateWithoutUserInput>
  }

  export type DivisionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DivisionCreateWithoutUserInput, DivisionUncheckedCreateWithoutUserInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutUserInput
    upsert?: DivisionUpsertWithoutUserInput
    disconnect?: DivisionWhereInput | boolean
    delete?: DivisionWhereInput | boolean
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutUserInput, DivisionUpdateWithoutUserInput>, DivisionUncheckedUpdateWithoutUserInput>
  }

  export type PositionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUserInput
    upsert?: PositionUpsertWithoutUserInput
    disconnect?: PositionWhereInput | boolean
    delete?: PositionWhereInput | boolean
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutUserInput, PositionUpdateWithoutUserInput>, PositionUncheckedUpdateWithoutUserInput>
  }

  export type PositionCreateNestedManyWithoutDivisionInput = {
    create?: XOR<PositionCreateWithoutDivisionInput, PositionUncheckedCreateWithoutDivisionInput> | PositionCreateWithoutDivisionInput[] | PositionUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutDivisionInput | PositionCreateOrConnectWithoutDivisionInput[]
    createMany?: PositionCreateManyDivisionInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type WorksProgramCreateNestedManyWithoutDivisionInput = {
    create?: XOR<WorksProgramCreateWithoutDivisionInput, WorksProgramUncheckedCreateWithoutDivisionInput> | WorksProgramCreateWithoutDivisionInput[] | WorksProgramUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: WorksProgramCreateOrConnectWithoutDivisionInput | WorksProgramCreateOrConnectWithoutDivisionInput[]
    createMany?: WorksProgramCreateManyDivisionInputEnvelope
    connect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
  }

  export type RoutineTaskCreateNestedManyWithoutDivisionInput = {
    create?: XOR<RoutineTaskCreateWithoutDivisionInput, RoutineTaskUncheckedCreateWithoutDivisionInput> | RoutineTaskCreateWithoutDivisionInput[] | RoutineTaskUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutDivisionInput | RoutineTaskCreateOrConnectWithoutDivisionInput[]
    createMany?: RoutineTaskCreateManyDivisionInputEnvelope
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDivisionsInput = {
    create?: XOR<UserCreateWithoutDivisionsInput, UserUncheckedCreateWithoutDivisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDivisionsInput
    connect?: UserWhereUniqueInput
  }

  export type PositionUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<PositionCreateWithoutDivisionInput, PositionUncheckedCreateWithoutDivisionInput> | PositionCreateWithoutDivisionInput[] | PositionUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutDivisionInput | PositionCreateOrConnectWithoutDivisionInput[]
    createMany?: PositionCreateManyDivisionInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type WorksProgramUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<WorksProgramCreateWithoutDivisionInput, WorksProgramUncheckedCreateWithoutDivisionInput> | WorksProgramCreateWithoutDivisionInput[] | WorksProgramUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: WorksProgramCreateOrConnectWithoutDivisionInput | WorksProgramCreateOrConnectWithoutDivisionInput[]
    createMany?: WorksProgramCreateManyDivisionInputEnvelope
    connect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
  }

  export type RoutineTaskUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<RoutineTaskCreateWithoutDivisionInput, RoutineTaskUncheckedCreateWithoutDivisionInput> | RoutineTaskCreateWithoutDivisionInput[] | RoutineTaskUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutDivisionInput | RoutineTaskCreateOrConnectWithoutDivisionInput[]
    createMany?: RoutineTaskCreateManyDivisionInputEnvelope
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
  }

  export type PositionUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<PositionCreateWithoutDivisionInput, PositionUncheckedCreateWithoutDivisionInput> | PositionCreateWithoutDivisionInput[] | PositionUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutDivisionInput | PositionCreateOrConnectWithoutDivisionInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutDivisionInput | PositionUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: PositionCreateManyDivisionInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutDivisionInput | PositionUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutDivisionInput | PositionUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type WorksProgramUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<WorksProgramCreateWithoutDivisionInput, WorksProgramUncheckedCreateWithoutDivisionInput> | WorksProgramCreateWithoutDivisionInput[] | WorksProgramUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: WorksProgramCreateOrConnectWithoutDivisionInput | WorksProgramCreateOrConnectWithoutDivisionInput[]
    upsert?: WorksProgramUpsertWithWhereUniqueWithoutDivisionInput | WorksProgramUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: WorksProgramCreateManyDivisionInputEnvelope
    set?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    disconnect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    delete?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    connect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    update?: WorksProgramUpdateWithWhereUniqueWithoutDivisionInput | WorksProgramUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: WorksProgramUpdateManyWithWhereWithoutDivisionInput | WorksProgramUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: WorksProgramScalarWhereInput | WorksProgramScalarWhereInput[]
  }

  export type RoutineTaskUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<RoutineTaskCreateWithoutDivisionInput, RoutineTaskUncheckedCreateWithoutDivisionInput> | RoutineTaskCreateWithoutDivisionInput[] | RoutineTaskUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutDivisionInput | RoutineTaskCreateOrConnectWithoutDivisionInput[]
    upsert?: RoutineTaskUpsertWithWhereUniqueWithoutDivisionInput | RoutineTaskUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: RoutineTaskCreateManyDivisionInputEnvelope
    set?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    disconnect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    delete?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    update?: RoutineTaskUpdateWithWhereUniqueWithoutDivisionInput | RoutineTaskUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: RoutineTaskUpdateManyWithWhereWithoutDivisionInput | RoutineTaskUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: RoutineTaskScalarWhereInput | RoutineTaskScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutDivisionsNestedInput = {
    create?: XOR<UserCreateWithoutDivisionsInput, UserUncheckedCreateWithoutDivisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDivisionsInput
    upsert?: UserUpsertWithoutDivisionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDivisionsInput, UserUpdateWithoutDivisionsInput>, UserUncheckedUpdateWithoutDivisionsInput>
  }

  export type PositionUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<PositionCreateWithoutDivisionInput, PositionUncheckedCreateWithoutDivisionInput> | PositionCreateWithoutDivisionInput[] | PositionUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutDivisionInput | PositionCreateOrConnectWithoutDivisionInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutDivisionInput | PositionUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: PositionCreateManyDivisionInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutDivisionInput | PositionUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutDivisionInput | PositionUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type WorksProgramUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<WorksProgramCreateWithoutDivisionInput, WorksProgramUncheckedCreateWithoutDivisionInput> | WorksProgramCreateWithoutDivisionInput[] | WorksProgramUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: WorksProgramCreateOrConnectWithoutDivisionInput | WorksProgramCreateOrConnectWithoutDivisionInput[]
    upsert?: WorksProgramUpsertWithWhereUniqueWithoutDivisionInput | WorksProgramUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: WorksProgramCreateManyDivisionInputEnvelope
    set?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    disconnect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    delete?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    connect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    update?: WorksProgramUpdateWithWhereUniqueWithoutDivisionInput | WorksProgramUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: WorksProgramUpdateManyWithWhereWithoutDivisionInput | WorksProgramUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: WorksProgramScalarWhereInput | WorksProgramScalarWhereInput[]
  }

  export type RoutineTaskUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<RoutineTaskCreateWithoutDivisionInput, RoutineTaskUncheckedCreateWithoutDivisionInput> | RoutineTaskCreateWithoutDivisionInput[] | RoutineTaskUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutDivisionInput | RoutineTaskCreateOrConnectWithoutDivisionInput[]
    upsert?: RoutineTaskUpsertWithWhereUniqueWithoutDivisionInput | RoutineTaskUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: RoutineTaskCreateManyDivisionInputEnvelope
    set?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    disconnect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    delete?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    update?: RoutineTaskUpdateWithWhereUniqueWithoutDivisionInput | RoutineTaskUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: RoutineTaskUpdateManyWithWhereWithoutDivisionInput | RoutineTaskUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: RoutineTaskScalarWhereInput | RoutineTaskScalarWhereInput[]
  }

  export type DivisionCreateNestedOneWithoutPositionsInput = {
    create?: XOR<DivisionCreateWithoutPositionsInput, DivisionUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutPositionsInput
    connect?: DivisionWhereUniqueInput
  }

  export type WorksProgramCreateNestedManyWithoutPositionInput = {
    create?: XOR<WorksProgramCreateWithoutPositionInput, WorksProgramUncheckedCreateWithoutPositionInput> | WorksProgramCreateWithoutPositionInput[] | WorksProgramUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: WorksProgramCreateOrConnectWithoutPositionInput | WorksProgramCreateOrConnectWithoutPositionInput[]
    createMany?: WorksProgramCreateManyPositionInputEnvelope
    connect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
  }

  export type RoutineTaskCreateNestedManyWithoutPositionInput = {
    create?: XOR<RoutineTaskCreateWithoutPositionInput, RoutineTaskUncheckedCreateWithoutPositionInput> | RoutineTaskCreateWithoutPositionInput[] | RoutineTaskUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutPositionInput | RoutineTaskCreateOrConnectWithoutPositionInput[]
    createMany?: RoutineTaskCreateManyPositionInputEnvelope
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPositionsInput = {
    create?: XOR<UserCreateWithoutPositionsInput, UserUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPositionsInput
    connect?: UserWhereUniqueInput
  }

  export type WorksProgramUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<WorksProgramCreateWithoutPositionInput, WorksProgramUncheckedCreateWithoutPositionInput> | WorksProgramCreateWithoutPositionInput[] | WorksProgramUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: WorksProgramCreateOrConnectWithoutPositionInput | WorksProgramCreateOrConnectWithoutPositionInput[]
    createMany?: WorksProgramCreateManyPositionInputEnvelope
    connect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
  }

  export type RoutineTaskUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<RoutineTaskCreateWithoutPositionInput, RoutineTaskUncheckedCreateWithoutPositionInput> | RoutineTaskCreateWithoutPositionInput[] | RoutineTaskUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutPositionInput | RoutineTaskCreateOrConnectWithoutPositionInput[]
    createMany?: RoutineTaskCreateManyPositionInputEnvelope
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
  }

  export type DivisionUpdateOneRequiredWithoutPositionsNestedInput = {
    create?: XOR<DivisionCreateWithoutPositionsInput, DivisionUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutPositionsInput
    upsert?: DivisionUpsertWithoutPositionsInput
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutPositionsInput, DivisionUpdateWithoutPositionsInput>, DivisionUncheckedUpdateWithoutPositionsInput>
  }

  export type WorksProgramUpdateManyWithoutPositionNestedInput = {
    create?: XOR<WorksProgramCreateWithoutPositionInput, WorksProgramUncheckedCreateWithoutPositionInput> | WorksProgramCreateWithoutPositionInput[] | WorksProgramUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: WorksProgramCreateOrConnectWithoutPositionInput | WorksProgramCreateOrConnectWithoutPositionInput[]
    upsert?: WorksProgramUpsertWithWhereUniqueWithoutPositionInput | WorksProgramUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: WorksProgramCreateManyPositionInputEnvelope
    set?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    disconnect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    delete?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    connect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    update?: WorksProgramUpdateWithWhereUniqueWithoutPositionInput | WorksProgramUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: WorksProgramUpdateManyWithWhereWithoutPositionInput | WorksProgramUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: WorksProgramScalarWhereInput | WorksProgramScalarWhereInput[]
  }

  export type RoutineTaskUpdateManyWithoutPositionNestedInput = {
    create?: XOR<RoutineTaskCreateWithoutPositionInput, RoutineTaskUncheckedCreateWithoutPositionInput> | RoutineTaskCreateWithoutPositionInput[] | RoutineTaskUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutPositionInput | RoutineTaskCreateOrConnectWithoutPositionInput[]
    upsert?: RoutineTaskUpsertWithWhereUniqueWithoutPositionInput | RoutineTaskUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: RoutineTaskCreateManyPositionInputEnvelope
    set?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    disconnect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    delete?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    update?: RoutineTaskUpdateWithWhereUniqueWithoutPositionInput | RoutineTaskUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: RoutineTaskUpdateManyWithWhereWithoutPositionInput | RoutineTaskUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: RoutineTaskScalarWhereInput | RoutineTaskScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPositionsNestedInput = {
    create?: XOR<UserCreateWithoutPositionsInput, UserUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPositionsInput
    upsert?: UserUpsertWithoutPositionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPositionsInput, UserUpdateWithoutPositionsInput>, UserUncheckedUpdateWithoutPositionsInput>
  }

  export type WorksProgramUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<WorksProgramCreateWithoutPositionInput, WorksProgramUncheckedCreateWithoutPositionInput> | WorksProgramCreateWithoutPositionInput[] | WorksProgramUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: WorksProgramCreateOrConnectWithoutPositionInput | WorksProgramCreateOrConnectWithoutPositionInput[]
    upsert?: WorksProgramUpsertWithWhereUniqueWithoutPositionInput | WorksProgramUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: WorksProgramCreateManyPositionInputEnvelope
    set?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    disconnect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    delete?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    connect?: WorksProgramWhereUniqueInput | WorksProgramWhereUniqueInput[]
    update?: WorksProgramUpdateWithWhereUniqueWithoutPositionInput | WorksProgramUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: WorksProgramUpdateManyWithWhereWithoutPositionInput | WorksProgramUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: WorksProgramScalarWhereInput | WorksProgramScalarWhereInput[]
  }

  export type RoutineTaskUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<RoutineTaskCreateWithoutPositionInput, RoutineTaskUncheckedCreateWithoutPositionInput> | RoutineTaskCreateWithoutPositionInput[] | RoutineTaskUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutPositionInput | RoutineTaskCreateOrConnectWithoutPositionInput[]
    upsert?: RoutineTaskUpsertWithWhereUniqueWithoutPositionInput | RoutineTaskUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: RoutineTaskCreateManyPositionInputEnvelope
    set?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    disconnect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    delete?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    update?: RoutineTaskUpdateWithWhereUniqueWithoutPositionInput | RoutineTaskUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: RoutineTaskUpdateManyWithWhereWithoutPositionInput | RoutineTaskUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: RoutineTaskScalarWhereInput | RoutineTaskScalarWhereInput[]
  }

  export type DivisionCreateNestedOneWithoutWorksProgramsInput = {
    create?: XOR<DivisionCreateWithoutWorksProgramsInput, DivisionUncheckedCreateWithoutWorksProgramsInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutWorksProgramsInput
    connect?: DivisionWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutWorksProgramsInput = {
    create?: XOR<PositionCreateWithoutWorksProgramsInput, PositionUncheckedCreateWithoutWorksProgramsInput>
    connectOrCreate?: PositionCreateOrConnectWithoutWorksProgramsInput
    connect?: PositionWhereUniqueInput
  }

  export type RoutineTaskCreateNestedManyWithoutWorksProgramInput = {
    create?: XOR<RoutineTaskCreateWithoutWorksProgramInput, RoutineTaskUncheckedCreateWithoutWorksProgramInput> | RoutineTaskCreateWithoutWorksProgramInput[] | RoutineTaskUncheckedCreateWithoutWorksProgramInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutWorksProgramInput | RoutineTaskCreateOrConnectWithoutWorksProgramInput[]
    createMany?: RoutineTaskCreateManyWorksProgramInputEnvelope
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
  }

  export type RoutineTaskUncheckedCreateNestedManyWithoutWorksProgramInput = {
    create?: XOR<RoutineTaskCreateWithoutWorksProgramInput, RoutineTaskUncheckedCreateWithoutWorksProgramInput> | RoutineTaskCreateWithoutWorksProgramInput[] | RoutineTaskUncheckedCreateWithoutWorksProgramInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutWorksProgramInput | RoutineTaskCreateOrConnectWithoutWorksProgramInput[]
    createMany?: RoutineTaskCreateManyWorksProgramInputEnvelope
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
  }

  export type EnumCategory_WorksFieldUpdateOperationsInput = {
    set?: $Enums.Category_Works
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DivisionUpdateOneRequiredWithoutWorksProgramsNestedInput = {
    create?: XOR<DivisionCreateWithoutWorksProgramsInput, DivisionUncheckedCreateWithoutWorksProgramsInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutWorksProgramsInput
    upsert?: DivisionUpsertWithoutWorksProgramsInput
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutWorksProgramsInput, DivisionUpdateWithoutWorksProgramsInput>, DivisionUncheckedUpdateWithoutWorksProgramsInput>
  }

  export type PositionUpdateOneRequiredWithoutWorksProgramsNestedInput = {
    create?: XOR<PositionCreateWithoutWorksProgramsInput, PositionUncheckedCreateWithoutWorksProgramsInput>
    connectOrCreate?: PositionCreateOrConnectWithoutWorksProgramsInput
    upsert?: PositionUpsertWithoutWorksProgramsInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutWorksProgramsInput, PositionUpdateWithoutWorksProgramsInput>, PositionUncheckedUpdateWithoutWorksProgramsInput>
  }

  export type RoutineTaskUpdateManyWithoutWorksProgramNestedInput = {
    create?: XOR<RoutineTaskCreateWithoutWorksProgramInput, RoutineTaskUncheckedCreateWithoutWorksProgramInput> | RoutineTaskCreateWithoutWorksProgramInput[] | RoutineTaskUncheckedCreateWithoutWorksProgramInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutWorksProgramInput | RoutineTaskCreateOrConnectWithoutWorksProgramInput[]
    upsert?: RoutineTaskUpsertWithWhereUniqueWithoutWorksProgramInput | RoutineTaskUpsertWithWhereUniqueWithoutWorksProgramInput[]
    createMany?: RoutineTaskCreateManyWorksProgramInputEnvelope
    set?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    disconnect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    delete?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    update?: RoutineTaskUpdateWithWhereUniqueWithoutWorksProgramInput | RoutineTaskUpdateWithWhereUniqueWithoutWorksProgramInput[]
    updateMany?: RoutineTaskUpdateManyWithWhereWithoutWorksProgramInput | RoutineTaskUpdateManyWithWhereWithoutWorksProgramInput[]
    deleteMany?: RoutineTaskScalarWhereInput | RoutineTaskScalarWhereInput[]
  }

  export type RoutineTaskUncheckedUpdateManyWithoutWorksProgramNestedInput = {
    create?: XOR<RoutineTaskCreateWithoutWorksProgramInput, RoutineTaskUncheckedCreateWithoutWorksProgramInput> | RoutineTaskCreateWithoutWorksProgramInput[] | RoutineTaskUncheckedCreateWithoutWorksProgramInput[]
    connectOrCreate?: RoutineTaskCreateOrConnectWithoutWorksProgramInput | RoutineTaskCreateOrConnectWithoutWorksProgramInput[]
    upsert?: RoutineTaskUpsertWithWhereUniqueWithoutWorksProgramInput | RoutineTaskUpsertWithWhereUniqueWithoutWorksProgramInput[]
    createMany?: RoutineTaskCreateManyWorksProgramInputEnvelope
    set?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    disconnect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    delete?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    connect?: RoutineTaskWhereUniqueInput | RoutineTaskWhereUniqueInput[]
    update?: RoutineTaskUpdateWithWhereUniqueWithoutWorksProgramInput | RoutineTaskUpdateWithWhereUniqueWithoutWorksProgramInput[]
    updateMany?: RoutineTaskUpdateManyWithWhereWithoutWorksProgramInput | RoutineTaskUpdateManyWithWhereWithoutWorksProgramInput[]
    deleteMany?: RoutineTaskScalarWhereInput | RoutineTaskScalarWhereInput[]
  }

  export type DivisionCreateNestedOneWithoutRoutinesInput = {
    create?: XOR<DivisionCreateWithoutRoutinesInput, DivisionUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutRoutinesInput
    connect?: DivisionWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutRoutinesInput = {
    create?: XOR<PositionCreateWithoutRoutinesInput, PositionUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutRoutinesInput
    connect?: PositionWhereUniqueInput
  }

  export type WorksProgramCreateNestedOneWithoutRoutineTasksInput = {
    create?: XOR<WorksProgramCreateWithoutRoutineTasksInput, WorksProgramUncheckedCreateWithoutRoutineTasksInput>
    connectOrCreate?: WorksProgramCreateOrConnectWithoutRoutineTasksInput
    connect?: WorksProgramWhereUniqueInput
  }

  export type EnumCategory_RoutineFieldUpdateOperationsInput = {
    set?: $Enums.Category_Routine
  }

  export type DivisionUpdateOneRequiredWithoutRoutinesNestedInput = {
    create?: XOR<DivisionCreateWithoutRoutinesInput, DivisionUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutRoutinesInput
    upsert?: DivisionUpsertWithoutRoutinesInput
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutRoutinesInput, DivisionUpdateWithoutRoutinesInput>, DivisionUncheckedUpdateWithoutRoutinesInput>
  }

  export type PositionUpdateOneRequiredWithoutRoutinesNestedInput = {
    create?: XOR<PositionCreateWithoutRoutinesInput, PositionUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutRoutinesInput
    upsert?: PositionUpsertWithoutRoutinesInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutRoutinesInput, PositionUpdateWithoutRoutinesInput>, PositionUncheckedUpdateWithoutRoutinesInput>
  }

  export type WorksProgramUpdateOneRequiredWithoutRoutineTasksNestedInput = {
    create?: XOR<WorksProgramCreateWithoutRoutineTasksInput, WorksProgramUncheckedCreateWithoutRoutineTasksInput>
    connectOrCreate?: WorksProgramCreateOrConnectWithoutRoutineTasksInput
    upsert?: WorksProgramUpsertWithoutRoutineTasksInput
    connect?: WorksProgramWhereUniqueInput
    update?: XOR<XOR<WorksProgramUpdateToOneWithWhereWithoutRoutineTasksInput, WorksProgramUpdateWithoutRoutineTasksInput>, WorksProgramUncheckedUpdateWithoutRoutineTasksInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCategory_WorksFilter<$PrismaModel = never> = {
    equals?: $Enums.Category_Works | EnumCategory_WorksFieldRefInput<$PrismaModel>
    in?: $Enums.Category_Works[] | ListEnumCategory_WorksFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category_Works[] | ListEnumCategory_WorksFieldRefInput<$PrismaModel>
    not?: NestedEnumCategory_WorksFilter<$PrismaModel> | $Enums.Category_Works
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumCategory_WorksWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category_Works | EnumCategory_WorksFieldRefInput<$PrismaModel>
    in?: $Enums.Category_Works[] | ListEnumCategory_WorksFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category_Works[] | ListEnumCategory_WorksFieldRefInput<$PrismaModel>
    not?: NestedEnumCategory_WorksWithAggregatesFilter<$PrismaModel> | $Enums.Category_Works
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategory_WorksFilter<$PrismaModel>
    _max?: NestedEnumCategory_WorksFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumCategory_RoutineFilter<$PrismaModel = never> = {
    equals?: $Enums.Category_Routine | EnumCategory_RoutineFieldRefInput<$PrismaModel>
    in?: $Enums.Category_Routine[] | ListEnumCategory_RoutineFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category_Routine[] | ListEnumCategory_RoutineFieldRefInput<$PrismaModel>
    not?: NestedEnumCategory_RoutineFilter<$PrismaModel> | $Enums.Category_Routine
  }

  export type NestedEnumCategory_RoutineWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category_Routine | EnumCategory_RoutineFieldRefInput<$PrismaModel>
    in?: $Enums.Category_Routine[] | ListEnumCategory_RoutineFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category_Routine[] | ListEnumCategory_RoutineFieldRefInput<$PrismaModel>
    not?: NestedEnumCategory_RoutineWithAggregatesFilter<$PrismaModel> | $Enums.Category_Routine
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategory_RoutineFilter<$PrismaModel>
    _max?: NestedEnumCategory_RoutineFilter<$PrismaModel>
  }

  export type DivisionCreateWithoutUserInput = {
    id?: string
    name: string
    positions?: PositionCreateNestedManyWithoutDivisionInput
    worksPrograms?: WorksProgramCreateNestedManyWithoutDivisionInput
    routines?: RoutineTaskCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    positions?: PositionUncheckedCreateNestedManyWithoutDivisionInput
    worksPrograms?: WorksProgramUncheckedCreateNestedManyWithoutDivisionInput
    routines?: RoutineTaskUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionCreateOrConnectWithoutUserInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutUserInput, DivisionUncheckedCreateWithoutUserInput>
  }

  export type PositionCreateWithoutUserInput = {
    id?: string
    name: string
    division: DivisionCreateNestedOneWithoutPositionsInput
    worksPrograms?: WorksProgramCreateNestedManyWithoutPositionInput
    routines?: RoutineTaskCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    divisionId: string
    worksPrograms?: WorksProgramUncheckedCreateNestedManyWithoutPositionInput
    routines?: RoutineTaskUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutUserInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput>
  }

  export type DivisionUpsertWithoutUserInput = {
    update: XOR<DivisionUpdateWithoutUserInput, DivisionUncheckedUpdateWithoutUserInput>
    create: XOR<DivisionCreateWithoutUserInput, DivisionUncheckedCreateWithoutUserInput>
    where?: DivisionWhereInput
  }

  export type DivisionUpdateToOneWithWhereWithoutUserInput = {
    where?: DivisionWhereInput
    data: XOR<DivisionUpdateWithoutUserInput, DivisionUncheckedUpdateWithoutUserInput>
  }

  export type DivisionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positions?: PositionUpdateManyWithoutDivisionNestedInput
    worksPrograms?: WorksProgramUpdateManyWithoutDivisionNestedInput
    routines?: RoutineTaskUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positions?: PositionUncheckedUpdateManyWithoutDivisionNestedInput
    worksPrograms?: WorksProgramUncheckedUpdateManyWithoutDivisionNestedInput
    routines?: RoutineTaskUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type PositionUpsertWithoutUserInput = {
    update: XOR<PositionUpdateWithoutUserInput, PositionUncheckedUpdateWithoutUserInput>
    create: XOR<PositionCreateWithoutUserInput, PositionUncheckedCreateWithoutUserInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutUserInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutUserInput, PositionUncheckedUpdateWithoutUserInput>
  }

  export type PositionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    division?: DivisionUpdateOneRequiredWithoutPositionsNestedInput
    worksPrograms?: WorksProgramUpdateManyWithoutPositionNestedInput
    routines?: RoutineTaskUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    divisionId?: StringFieldUpdateOperationsInput | string
    worksPrograms?: WorksProgramUncheckedUpdateManyWithoutPositionNestedInput
    routines?: RoutineTaskUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateWithoutDivisionInput = {
    id?: string
    name: string
    worksPrograms?: WorksProgramCreateNestedManyWithoutPositionInput
    routines?: RoutineTaskCreateNestedManyWithoutPositionInput
    user: UserCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateWithoutDivisionInput = {
    id?: string
    name: string
    userId: string
    worksPrograms?: WorksProgramUncheckedCreateNestedManyWithoutPositionInput
    routines?: RoutineTaskUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutDivisionInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutDivisionInput, PositionUncheckedCreateWithoutDivisionInput>
  }

  export type PositionCreateManyDivisionInputEnvelope = {
    data: PositionCreateManyDivisionInput | PositionCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type WorksProgramCreateWithoutDivisionInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    position: PositionCreateNestedOneWithoutWorksProgramsInput
    routineTasks?: RoutineTaskCreateNestedManyWithoutWorksProgramInput
  }

  export type WorksProgramUncheckedCreateWithoutDivisionInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    positionId: string
    routineTasks?: RoutineTaskUncheckedCreateNestedManyWithoutWorksProgramInput
  }

  export type WorksProgramCreateOrConnectWithoutDivisionInput = {
    where: WorksProgramWhereUniqueInput
    create: XOR<WorksProgramCreateWithoutDivisionInput, WorksProgramUncheckedCreateWithoutDivisionInput>
  }

  export type WorksProgramCreateManyDivisionInputEnvelope = {
    data: WorksProgramCreateManyDivisionInput | WorksProgramCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type RoutineTaskCreateWithoutDivisionInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    position: PositionCreateNestedOneWithoutRoutinesInput
    worksProgram: WorksProgramCreateNestedOneWithoutRoutineTasksInput
  }

  export type RoutineTaskUncheckedCreateWithoutDivisionInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    positionId: string
    worksProgramId: string
  }

  export type RoutineTaskCreateOrConnectWithoutDivisionInput = {
    where: RoutineTaskWhereUniqueInput
    create: XOR<RoutineTaskCreateWithoutDivisionInput, RoutineTaskUncheckedCreateWithoutDivisionInput>
  }

  export type RoutineTaskCreateManyDivisionInputEnvelope = {
    data: RoutineTaskCreateManyDivisionInput | RoutineTaskCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDivisionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    positions?: PositionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDivisionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    positions?: PositionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDivisionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDivisionsInput, UserUncheckedCreateWithoutDivisionsInput>
  }

  export type PositionUpsertWithWhereUniqueWithoutDivisionInput = {
    where: PositionWhereUniqueInput
    update: XOR<PositionUpdateWithoutDivisionInput, PositionUncheckedUpdateWithoutDivisionInput>
    create: XOR<PositionCreateWithoutDivisionInput, PositionUncheckedCreateWithoutDivisionInput>
  }

  export type PositionUpdateWithWhereUniqueWithoutDivisionInput = {
    where: PositionWhereUniqueInput
    data: XOR<PositionUpdateWithoutDivisionInput, PositionUncheckedUpdateWithoutDivisionInput>
  }

  export type PositionUpdateManyWithWhereWithoutDivisionInput = {
    where: PositionScalarWhereInput
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyWithoutDivisionInput>
  }

  export type PositionScalarWhereInput = {
    AND?: PositionScalarWhereInput | PositionScalarWhereInput[]
    OR?: PositionScalarWhereInput[]
    NOT?: PositionScalarWhereInput | PositionScalarWhereInput[]
    id?: StringFilter<"Position"> | string
    name?: StringFilter<"Position"> | string
    divisionId?: StringFilter<"Position"> | string
    userId?: StringFilter<"Position"> | string
  }

  export type WorksProgramUpsertWithWhereUniqueWithoutDivisionInput = {
    where: WorksProgramWhereUniqueInput
    update: XOR<WorksProgramUpdateWithoutDivisionInput, WorksProgramUncheckedUpdateWithoutDivisionInput>
    create: XOR<WorksProgramCreateWithoutDivisionInput, WorksProgramUncheckedCreateWithoutDivisionInput>
  }

  export type WorksProgramUpdateWithWhereUniqueWithoutDivisionInput = {
    where: WorksProgramWhereUniqueInput
    data: XOR<WorksProgramUpdateWithoutDivisionInput, WorksProgramUncheckedUpdateWithoutDivisionInput>
  }

  export type WorksProgramUpdateManyWithWhereWithoutDivisionInput = {
    where: WorksProgramScalarWhereInput
    data: XOR<WorksProgramUpdateManyMutationInput, WorksProgramUncheckedUpdateManyWithoutDivisionInput>
  }

  export type WorksProgramScalarWhereInput = {
    AND?: WorksProgramScalarWhereInput | WorksProgramScalarWhereInput[]
    OR?: WorksProgramScalarWhereInput[]
    NOT?: WorksProgramScalarWhereInput | WorksProgramScalarWhereInput[]
    id?: StringFilter<"WorksProgram"> | string
    name?: StringFilter<"WorksProgram"> | string
    category?: EnumCategory_WorksFilter<"WorksProgram"> | $Enums.Category_Works
    plan?: StringFilter<"WorksProgram"> | string
    indicator?: StringFilter<"WorksProgram"> | string
    time?: DateTimeFilter<"WorksProgram"> | Date | string
    status?: EnumStatusFilter<"WorksProgram"> | $Enums.Status
    created_at?: DateTimeFilter<"WorksProgram"> | Date | string
    updated_at?: DateTimeFilter<"WorksProgram"> | Date | string
    divisionId?: StringFilter<"WorksProgram"> | string
    positionId?: StringFilter<"WorksProgram"> | string
  }

  export type RoutineTaskUpsertWithWhereUniqueWithoutDivisionInput = {
    where: RoutineTaskWhereUniqueInput
    update: XOR<RoutineTaskUpdateWithoutDivisionInput, RoutineTaskUncheckedUpdateWithoutDivisionInput>
    create: XOR<RoutineTaskCreateWithoutDivisionInput, RoutineTaskUncheckedCreateWithoutDivisionInput>
  }

  export type RoutineTaskUpdateWithWhereUniqueWithoutDivisionInput = {
    where: RoutineTaskWhereUniqueInput
    data: XOR<RoutineTaskUpdateWithoutDivisionInput, RoutineTaskUncheckedUpdateWithoutDivisionInput>
  }

  export type RoutineTaskUpdateManyWithWhereWithoutDivisionInput = {
    where: RoutineTaskScalarWhereInput
    data: XOR<RoutineTaskUpdateManyMutationInput, RoutineTaskUncheckedUpdateManyWithoutDivisionInput>
  }

  export type RoutineTaskScalarWhereInput = {
    AND?: RoutineTaskScalarWhereInput | RoutineTaskScalarWhereInput[]
    OR?: RoutineTaskScalarWhereInput[]
    NOT?: RoutineTaskScalarWhereInput | RoutineTaskScalarWhereInput[]
    id?: StringFilter<"RoutineTask"> | string
    name?: StringFilter<"RoutineTask"> | string
    status?: EnumStatusFilter<"RoutineTask"> | $Enums.Status
    time?: DateTimeFilter<"RoutineTask"> | Date | string
    category?: EnumCategory_RoutineFilter<"RoutineTask"> | $Enums.Category_Routine
    divisionId?: StringFilter<"RoutineTask"> | string
    positionId?: StringFilter<"RoutineTask"> | string
    worksProgramId?: StringFilter<"RoutineTask"> | string
  }

  export type UserUpsertWithoutDivisionsInput = {
    update: XOR<UserUpdateWithoutDivisionsInput, UserUncheckedUpdateWithoutDivisionsInput>
    create: XOR<UserCreateWithoutDivisionsInput, UserUncheckedCreateWithoutDivisionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDivisionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDivisionsInput, UserUncheckedUpdateWithoutDivisionsInput>
  }

  export type UserUpdateWithoutDivisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDivisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DivisionCreateWithoutPositionsInput = {
    id?: string
    name: string
    worksPrograms?: WorksProgramCreateNestedManyWithoutDivisionInput
    routines?: RoutineTaskCreateNestedManyWithoutDivisionInput
    user: UserCreateNestedOneWithoutDivisionsInput
  }

  export type DivisionUncheckedCreateWithoutPositionsInput = {
    id?: string
    name: string
    userId: string
    worksPrograms?: WorksProgramUncheckedCreateNestedManyWithoutDivisionInput
    routines?: RoutineTaskUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionCreateOrConnectWithoutPositionsInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutPositionsInput, DivisionUncheckedCreateWithoutPositionsInput>
  }

  export type WorksProgramCreateWithoutPositionInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    division: DivisionCreateNestedOneWithoutWorksProgramsInput
    routineTasks?: RoutineTaskCreateNestedManyWithoutWorksProgramInput
  }

  export type WorksProgramUncheckedCreateWithoutPositionInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    divisionId: string
    routineTasks?: RoutineTaskUncheckedCreateNestedManyWithoutWorksProgramInput
  }

  export type WorksProgramCreateOrConnectWithoutPositionInput = {
    where: WorksProgramWhereUniqueInput
    create: XOR<WorksProgramCreateWithoutPositionInput, WorksProgramUncheckedCreateWithoutPositionInput>
  }

  export type WorksProgramCreateManyPositionInputEnvelope = {
    data: WorksProgramCreateManyPositionInput | WorksProgramCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type RoutineTaskCreateWithoutPositionInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    division: DivisionCreateNestedOneWithoutRoutinesInput
    worksProgram: WorksProgramCreateNestedOneWithoutRoutineTasksInput
  }

  export type RoutineTaskUncheckedCreateWithoutPositionInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    divisionId: string
    worksProgramId: string
  }

  export type RoutineTaskCreateOrConnectWithoutPositionInput = {
    where: RoutineTaskWhereUniqueInput
    create: XOR<RoutineTaskCreateWithoutPositionInput, RoutineTaskUncheckedCreateWithoutPositionInput>
  }

  export type RoutineTaskCreateManyPositionInputEnvelope = {
    data: RoutineTaskCreateManyPositionInput | RoutineTaskCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPositionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    divisions?: DivisionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPositionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    divisions?: DivisionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPositionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPositionsInput, UserUncheckedCreateWithoutPositionsInput>
  }

  export type DivisionUpsertWithoutPositionsInput = {
    update: XOR<DivisionUpdateWithoutPositionsInput, DivisionUncheckedUpdateWithoutPositionsInput>
    create: XOR<DivisionCreateWithoutPositionsInput, DivisionUncheckedCreateWithoutPositionsInput>
    where?: DivisionWhereInput
  }

  export type DivisionUpdateToOneWithWhereWithoutPositionsInput = {
    where?: DivisionWhereInput
    data: XOR<DivisionUpdateWithoutPositionsInput, DivisionUncheckedUpdateWithoutPositionsInput>
  }

  export type DivisionUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    worksPrograms?: WorksProgramUpdateManyWithoutDivisionNestedInput
    routines?: RoutineTaskUpdateManyWithoutDivisionNestedInput
    user?: UserUpdateOneRequiredWithoutDivisionsNestedInput
  }

  export type DivisionUncheckedUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    worksPrograms?: WorksProgramUncheckedUpdateManyWithoutDivisionNestedInput
    routines?: RoutineTaskUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type WorksProgramUpsertWithWhereUniqueWithoutPositionInput = {
    where: WorksProgramWhereUniqueInput
    update: XOR<WorksProgramUpdateWithoutPositionInput, WorksProgramUncheckedUpdateWithoutPositionInput>
    create: XOR<WorksProgramCreateWithoutPositionInput, WorksProgramUncheckedCreateWithoutPositionInput>
  }

  export type WorksProgramUpdateWithWhereUniqueWithoutPositionInput = {
    where: WorksProgramWhereUniqueInput
    data: XOR<WorksProgramUpdateWithoutPositionInput, WorksProgramUncheckedUpdateWithoutPositionInput>
  }

  export type WorksProgramUpdateManyWithWhereWithoutPositionInput = {
    where: WorksProgramScalarWhereInput
    data: XOR<WorksProgramUpdateManyMutationInput, WorksProgramUncheckedUpdateManyWithoutPositionInput>
  }

  export type RoutineTaskUpsertWithWhereUniqueWithoutPositionInput = {
    where: RoutineTaskWhereUniqueInput
    update: XOR<RoutineTaskUpdateWithoutPositionInput, RoutineTaskUncheckedUpdateWithoutPositionInput>
    create: XOR<RoutineTaskCreateWithoutPositionInput, RoutineTaskUncheckedCreateWithoutPositionInput>
  }

  export type RoutineTaskUpdateWithWhereUniqueWithoutPositionInput = {
    where: RoutineTaskWhereUniqueInput
    data: XOR<RoutineTaskUpdateWithoutPositionInput, RoutineTaskUncheckedUpdateWithoutPositionInput>
  }

  export type RoutineTaskUpdateManyWithWhereWithoutPositionInput = {
    where: RoutineTaskScalarWhereInput
    data: XOR<RoutineTaskUpdateManyMutationInput, RoutineTaskUncheckedUpdateManyWithoutPositionInput>
  }

  export type UserUpsertWithoutPositionsInput = {
    update: XOR<UserUpdateWithoutPositionsInput, UserUncheckedUpdateWithoutPositionsInput>
    create: XOR<UserCreateWithoutPositionsInput, UserUncheckedCreateWithoutPositionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPositionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPositionsInput, UserUncheckedUpdateWithoutPositionsInput>
  }

  export type UserUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    divisions?: DivisionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    divisions?: DivisionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DivisionCreateWithoutWorksProgramsInput = {
    id?: string
    name: string
    positions?: PositionCreateNestedManyWithoutDivisionInput
    routines?: RoutineTaskCreateNestedManyWithoutDivisionInput
    user: UserCreateNestedOneWithoutDivisionsInput
  }

  export type DivisionUncheckedCreateWithoutWorksProgramsInput = {
    id?: string
    name: string
    userId: string
    positions?: PositionUncheckedCreateNestedManyWithoutDivisionInput
    routines?: RoutineTaskUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionCreateOrConnectWithoutWorksProgramsInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutWorksProgramsInput, DivisionUncheckedCreateWithoutWorksProgramsInput>
  }

  export type PositionCreateWithoutWorksProgramsInput = {
    id?: string
    name: string
    division: DivisionCreateNestedOneWithoutPositionsInput
    routines?: RoutineTaskCreateNestedManyWithoutPositionInput
    user: UserCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateWithoutWorksProgramsInput = {
    id?: string
    name: string
    divisionId: string
    userId: string
    routines?: RoutineTaskUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutWorksProgramsInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutWorksProgramsInput, PositionUncheckedCreateWithoutWorksProgramsInput>
  }

  export type RoutineTaskCreateWithoutWorksProgramInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    division: DivisionCreateNestedOneWithoutRoutinesInput
    position: PositionCreateNestedOneWithoutRoutinesInput
  }

  export type RoutineTaskUncheckedCreateWithoutWorksProgramInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    divisionId: string
    positionId: string
  }

  export type RoutineTaskCreateOrConnectWithoutWorksProgramInput = {
    where: RoutineTaskWhereUniqueInput
    create: XOR<RoutineTaskCreateWithoutWorksProgramInput, RoutineTaskUncheckedCreateWithoutWorksProgramInput>
  }

  export type RoutineTaskCreateManyWorksProgramInputEnvelope = {
    data: RoutineTaskCreateManyWorksProgramInput | RoutineTaskCreateManyWorksProgramInput[]
    skipDuplicates?: boolean
  }

  export type DivisionUpsertWithoutWorksProgramsInput = {
    update: XOR<DivisionUpdateWithoutWorksProgramsInput, DivisionUncheckedUpdateWithoutWorksProgramsInput>
    create: XOR<DivisionCreateWithoutWorksProgramsInput, DivisionUncheckedCreateWithoutWorksProgramsInput>
    where?: DivisionWhereInput
  }

  export type DivisionUpdateToOneWithWhereWithoutWorksProgramsInput = {
    where?: DivisionWhereInput
    data: XOR<DivisionUpdateWithoutWorksProgramsInput, DivisionUncheckedUpdateWithoutWorksProgramsInput>
  }

  export type DivisionUpdateWithoutWorksProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positions?: PositionUpdateManyWithoutDivisionNestedInput
    routines?: RoutineTaskUpdateManyWithoutDivisionNestedInput
    user?: UserUpdateOneRequiredWithoutDivisionsNestedInput
  }

  export type DivisionUncheckedUpdateWithoutWorksProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    positions?: PositionUncheckedUpdateManyWithoutDivisionNestedInput
    routines?: RoutineTaskUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type PositionUpsertWithoutWorksProgramsInput = {
    update: XOR<PositionUpdateWithoutWorksProgramsInput, PositionUncheckedUpdateWithoutWorksProgramsInput>
    create: XOR<PositionCreateWithoutWorksProgramsInput, PositionUncheckedCreateWithoutWorksProgramsInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutWorksProgramsInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutWorksProgramsInput, PositionUncheckedUpdateWithoutWorksProgramsInput>
  }

  export type PositionUpdateWithoutWorksProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    division?: DivisionUpdateOneRequiredWithoutPositionsNestedInput
    routines?: RoutineTaskUpdateManyWithoutPositionNestedInput
    user?: UserUpdateOneRequiredWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateWithoutWorksProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    divisionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    routines?: RoutineTaskUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type RoutineTaskUpsertWithWhereUniqueWithoutWorksProgramInput = {
    where: RoutineTaskWhereUniqueInput
    update: XOR<RoutineTaskUpdateWithoutWorksProgramInput, RoutineTaskUncheckedUpdateWithoutWorksProgramInput>
    create: XOR<RoutineTaskCreateWithoutWorksProgramInput, RoutineTaskUncheckedCreateWithoutWorksProgramInput>
  }

  export type RoutineTaskUpdateWithWhereUniqueWithoutWorksProgramInput = {
    where: RoutineTaskWhereUniqueInput
    data: XOR<RoutineTaskUpdateWithoutWorksProgramInput, RoutineTaskUncheckedUpdateWithoutWorksProgramInput>
  }

  export type RoutineTaskUpdateManyWithWhereWithoutWorksProgramInput = {
    where: RoutineTaskScalarWhereInput
    data: XOR<RoutineTaskUpdateManyMutationInput, RoutineTaskUncheckedUpdateManyWithoutWorksProgramInput>
  }

  export type DivisionCreateWithoutRoutinesInput = {
    id?: string
    name: string
    positions?: PositionCreateNestedManyWithoutDivisionInput
    worksPrograms?: WorksProgramCreateNestedManyWithoutDivisionInput
    user: UserCreateNestedOneWithoutDivisionsInput
  }

  export type DivisionUncheckedCreateWithoutRoutinesInput = {
    id?: string
    name: string
    userId: string
    positions?: PositionUncheckedCreateNestedManyWithoutDivisionInput
    worksPrograms?: WorksProgramUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionCreateOrConnectWithoutRoutinesInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutRoutinesInput, DivisionUncheckedCreateWithoutRoutinesInput>
  }

  export type PositionCreateWithoutRoutinesInput = {
    id?: string
    name: string
    division: DivisionCreateNestedOneWithoutPositionsInput
    worksPrograms?: WorksProgramCreateNestedManyWithoutPositionInput
    user: UserCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateWithoutRoutinesInput = {
    id?: string
    name: string
    divisionId: string
    userId: string
    worksPrograms?: WorksProgramUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutRoutinesInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutRoutinesInput, PositionUncheckedCreateWithoutRoutinesInput>
  }

  export type WorksProgramCreateWithoutRoutineTasksInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    division: DivisionCreateNestedOneWithoutWorksProgramsInput
    position: PositionCreateNestedOneWithoutWorksProgramsInput
  }

  export type WorksProgramUncheckedCreateWithoutRoutineTasksInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    divisionId: string
    positionId: string
  }

  export type WorksProgramCreateOrConnectWithoutRoutineTasksInput = {
    where: WorksProgramWhereUniqueInput
    create: XOR<WorksProgramCreateWithoutRoutineTasksInput, WorksProgramUncheckedCreateWithoutRoutineTasksInput>
  }

  export type DivisionUpsertWithoutRoutinesInput = {
    update: XOR<DivisionUpdateWithoutRoutinesInput, DivisionUncheckedUpdateWithoutRoutinesInput>
    create: XOR<DivisionCreateWithoutRoutinesInput, DivisionUncheckedCreateWithoutRoutinesInput>
    where?: DivisionWhereInput
  }

  export type DivisionUpdateToOneWithWhereWithoutRoutinesInput = {
    where?: DivisionWhereInput
    data: XOR<DivisionUpdateWithoutRoutinesInput, DivisionUncheckedUpdateWithoutRoutinesInput>
  }

  export type DivisionUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    positions?: PositionUpdateManyWithoutDivisionNestedInput
    worksPrograms?: WorksProgramUpdateManyWithoutDivisionNestedInput
    user?: UserUpdateOneRequiredWithoutDivisionsNestedInput
  }

  export type DivisionUncheckedUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    positions?: PositionUncheckedUpdateManyWithoutDivisionNestedInput
    worksPrograms?: WorksProgramUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type PositionUpsertWithoutRoutinesInput = {
    update: XOR<PositionUpdateWithoutRoutinesInput, PositionUncheckedUpdateWithoutRoutinesInput>
    create: XOR<PositionCreateWithoutRoutinesInput, PositionUncheckedCreateWithoutRoutinesInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutRoutinesInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutRoutinesInput, PositionUncheckedUpdateWithoutRoutinesInput>
  }

  export type PositionUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    division?: DivisionUpdateOneRequiredWithoutPositionsNestedInput
    worksPrograms?: WorksProgramUpdateManyWithoutPositionNestedInput
    user?: UserUpdateOneRequiredWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    divisionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    worksPrograms?: WorksProgramUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type WorksProgramUpsertWithoutRoutineTasksInput = {
    update: XOR<WorksProgramUpdateWithoutRoutineTasksInput, WorksProgramUncheckedUpdateWithoutRoutineTasksInput>
    create: XOR<WorksProgramCreateWithoutRoutineTasksInput, WorksProgramUncheckedCreateWithoutRoutineTasksInput>
    where?: WorksProgramWhereInput
  }

  export type WorksProgramUpdateToOneWithWhereWithoutRoutineTasksInput = {
    where?: WorksProgramWhereInput
    data: XOR<WorksProgramUpdateWithoutRoutineTasksInput, WorksProgramUncheckedUpdateWithoutRoutineTasksInput>
  }

  export type WorksProgramUpdateWithoutRoutineTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutWorksProgramsNestedInput
    position?: PositionUpdateOneRequiredWithoutWorksProgramsNestedInput
  }

  export type WorksProgramUncheckedUpdateWithoutRoutineTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    divisionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
  }

  export type PositionCreateManyDivisionInput = {
    id?: string
    name: string
    userId: string
  }

  export type WorksProgramCreateManyDivisionInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    positionId: string
  }

  export type RoutineTaskCreateManyDivisionInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    positionId: string
    worksProgramId: string
  }

  export type PositionUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    worksPrograms?: WorksProgramUpdateManyWithoutPositionNestedInput
    routines?: RoutineTaskUpdateManyWithoutPositionNestedInput
    user?: UserUpdateOneRequiredWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    worksPrograms?: WorksProgramUncheckedUpdateManyWithoutPositionNestedInput
    routines?: RoutineTaskUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateManyWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorksProgramUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutWorksProgramsNestedInput
    routineTasks?: RoutineTaskUpdateManyWithoutWorksProgramNestedInput
  }

  export type WorksProgramUncheckedUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    positionId?: StringFieldUpdateOperationsInput | string
    routineTasks?: RoutineTaskUncheckedUpdateManyWithoutWorksProgramNestedInput
  }

  export type WorksProgramUncheckedUpdateManyWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    positionId?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineTaskUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    position?: PositionUpdateOneRequiredWithoutRoutinesNestedInput
    worksProgram?: WorksProgramUpdateOneRequiredWithoutRoutineTasksNestedInput
  }

  export type RoutineTaskUncheckedUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    positionId?: StringFieldUpdateOperationsInput | string
    worksProgramId?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineTaskUncheckedUpdateManyWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    positionId?: StringFieldUpdateOperationsInput | string
    worksProgramId?: StringFieldUpdateOperationsInput | string
  }

  export type WorksProgramCreateManyPositionInput = {
    id?: string
    name: string
    category: $Enums.Category_Works
    plan: string
    indicator: string
    time?: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    divisionId: string
  }

  export type RoutineTaskCreateManyPositionInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    divisionId: string
    worksProgramId: string
  }

  export type WorksProgramUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutWorksProgramsNestedInput
    routineTasks?: RoutineTaskUpdateManyWithoutWorksProgramNestedInput
  }

  export type WorksProgramUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    divisionId?: StringFieldUpdateOperationsInput | string
    routineTasks?: RoutineTaskUncheckedUpdateManyWithoutWorksProgramNestedInput
  }

  export type WorksProgramUncheckedUpdateManyWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategory_WorksFieldUpdateOperationsInput | $Enums.Category_Works
    plan?: StringFieldUpdateOperationsInput | string
    indicator?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    divisionId?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineTaskUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    division?: DivisionUpdateOneRequiredWithoutRoutinesNestedInput
    worksProgram?: WorksProgramUpdateOneRequiredWithoutRoutineTasksNestedInput
  }

  export type RoutineTaskUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    divisionId?: StringFieldUpdateOperationsInput | string
    worksProgramId?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineTaskUncheckedUpdateManyWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    divisionId?: StringFieldUpdateOperationsInput | string
    worksProgramId?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineTaskCreateManyWorksProgramInput = {
    id?: string
    name: string
    status: $Enums.Status
    time?: Date | string
    category: $Enums.Category_Routine
    divisionId: string
    positionId: string
  }

  export type RoutineTaskUpdateWithoutWorksProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    division?: DivisionUpdateOneRequiredWithoutRoutinesNestedInput
    position?: PositionUpdateOneRequiredWithoutRoutinesNestedInput
  }

  export type RoutineTaskUncheckedUpdateWithoutWorksProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    divisionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineTaskUncheckedUpdateManyWithoutWorksProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategory_RoutineFieldUpdateOperationsInput | $Enums.Category_Routine
    divisionId?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DivisionCountOutputTypeDefaultArgs instead
     */
    export type DivisionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DivisionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionCountOutputTypeDefaultArgs instead
     */
    export type PositionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorksProgramCountOutputTypeDefaultArgs instead
     */
    export type WorksProgramCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorksProgramCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DivisionDefaultArgs instead
     */
    export type DivisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DivisionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionDefaultArgs instead
     */
    export type PositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorksProgramDefaultArgs instead
     */
    export type WorksProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorksProgramDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoutineTaskDefaultArgs instead
     */
    export type RoutineTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoutineTaskDefaultArgs<ExtArgs>

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