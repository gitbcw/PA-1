
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TimeRecord
 * 
 */
export type TimeRecord = $Result.DefaultSelection<Prisma.$TimeRecordPayload>
/**
 * Model ProgressLog
 * 
 */
export type ProgressLog = $Result.DefaultSelection<Prisma.$ProgressLogPayload>
/**
 * Model ImportedFile
 * 
 */
export type ImportedFile = $Result.DefaultSelection<Prisma.$ImportedFilePayload>
/**
 * Model LogArchive
 * 
 */
export type LogArchive = $Result.DefaultSelection<Prisma.$LogArchivePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TaskPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]


export const GoalLevel: {
  VISION: 'VISION',
  YEARLY: 'YEARLY',
  QUARTERLY: 'QUARTERLY',
  MONTHLY: 'MONTHLY',
  WEEKLY: 'WEEKLY'
};

export type GoalLevel = (typeof GoalLevel)[keyof typeof GoalLevel]


export const GoalStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  ARCHIVED: 'ARCHIVED'
};

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus]

}

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

export type GoalLevel = $Enums.GoalLevel

export const GoalLevel: typeof $Enums.GoalLevel

export type GoalStatus = $Enums.GoalStatus

export const GoalStatus: typeof $Enums.GoalStatus

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeRecord`: Exposes CRUD operations for the **TimeRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeRecords
    * const timeRecords = await prisma.timeRecord.findMany()
    * ```
    */
  get timeRecord(): Prisma.TimeRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressLog`: Exposes CRUD operations for the **ProgressLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressLogs
    * const progressLogs = await prisma.progressLog.findMany()
    * ```
    */
  get progressLog(): Prisma.ProgressLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importedFile`: Exposes CRUD operations for the **ImportedFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportedFiles
    * const importedFiles = await prisma.importedFile.findMany()
    * ```
    */
  get importedFile(): Prisma.ImportedFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logArchive`: Exposes CRUD operations for the **LogArchive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogArchives
    * const logArchives = await prisma.logArchive.findMany()
    * ```
    */
  get logArchive(): Prisma.LogArchiveDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Task: 'Task',
    Goal: 'Goal',
    Message: 'Message',
    Category: 'Category',
    Tag: 'Tag',
    TimeRecord: 'TimeRecord',
    ProgressLog: 'ProgressLog',
    ImportedFile: 'ImportedFile',
    LogArchive: 'LogArchive'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "task" | "goal" | "message" | "category" | "tag" | "timeRecord" | "progressLog" | "importedFile" | "logArchive"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TimeRecord: {
        payload: Prisma.$TimeRecordPayload<ExtArgs>
        fields: Prisma.TimeRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload>
          }
          findFirst: {
            args: Prisma.TimeRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload>
          }
          findMany: {
            args: Prisma.TimeRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload>[]
          }
          create: {
            args: Prisma.TimeRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload>
          }
          createMany: {
            args: Prisma.TimeRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload>[]
          }
          delete: {
            args: Prisma.TimeRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload>
          }
          update: {
            args: Prisma.TimeRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload>
          }
          deleteMany: {
            args: Prisma.TimeRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload>[]
          }
          upsert: {
            args: Prisma.TimeRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeRecordPayload>
          }
          aggregate: {
            args: Prisma.TimeRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeRecord>
          }
          groupBy: {
            args: Prisma.TimeRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TimeRecordCountAggregateOutputType> | number
          }
        }
      }
      ProgressLog: {
        payload: Prisma.$ProgressLogPayload<ExtArgs>
        fields: Prisma.ProgressLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          findFirst: {
            args: Prisma.ProgressLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          findMany: {
            args: Prisma.ProgressLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>[]
          }
          create: {
            args: Prisma.ProgressLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          createMany: {
            args: Prisma.ProgressLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>[]
          }
          delete: {
            args: Prisma.ProgressLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          update: {
            args: Prisma.ProgressLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          deleteMany: {
            args: Prisma.ProgressLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>[]
          }
          upsert: {
            args: Prisma.ProgressLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          aggregate: {
            args: Prisma.ProgressLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressLog>
          }
          groupBy: {
            args: Prisma.ProgressLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressLogCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressLogCountAggregateOutputType> | number
          }
        }
      }
      ImportedFile: {
        payload: Prisma.$ImportedFilePayload<ExtArgs>
        fields: Prisma.ImportedFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportedFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportedFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload>
          }
          findFirst: {
            args: Prisma.ImportedFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportedFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload>
          }
          findMany: {
            args: Prisma.ImportedFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload>[]
          }
          create: {
            args: Prisma.ImportedFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload>
          }
          createMany: {
            args: Prisma.ImportedFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportedFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload>[]
          }
          delete: {
            args: Prisma.ImportedFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload>
          }
          update: {
            args: Prisma.ImportedFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload>
          }
          deleteMany: {
            args: Prisma.ImportedFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportedFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportedFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload>[]
          }
          upsert: {
            args: Prisma.ImportedFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportedFilePayload>
          }
          aggregate: {
            args: Prisma.ImportedFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportedFile>
          }
          groupBy: {
            args: Prisma.ImportedFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportedFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportedFileCountArgs<ExtArgs>
            result: $Utils.Optional<ImportedFileCountAggregateOutputType> | number
          }
        }
      }
      LogArchive: {
        payload: Prisma.$LogArchivePayload<ExtArgs>
        fields: Prisma.LogArchiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogArchiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogArchiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload>
          }
          findFirst: {
            args: Prisma.LogArchiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogArchiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload>
          }
          findMany: {
            args: Prisma.LogArchiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload>[]
          }
          create: {
            args: Prisma.LogArchiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload>
          }
          createMany: {
            args: Prisma.LogArchiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogArchiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload>[]
          }
          delete: {
            args: Prisma.LogArchiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload>
          }
          update: {
            args: Prisma.LogArchiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload>
          }
          deleteMany: {
            args: Prisma.LogArchiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogArchiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogArchiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload>[]
          }
          upsert: {
            args: Prisma.LogArchiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogArchivePayload>
          }
          aggregate: {
            args: Prisma.LogArchiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogArchive>
          }
          groupBy: {
            args: Prisma.LogArchiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogArchiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogArchiveCountArgs<ExtArgs>
            result: $Utils.Optional<LogArchiveCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    task?: TaskOmit
    goal?: GoalOmit
    message?: MessageOmit
    category?: CategoryOmit
    tag?: TagOmit
    timeRecord?: TimeRecordOmit
    progressLog?: ProgressLogOmit
    importedFile?: ImportedFileOmit
    logArchive?: LogArchiveOmit
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
    goals: number
    messages: number
    tasks: number
    timeRecords: number
    progressLogs: number
    importedFiles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    timeRecords?: boolean | UserCountOutputTypeCountTimeRecordsArgs
    progressLogs?: boolean | UserCountOutputTypeCountProgressLogsArgs
    importedFiles?: boolean | UserCountOutputTypeCountImportedFilesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImportedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportedFileWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    subTasks: number
    tags: number
    timeRecords: number
    progressLogs: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subTasks?: boolean | TaskCountOutputTypeCountSubTasksArgs
    tags?: boolean | TaskCountOutputTypeCountTagsArgs
    timeRecords?: boolean | TaskCountOutputTypeCountTimeRecordsArgs
    progressLogs?: boolean | TaskCountOutputTypeCountProgressLogsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTimeRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeRecordWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountProgressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    subGoals: number
    tasks: number
    tags: number
    progressLogs: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subGoals?: boolean | GoalCountOutputTypeCountSubGoalsArgs
    tasks?: boolean | GoalCountOutputTypeCountTasksArgs
    tags?: boolean | GoalCountOutputTypeCountTagsArgs
    progressLogs?: boolean | GoalCountOutputTypeCountProgressLogsArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountSubGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountProgressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    tags: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | MessageCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subCategories: number
    messages: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | CategoryCountOutputTypeCountSubCategoriesArgs
    messages?: boolean | CategoryCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    goals: number
    messages: number
    tasks: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | TagCountOutputTypeCountGoalsArgs
    messages?: boolean | TagCountOutputTypeCountMessagesArgs
    tasks?: boolean | TagCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
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
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goals?: boolean | User$goalsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    timeRecords?: boolean | User$timeRecordsArgs<ExtArgs>
    progressLogs?: boolean | User$progressLogsArgs<ExtArgs>
    importedFiles?: boolean | User$importedFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | User$goalsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    timeRecords?: boolean | User$timeRecordsArgs<ExtArgs>
    progressLogs?: boolean | User$progressLogsArgs<ExtArgs>
    importedFiles?: boolean | User$importedFilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      goals: Prisma.$GoalPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      timeRecords: Prisma.$TimeRecordPayload<ExtArgs>[]
      progressLogs: Prisma.$ProgressLogPayload<ExtArgs>[]
      importedFiles: Prisma.$ImportedFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeRecords<T extends User$timeRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$timeRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressLogs<T extends User$progressLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$progressLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    importedFiles<T extends User$importedFilesArgs<ExtArgs> = {}>(args?: Subset<T, User$importedFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.timeRecords
   */
  export type User$timeRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    where?: TimeRecordWhereInput
    orderBy?: TimeRecordOrderByWithRelationInput | TimeRecordOrderByWithRelationInput[]
    cursor?: TimeRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeRecordScalarFieldEnum | TimeRecordScalarFieldEnum[]
  }

  /**
   * User.progressLogs
   */
  export type User$progressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    cursor?: ProgressLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * User.importedFiles
   */
  export type User$importedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    where?: ImportedFileWhereInput
    orderBy?: ImportedFileOrderByWithRelationInput | ImportedFileOrderByWithRelationInput[]
    cursor?: ImportedFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImportedFileScalarFieldEnum | ImportedFileScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    totalTime: number | null
  }

  export type TaskSumAggregateOutputType = {
    totalTime: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    parentId: string | null
    goalId: string | null
    totalTime: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    parentId: string | null
    goalId: string | null
    totalTime: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    dueDate: number
    createdAt: number
    updatedAt: number
    userId: number
    parentId: number
    goalId: number
    metadata: number
    totalTime: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    totalTime?: true
  }

  export type TaskSumAggregateInputType = {
    totalTime?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    parentId?: true
    goalId?: true
    totalTime?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    parentId?: true
    goalId?: true
    totalTime?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    parentId?: true
    goalId?: true
    metadata?: true
    totalTime?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: $Enums.TaskStatus
    priority: $Enums.TaskPriority
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    parentId: string | null
    goalId: string | null
    metadata: JsonValue | null
    totalTime: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parentId?: boolean
    goalId?: boolean
    metadata?: boolean
    totalTime?: boolean
    goal?: boolean | Task$goalArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    subTasks?: boolean | Task$subTasksArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Task$tagsArgs<ExtArgs>
    timeRecords?: boolean | Task$timeRecordsArgs<ExtArgs>
    progressLogs?: boolean | Task$progressLogsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parentId?: boolean
    goalId?: boolean
    metadata?: boolean
    totalTime?: boolean
    goal?: boolean | Task$goalArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parentId?: boolean
    goalId?: boolean
    metadata?: boolean
    totalTime?: boolean
    goal?: boolean | Task$goalArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parentId?: boolean
    goalId?: boolean
    metadata?: boolean
    totalTime?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "dueDate" | "createdAt" | "updatedAt" | "userId" | "parentId" | "goalId" | "metadata" | "totalTime", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | Task$goalArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    subTasks?: boolean | Task$subTasksArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Task$tagsArgs<ExtArgs>
    timeRecords?: boolean | Task$timeRecordsArgs<ExtArgs>
    progressLogs?: boolean | Task$progressLogsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | Task$goalArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | Task$goalArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      goal: Prisma.$GoalPayload<ExtArgs> | null
      parent: Prisma.$TaskPayload<ExtArgs> | null
      subTasks: Prisma.$TaskPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
      timeRecords: Prisma.$TimeRecordPayload<ExtArgs>[]
      progressLogs: Prisma.$ProgressLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: $Enums.TaskStatus
      priority: $Enums.TaskPriority
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
      parentId: string | null
      goalId: string | null
      metadata: Prisma.JsonValue | null
      totalTime: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goal<T extends Task$goalArgs<ExtArgs> = {}>(args?: Subset<T, Task$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent<T extends Task$parentArgs<ExtArgs> = {}>(args?: Subset<T, Task$parentArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subTasks<T extends Task$subTasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$subTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Task$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Task$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeRecords<T extends Task$timeRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Task$timeRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressLogs<T extends Task$progressLogsArgs<ExtArgs> = {}>(args?: Subset<T, Task$progressLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly parentId: FieldRef<"Task", 'String'>
    readonly goalId: FieldRef<"Task", 'String'>
    readonly metadata: FieldRef<"Task", 'Json'>
    readonly totalTime: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.goal
   */
  export type Task$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * Task.parent
   */
  export type Task$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * Task.subTasks
   */
  export type Task$subTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task.tags
   */
  export type Task$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Task.timeRecords
   */
  export type Task$timeRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    where?: TimeRecordWhereInput
    orderBy?: TimeRecordOrderByWithRelationInput | TimeRecordOrderByWithRelationInput[]
    cursor?: TimeRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeRecordScalarFieldEnum | TimeRecordScalarFieldEnum[]
  }

  /**
   * Task.progressLogs
   */
  export type Task$progressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    cursor?: ProgressLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    progress: number | null
    priority: number | null
    weight: number | null
  }

  export type GoalSumAggregateOutputType = {
    progress: number | null
    priority: number | null
    weight: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.GoalLevel | null
    status: $Enums.GoalStatus | null
    startDate: Date | null
    endDate: Date | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    parentId: string | null
    priority: number | null
    weight: number | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.GoalLevel | null
    status: $Enums.GoalStatus | null
    startDate: Date | null
    endDate: Date | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    parentId: string | null
    priority: number | null
    weight: number | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    title: number
    description: number
    level: number
    status: number
    startDate: number
    endDate: number
    progress: number
    createdAt: number
    updatedAt: number
    userId: number
    parentId: number
    metrics: number
    resources: number
    priority: number
    weight: number
    metadata: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    progress?: true
    priority?: true
    weight?: true
  }

  export type GoalSumAggregateInputType = {
    progress?: true
    priority?: true
    weight?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    status?: true
    startDate?: true
    endDate?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    parentId?: true
    priority?: true
    weight?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    status?: true
    startDate?: true
    endDate?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    parentId?: true
    priority?: true
    weight?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    status?: true
    startDate?: true
    endDate?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    parentId?: true
    metrics?: true
    resources?: true
    priority?: true
    weight?: true
    metadata?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    title: string
    description: string | null
    level: $Enums.GoalLevel
    status: $Enums.GoalStatus
    startDate: Date
    endDate: Date
    progress: number
    createdAt: Date
    updatedAt: Date
    userId: string
    parentId: string | null
    metrics: JsonValue | null
    resources: JsonValue | null
    priority: number
    weight: number
    metadata: JsonValue | null
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parentId?: boolean
    metrics?: boolean
    resources?: boolean
    priority?: boolean
    weight?: boolean
    metadata?: boolean
    parent?: boolean | Goal$parentArgs<ExtArgs>
    subGoals?: boolean | Goal$subGoalsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    tags?: boolean | Goal$tagsArgs<ExtArgs>
    progressLogs?: boolean | Goal$progressLogsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parentId?: boolean
    metrics?: boolean
    resources?: boolean
    priority?: boolean
    weight?: boolean
    metadata?: boolean
    parent?: boolean | Goal$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parentId?: boolean
    metrics?: boolean
    resources?: boolean
    priority?: boolean
    weight?: boolean
    metadata?: boolean
    parent?: boolean | Goal$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    parentId?: boolean
    metrics?: boolean
    resources?: boolean
    priority?: boolean
    weight?: boolean
    metadata?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "level" | "status" | "startDate" | "endDate" | "progress" | "createdAt" | "updatedAt" | "userId" | "parentId" | "metrics" | "resources" | "priority" | "weight" | "metadata", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Goal$parentArgs<ExtArgs>
    subGoals?: boolean | Goal$subGoalsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    tags?: boolean | Goal$tagsArgs<ExtArgs>
    progressLogs?: boolean | Goal$progressLogsArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Goal$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Goal$parentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      parent: Prisma.$GoalPayload<ExtArgs> | null
      subGoals: Prisma.$GoalPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      progressLogs: Prisma.$ProgressLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      level: $Enums.GoalLevel
      status: $Enums.GoalStatus
      startDate: Date
      endDate: Date
      progress: number
      createdAt: Date
      updatedAt: Date
      userId: string
      parentId: string | null
      metrics: Prisma.JsonValue | null
      resources: Prisma.JsonValue | null
      priority: number
      weight: number
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Goal$parentArgs<ExtArgs> = {}>(args?: Subset<T, Goal$parentArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subGoals<T extends Goal$subGoalsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$subGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Goal$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Goal$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Goal$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressLogs<T extends Goal$progressLogsArgs<ExtArgs> = {}>(args?: Subset<T, Goal$progressLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly level: FieldRef<"Goal", 'GoalLevel'>
    readonly status: FieldRef<"Goal", 'GoalStatus'>
    readonly startDate: FieldRef<"Goal", 'DateTime'>
    readonly endDate: FieldRef<"Goal", 'DateTime'>
    readonly progress: FieldRef<"Goal", 'Float'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly parentId: FieldRef<"Goal", 'String'>
    readonly metrics: FieldRef<"Goal", 'Json'>
    readonly resources: FieldRef<"Goal", 'Json'>
    readonly priority: FieldRef<"Goal", 'Int'>
    readonly weight: FieldRef<"Goal", 'Float'>
    readonly metadata: FieldRef<"Goal", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal.parent
   */
  export type Goal$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * Goal.subGoals
   */
  export type Goal$subGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal.tasks
   */
  export type Goal$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Goal.tags
   */
  export type Goal$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Goal.progressLogs
   */
  export type Goal$progressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    cursor?: ProgressLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    sourceType: string | null
    sourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    sourceType: string | null
    sourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    sourceType: number
    sourceId: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    metadata: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    sourceType?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    sourceType?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    sourceType?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    metadata?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    sourceType: string
    sourceId: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    categoryId: string | null
    metadata: JsonValue | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sourceType?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    metadata?: boolean
    category?: boolean | Message$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Message$tagsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sourceType?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    metadata?: boolean
    category?: boolean | Message$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sourceType?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    metadata?: boolean
    category?: boolean | Message$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    sourceType?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    metadata?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "sourceType" | "sourceId" | "createdAt" | "updatedAt" | "userId" | "categoryId" | "metadata", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Message$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Message$tagsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Message$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Message$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      sourceType: string
      sourceId: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      categoryId: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Message$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Message$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Message$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Message$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly sourceType: FieldRef<"Message", 'String'>
    readonly sourceId: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
    readonly userId: FieldRef<"Message", 'String'>
    readonly categoryId: FieldRef<"Message", 'String'>
    readonly metadata: FieldRef<"Message", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.category
   */
  export type Message$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Message.tags
   */
  export type Message$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    parentId: string | null
    sourceType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    parentId: string | null
    sourceType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    parentId: number
    sourceType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    sourceType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    sourceType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    sourceType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    parentId: string | null
    sourceType: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    sourceType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    messages?: boolean | Category$messagesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    sourceType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    sourceType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    sourceType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "parentId" | "sourceType" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    messages?: boolean | Category$messagesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      subCategories: Prisma.$CategoryPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      parentId: string | null
      sourceType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subCategories<T extends Category$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Category$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Category$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly sourceType: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.subCategories
   */
  export type Category$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.messages
   */
  export type Category$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    goals?: boolean | Tag$goalsArgs<ExtArgs>
    messages?: boolean | Tag$messagesArgs<ExtArgs>
    tasks?: boolean | Tag$tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | Tag$goalsArgs<ExtArgs>
    messages?: boolean | Tag$messagesArgs<ExtArgs>
    tasks?: boolean | Tag$tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      goals: Prisma.$GoalPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    goals<T extends Tag$goalsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Tag$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Tag$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Tag$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.goals
   */
  export type Tag$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Tag.messages
   */
  export type Tag$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Tag.tasks
   */
  export type Tag$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TimeRecord
   */

  export type AggregateTimeRecord = {
    _count: TimeRecordCountAggregateOutputType | null
    _avg: TimeRecordAvgAggregateOutputType | null
    _sum: TimeRecordSumAggregateOutputType | null
    _min: TimeRecordMinAggregateOutputType | null
    _max: TimeRecordMaxAggregateOutputType | null
  }

  export type TimeRecordAvgAggregateOutputType = {
    duration: number | null
  }

  export type TimeRecordSumAggregateOutputType = {
    duration: number | null
  }

  export type TimeRecordMinAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    taskId: string | null
  }

  export type TimeRecordMaxAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    taskId: string | null
  }

  export type TimeRecordCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    duration: number
    note: number
    createdAt: number
    updatedAt: number
    userId: number
    taskId: number
    _all: number
  }


  export type TimeRecordAvgAggregateInputType = {
    duration?: true
  }

  export type TimeRecordSumAggregateInputType = {
    duration?: true
  }

  export type TimeRecordMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    duration?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    taskId?: true
  }

  export type TimeRecordMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    duration?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    taskId?: true
  }

  export type TimeRecordCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    duration?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    taskId?: true
    _all?: true
  }

  export type TimeRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeRecord to aggregate.
     */
    where?: TimeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeRecords to fetch.
     */
    orderBy?: TimeRecordOrderByWithRelationInput | TimeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeRecords
    **/
    _count?: true | TimeRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeRecordMaxAggregateInputType
  }

  export type GetTimeRecordAggregateType<T extends TimeRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeRecord[P]>
      : GetScalarType<T[P], AggregateTimeRecord[P]>
  }




  export type TimeRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeRecordWhereInput
    orderBy?: TimeRecordOrderByWithAggregationInput | TimeRecordOrderByWithAggregationInput[]
    by: TimeRecordScalarFieldEnum[] | TimeRecordScalarFieldEnum
    having?: TimeRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeRecordCountAggregateInputType | true
    _avg?: TimeRecordAvgAggregateInputType
    _sum?: TimeRecordSumAggregateInputType
    _min?: TimeRecordMinAggregateInputType
    _max?: TimeRecordMaxAggregateInputType
  }

  export type TimeRecordGroupByOutputType = {
    id: string
    startTime: Date
    endTime: Date | null
    duration: number | null
    note: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    taskId: string
    _count: TimeRecordCountAggregateOutputType | null
    _avg: TimeRecordAvgAggregateOutputType | null
    _sum: TimeRecordSumAggregateOutputType | null
    _min: TimeRecordMinAggregateOutputType | null
    _max: TimeRecordMaxAggregateOutputType | null
  }

  type GetTimeRecordGroupByPayload<T extends TimeRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TimeRecordGroupByOutputType[P]>
        }
      >
    >


  export type TimeRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    taskId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeRecord"]>

  export type TimeRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    taskId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeRecord"]>

  export type TimeRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    taskId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeRecord"]>

  export type TimeRecordSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    taskId?: boolean
  }

  export type TimeRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "endTime" | "duration" | "note" | "createdAt" | "updatedAt" | "userId" | "taskId", ExtArgs["result"]["timeRecord"]>
  export type TimeRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TimeRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TimeRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TimeRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: Date
      endTime: Date | null
      duration: number | null
      note: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      taskId: string
    }, ExtArgs["result"]["timeRecord"]>
    composites: {}
  }

  type TimeRecordGetPayload<S extends boolean | null | undefined | TimeRecordDefaultArgs> = $Result.GetResult<Prisma.$TimeRecordPayload, S>

  type TimeRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeRecordCountAggregateInputType | true
    }

  export interface TimeRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeRecord'], meta: { name: 'TimeRecord' } }
    /**
     * Find zero or one TimeRecord that matches the filter.
     * @param {TimeRecordFindUniqueArgs} args - Arguments to find a TimeRecord
     * @example
     * // Get one TimeRecord
     * const timeRecord = await prisma.timeRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeRecordFindUniqueArgs>(args: SelectSubset<T, TimeRecordFindUniqueArgs<ExtArgs>>): Prisma__TimeRecordClient<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeRecordFindUniqueOrThrowArgs} args - Arguments to find a TimeRecord
     * @example
     * // Get one TimeRecord
     * const timeRecord = await prisma.timeRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeRecordClient<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeRecordFindFirstArgs} args - Arguments to find a TimeRecord
     * @example
     * // Get one TimeRecord
     * const timeRecord = await prisma.timeRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeRecordFindFirstArgs>(args?: SelectSubset<T, TimeRecordFindFirstArgs<ExtArgs>>): Prisma__TimeRecordClient<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeRecordFindFirstOrThrowArgs} args - Arguments to find a TimeRecord
     * @example
     * // Get one TimeRecord
     * const timeRecord = await prisma.timeRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeRecordClient<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeRecords
     * const timeRecords = await prisma.timeRecord.findMany()
     * 
     * // Get first 10 TimeRecords
     * const timeRecords = await prisma.timeRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeRecordWithIdOnly = await prisma.timeRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeRecordFindManyArgs>(args?: SelectSubset<T, TimeRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeRecord.
     * @param {TimeRecordCreateArgs} args - Arguments to create a TimeRecord.
     * @example
     * // Create one TimeRecord
     * const TimeRecord = await prisma.timeRecord.create({
     *   data: {
     *     // ... data to create a TimeRecord
     *   }
     * })
     * 
     */
    create<T extends TimeRecordCreateArgs>(args: SelectSubset<T, TimeRecordCreateArgs<ExtArgs>>): Prisma__TimeRecordClient<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeRecords.
     * @param {TimeRecordCreateManyArgs} args - Arguments to create many TimeRecords.
     * @example
     * // Create many TimeRecords
     * const timeRecord = await prisma.timeRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeRecordCreateManyArgs>(args?: SelectSubset<T, TimeRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeRecords and returns the data saved in the database.
     * @param {TimeRecordCreateManyAndReturnArgs} args - Arguments to create many TimeRecords.
     * @example
     * // Create many TimeRecords
     * const timeRecord = await prisma.timeRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeRecords and only return the `id`
     * const timeRecordWithIdOnly = await prisma.timeRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeRecord.
     * @param {TimeRecordDeleteArgs} args - Arguments to delete one TimeRecord.
     * @example
     * // Delete one TimeRecord
     * const TimeRecord = await prisma.timeRecord.delete({
     *   where: {
     *     // ... filter to delete one TimeRecord
     *   }
     * })
     * 
     */
    delete<T extends TimeRecordDeleteArgs>(args: SelectSubset<T, TimeRecordDeleteArgs<ExtArgs>>): Prisma__TimeRecordClient<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeRecord.
     * @param {TimeRecordUpdateArgs} args - Arguments to update one TimeRecord.
     * @example
     * // Update one TimeRecord
     * const timeRecord = await prisma.timeRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeRecordUpdateArgs>(args: SelectSubset<T, TimeRecordUpdateArgs<ExtArgs>>): Prisma__TimeRecordClient<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeRecords.
     * @param {TimeRecordDeleteManyArgs} args - Arguments to filter TimeRecords to delete.
     * @example
     * // Delete a few TimeRecords
     * const { count } = await prisma.timeRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeRecordDeleteManyArgs>(args?: SelectSubset<T, TimeRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeRecords
     * const timeRecord = await prisma.timeRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeRecordUpdateManyArgs>(args: SelectSubset<T, TimeRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeRecords and returns the data updated in the database.
     * @param {TimeRecordUpdateManyAndReturnArgs} args - Arguments to update many TimeRecords.
     * @example
     * // Update many TimeRecords
     * const timeRecord = await prisma.timeRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeRecords and only return the `id`
     * const timeRecordWithIdOnly = await prisma.timeRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimeRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeRecord.
     * @param {TimeRecordUpsertArgs} args - Arguments to update or create a TimeRecord.
     * @example
     * // Update or create a TimeRecord
     * const timeRecord = await prisma.timeRecord.upsert({
     *   create: {
     *     // ... data to create a TimeRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeRecord we want to update
     *   }
     * })
     */
    upsert<T extends TimeRecordUpsertArgs>(args: SelectSubset<T, TimeRecordUpsertArgs<ExtArgs>>): Prisma__TimeRecordClient<$Result.GetResult<Prisma.$TimeRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeRecordCountArgs} args - Arguments to filter TimeRecords to count.
     * @example
     * // Count the number of TimeRecords
     * const count = await prisma.timeRecord.count({
     *   where: {
     *     // ... the filter for the TimeRecords we want to count
     *   }
     * })
    **/
    count<T extends TimeRecordCountArgs>(
      args?: Subset<T, TimeRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeRecordAggregateArgs>(args: Subset<T, TimeRecordAggregateArgs>): Prisma.PrismaPromise<GetTimeRecordAggregateType<T>>

    /**
     * Group by TimeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeRecordGroupByArgs} args - Group by arguments.
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
      T extends TimeRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeRecordGroupByArgs['orderBy'] }
        : { orderBy?: TimeRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeRecord model
   */
  readonly fields: TimeRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeRecord model
   */
  interface TimeRecordFieldRefs {
    readonly id: FieldRef<"TimeRecord", 'String'>
    readonly startTime: FieldRef<"TimeRecord", 'DateTime'>
    readonly endTime: FieldRef<"TimeRecord", 'DateTime'>
    readonly duration: FieldRef<"TimeRecord", 'Int'>
    readonly note: FieldRef<"TimeRecord", 'String'>
    readonly createdAt: FieldRef<"TimeRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeRecord", 'DateTime'>
    readonly userId: FieldRef<"TimeRecord", 'String'>
    readonly taskId: FieldRef<"TimeRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TimeRecord findUnique
   */
  export type TimeRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    /**
     * Filter, which TimeRecord to fetch.
     */
    where: TimeRecordWhereUniqueInput
  }

  /**
   * TimeRecord findUniqueOrThrow
   */
  export type TimeRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    /**
     * Filter, which TimeRecord to fetch.
     */
    where: TimeRecordWhereUniqueInput
  }

  /**
   * TimeRecord findFirst
   */
  export type TimeRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    /**
     * Filter, which TimeRecord to fetch.
     */
    where?: TimeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeRecords to fetch.
     */
    orderBy?: TimeRecordOrderByWithRelationInput | TimeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeRecords.
     */
    cursor?: TimeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeRecords.
     */
    distinct?: TimeRecordScalarFieldEnum | TimeRecordScalarFieldEnum[]
  }

  /**
   * TimeRecord findFirstOrThrow
   */
  export type TimeRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    /**
     * Filter, which TimeRecord to fetch.
     */
    where?: TimeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeRecords to fetch.
     */
    orderBy?: TimeRecordOrderByWithRelationInput | TimeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeRecords.
     */
    cursor?: TimeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeRecords.
     */
    distinct?: TimeRecordScalarFieldEnum | TimeRecordScalarFieldEnum[]
  }

  /**
   * TimeRecord findMany
   */
  export type TimeRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    /**
     * Filter, which TimeRecords to fetch.
     */
    where?: TimeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeRecords to fetch.
     */
    orderBy?: TimeRecordOrderByWithRelationInput | TimeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeRecords.
     */
    cursor?: TimeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeRecords.
     */
    skip?: number
    distinct?: TimeRecordScalarFieldEnum | TimeRecordScalarFieldEnum[]
  }

  /**
   * TimeRecord create
   */
  export type TimeRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeRecord.
     */
    data: XOR<TimeRecordCreateInput, TimeRecordUncheckedCreateInput>
  }

  /**
   * TimeRecord createMany
   */
  export type TimeRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeRecords.
     */
    data: TimeRecordCreateManyInput | TimeRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeRecord createManyAndReturn
   */
  export type TimeRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TimeRecords.
     */
    data: TimeRecordCreateManyInput | TimeRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeRecord update
   */
  export type TimeRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeRecord.
     */
    data: XOR<TimeRecordUpdateInput, TimeRecordUncheckedUpdateInput>
    /**
     * Choose, which TimeRecord to update.
     */
    where: TimeRecordWhereUniqueInput
  }

  /**
   * TimeRecord updateMany
   */
  export type TimeRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeRecords.
     */
    data: XOR<TimeRecordUpdateManyMutationInput, TimeRecordUncheckedUpdateManyInput>
    /**
     * Filter which TimeRecords to update
     */
    where?: TimeRecordWhereInput
    /**
     * Limit how many TimeRecords to update.
     */
    limit?: number
  }

  /**
   * TimeRecord updateManyAndReturn
   */
  export type TimeRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * The data used to update TimeRecords.
     */
    data: XOR<TimeRecordUpdateManyMutationInput, TimeRecordUncheckedUpdateManyInput>
    /**
     * Filter which TimeRecords to update
     */
    where?: TimeRecordWhereInput
    /**
     * Limit how many TimeRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeRecord upsert
   */
  export type TimeRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeRecord to update in case it exists.
     */
    where: TimeRecordWhereUniqueInput
    /**
     * In case the TimeRecord found by the `where` argument doesn't exist, create a new TimeRecord with this data.
     */
    create: XOR<TimeRecordCreateInput, TimeRecordUncheckedCreateInput>
    /**
     * In case the TimeRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeRecordUpdateInput, TimeRecordUncheckedUpdateInput>
  }

  /**
   * TimeRecord delete
   */
  export type TimeRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
    /**
     * Filter which TimeRecord to delete.
     */
    where: TimeRecordWhereUniqueInput
  }

  /**
   * TimeRecord deleteMany
   */
  export type TimeRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeRecords to delete
     */
    where?: TimeRecordWhereInput
    /**
     * Limit how many TimeRecords to delete.
     */
    limit?: number
  }

  /**
   * TimeRecord without action
   */
  export type TimeRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeRecord
     */
    select?: TimeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeRecord
     */
    omit?: TimeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeRecordInclude<ExtArgs> | null
  }


  /**
   * Model ProgressLog
   */

  export type AggregateProgressLog = {
    _count: ProgressLogCountAggregateOutputType | null
    _avg: ProgressLogAvgAggregateOutputType | null
    _sum: ProgressLogSumAggregateOutputType | null
    _min: ProgressLogMinAggregateOutputType | null
    _max: ProgressLogMaxAggregateOutputType | null
  }

  export type ProgressLogAvgAggregateOutputType = {
    progress: number | null
  }

  export type ProgressLogSumAggregateOutputType = {
    progress: number | null
  }

  export type ProgressLogMinAggregateOutputType = {
    id: string | null
    progress: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    taskId: string | null
    goalId: string | null
  }

  export type ProgressLogMaxAggregateOutputType = {
    id: string | null
    progress: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    taskId: string | null
    goalId: string | null
  }

  export type ProgressLogCountAggregateOutputType = {
    id: number
    progress: number
    note: number
    createdAt: number
    updatedAt: number
    userId: number
    taskId: number
    goalId: number
    _all: number
  }


  export type ProgressLogAvgAggregateInputType = {
    progress?: true
  }

  export type ProgressLogSumAggregateInputType = {
    progress?: true
  }

  export type ProgressLogMinAggregateInputType = {
    id?: true
    progress?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    taskId?: true
    goalId?: true
  }

  export type ProgressLogMaxAggregateInputType = {
    id?: true
    progress?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    taskId?: true
    goalId?: true
  }

  export type ProgressLogCountAggregateInputType = {
    id?: true
    progress?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    taskId?: true
    goalId?: true
    _all?: true
  }

  export type ProgressLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressLog to aggregate.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressLogs
    **/
    _count?: true | ProgressLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressLogMaxAggregateInputType
  }

  export type GetProgressLogAggregateType<T extends ProgressLogAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressLog[P]>
      : GetScalarType<T[P], AggregateProgressLog[P]>
  }




  export type ProgressLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithAggregationInput | ProgressLogOrderByWithAggregationInput[]
    by: ProgressLogScalarFieldEnum[] | ProgressLogScalarFieldEnum
    having?: ProgressLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressLogCountAggregateInputType | true
    _avg?: ProgressLogAvgAggregateInputType
    _sum?: ProgressLogSumAggregateInputType
    _min?: ProgressLogMinAggregateInputType
    _max?: ProgressLogMaxAggregateInputType
  }

  export type ProgressLogGroupByOutputType = {
    id: string
    progress: number
    note: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    taskId: string | null
    goalId: string | null
    _count: ProgressLogCountAggregateOutputType | null
    _avg: ProgressLogAvgAggregateOutputType | null
    _sum: ProgressLogSumAggregateOutputType | null
    _min: ProgressLogMinAggregateOutputType | null
    _max: ProgressLogMaxAggregateOutputType | null
  }

  type GetProgressLogGroupByPayload<T extends ProgressLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressLogGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressLogGroupByOutputType[P]>
        }
      >
    >


  export type ProgressLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    progress?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    taskId?: boolean
    goalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ProgressLog$taskArgs<ExtArgs>
    goal?: boolean | ProgressLog$goalArgs<ExtArgs>
  }, ExtArgs["result"]["progressLog"]>

  export type ProgressLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    progress?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    taskId?: boolean
    goalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ProgressLog$taskArgs<ExtArgs>
    goal?: boolean | ProgressLog$goalArgs<ExtArgs>
  }, ExtArgs["result"]["progressLog"]>

  export type ProgressLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    progress?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    taskId?: boolean
    goalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ProgressLog$taskArgs<ExtArgs>
    goal?: boolean | ProgressLog$goalArgs<ExtArgs>
  }, ExtArgs["result"]["progressLog"]>

  export type ProgressLogSelectScalar = {
    id?: boolean
    progress?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    taskId?: boolean
    goalId?: boolean
  }

  export type ProgressLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "progress" | "note" | "createdAt" | "updatedAt" | "userId" | "taskId" | "goalId", ExtArgs["result"]["progressLog"]>
  export type ProgressLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ProgressLog$taskArgs<ExtArgs>
    goal?: boolean | ProgressLog$goalArgs<ExtArgs>
  }
  export type ProgressLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ProgressLog$taskArgs<ExtArgs>
    goal?: boolean | ProgressLog$goalArgs<ExtArgs>
  }
  export type ProgressLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ProgressLog$taskArgs<ExtArgs>
    goal?: boolean | ProgressLog$goalArgs<ExtArgs>
  }

  export type $ProgressLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs> | null
      goal: Prisma.$GoalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      progress: number
      note: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      taskId: string | null
      goalId: string | null
    }, ExtArgs["result"]["progressLog"]>
    composites: {}
  }

  type ProgressLogGetPayload<S extends boolean | null | undefined | ProgressLogDefaultArgs> = $Result.GetResult<Prisma.$ProgressLogPayload, S>

  type ProgressLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressLogCountAggregateInputType | true
    }

  export interface ProgressLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressLog'], meta: { name: 'ProgressLog' } }
    /**
     * Find zero or one ProgressLog that matches the filter.
     * @param {ProgressLogFindUniqueArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressLogFindUniqueArgs>(args: SelectSubset<T, ProgressLogFindUniqueArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressLogFindUniqueOrThrowArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogFindFirstArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressLogFindFirstArgs>(args?: SelectSubset<T, ProgressLogFindFirstArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogFindFirstOrThrowArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressLogs
     * const progressLogs = await prisma.progressLog.findMany()
     * 
     * // Get first 10 ProgressLogs
     * const progressLogs = await prisma.progressLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressLogWithIdOnly = await prisma.progressLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressLogFindManyArgs>(args?: SelectSubset<T, ProgressLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressLog.
     * @param {ProgressLogCreateArgs} args - Arguments to create a ProgressLog.
     * @example
     * // Create one ProgressLog
     * const ProgressLog = await prisma.progressLog.create({
     *   data: {
     *     // ... data to create a ProgressLog
     *   }
     * })
     * 
     */
    create<T extends ProgressLogCreateArgs>(args: SelectSubset<T, ProgressLogCreateArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressLogs.
     * @param {ProgressLogCreateManyArgs} args - Arguments to create many ProgressLogs.
     * @example
     * // Create many ProgressLogs
     * const progressLog = await prisma.progressLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressLogCreateManyArgs>(args?: SelectSubset<T, ProgressLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressLogs and returns the data saved in the database.
     * @param {ProgressLogCreateManyAndReturnArgs} args - Arguments to create many ProgressLogs.
     * @example
     * // Create many ProgressLogs
     * const progressLog = await prisma.progressLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressLogs and only return the `id`
     * const progressLogWithIdOnly = await prisma.progressLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressLog.
     * @param {ProgressLogDeleteArgs} args - Arguments to delete one ProgressLog.
     * @example
     * // Delete one ProgressLog
     * const ProgressLog = await prisma.progressLog.delete({
     *   where: {
     *     // ... filter to delete one ProgressLog
     *   }
     * })
     * 
     */
    delete<T extends ProgressLogDeleteArgs>(args: SelectSubset<T, ProgressLogDeleteArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressLog.
     * @param {ProgressLogUpdateArgs} args - Arguments to update one ProgressLog.
     * @example
     * // Update one ProgressLog
     * const progressLog = await prisma.progressLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressLogUpdateArgs>(args: SelectSubset<T, ProgressLogUpdateArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressLogs.
     * @param {ProgressLogDeleteManyArgs} args - Arguments to filter ProgressLogs to delete.
     * @example
     * // Delete a few ProgressLogs
     * const { count } = await prisma.progressLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressLogDeleteManyArgs>(args?: SelectSubset<T, ProgressLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressLogs
     * const progressLog = await prisma.progressLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressLogUpdateManyArgs>(args: SelectSubset<T, ProgressLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressLogs and returns the data updated in the database.
     * @param {ProgressLogUpdateManyAndReturnArgs} args - Arguments to update many ProgressLogs.
     * @example
     * // Update many ProgressLogs
     * const progressLog = await prisma.progressLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressLogs and only return the `id`
     * const progressLogWithIdOnly = await prisma.progressLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressLog.
     * @param {ProgressLogUpsertArgs} args - Arguments to update or create a ProgressLog.
     * @example
     * // Update or create a ProgressLog
     * const progressLog = await prisma.progressLog.upsert({
     *   create: {
     *     // ... data to create a ProgressLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressLog we want to update
     *   }
     * })
     */
    upsert<T extends ProgressLogUpsertArgs>(args: SelectSubset<T, ProgressLogUpsertArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogCountArgs} args - Arguments to filter ProgressLogs to count.
     * @example
     * // Count the number of ProgressLogs
     * const count = await prisma.progressLog.count({
     *   where: {
     *     // ... the filter for the ProgressLogs we want to count
     *   }
     * })
    **/
    count<T extends ProgressLogCountArgs>(
      args?: Subset<T, ProgressLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressLogAggregateArgs>(args: Subset<T, ProgressLogAggregateArgs>): Prisma.PrismaPromise<GetProgressLogAggregateType<T>>

    /**
     * Group by ProgressLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogGroupByArgs} args - Group by arguments.
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
      T extends ProgressLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressLogGroupByArgs['orderBy'] }
        : { orderBy?: ProgressLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressLog model
   */
  readonly fields: ProgressLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends ProgressLog$taskArgs<ExtArgs> = {}>(args?: Subset<T, ProgressLog$taskArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    goal<T extends ProgressLog$goalArgs<ExtArgs> = {}>(args?: Subset<T, ProgressLog$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgressLog model
   */
  interface ProgressLogFieldRefs {
    readonly id: FieldRef<"ProgressLog", 'String'>
    readonly progress: FieldRef<"ProgressLog", 'Float'>
    readonly note: FieldRef<"ProgressLog", 'String'>
    readonly createdAt: FieldRef<"ProgressLog", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgressLog", 'DateTime'>
    readonly userId: FieldRef<"ProgressLog", 'String'>
    readonly taskId: FieldRef<"ProgressLog", 'String'>
    readonly goalId: FieldRef<"ProgressLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProgressLog findUnique
   */
  export type ProgressLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog findUniqueOrThrow
   */
  export type ProgressLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog findFirst
   */
  export type ProgressLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressLogs.
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressLogs.
     */
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * ProgressLog findFirstOrThrow
   */
  export type ProgressLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressLogs.
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressLogs.
     */
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * ProgressLog findMany
   */
  export type ProgressLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLogs to fetch.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressLogs.
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * ProgressLog create
   */
  export type ProgressLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressLog.
     */
    data: XOR<ProgressLogCreateInput, ProgressLogUncheckedCreateInput>
  }

  /**
   * ProgressLog createMany
   */
  export type ProgressLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressLogs.
     */
    data: ProgressLogCreateManyInput | ProgressLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressLog createManyAndReturn
   */
  export type ProgressLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressLogs.
     */
    data: ProgressLogCreateManyInput | ProgressLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressLog update
   */
  export type ProgressLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressLog.
     */
    data: XOR<ProgressLogUpdateInput, ProgressLogUncheckedUpdateInput>
    /**
     * Choose, which ProgressLog to update.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog updateMany
   */
  export type ProgressLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressLogs.
     */
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyInput>
    /**
     * Filter which ProgressLogs to update
     */
    where?: ProgressLogWhereInput
    /**
     * Limit how many ProgressLogs to update.
     */
    limit?: number
  }

  /**
   * ProgressLog updateManyAndReturn
   */
  export type ProgressLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * The data used to update ProgressLogs.
     */
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyInput>
    /**
     * Filter which ProgressLogs to update
     */
    where?: ProgressLogWhereInput
    /**
     * Limit how many ProgressLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressLog upsert
   */
  export type ProgressLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressLog to update in case it exists.
     */
    where: ProgressLogWhereUniqueInput
    /**
     * In case the ProgressLog found by the `where` argument doesn't exist, create a new ProgressLog with this data.
     */
    create: XOR<ProgressLogCreateInput, ProgressLogUncheckedCreateInput>
    /**
     * In case the ProgressLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressLogUpdateInput, ProgressLogUncheckedUpdateInput>
  }

  /**
   * ProgressLog delete
   */
  export type ProgressLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter which ProgressLog to delete.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog deleteMany
   */
  export type ProgressLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressLogs to delete
     */
    where?: ProgressLogWhereInput
    /**
     * Limit how many ProgressLogs to delete.
     */
    limit?: number
  }

  /**
   * ProgressLog.task
   */
  export type ProgressLog$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * ProgressLog.goal
   */
  export type ProgressLog$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * ProgressLog without action
   */
  export type ProgressLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
  }


  /**
   * Model ImportedFile
   */

  export type AggregateImportedFile = {
    _count: ImportedFileCountAggregateOutputType | null
    _avg: ImportedFileAvgAggregateOutputType | null
    _sum: ImportedFileSumAggregateOutputType | null
    _min: ImportedFileMinAggregateOutputType | null
    _max: ImportedFileMaxAggregateOutputType | null
  }

  export type ImportedFileAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type ImportedFileSumAggregateOutputType = {
    fileSize: number | null
  }

  export type ImportedFileMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileType: string | null
    fileSize: number | null
    ossPath: string | null
    description: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ImportedFileMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileType: string | null
    fileSize: number | null
    ossPath: string | null
    description: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ImportedFileCountAggregateOutputType = {
    id: number
    fileName: number
    fileType: number
    fileSize: number
    ossPath: number
    description: number
    tags: number
    uploadedAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ImportedFileAvgAggregateInputType = {
    fileSize?: true
  }

  export type ImportedFileSumAggregateInputType = {
    fileSize?: true
  }

  export type ImportedFileMinAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    ossPath?: true
    description?: true
    uploadedAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ImportedFileMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    ossPath?: true
    description?: true
    uploadedAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ImportedFileCountAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    ossPath?: true
    description?: true
    tags?: true
    uploadedAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ImportedFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportedFile to aggregate.
     */
    where?: ImportedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportedFiles to fetch.
     */
    orderBy?: ImportedFileOrderByWithRelationInput | ImportedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportedFiles
    **/
    _count?: true | ImportedFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportedFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportedFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportedFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportedFileMaxAggregateInputType
  }

  export type GetImportedFileAggregateType<T extends ImportedFileAggregateArgs> = {
        [P in keyof T & keyof AggregateImportedFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportedFile[P]>
      : GetScalarType<T[P], AggregateImportedFile[P]>
  }




  export type ImportedFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportedFileWhereInput
    orderBy?: ImportedFileOrderByWithAggregationInput | ImportedFileOrderByWithAggregationInput[]
    by: ImportedFileScalarFieldEnum[] | ImportedFileScalarFieldEnum
    having?: ImportedFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportedFileCountAggregateInputType | true
    _avg?: ImportedFileAvgAggregateInputType
    _sum?: ImportedFileSumAggregateInputType
    _min?: ImportedFileMinAggregateInputType
    _max?: ImportedFileMaxAggregateInputType
  }

  export type ImportedFileGroupByOutputType = {
    id: string
    fileName: string
    fileType: string
    fileSize: number
    ossPath: string
    description: string | null
    tags: string[]
    uploadedAt: Date
    updatedAt: Date
    userId: string
    _count: ImportedFileCountAggregateOutputType | null
    _avg: ImportedFileAvgAggregateOutputType | null
    _sum: ImportedFileSumAggregateOutputType | null
    _min: ImportedFileMinAggregateOutputType | null
    _max: ImportedFileMaxAggregateOutputType | null
  }

  type GetImportedFileGroupByPayload<T extends ImportedFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportedFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportedFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportedFileGroupByOutputType[P]>
            : GetScalarType<T[P], ImportedFileGroupByOutputType[P]>
        }
      >
    >


  export type ImportedFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    ossPath?: boolean
    description?: boolean
    tags?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importedFile"]>

  export type ImportedFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    ossPath?: boolean
    description?: boolean
    tags?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importedFile"]>

  export type ImportedFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    ossPath?: boolean
    description?: boolean
    tags?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["importedFile"]>

  export type ImportedFileSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    ossPath?: boolean
    description?: boolean
    tags?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ImportedFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileType" | "fileSize" | "ossPath" | "description" | "tags" | "uploadedAt" | "updatedAt" | "userId", ExtArgs["result"]["importedFile"]>
  export type ImportedFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImportedFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImportedFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ImportedFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportedFile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      fileType: string
      fileSize: number
      ossPath: string
      description: string | null
      tags: string[]
      uploadedAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["importedFile"]>
    composites: {}
  }

  type ImportedFileGetPayload<S extends boolean | null | undefined | ImportedFileDefaultArgs> = $Result.GetResult<Prisma.$ImportedFilePayload, S>

  type ImportedFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportedFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportedFileCountAggregateInputType | true
    }

  export interface ImportedFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportedFile'], meta: { name: 'ImportedFile' } }
    /**
     * Find zero or one ImportedFile that matches the filter.
     * @param {ImportedFileFindUniqueArgs} args - Arguments to find a ImportedFile
     * @example
     * // Get one ImportedFile
     * const importedFile = await prisma.importedFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportedFileFindUniqueArgs>(args: SelectSubset<T, ImportedFileFindUniqueArgs<ExtArgs>>): Prisma__ImportedFileClient<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportedFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportedFileFindUniqueOrThrowArgs} args - Arguments to find a ImportedFile
     * @example
     * // Get one ImportedFile
     * const importedFile = await prisma.importedFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportedFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportedFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportedFileClient<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportedFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportedFileFindFirstArgs} args - Arguments to find a ImportedFile
     * @example
     * // Get one ImportedFile
     * const importedFile = await prisma.importedFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportedFileFindFirstArgs>(args?: SelectSubset<T, ImportedFileFindFirstArgs<ExtArgs>>): Prisma__ImportedFileClient<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportedFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportedFileFindFirstOrThrowArgs} args - Arguments to find a ImportedFile
     * @example
     * // Get one ImportedFile
     * const importedFile = await prisma.importedFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportedFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportedFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportedFileClient<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportedFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportedFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportedFiles
     * const importedFiles = await prisma.importedFile.findMany()
     * 
     * // Get first 10 ImportedFiles
     * const importedFiles = await prisma.importedFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importedFileWithIdOnly = await prisma.importedFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportedFileFindManyArgs>(args?: SelectSubset<T, ImportedFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportedFile.
     * @param {ImportedFileCreateArgs} args - Arguments to create a ImportedFile.
     * @example
     * // Create one ImportedFile
     * const ImportedFile = await prisma.importedFile.create({
     *   data: {
     *     // ... data to create a ImportedFile
     *   }
     * })
     * 
     */
    create<T extends ImportedFileCreateArgs>(args: SelectSubset<T, ImportedFileCreateArgs<ExtArgs>>): Prisma__ImportedFileClient<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportedFiles.
     * @param {ImportedFileCreateManyArgs} args - Arguments to create many ImportedFiles.
     * @example
     * // Create many ImportedFiles
     * const importedFile = await prisma.importedFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportedFileCreateManyArgs>(args?: SelectSubset<T, ImportedFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportedFiles and returns the data saved in the database.
     * @param {ImportedFileCreateManyAndReturnArgs} args - Arguments to create many ImportedFiles.
     * @example
     * // Create many ImportedFiles
     * const importedFile = await prisma.importedFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportedFiles and only return the `id`
     * const importedFileWithIdOnly = await prisma.importedFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportedFileCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportedFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportedFile.
     * @param {ImportedFileDeleteArgs} args - Arguments to delete one ImportedFile.
     * @example
     * // Delete one ImportedFile
     * const ImportedFile = await prisma.importedFile.delete({
     *   where: {
     *     // ... filter to delete one ImportedFile
     *   }
     * })
     * 
     */
    delete<T extends ImportedFileDeleteArgs>(args: SelectSubset<T, ImportedFileDeleteArgs<ExtArgs>>): Prisma__ImportedFileClient<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportedFile.
     * @param {ImportedFileUpdateArgs} args - Arguments to update one ImportedFile.
     * @example
     * // Update one ImportedFile
     * const importedFile = await prisma.importedFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportedFileUpdateArgs>(args: SelectSubset<T, ImportedFileUpdateArgs<ExtArgs>>): Prisma__ImportedFileClient<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportedFiles.
     * @param {ImportedFileDeleteManyArgs} args - Arguments to filter ImportedFiles to delete.
     * @example
     * // Delete a few ImportedFiles
     * const { count } = await prisma.importedFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportedFileDeleteManyArgs>(args?: SelectSubset<T, ImportedFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportedFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportedFiles
     * const importedFile = await prisma.importedFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportedFileUpdateManyArgs>(args: SelectSubset<T, ImportedFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportedFiles and returns the data updated in the database.
     * @param {ImportedFileUpdateManyAndReturnArgs} args - Arguments to update many ImportedFiles.
     * @example
     * // Update many ImportedFiles
     * const importedFile = await prisma.importedFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportedFiles and only return the `id`
     * const importedFileWithIdOnly = await prisma.importedFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImportedFileUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportedFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportedFile.
     * @param {ImportedFileUpsertArgs} args - Arguments to update or create a ImportedFile.
     * @example
     * // Update or create a ImportedFile
     * const importedFile = await prisma.importedFile.upsert({
     *   create: {
     *     // ... data to create a ImportedFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportedFile we want to update
     *   }
     * })
     */
    upsert<T extends ImportedFileUpsertArgs>(args: SelectSubset<T, ImportedFileUpsertArgs<ExtArgs>>): Prisma__ImportedFileClient<$Result.GetResult<Prisma.$ImportedFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportedFileCountArgs} args - Arguments to filter ImportedFiles to count.
     * @example
     * // Count the number of ImportedFiles
     * const count = await prisma.importedFile.count({
     *   where: {
     *     // ... the filter for the ImportedFiles we want to count
     *   }
     * })
    **/
    count<T extends ImportedFileCountArgs>(
      args?: Subset<T, ImportedFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportedFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportedFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImportedFileAggregateArgs>(args: Subset<T, ImportedFileAggregateArgs>): Prisma.PrismaPromise<GetImportedFileAggregateType<T>>

    /**
     * Group by ImportedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportedFileGroupByArgs} args - Group by arguments.
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
      T extends ImportedFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportedFileGroupByArgs['orderBy'] }
        : { orderBy?: ImportedFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImportedFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportedFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportedFile model
   */
  readonly fields: ImportedFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportedFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportedFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImportedFile model
   */
  interface ImportedFileFieldRefs {
    readonly id: FieldRef<"ImportedFile", 'String'>
    readonly fileName: FieldRef<"ImportedFile", 'String'>
    readonly fileType: FieldRef<"ImportedFile", 'String'>
    readonly fileSize: FieldRef<"ImportedFile", 'Int'>
    readonly ossPath: FieldRef<"ImportedFile", 'String'>
    readonly description: FieldRef<"ImportedFile", 'String'>
    readonly tags: FieldRef<"ImportedFile", 'String[]'>
    readonly uploadedAt: FieldRef<"ImportedFile", 'DateTime'>
    readonly updatedAt: FieldRef<"ImportedFile", 'DateTime'>
    readonly userId: FieldRef<"ImportedFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImportedFile findUnique
   */
  export type ImportedFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    /**
     * Filter, which ImportedFile to fetch.
     */
    where: ImportedFileWhereUniqueInput
  }

  /**
   * ImportedFile findUniqueOrThrow
   */
  export type ImportedFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    /**
     * Filter, which ImportedFile to fetch.
     */
    where: ImportedFileWhereUniqueInput
  }

  /**
   * ImportedFile findFirst
   */
  export type ImportedFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    /**
     * Filter, which ImportedFile to fetch.
     */
    where?: ImportedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportedFiles to fetch.
     */
    orderBy?: ImportedFileOrderByWithRelationInput | ImportedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportedFiles.
     */
    cursor?: ImportedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportedFiles.
     */
    distinct?: ImportedFileScalarFieldEnum | ImportedFileScalarFieldEnum[]
  }

  /**
   * ImportedFile findFirstOrThrow
   */
  export type ImportedFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    /**
     * Filter, which ImportedFile to fetch.
     */
    where?: ImportedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportedFiles to fetch.
     */
    orderBy?: ImportedFileOrderByWithRelationInput | ImportedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportedFiles.
     */
    cursor?: ImportedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportedFiles.
     */
    distinct?: ImportedFileScalarFieldEnum | ImportedFileScalarFieldEnum[]
  }

  /**
   * ImportedFile findMany
   */
  export type ImportedFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    /**
     * Filter, which ImportedFiles to fetch.
     */
    where?: ImportedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportedFiles to fetch.
     */
    orderBy?: ImportedFileOrderByWithRelationInput | ImportedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportedFiles.
     */
    cursor?: ImportedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportedFiles.
     */
    skip?: number
    distinct?: ImportedFileScalarFieldEnum | ImportedFileScalarFieldEnum[]
  }

  /**
   * ImportedFile create
   */
  export type ImportedFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    /**
     * The data needed to create a ImportedFile.
     */
    data: XOR<ImportedFileCreateInput, ImportedFileUncheckedCreateInput>
  }

  /**
   * ImportedFile createMany
   */
  export type ImportedFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportedFiles.
     */
    data: ImportedFileCreateManyInput | ImportedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportedFile createManyAndReturn
   */
  export type ImportedFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * The data used to create many ImportedFiles.
     */
    data: ImportedFileCreateManyInput | ImportedFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportedFile update
   */
  export type ImportedFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    /**
     * The data needed to update a ImportedFile.
     */
    data: XOR<ImportedFileUpdateInput, ImportedFileUncheckedUpdateInput>
    /**
     * Choose, which ImportedFile to update.
     */
    where: ImportedFileWhereUniqueInput
  }

  /**
   * ImportedFile updateMany
   */
  export type ImportedFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportedFiles.
     */
    data: XOR<ImportedFileUpdateManyMutationInput, ImportedFileUncheckedUpdateManyInput>
    /**
     * Filter which ImportedFiles to update
     */
    where?: ImportedFileWhereInput
    /**
     * Limit how many ImportedFiles to update.
     */
    limit?: number
  }

  /**
   * ImportedFile updateManyAndReturn
   */
  export type ImportedFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * The data used to update ImportedFiles.
     */
    data: XOR<ImportedFileUpdateManyMutationInput, ImportedFileUncheckedUpdateManyInput>
    /**
     * Filter which ImportedFiles to update
     */
    where?: ImportedFileWhereInput
    /**
     * Limit how many ImportedFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImportedFile upsert
   */
  export type ImportedFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    /**
     * The filter to search for the ImportedFile to update in case it exists.
     */
    where: ImportedFileWhereUniqueInput
    /**
     * In case the ImportedFile found by the `where` argument doesn't exist, create a new ImportedFile with this data.
     */
    create: XOR<ImportedFileCreateInput, ImportedFileUncheckedCreateInput>
    /**
     * In case the ImportedFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportedFileUpdateInput, ImportedFileUncheckedUpdateInput>
  }

  /**
   * ImportedFile delete
   */
  export type ImportedFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
    /**
     * Filter which ImportedFile to delete.
     */
    where: ImportedFileWhereUniqueInput
  }

  /**
   * ImportedFile deleteMany
   */
  export type ImportedFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportedFiles to delete
     */
    where?: ImportedFileWhereInput
    /**
     * Limit how many ImportedFiles to delete.
     */
    limit?: number
  }

  /**
   * ImportedFile without action
   */
  export type ImportedFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportedFile
     */
    select?: ImportedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportedFile
     */
    omit?: ImportedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImportedFileInclude<ExtArgs> | null
  }


  /**
   * Model LogArchive
   */

  export type AggregateLogArchive = {
    _count: LogArchiveCountAggregateOutputType | null
    _avg: LogArchiveAvgAggregateOutputType | null
    _sum: LogArchiveSumAggregateOutputType | null
    _min: LogArchiveMinAggregateOutputType | null
    _max: LogArchiveMaxAggregateOutputType | null
  }

  export type LogArchiveAvgAggregateOutputType = {
    year: number | null
    month: number | null
    day: number | null
  }

  export type LogArchiveSumAggregateOutputType = {
    year: number | null
    month: number | null
    day: number | null
  }

  export type LogArchiveMinAggregateOutputType = {
    id: string | null
    content: string | null
    logDate: Date | null
    archiveDate: Date | null
    year: number | null
    month: number | null
    day: number | null
  }

  export type LogArchiveMaxAggregateOutputType = {
    id: string | null
    content: string | null
    logDate: Date | null
    archiveDate: Date | null
    year: number | null
    month: number | null
    day: number | null
  }

  export type LogArchiveCountAggregateOutputType = {
    id: number
    content: number
    logDate: number
    archiveDate: number
    year: number
    month: number
    day: number
    tags: number
    _all: number
  }


  export type LogArchiveAvgAggregateInputType = {
    year?: true
    month?: true
    day?: true
  }

  export type LogArchiveSumAggregateInputType = {
    year?: true
    month?: true
    day?: true
  }

  export type LogArchiveMinAggregateInputType = {
    id?: true
    content?: true
    logDate?: true
    archiveDate?: true
    year?: true
    month?: true
    day?: true
  }

  export type LogArchiveMaxAggregateInputType = {
    id?: true
    content?: true
    logDate?: true
    archiveDate?: true
    year?: true
    month?: true
    day?: true
  }

  export type LogArchiveCountAggregateInputType = {
    id?: true
    content?: true
    logDate?: true
    archiveDate?: true
    year?: true
    month?: true
    day?: true
    tags?: true
    _all?: true
  }

  export type LogArchiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogArchive to aggregate.
     */
    where?: LogArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogArchives to fetch.
     */
    orderBy?: LogArchiveOrderByWithRelationInput | LogArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogArchives
    **/
    _count?: true | LogArchiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogArchiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogArchiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogArchiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogArchiveMaxAggregateInputType
  }

  export type GetLogArchiveAggregateType<T extends LogArchiveAggregateArgs> = {
        [P in keyof T & keyof AggregateLogArchive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogArchive[P]>
      : GetScalarType<T[P], AggregateLogArchive[P]>
  }




  export type LogArchiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogArchiveWhereInput
    orderBy?: LogArchiveOrderByWithAggregationInput | LogArchiveOrderByWithAggregationInput[]
    by: LogArchiveScalarFieldEnum[] | LogArchiveScalarFieldEnum
    having?: LogArchiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogArchiveCountAggregateInputType | true
    _avg?: LogArchiveAvgAggregateInputType
    _sum?: LogArchiveSumAggregateInputType
    _min?: LogArchiveMinAggregateInputType
    _max?: LogArchiveMaxAggregateInputType
  }

  export type LogArchiveGroupByOutputType = {
    id: string
    content: string
    logDate: Date
    archiveDate: Date
    year: number
    month: number
    day: number
    tags: string[]
    _count: LogArchiveCountAggregateOutputType | null
    _avg: LogArchiveAvgAggregateOutputType | null
    _sum: LogArchiveSumAggregateOutputType | null
    _min: LogArchiveMinAggregateOutputType | null
    _max: LogArchiveMaxAggregateOutputType | null
  }

  type GetLogArchiveGroupByPayload<T extends LogArchiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogArchiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogArchiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogArchiveGroupByOutputType[P]>
            : GetScalarType<T[P], LogArchiveGroupByOutputType[P]>
        }
      >
    >


  export type LogArchiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    logDate?: boolean
    archiveDate?: boolean
    year?: boolean
    month?: boolean
    day?: boolean
    tags?: boolean
  }, ExtArgs["result"]["logArchive"]>

  export type LogArchiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    logDate?: boolean
    archiveDate?: boolean
    year?: boolean
    month?: boolean
    day?: boolean
    tags?: boolean
  }, ExtArgs["result"]["logArchive"]>

  export type LogArchiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    logDate?: boolean
    archiveDate?: boolean
    year?: boolean
    month?: boolean
    day?: boolean
    tags?: boolean
  }, ExtArgs["result"]["logArchive"]>

  export type LogArchiveSelectScalar = {
    id?: boolean
    content?: boolean
    logDate?: boolean
    archiveDate?: boolean
    year?: boolean
    month?: boolean
    day?: boolean
    tags?: boolean
  }

  export type LogArchiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "logDate" | "archiveDate" | "year" | "month" | "day" | "tags", ExtArgs["result"]["logArchive"]>

  export type $LogArchivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogArchive"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      logDate: Date
      archiveDate: Date
      year: number
      month: number
      day: number
      tags: string[]
    }, ExtArgs["result"]["logArchive"]>
    composites: {}
  }

  type LogArchiveGetPayload<S extends boolean | null | undefined | LogArchiveDefaultArgs> = $Result.GetResult<Prisma.$LogArchivePayload, S>

  type LogArchiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogArchiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogArchiveCountAggregateInputType | true
    }

  export interface LogArchiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogArchive'], meta: { name: 'LogArchive' } }
    /**
     * Find zero or one LogArchive that matches the filter.
     * @param {LogArchiveFindUniqueArgs} args - Arguments to find a LogArchive
     * @example
     * // Get one LogArchive
     * const logArchive = await prisma.logArchive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogArchiveFindUniqueArgs>(args: SelectSubset<T, LogArchiveFindUniqueArgs<ExtArgs>>): Prisma__LogArchiveClient<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogArchive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogArchiveFindUniqueOrThrowArgs} args - Arguments to find a LogArchive
     * @example
     * // Get one LogArchive
     * const logArchive = await prisma.logArchive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogArchiveFindUniqueOrThrowArgs>(args: SelectSubset<T, LogArchiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogArchiveClient<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogArchive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogArchiveFindFirstArgs} args - Arguments to find a LogArchive
     * @example
     * // Get one LogArchive
     * const logArchive = await prisma.logArchive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogArchiveFindFirstArgs>(args?: SelectSubset<T, LogArchiveFindFirstArgs<ExtArgs>>): Prisma__LogArchiveClient<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogArchive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogArchiveFindFirstOrThrowArgs} args - Arguments to find a LogArchive
     * @example
     * // Get one LogArchive
     * const logArchive = await prisma.logArchive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogArchiveFindFirstOrThrowArgs>(args?: SelectSubset<T, LogArchiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogArchiveClient<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogArchives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogArchiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogArchives
     * const logArchives = await prisma.logArchive.findMany()
     * 
     * // Get first 10 LogArchives
     * const logArchives = await prisma.logArchive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logArchiveWithIdOnly = await prisma.logArchive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogArchiveFindManyArgs>(args?: SelectSubset<T, LogArchiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogArchive.
     * @param {LogArchiveCreateArgs} args - Arguments to create a LogArchive.
     * @example
     * // Create one LogArchive
     * const LogArchive = await prisma.logArchive.create({
     *   data: {
     *     // ... data to create a LogArchive
     *   }
     * })
     * 
     */
    create<T extends LogArchiveCreateArgs>(args: SelectSubset<T, LogArchiveCreateArgs<ExtArgs>>): Prisma__LogArchiveClient<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogArchives.
     * @param {LogArchiveCreateManyArgs} args - Arguments to create many LogArchives.
     * @example
     * // Create many LogArchives
     * const logArchive = await prisma.logArchive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogArchiveCreateManyArgs>(args?: SelectSubset<T, LogArchiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogArchives and returns the data saved in the database.
     * @param {LogArchiveCreateManyAndReturnArgs} args - Arguments to create many LogArchives.
     * @example
     * // Create many LogArchives
     * const logArchive = await prisma.logArchive.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogArchives and only return the `id`
     * const logArchiveWithIdOnly = await prisma.logArchive.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogArchiveCreateManyAndReturnArgs>(args?: SelectSubset<T, LogArchiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogArchive.
     * @param {LogArchiveDeleteArgs} args - Arguments to delete one LogArchive.
     * @example
     * // Delete one LogArchive
     * const LogArchive = await prisma.logArchive.delete({
     *   where: {
     *     // ... filter to delete one LogArchive
     *   }
     * })
     * 
     */
    delete<T extends LogArchiveDeleteArgs>(args: SelectSubset<T, LogArchiveDeleteArgs<ExtArgs>>): Prisma__LogArchiveClient<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogArchive.
     * @param {LogArchiveUpdateArgs} args - Arguments to update one LogArchive.
     * @example
     * // Update one LogArchive
     * const logArchive = await prisma.logArchive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogArchiveUpdateArgs>(args: SelectSubset<T, LogArchiveUpdateArgs<ExtArgs>>): Prisma__LogArchiveClient<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogArchives.
     * @param {LogArchiveDeleteManyArgs} args - Arguments to filter LogArchives to delete.
     * @example
     * // Delete a few LogArchives
     * const { count } = await prisma.logArchive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogArchiveDeleteManyArgs>(args?: SelectSubset<T, LogArchiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogArchives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogArchiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogArchives
     * const logArchive = await prisma.logArchive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogArchiveUpdateManyArgs>(args: SelectSubset<T, LogArchiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogArchives and returns the data updated in the database.
     * @param {LogArchiveUpdateManyAndReturnArgs} args - Arguments to update many LogArchives.
     * @example
     * // Update many LogArchives
     * const logArchive = await prisma.logArchive.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogArchives and only return the `id`
     * const logArchiveWithIdOnly = await prisma.logArchive.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogArchiveUpdateManyAndReturnArgs>(args: SelectSubset<T, LogArchiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogArchive.
     * @param {LogArchiveUpsertArgs} args - Arguments to update or create a LogArchive.
     * @example
     * // Update or create a LogArchive
     * const logArchive = await prisma.logArchive.upsert({
     *   create: {
     *     // ... data to create a LogArchive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogArchive we want to update
     *   }
     * })
     */
    upsert<T extends LogArchiveUpsertArgs>(args: SelectSubset<T, LogArchiveUpsertArgs<ExtArgs>>): Prisma__LogArchiveClient<$Result.GetResult<Prisma.$LogArchivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogArchives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogArchiveCountArgs} args - Arguments to filter LogArchives to count.
     * @example
     * // Count the number of LogArchives
     * const count = await prisma.logArchive.count({
     *   where: {
     *     // ... the filter for the LogArchives we want to count
     *   }
     * })
    **/
    count<T extends LogArchiveCountArgs>(
      args?: Subset<T, LogArchiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogArchiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogArchive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogArchiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogArchiveAggregateArgs>(args: Subset<T, LogArchiveAggregateArgs>): Prisma.PrismaPromise<GetLogArchiveAggregateType<T>>

    /**
     * Group by LogArchive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogArchiveGroupByArgs} args - Group by arguments.
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
      T extends LogArchiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogArchiveGroupByArgs['orderBy'] }
        : { orderBy?: LogArchiveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogArchiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogArchiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogArchive model
   */
  readonly fields: LogArchiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogArchive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogArchiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogArchive model
   */
  interface LogArchiveFieldRefs {
    readonly id: FieldRef<"LogArchive", 'String'>
    readonly content: FieldRef<"LogArchive", 'String'>
    readonly logDate: FieldRef<"LogArchive", 'DateTime'>
    readonly archiveDate: FieldRef<"LogArchive", 'DateTime'>
    readonly year: FieldRef<"LogArchive", 'Int'>
    readonly month: FieldRef<"LogArchive", 'Int'>
    readonly day: FieldRef<"LogArchive", 'Int'>
    readonly tags: FieldRef<"LogArchive", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * LogArchive findUnique
   */
  export type LogArchiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * Filter, which LogArchive to fetch.
     */
    where: LogArchiveWhereUniqueInput
  }

  /**
   * LogArchive findUniqueOrThrow
   */
  export type LogArchiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * Filter, which LogArchive to fetch.
     */
    where: LogArchiveWhereUniqueInput
  }

  /**
   * LogArchive findFirst
   */
  export type LogArchiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * Filter, which LogArchive to fetch.
     */
    where?: LogArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogArchives to fetch.
     */
    orderBy?: LogArchiveOrderByWithRelationInput | LogArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogArchives.
     */
    cursor?: LogArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogArchives.
     */
    distinct?: LogArchiveScalarFieldEnum | LogArchiveScalarFieldEnum[]
  }

  /**
   * LogArchive findFirstOrThrow
   */
  export type LogArchiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * Filter, which LogArchive to fetch.
     */
    where?: LogArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogArchives to fetch.
     */
    orderBy?: LogArchiveOrderByWithRelationInput | LogArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogArchives.
     */
    cursor?: LogArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogArchives.
     */
    distinct?: LogArchiveScalarFieldEnum | LogArchiveScalarFieldEnum[]
  }

  /**
   * LogArchive findMany
   */
  export type LogArchiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * Filter, which LogArchives to fetch.
     */
    where?: LogArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogArchives to fetch.
     */
    orderBy?: LogArchiveOrderByWithRelationInput | LogArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogArchives.
     */
    cursor?: LogArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogArchives.
     */
    skip?: number
    distinct?: LogArchiveScalarFieldEnum | LogArchiveScalarFieldEnum[]
  }

  /**
   * LogArchive create
   */
  export type LogArchiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * The data needed to create a LogArchive.
     */
    data: XOR<LogArchiveCreateInput, LogArchiveUncheckedCreateInput>
  }

  /**
   * LogArchive createMany
   */
  export type LogArchiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogArchives.
     */
    data: LogArchiveCreateManyInput | LogArchiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogArchive createManyAndReturn
   */
  export type LogArchiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * The data used to create many LogArchives.
     */
    data: LogArchiveCreateManyInput | LogArchiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogArchive update
   */
  export type LogArchiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * The data needed to update a LogArchive.
     */
    data: XOR<LogArchiveUpdateInput, LogArchiveUncheckedUpdateInput>
    /**
     * Choose, which LogArchive to update.
     */
    where: LogArchiveWhereUniqueInput
  }

  /**
   * LogArchive updateMany
   */
  export type LogArchiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogArchives.
     */
    data: XOR<LogArchiveUpdateManyMutationInput, LogArchiveUncheckedUpdateManyInput>
    /**
     * Filter which LogArchives to update
     */
    where?: LogArchiveWhereInput
    /**
     * Limit how many LogArchives to update.
     */
    limit?: number
  }

  /**
   * LogArchive updateManyAndReturn
   */
  export type LogArchiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * The data used to update LogArchives.
     */
    data: XOR<LogArchiveUpdateManyMutationInput, LogArchiveUncheckedUpdateManyInput>
    /**
     * Filter which LogArchives to update
     */
    where?: LogArchiveWhereInput
    /**
     * Limit how many LogArchives to update.
     */
    limit?: number
  }

  /**
   * LogArchive upsert
   */
  export type LogArchiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * The filter to search for the LogArchive to update in case it exists.
     */
    where: LogArchiveWhereUniqueInput
    /**
     * In case the LogArchive found by the `where` argument doesn't exist, create a new LogArchive with this data.
     */
    create: XOR<LogArchiveCreateInput, LogArchiveUncheckedCreateInput>
    /**
     * In case the LogArchive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogArchiveUpdateInput, LogArchiveUncheckedUpdateInput>
  }

  /**
   * LogArchive delete
   */
  export type LogArchiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
    /**
     * Filter which LogArchive to delete.
     */
    where: LogArchiveWhereUniqueInput
  }

  /**
   * LogArchive deleteMany
   */
  export type LogArchiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogArchives to delete
     */
    where?: LogArchiveWhereInput
    /**
     * Limit how many LogArchives to delete.
     */
    limit?: number
  }

  /**
   * LogArchive without action
   */
  export type LogArchiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogArchive
     */
    select?: LogArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogArchive
     */
    omit?: LogArchiveOmit<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    parentId: 'parentId',
    goalId: 'goalId',
    metadata: 'metadata',
    totalTime: 'totalTime'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    level: 'level',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    progress: 'progress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    parentId: 'parentId',
    metrics: 'metrics',
    resources: 'resources',
    priority: 'priority',
    weight: 'weight',
    metadata: 'metadata'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId',
    metadata: 'metadata'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    parentId: 'parentId',
    sourceType: 'sourceType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TimeRecordScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    taskId: 'taskId'
  };

  export type TimeRecordScalarFieldEnum = (typeof TimeRecordScalarFieldEnum)[keyof typeof TimeRecordScalarFieldEnum]


  export const ProgressLogScalarFieldEnum: {
    id: 'id',
    progress: 'progress',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    taskId: 'taskId',
    goalId: 'goalId'
  };

  export type ProgressLogScalarFieldEnum = (typeof ProgressLogScalarFieldEnum)[keyof typeof ProgressLogScalarFieldEnum]


  export const ImportedFileScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileType: 'fileType',
    fileSize: 'fileSize',
    ossPath: 'ossPath',
    description: 'description',
    tags: 'tags',
    uploadedAt: 'uploadedAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ImportedFileScalarFieldEnum = (typeof ImportedFileScalarFieldEnum)[keyof typeof ImportedFileScalarFieldEnum]


  export const LogArchiveScalarFieldEnum: {
    id: 'id',
    content: 'content',
    logDate: 'logDate',
    archiveDate: 'archiveDate',
    year: 'year',
    month: 'month',
    day: 'day',
    tags: 'tags'
  };

  export type LogArchiveScalarFieldEnum = (typeof LogArchiveScalarFieldEnum)[keyof typeof LogArchiveScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'GoalLevel'
   */
  export type EnumGoalLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalLevel'>
    


  /**
   * Reference to a field of type 'GoalLevel[]'
   */
  export type ListEnumGoalLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalLevel[]'>
    


  /**
   * Reference to a field of type 'GoalStatus'
   */
  export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>
    


  /**
   * Reference to a field of type 'GoalStatus[]'
   */
  export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    goals?: GoalListRelationFilter
    messages?: MessageListRelationFilter
    tasks?: TaskListRelationFilter
    timeRecords?: TimeRecordListRelationFilter
    progressLogs?: ProgressLogListRelationFilter
    importedFiles?: ImportedFileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goals?: GoalOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    timeRecords?: TimeRecordOrderByRelationAggregateInput
    progressLogs?: ProgressLogOrderByRelationAggregateInput
    importedFiles?: ImportedFileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    goals?: GoalListRelationFilter
    messages?: MessageListRelationFilter
    tasks?: TaskListRelationFilter
    timeRecords?: TimeRecordListRelationFilter
    progressLogs?: ProgressLogListRelationFilter
    importedFiles?: ImportedFileListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userId?: StringFilter<"Task"> | string
    parentId?: StringNullableFilter<"Task"> | string | null
    goalId?: StringNullableFilter<"Task"> | string | null
    metadata?: JsonNullableFilter<"Task">
    totalTime?: IntFilter<"Task"> | number
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    parent?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    subTasks?: TaskListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
    timeRecords?: TimeRecordListRelationFilter
    progressLogs?: ProgressLogListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    goalId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    totalTime?: SortOrder
    goal?: GoalOrderByWithRelationInput
    parent?: TaskOrderByWithRelationInput
    subTasks?: TaskOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    timeRecords?: TimeRecordOrderByRelationAggregateInput
    progressLogs?: ProgressLogOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userId?: StringFilter<"Task"> | string
    parentId?: StringNullableFilter<"Task"> | string | null
    goalId?: StringNullableFilter<"Task"> | string | null
    metadata?: JsonNullableFilter<"Task">
    totalTime?: IntFilter<"Task"> | number
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    parent?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    subTasks?: TaskListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
    timeRecords?: TimeRecordListRelationFilter
    progressLogs?: ProgressLogListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    goalId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    totalTime?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    userId?: StringWithAggregatesFilter<"Task"> | string
    parentId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    goalId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Task">
    totalTime?: IntWithAggregatesFilter<"Task"> | number
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    level?: EnumGoalLevelFilter<"Goal"> | $Enums.GoalLevel
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    startDate?: DateTimeFilter<"Goal"> | Date | string
    endDate?: DateTimeFilter<"Goal"> | Date | string
    progress?: FloatFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    userId?: StringFilter<"Goal"> | string
    parentId?: StringNullableFilter<"Goal"> | string | null
    metrics?: JsonNullableFilter<"Goal">
    resources?: JsonNullableFilter<"Goal">
    priority?: IntFilter<"Goal"> | number
    weight?: FloatFilter<"Goal"> | number
    metadata?: JsonNullableFilter<"Goal">
    parent?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    subGoals?: GoalListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    tags?: TagListRelationFilter
    progressLogs?: ProgressLogListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    metrics?: SortOrderInput | SortOrder
    resources?: SortOrderInput | SortOrder
    priority?: SortOrder
    weight?: SortOrder
    metadata?: SortOrderInput | SortOrder
    parent?: GoalOrderByWithRelationInput
    subGoals?: GoalOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    progressLogs?: ProgressLogOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    level?: EnumGoalLevelFilter<"Goal"> | $Enums.GoalLevel
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    startDate?: DateTimeFilter<"Goal"> | Date | string
    endDate?: DateTimeFilter<"Goal"> | Date | string
    progress?: FloatFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    userId?: StringFilter<"Goal"> | string
    parentId?: StringNullableFilter<"Goal"> | string | null
    metrics?: JsonNullableFilter<"Goal">
    resources?: JsonNullableFilter<"Goal">
    priority?: IntFilter<"Goal"> | number
    weight?: FloatFilter<"Goal"> | number
    metadata?: JsonNullableFilter<"Goal">
    parent?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    subGoals?: GoalListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    tags?: TagListRelationFilter
    progressLogs?: ProgressLogListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    metrics?: SortOrderInput | SortOrder
    resources?: SortOrderInput | SortOrder
    priority?: SortOrder
    weight?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    level?: EnumGoalLevelWithAggregatesFilter<"Goal"> | $Enums.GoalLevel
    status?: EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus
    startDate?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    progress?: FloatWithAggregatesFilter<"Goal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    userId?: StringWithAggregatesFilter<"Goal"> | string
    parentId?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    metrics?: JsonNullableWithAggregatesFilter<"Goal">
    resources?: JsonNullableWithAggregatesFilter<"Goal">
    priority?: IntWithAggregatesFilter<"Goal"> | number
    weight?: FloatWithAggregatesFilter<"Goal"> | number
    metadata?: JsonNullableWithAggregatesFilter<"Goal">
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sourceType?: StringFilter<"Message"> | string
    sourceId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    userId?: StringFilter<"Message"> | string
    categoryId?: StringNullableFilter<"Message"> | string | null
    metadata?: JsonNullableFilter<"Message">
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    sourceType?: StringFilter<"Message"> | string
    sourceId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    userId?: StringFilter<"Message"> | string
    categoryId?: StringNullableFilter<"Message"> | string | null
    metadata?: JsonNullableFilter<"Message">
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    sourceType?: StringWithAggregatesFilter<"Message"> | string
    sourceId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    userId?: StringWithAggregatesFilter<"Message"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Message">
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    sourceType?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subCategories?: CategoryListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    sourceType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: CategoryOrderByWithRelationInput
    subCategories?: CategoryOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    sourceType?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subCategories?: CategoryListRelationFilter
    messages?: MessageListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    sourceType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sourceType?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    goals?: GoalListRelationFilter
    messages?: MessageListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    goals?: GoalOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    goals?: GoalListRelationFilter
    messages?: MessageListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    color?: StringNullableWithAggregatesFilter<"Tag"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type TimeRecordWhereInput = {
    AND?: TimeRecordWhereInput | TimeRecordWhereInput[]
    OR?: TimeRecordWhereInput[]
    NOT?: TimeRecordWhereInput | TimeRecordWhereInput[]
    id?: StringFilter<"TimeRecord"> | string
    startTime?: DateTimeFilter<"TimeRecord"> | Date | string
    endTime?: DateTimeNullableFilter<"TimeRecord"> | Date | string | null
    duration?: IntNullableFilter<"TimeRecord"> | number | null
    note?: StringNullableFilter<"TimeRecord"> | string | null
    createdAt?: DateTimeFilter<"TimeRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TimeRecord"> | Date | string
    userId?: StringFilter<"TimeRecord"> | string
    taskId?: StringFilter<"TimeRecord"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TimeRecordOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    user?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type TimeRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeRecordWhereInput | TimeRecordWhereInput[]
    OR?: TimeRecordWhereInput[]
    NOT?: TimeRecordWhereInput | TimeRecordWhereInput[]
    startTime?: DateTimeFilter<"TimeRecord"> | Date | string
    endTime?: DateTimeNullableFilter<"TimeRecord"> | Date | string | null
    duration?: IntNullableFilter<"TimeRecord"> | number | null
    note?: StringNullableFilter<"TimeRecord"> | string | null
    createdAt?: DateTimeFilter<"TimeRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TimeRecord"> | Date | string
    userId?: StringFilter<"TimeRecord"> | string
    taskId?: StringFilter<"TimeRecord"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TimeRecordOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    _count?: TimeRecordCountOrderByAggregateInput
    _avg?: TimeRecordAvgOrderByAggregateInput
    _max?: TimeRecordMaxOrderByAggregateInput
    _min?: TimeRecordMinOrderByAggregateInput
    _sum?: TimeRecordSumOrderByAggregateInput
  }

  export type TimeRecordScalarWhereWithAggregatesInput = {
    AND?: TimeRecordScalarWhereWithAggregatesInput | TimeRecordScalarWhereWithAggregatesInput[]
    OR?: TimeRecordScalarWhereWithAggregatesInput[]
    NOT?: TimeRecordScalarWhereWithAggregatesInput | TimeRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeRecord"> | string
    startTime?: DateTimeWithAggregatesFilter<"TimeRecord"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"TimeRecord"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"TimeRecord"> | number | null
    note?: StringNullableWithAggregatesFilter<"TimeRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TimeRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeRecord"> | Date | string
    userId?: StringWithAggregatesFilter<"TimeRecord"> | string
    taskId?: StringWithAggregatesFilter<"TimeRecord"> | string
  }

  export type ProgressLogWhereInput = {
    AND?: ProgressLogWhereInput | ProgressLogWhereInput[]
    OR?: ProgressLogWhereInput[]
    NOT?: ProgressLogWhereInput | ProgressLogWhereInput[]
    id?: StringFilter<"ProgressLog"> | string
    progress?: FloatFilter<"ProgressLog"> | number
    note?: StringNullableFilter<"ProgressLog"> | string | null
    createdAt?: DateTimeFilter<"ProgressLog"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressLog"> | Date | string
    userId?: StringFilter<"ProgressLog"> | string
    taskId?: StringNullableFilter<"ProgressLog"> | string | null
    goalId?: StringNullableFilter<"ProgressLog"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
  }

  export type ProgressLogOrderByWithRelationInput = {
    id?: SortOrder
    progress?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    goalId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
    goal?: GoalOrderByWithRelationInput
  }

  export type ProgressLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressLogWhereInput | ProgressLogWhereInput[]
    OR?: ProgressLogWhereInput[]
    NOT?: ProgressLogWhereInput | ProgressLogWhereInput[]
    progress?: FloatFilter<"ProgressLog"> | number
    note?: StringNullableFilter<"ProgressLog"> | string | null
    createdAt?: DateTimeFilter<"ProgressLog"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressLog"> | Date | string
    userId?: StringFilter<"ProgressLog"> | string
    taskId?: StringNullableFilter<"ProgressLog"> | string | null
    goalId?: StringNullableFilter<"ProgressLog"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
  }, "id">

  export type ProgressLogOrderByWithAggregationInput = {
    id?: SortOrder
    progress?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    goalId?: SortOrderInput | SortOrder
    _count?: ProgressLogCountOrderByAggregateInput
    _avg?: ProgressLogAvgOrderByAggregateInput
    _max?: ProgressLogMaxOrderByAggregateInput
    _min?: ProgressLogMinOrderByAggregateInput
    _sum?: ProgressLogSumOrderByAggregateInput
  }

  export type ProgressLogScalarWhereWithAggregatesInput = {
    AND?: ProgressLogScalarWhereWithAggregatesInput | ProgressLogScalarWhereWithAggregatesInput[]
    OR?: ProgressLogScalarWhereWithAggregatesInput[]
    NOT?: ProgressLogScalarWhereWithAggregatesInput | ProgressLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressLog"> | string
    progress?: FloatWithAggregatesFilter<"ProgressLog"> | number
    note?: StringNullableWithAggregatesFilter<"ProgressLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProgressLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgressLog"> | Date | string
    userId?: StringWithAggregatesFilter<"ProgressLog"> | string
    taskId?: StringNullableWithAggregatesFilter<"ProgressLog"> | string | null
    goalId?: StringNullableWithAggregatesFilter<"ProgressLog"> | string | null
  }

  export type ImportedFileWhereInput = {
    AND?: ImportedFileWhereInput | ImportedFileWhereInput[]
    OR?: ImportedFileWhereInput[]
    NOT?: ImportedFileWhereInput | ImportedFileWhereInput[]
    id?: StringFilter<"ImportedFile"> | string
    fileName?: StringFilter<"ImportedFile"> | string
    fileType?: StringFilter<"ImportedFile"> | string
    fileSize?: IntFilter<"ImportedFile"> | number
    ossPath?: StringFilter<"ImportedFile"> | string
    description?: StringNullableFilter<"ImportedFile"> | string | null
    tags?: StringNullableListFilter<"ImportedFile">
    uploadedAt?: DateTimeFilter<"ImportedFile"> | Date | string
    updatedAt?: DateTimeFilter<"ImportedFile"> | Date | string
    userId?: StringFilter<"ImportedFile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ImportedFileOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    ossPath?: SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ImportedFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImportedFileWhereInput | ImportedFileWhereInput[]
    OR?: ImportedFileWhereInput[]
    NOT?: ImportedFileWhereInput | ImportedFileWhereInput[]
    fileName?: StringFilter<"ImportedFile"> | string
    fileType?: StringFilter<"ImportedFile"> | string
    fileSize?: IntFilter<"ImportedFile"> | number
    ossPath?: StringFilter<"ImportedFile"> | string
    description?: StringNullableFilter<"ImportedFile"> | string | null
    tags?: StringNullableListFilter<"ImportedFile">
    uploadedAt?: DateTimeFilter<"ImportedFile"> | Date | string
    updatedAt?: DateTimeFilter<"ImportedFile"> | Date | string
    userId?: StringFilter<"ImportedFile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ImportedFileOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    ossPath?: SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ImportedFileCountOrderByAggregateInput
    _avg?: ImportedFileAvgOrderByAggregateInput
    _max?: ImportedFileMaxOrderByAggregateInput
    _min?: ImportedFileMinOrderByAggregateInput
    _sum?: ImportedFileSumOrderByAggregateInput
  }

  export type ImportedFileScalarWhereWithAggregatesInput = {
    AND?: ImportedFileScalarWhereWithAggregatesInput | ImportedFileScalarWhereWithAggregatesInput[]
    OR?: ImportedFileScalarWhereWithAggregatesInput[]
    NOT?: ImportedFileScalarWhereWithAggregatesInput | ImportedFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImportedFile"> | string
    fileName?: StringWithAggregatesFilter<"ImportedFile"> | string
    fileType?: StringWithAggregatesFilter<"ImportedFile"> | string
    fileSize?: IntWithAggregatesFilter<"ImportedFile"> | number
    ossPath?: StringWithAggregatesFilter<"ImportedFile"> | string
    description?: StringNullableWithAggregatesFilter<"ImportedFile"> | string | null
    tags?: StringNullableListFilter<"ImportedFile">
    uploadedAt?: DateTimeWithAggregatesFilter<"ImportedFile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ImportedFile"> | Date | string
    userId?: StringWithAggregatesFilter<"ImportedFile"> | string
  }

  export type LogArchiveWhereInput = {
    AND?: LogArchiveWhereInput | LogArchiveWhereInput[]
    OR?: LogArchiveWhereInput[]
    NOT?: LogArchiveWhereInput | LogArchiveWhereInput[]
    id?: StringFilter<"LogArchive"> | string
    content?: StringFilter<"LogArchive"> | string
    logDate?: DateTimeFilter<"LogArchive"> | Date | string
    archiveDate?: DateTimeFilter<"LogArchive"> | Date | string
    year?: IntFilter<"LogArchive"> | number
    month?: IntFilter<"LogArchive"> | number
    day?: IntFilter<"LogArchive"> | number
    tags?: StringNullableListFilter<"LogArchive">
  }

  export type LogArchiveOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    logDate?: SortOrder
    archiveDate?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    tags?: SortOrder
  }

  export type LogArchiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogArchiveWhereInput | LogArchiveWhereInput[]
    OR?: LogArchiveWhereInput[]
    NOT?: LogArchiveWhereInput | LogArchiveWhereInput[]
    content?: StringFilter<"LogArchive"> | string
    logDate?: DateTimeFilter<"LogArchive"> | Date | string
    archiveDate?: DateTimeFilter<"LogArchive"> | Date | string
    year?: IntFilter<"LogArchive"> | number
    month?: IntFilter<"LogArchive"> | number
    day?: IntFilter<"LogArchive"> | number
    tags?: StringNullableListFilter<"LogArchive">
  }, "id">

  export type LogArchiveOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    logDate?: SortOrder
    archiveDate?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    tags?: SortOrder
    _count?: LogArchiveCountOrderByAggregateInput
    _avg?: LogArchiveAvgOrderByAggregateInput
    _max?: LogArchiveMaxOrderByAggregateInput
    _min?: LogArchiveMinOrderByAggregateInput
    _sum?: LogArchiveSumOrderByAggregateInput
  }

  export type LogArchiveScalarWhereWithAggregatesInput = {
    AND?: LogArchiveScalarWhereWithAggregatesInput | LogArchiveScalarWhereWithAggregatesInput[]
    OR?: LogArchiveScalarWhereWithAggregatesInput[]
    NOT?: LogArchiveScalarWhereWithAggregatesInput | LogArchiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogArchive"> | string
    content?: StringWithAggregatesFilter<"LogArchive"> | string
    logDate?: DateTimeWithAggregatesFilter<"LogArchive"> | Date | string
    archiveDate?: DateTimeWithAggregatesFilter<"LogArchive"> | Date | string
    year?: IntWithAggregatesFilter<"LogArchive"> | number
    month?: IntWithAggregatesFilter<"LogArchive"> | number
    day?: IntWithAggregatesFilter<"LogArchive"> | number
    tags?: StringNullableListFilter<"LogArchive">
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    goal?: GoalCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    goal?: GoalUpdateOneWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalCreateNestedOneWithoutSubGoalsInput
    subGoals?: GoalCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutGoalsInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
    tags?: TagCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedCreateNestedManyWithoutParentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
    tags?: TagUncheckedCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalUpdateOneWithoutSubGoalsNestedInput
    subGoals?: GoalUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
    tags?: TagUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedUpdateManyWithoutParentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
    tags?: TagUncheckedUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryCreateNestedOneWithoutMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
    tags?: TagCreateNestedManyWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    tags?: TagUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryUpdateOneWithoutMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    tags?: TagUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    tags?: TagUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutSubCategoriesInput
    subCategories?: CategoryCreateNestedManyWithoutParentInput
    messages?: MessageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
    messages?: MessageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutSubCategoriesNestedInput
    subCategories?: CategoryUpdateManyWithoutParentNestedInput
    messages?: MessageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutTagsInput
    messages?: MessageCreateNestedManyWithoutTagsInput
    tasks?: TaskCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutTagsInput
    messages?: MessageUncheckedCreateNestedManyWithoutTagsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutTagsNestedInput
    messages?: MessageUpdateManyWithoutTagsNestedInput
    tasks?: TaskUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutTagsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTagsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeRecordCreateInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeRecordsInput
    task: TaskCreateNestedOneWithoutTimeRecordsInput
  }

  export type TimeRecordUncheckedCreateInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    taskId: string
  }

  export type TimeRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeRecordsNestedInput
    task?: TaskUpdateOneRequiredWithoutTimeRecordsNestedInput
  }

  export type TimeRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeRecordCreateManyInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    taskId: string
  }

  export type TimeRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressLogCreateInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressLogsInput
    task?: TaskCreateNestedOneWithoutProgressLogsInput
    goal?: GoalCreateNestedOneWithoutProgressLogsInput
  }

  export type ProgressLogUncheckedCreateInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    taskId?: string | null
    goalId?: string | null
  }

  export type ProgressLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressLogsNestedInput
    task?: TaskUpdateOneWithoutProgressLogsNestedInput
    goal?: GoalUpdateOneWithoutProgressLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogCreateManyInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    taskId?: string | null
    goalId?: string | null
  }

  export type ProgressLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportedFileCreateInput = {
    id?: string
    fileName: string
    fileType: string
    fileSize: number
    ossPath: string
    description?: string | null
    tags?: ImportedFileCreatetagsInput | string[]
    uploadedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutImportedFilesInput
  }

  export type ImportedFileUncheckedCreateInput = {
    id?: string
    fileName: string
    fileType: string
    fileSize: number
    ossPath: string
    description?: string | null
    tags?: ImportedFileCreatetagsInput | string[]
    uploadedAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ImportedFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    ossPath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImportedFileUpdatetagsInput | string[]
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutImportedFilesNestedInput
  }

  export type ImportedFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    ossPath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImportedFileUpdatetagsInput | string[]
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ImportedFileCreateManyInput = {
    id?: string
    fileName: string
    fileType: string
    fileSize: number
    ossPath: string
    description?: string | null
    tags?: ImportedFileCreatetagsInput | string[]
    uploadedAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ImportedFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    ossPath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImportedFileUpdatetagsInput | string[]
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportedFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    ossPath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImportedFileUpdatetagsInput | string[]
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LogArchiveCreateInput = {
    id?: string
    content: string
    logDate: Date | string
    archiveDate?: Date | string
    year: number
    month: number
    day: number
    tags?: LogArchiveCreatetagsInput | string[]
  }

  export type LogArchiveUncheckedCreateInput = {
    id?: string
    content: string
    logDate: Date | string
    archiveDate?: Date | string
    year: number
    month: number
    day: number
    tags?: LogArchiveCreatetagsInput | string[]
  }

  export type LogArchiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    tags?: LogArchiveUpdatetagsInput | string[]
  }

  export type LogArchiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    tags?: LogArchiveUpdatetagsInput | string[]
  }

  export type LogArchiveCreateManyInput = {
    id?: string
    content: string
    logDate: Date | string
    archiveDate?: Date | string
    year: number
    month: number
    day: number
    tags?: LogArchiveCreatetagsInput | string[]
  }

  export type LogArchiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    tags?: LogArchiveUpdatetagsInput | string[]
  }

  export type LogArchiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    tags?: LogArchiveUpdatetagsInput | string[]
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

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TimeRecordListRelationFilter = {
    every?: TimeRecordWhereInput
    some?: TimeRecordWhereInput
    none?: TimeRecordWhereInput
  }

  export type ProgressLogListRelationFilter = {
    every?: ProgressLogWhereInput
    some?: ProgressLogWhereInput
    none?: ProgressLogWhereInput
  }

  export type ImportedFileListRelationFilter = {
    every?: ImportedFileWhereInput
    some?: ImportedFileWhereInput
    none?: ImportedFileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImportedFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type GoalNullableScalarRelationFilter = {
    is?: GoalWhereInput | null
    isNot?: GoalWhereInput | null
  }

  export type TaskNullableScalarRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    goalId?: SortOrder
    metadata?: SortOrder
    totalTime?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    totalTime?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    goalId?: SortOrder
    totalTime?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    goalId?: SortOrder
    totalTime?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    totalTime?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type EnumGoalLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalLevel | EnumGoalLevelFieldRefInput<$PrismaModel>
    in?: $Enums.GoalLevel[] | ListEnumGoalLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalLevel[] | ListEnumGoalLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalLevelFilter<$PrismaModel> | $Enums.GoalLevel
  }

  export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    metrics?: SortOrder
    resources?: SortOrder
    priority?: SortOrder
    weight?: SortOrder
    metadata?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    progress?: SortOrder
    priority?: SortOrder
    weight?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    priority?: SortOrder
    weight?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    priority?: SortOrder
    weight?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    progress?: SortOrder
    priority?: SortOrder
    weight?: SortOrder
  }

  export type EnumGoalLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalLevel | EnumGoalLevelFieldRefInput<$PrismaModel>
    in?: $Enums.GoalLevel[] | ListEnumGoalLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalLevel[] | ListEnumGoalLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalLevelWithAggregatesFilter<$PrismaModel> | $Enums.GoalLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalLevelFilter<$PrismaModel>
    _max?: NestedEnumGoalLevelFilter<$PrismaModel>
  }

  export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    metadata?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    sourceType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    sourceType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    sourceType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TimeRecordCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TimeRecordAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type TimeRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TimeRecordMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type TimeRecordSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProgressLogCountOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    goalId?: SortOrder
  }

  export type ProgressLogAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ProgressLogMaxOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    goalId?: SortOrder
  }

  export type ProgressLogMinOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    goalId?: SortOrder
  }

  export type ProgressLogSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ImportedFileCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    ossPath?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ImportedFileAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type ImportedFileMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    ossPath?: SortOrder
    description?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ImportedFileMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    ossPath?: SortOrder
    description?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ImportedFileSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type LogArchiveCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    logDate?: SortOrder
    archiveDate?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    tags?: SortOrder
  }

  export type LogArchiveAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
  }

  export type LogArchiveMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    logDate?: SortOrder
    archiveDate?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
  }

  export type LogArchiveMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    logDate?: SortOrder
    archiveDate?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
  }

  export type LogArchiveSumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TimeRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeRecordCreateWithoutUserInput, TimeRecordUncheckedCreateWithoutUserInput> | TimeRecordCreateWithoutUserInput[] | TimeRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeRecordCreateOrConnectWithoutUserInput | TimeRecordCreateOrConnectWithoutUserInput[]
    createMany?: TimeRecordCreateManyUserInputEnvelope
    connect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
  }

  export type ProgressLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput> | ProgressLogCreateWithoutUserInput[] | ProgressLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutUserInput | ProgressLogCreateOrConnectWithoutUserInput[]
    createMany?: ProgressLogCreateManyUserInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type ImportedFileCreateNestedManyWithoutUserInput = {
    create?: XOR<ImportedFileCreateWithoutUserInput, ImportedFileUncheckedCreateWithoutUserInput> | ImportedFileCreateWithoutUserInput[] | ImportedFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImportedFileCreateOrConnectWithoutUserInput | ImportedFileCreateOrConnectWithoutUserInput[]
    createMany?: ImportedFileCreateManyUserInputEnvelope
    connect?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TimeRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeRecordCreateWithoutUserInput, TimeRecordUncheckedCreateWithoutUserInput> | TimeRecordCreateWithoutUserInput[] | TimeRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeRecordCreateOrConnectWithoutUserInput | TimeRecordCreateOrConnectWithoutUserInput[]
    createMany?: TimeRecordCreateManyUserInputEnvelope
    connect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
  }

  export type ProgressLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput> | ProgressLogCreateWithoutUserInput[] | ProgressLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutUserInput | ProgressLogCreateOrConnectWithoutUserInput[]
    createMany?: ProgressLogCreateManyUserInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type ImportedFileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ImportedFileCreateWithoutUserInput, ImportedFileUncheckedCreateWithoutUserInput> | ImportedFileCreateWithoutUserInput[] | ImportedFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImportedFileCreateOrConnectWithoutUserInput | ImportedFileCreateOrConnectWithoutUserInput[]
    createMany?: ImportedFileCreateManyUserInputEnvelope
    connect?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TimeRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeRecordCreateWithoutUserInput, TimeRecordUncheckedCreateWithoutUserInput> | TimeRecordCreateWithoutUserInput[] | TimeRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeRecordCreateOrConnectWithoutUserInput | TimeRecordCreateOrConnectWithoutUserInput[]
    upsert?: TimeRecordUpsertWithWhereUniqueWithoutUserInput | TimeRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeRecordCreateManyUserInputEnvelope
    set?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    disconnect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    delete?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    connect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    update?: TimeRecordUpdateWithWhereUniqueWithoutUserInput | TimeRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeRecordUpdateManyWithWhereWithoutUserInput | TimeRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeRecordScalarWhereInput | TimeRecordScalarWhereInput[]
  }

  export type ProgressLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput> | ProgressLogCreateWithoutUserInput[] | ProgressLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutUserInput | ProgressLogCreateOrConnectWithoutUserInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutUserInput | ProgressLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressLogCreateManyUserInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutUserInput | ProgressLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutUserInput | ProgressLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type ImportedFileUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImportedFileCreateWithoutUserInput, ImportedFileUncheckedCreateWithoutUserInput> | ImportedFileCreateWithoutUserInput[] | ImportedFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImportedFileCreateOrConnectWithoutUserInput | ImportedFileCreateOrConnectWithoutUserInput[]
    upsert?: ImportedFileUpsertWithWhereUniqueWithoutUserInput | ImportedFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImportedFileCreateManyUserInputEnvelope
    set?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
    disconnect?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
    delete?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
    connect?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
    update?: ImportedFileUpdateWithWhereUniqueWithoutUserInput | ImportedFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImportedFileUpdateManyWithWhereWithoutUserInput | ImportedFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImportedFileScalarWhereInput | ImportedFileScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TimeRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeRecordCreateWithoutUserInput, TimeRecordUncheckedCreateWithoutUserInput> | TimeRecordCreateWithoutUserInput[] | TimeRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeRecordCreateOrConnectWithoutUserInput | TimeRecordCreateOrConnectWithoutUserInput[]
    upsert?: TimeRecordUpsertWithWhereUniqueWithoutUserInput | TimeRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeRecordCreateManyUserInputEnvelope
    set?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    disconnect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    delete?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    connect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    update?: TimeRecordUpdateWithWhereUniqueWithoutUserInput | TimeRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeRecordUpdateManyWithWhereWithoutUserInput | TimeRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeRecordScalarWhereInput | TimeRecordScalarWhereInput[]
  }

  export type ProgressLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput> | ProgressLogCreateWithoutUserInput[] | ProgressLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutUserInput | ProgressLogCreateOrConnectWithoutUserInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutUserInput | ProgressLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressLogCreateManyUserInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutUserInput | ProgressLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutUserInput | ProgressLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type ImportedFileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImportedFileCreateWithoutUserInput, ImportedFileUncheckedCreateWithoutUserInput> | ImportedFileCreateWithoutUserInput[] | ImportedFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImportedFileCreateOrConnectWithoutUserInput | ImportedFileCreateOrConnectWithoutUserInput[]
    upsert?: ImportedFileUpsertWithWhereUniqueWithoutUserInput | ImportedFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImportedFileCreateManyUserInputEnvelope
    set?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
    disconnect?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
    delete?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
    connect?: ImportedFileWhereUniqueInput | ImportedFileWhereUniqueInput[]
    update?: ImportedFileUpdateWithWhereUniqueWithoutUserInput | ImportedFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImportedFileUpdateManyWithWhereWithoutUserInput | ImportedFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImportedFileScalarWhereInput | ImportedFileScalarWhereInput[]
  }

  export type GoalCreateNestedOneWithoutTasksInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    connect?: GoalWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutSubTasksInput = {
    create?: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutTasksInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TimeRecordCreateNestedManyWithoutTaskInput = {
    create?: XOR<TimeRecordCreateWithoutTaskInput, TimeRecordUncheckedCreateWithoutTaskInput> | TimeRecordCreateWithoutTaskInput[] | TimeRecordUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TimeRecordCreateOrConnectWithoutTaskInput | TimeRecordCreateOrConnectWithoutTaskInput[]
    createMany?: TimeRecordCreateManyTaskInputEnvelope
    connect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
  }

  export type ProgressLogCreateNestedManyWithoutTaskInput = {
    create?: XOR<ProgressLogCreateWithoutTaskInput, ProgressLogUncheckedCreateWithoutTaskInput> | ProgressLogCreateWithoutTaskInput[] | ProgressLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutTaskInput | ProgressLogCreateOrConnectWithoutTaskInput[]
    createMany?: ProgressLogCreateManyTaskInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TimeRecordUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TimeRecordCreateWithoutTaskInput, TimeRecordUncheckedCreateWithoutTaskInput> | TimeRecordCreateWithoutTaskInput[] | TimeRecordUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TimeRecordCreateOrConnectWithoutTaskInput | TimeRecordCreateOrConnectWithoutTaskInput[]
    createMany?: TimeRecordCreateManyTaskInputEnvelope
    connect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
  }

  export type ProgressLogUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<ProgressLogCreateWithoutTaskInput, ProgressLogUncheckedCreateWithoutTaskInput> | ProgressLogCreateWithoutTaskInput[] | ProgressLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutTaskInput | ProgressLogCreateOrConnectWithoutTaskInput[]
    createMany?: ProgressLogCreateManyTaskInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GoalUpdateOneWithoutTasksNestedInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    upsert?: GoalUpsertWithoutTasksInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutTasksInput, GoalUpdateWithoutTasksInput>, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type TaskUpdateOneWithoutSubTasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput
    upsert?: TaskUpsertWithoutSubTasksInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubTasksInput, TaskUpdateWithoutSubTasksInput>, TaskUncheckedUpdateWithoutSubTasksInput>
  }

  export type TaskUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type TagUpdateManyWithoutTasksNestedInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTasksInput | TagUpsertWithWhereUniqueWithoutTasksInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTasksInput | TagUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTasksInput | TagUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TimeRecordUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TimeRecordCreateWithoutTaskInput, TimeRecordUncheckedCreateWithoutTaskInput> | TimeRecordCreateWithoutTaskInput[] | TimeRecordUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TimeRecordCreateOrConnectWithoutTaskInput | TimeRecordCreateOrConnectWithoutTaskInput[]
    upsert?: TimeRecordUpsertWithWhereUniqueWithoutTaskInput | TimeRecordUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TimeRecordCreateManyTaskInputEnvelope
    set?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    disconnect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    delete?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    connect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    update?: TimeRecordUpdateWithWhereUniqueWithoutTaskInput | TimeRecordUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TimeRecordUpdateManyWithWhereWithoutTaskInput | TimeRecordUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TimeRecordScalarWhereInput | TimeRecordScalarWhereInput[]
  }

  export type ProgressLogUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ProgressLogCreateWithoutTaskInput, ProgressLogUncheckedCreateWithoutTaskInput> | ProgressLogCreateWithoutTaskInput[] | ProgressLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutTaskInput | ProgressLogCreateOrConnectWithoutTaskInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutTaskInput | ProgressLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ProgressLogCreateManyTaskInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutTaskInput | ProgressLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutTaskInput | ProgressLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTasksInput | TagUpsertWithWhereUniqueWithoutTasksInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTasksInput | TagUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTasksInput | TagUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TimeRecordUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TimeRecordCreateWithoutTaskInput, TimeRecordUncheckedCreateWithoutTaskInput> | TimeRecordCreateWithoutTaskInput[] | TimeRecordUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TimeRecordCreateOrConnectWithoutTaskInput | TimeRecordCreateOrConnectWithoutTaskInput[]
    upsert?: TimeRecordUpsertWithWhereUniqueWithoutTaskInput | TimeRecordUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TimeRecordCreateManyTaskInputEnvelope
    set?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    disconnect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    delete?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    connect?: TimeRecordWhereUniqueInput | TimeRecordWhereUniqueInput[]
    update?: TimeRecordUpdateWithWhereUniqueWithoutTaskInput | TimeRecordUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TimeRecordUpdateManyWithWhereWithoutTaskInput | TimeRecordUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TimeRecordScalarWhereInput | TimeRecordScalarWhereInput[]
  }

  export type ProgressLogUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ProgressLogCreateWithoutTaskInput, ProgressLogUncheckedCreateWithoutTaskInput> | ProgressLogCreateWithoutTaskInput[] | ProgressLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutTaskInput | ProgressLogCreateOrConnectWithoutTaskInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutTaskInput | ProgressLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ProgressLogCreateManyTaskInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutTaskInput | ProgressLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutTaskInput | ProgressLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type GoalCreateNestedOneWithoutSubGoalsInput = {
    create?: XOR<GoalCreateWithoutSubGoalsInput, GoalUncheckedCreateWithoutSubGoalsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutSubGoalsInput
    connect?: GoalWhereUniqueInput
  }

  export type GoalCreateNestedManyWithoutParentInput = {
    create?: XOR<GoalCreateWithoutParentInput, GoalUncheckedCreateWithoutParentInput> | GoalCreateWithoutParentInput[] | GoalUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutParentInput | GoalCreateOrConnectWithoutParentInput[]
    createMany?: GoalCreateManyParentInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutGoalsInput = {
    create?: XOR<TagCreateWithoutGoalsInput, TagUncheckedCreateWithoutGoalsInput> | TagCreateWithoutGoalsInput[] | TagUncheckedCreateWithoutGoalsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGoalsInput | TagCreateOrConnectWithoutGoalsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ProgressLogCreateNestedManyWithoutGoalInput = {
    create?: XOR<ProgressLogCreateWithoutGoalInput, ProgressLogUncheckedCreateWithoutGoalInput> | ProgressLogCreateWithoutGoalInput[] | ProgressLogUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutGoalInput | ProgressLogCreateOrConnectWithoutGoalInput[]
    createMany?: ProgressLogCreateManyGoalInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<GoalCreateWithoutParentInput, GoalUncheckedCreateWithoutParentInput> | GoalCreateWithoutParentInput[] | GoalUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutParentInput | GoalCreateOrConnectWithoutParentInput[]
    createMany?: GoalCreateManyParentInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutGoalsInput = {
    create?: XOR<TagCreateWithoutGoalsInput, TagUncheckedCreateWithoutGoalsInput> | TagCreateWithoutGoalsInput[] | TagUncheckedCreateWithoutGoalsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGoalsInput | TagCreateOrConnectWithoutGoalsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ProgressLogUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<ProgressLogCreateWithoutGoalInput, ProgressLogUncheckedCreateWithoutGoalInput> | ProgressLogCreateWithoutGoalInput[] | ProgressLogUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutGoalInput | ProgressLogCreateOrConnectWithoutGoalInput[]
    createMany?: ProgressLogCreateManyGoalInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type EnumGoalLevelFieldUpdateOperationsInput = {
    set?: $Enums.GoalLevel
  }

  export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GoalUpdateOneWithoutSubGoalsNestedInput = {
    create?: XOR<GoalCreateWithoutSubGoalsInput, GoalUncheckedCreateWithoutSubGoalsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutSubGoalsInput
    upsert?: GoalUpsertWithoutSubGoalsInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutSubGoalsInput, GoalUpdateWithoutSubGoalsInput>, GoalUncheckedUpdateWithoutSubGoalsInput>
  }

  export type GoalUpdateManyWithoutParentNestedInput = {
    create?: XOR<GoalCreateWithoutParentInput, GoalUncheckedCreateWithoutParentInput> | GoalCreateWithoutParentInput[] | GoalUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutParentInput | GoalCreateOrConnectWithoutParentInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutParentInput | GoalUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: GoalCreateManyParentInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutParentInput | GoalUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutParentInput | GoalUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type TaskUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TagUpdateManyWithoutGoalsNestedInput = {
    create?: XOR<TagCreateWithoutGoalsInput, TagUncheckedCreateWithoutGoalsInput> | TagCreateWithoutGoalsInput[] | TagUncheckedCreateWithoutGoalsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGoalsInput | TagCreateOrConnectWithoutGoalsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutGoalsInput | TagUpsertWithWhereUniqueWithoutGoalsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutGoalsInput | TagUpdateWithWhereUniqueWithoutGoalsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutGoalsInput | TagUpdateManyWithWhereWithoutGoalsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ProgressLogUpdateManyWithoutGoalNestedInput = {
    create?: XOR<ProgressLogCreateWithoutGoalInput, ProgressLogUncheckedCreateWithoutGoalInput> | ProgressLogCreateWithoutGoalInput[] | ProgressLogUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutGoalInput | ProgressLogCreateOrConnectWithoutGoalInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutGoalInput | ProgressLogUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: ProgressLogCreateManyGoalInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutGoalInput | ProgressLogUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutGoalInput | ProgressLogUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<GoalCreateWithoutParentInput, GoalUncheckedCreateWithoutParentInput> | GoalCreateWithoutParentInput[] | GoalUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutParentInput | GoalCreateOrConnectWithoutParentInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutParentInput | GoalUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: GoalCreateManyParentInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutParentInput | GoalUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutParentInput | GoalUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutGoalsNestedInput = {
    create?: XOR<TagCreateWithoutGoalsInput, TagUncheckedCreateWithoutGoalsInput> | TagCreateWithoutGoalsInput[] | TagUncheckedCreateWithoutGoalsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutGoalsInput | TagCreateOrConnectWithoutGoalsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutGoalsInput | TagUpsertWithWhereUniqueWithoutGoalsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutGoalsInput | TagUpdateWithWhereUniqueWithoutGoalsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutGoalsInput | TagUpdateManyWithWhereWithoutGoalsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ProgressLogUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<ProgressLogCreateWithoutGoalInput, ProgressLogUncheckedCreateWithoutGoalInput> | ProgressLogCreateWithoutGoalInput[] | ProgressLogUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutGoalInput | ProgressLogCreateOrConnectWithoutGoalInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutGoalInput | ProgressLogUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: ProgressLogCreateManyGoalInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutGoalInput | ProgressLogUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutGoalInput | ProgressLogUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutMessagesInput = {
    create?: XOR<CategoryCreateWithoutMessagesInput, CategoryUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMessagesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutMessagesInput = {
    create?: XOR<TagCreateWithoutMessagesInput, TagUncheckedCreateWithoutMessagesInput> | TagCreateWithoutMessagesInput[] | TagUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutMessagesInput | TagCreateOrConnectWithoutMessagesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<TagCreateWithoutMessagesInput, TagUncheckedCreateWithoutMessagesInput> | TagCreateWithoutMessagesInput[] | TagUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutMessagesInput | TagCreateOrConnectWithoutMessagesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<CategoryCreateWithoutMessagesInput, CategoryUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMessagesInput
    upsert?: CategoryUpsertWithoutMessagesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMessagesInput, CategoryUpdateWithoutMessagesInput>, CategoryUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type TagUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<TagCreateWithoutMessagesInput, TagUncheckedCreateWithoutMessagesInput> | TagCreateWithoutMessagesInput[] | TagUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutMessagesInput | TagCreateOrConnectWithoutMessagesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutMessagesInput | TagUpsertWithWhereUniqueWithoutMessagesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutMessagesInput | TagUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutMessagesInput | TagUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<TagCreateWithoutMessagesInput, TagUncheckedCreateWithoutMessagesInput> | TagCreateWithoutMessagesInput[] | TagUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutMessagesInput | TagCreateOrConnectWithoutMessagesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutMessagesInput | TagUpsertWithWhereUniqueWithoutMessagesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutMessagesInput | TagUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutMessagesInput | TagUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MessageCreateWithoutCategoryInput, MessageUncheckedCreateWithoutCategoryInput> | MessageCreateWithoutCategoryInput[] | MessageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCategoryInput | MessageCreateOrConnectWithoutCategoryInput[]
    createMany?: MessageCreateManyCategoryInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MessageCreateWithoutCategoryInput, MessageUncheckedCreateWithoutCategoryInput> | MessageCreateWithoutCategoryInput[] | MessageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCategoryInput | MessageCreateOrConnectWithoutCategoryInput[]
    createMany?: MessageCreateManyCategoryInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutSubCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: CategoryUpsertWithoutSubCategoriesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, CategoryUpdateWithoutSubCategoriesInput>, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MessageCreateWithoutCategoryInput, MessageUncheckedCreateWithoutCategoryInput> | MessageCreateWithoutCategoryInput[] | MessageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCategoryInput | MessageCreateOrConnectWithoutCategoryInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutCategoryInput | MessageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MessageCreateManyCategoryInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutCategoryInput | MessageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutCategoryInput | MessageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MessageCreateWithoutCategoryInput, MessageUncheckedCreateWithoutCategoryInput> | MessageCreateWithoutCategoryInput[] | MessageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCategoryInput | MessageCreateOrConnectWithoutCategoryInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutCategoryInput | MessageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MessageCreateManyCategoryInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutCategoryInput | MessageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutCategoryInput | MessageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type GoalCreateNestedManyWithoutTagsInput = {
    create?: XOR<GoalCreateWithoutTagsInput, GoalUncheckedCreateWithoutTagsInput> | GoalCreateWithoutTagsInput[] | GoalUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutTagsInput | GoalCreateOrConnectWithoutTagsInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutTagsInput = {
    create?: XOR<MessageCreateWithoutTagsInput, MessageUncheckedCreateWithoutTagsInput> | MessageCreateWithoutTagsInput[] | MessageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTagsInput | MessageCreateOrConnectWithoutTagsInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutTagsInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<GoalCreateWithoutTagsInput, GoalUncheckedCreateWithoutTagsInput> | GoalCreateWithoutTagsInput[] | GoalUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutTagsInput | GoalCreateOrConnectWithoutTagsInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<MessageCreateWithoutTagsInput, MessageUncheckedCreateWithoutTagsInput> | MessageCreateWithoutTagsInput[] | MessageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTagsInput | MessageCreateOrConnectWithoutTagsInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GoalUpdateManyWithoutTagsNestedInput = {
    create?: XOR<GoalCreateWithoutTagsInput, GoalUncheckedCreateWithoutTagsInput> | GoalCreateWithoutTagsInput[] | GoalUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutTagsInput | GoalCreateOrConnectWithoutTagsInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutTagsInput | GoalUpsertWithWhereUniqueWithoutTagsInput[]
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutTagsInput | GoalUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutTagsInput | GoalUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutTagsNestedInput = {
    create?: XOR<MessageCreateWithoutTagsInput, MessageUncheckedCreateWithoutTagsInput> | MessageCreateWithoutTagsInput[] | MessageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTagsInput | MessageCreateOrConnectWithoutTagsInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTagsInput | MessageUpsertWithWhereUniqueWithoutTagsInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTagsInput | MessageUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTagsInput | MessageUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTagsInput | TaskUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTagsInput | TaskUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTagsInput | TaskUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<GoalCreateWithoutTagsInput, GoalUncheckedCreateWithoutTagsInput> | GoalCreateWithoutTagsInput[] | GoalUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutTagsInput | GoalCreateOrConnectWithoutTagsInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutTagsInput | GoalUpsertWithWhereUniqueWithoutTagsInput[]
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutTagsInput | GoalUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutTagsInput | GoalUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<MessageCreateWithoutTagsInput, MessageUncheckedCreateWithoutTagsInput> | MessageCreateWithoutTagsInput[] | MessageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTagsInput | MessageCreateOrConnectWithoutTagsInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTagsInput | MessageUpsertWithWhereUniqueWithoutTagsInput[]
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTagsInput | MessageUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTagsInput | MessageUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTagsInput | TaskUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTagsInput | TaskUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTagsInput | TaskUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTimeRecordsInput = {
    create?: XOR<UserCreateWithoutTimeRecordsInput, UserUncheckedCreateWithoutTimeRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutTimeRecordsInput = {
    create?: XOR<TaskCreateWithoutTimeRecordsInput, TaskUncheckedCreateWithoutTimeRecordsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTimeRecordsInput
    connect?: TaskWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTimeRecordsNestedInput = {
    create?: XOR<UserCreateWithoutTimeRecordsInput, UserUncheckedCreateWithoutTimeRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeRecordsInput
    upsert?: UserUpsertWithoutTimeRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeRecordsInput, UserUpdateWithoutTimeRecordsInput>, UserUncheckedUpdateWithoutTimeRecordsInput>
  }

  export type TaskUpdateOneRequiredWithoutTimeRecordsNestedInput = {
    create?: XOR<TaskCreateWithoutTimeRecordsInput, TaskUncheckedCreateWithoutTimeRecordsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTimeRecordsInput
    upsert?: TaskUpsertWithoutTimeRecordsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTimeRecordsInput, TaskUpdateWithoutTimeRecordsInput>, TaskUncheckedUpdateWithoutTimeRecordsInput>
  }

  export type UserCreateNestedOneWithoutProgressLogsInput = {
    create?: XOR<UserCreateWithoutProgressLogsInput, UserUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressLogsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutProgressLogsInput = {
    create?: XOR<TaskCreateWithoutProgressLogsInput, TaskUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutProgressLogsInput
    connect?: TaskWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutProgressLogsInput = {
    create?: XOR<GoalCreateWithoutProgressLogsInput, GoalUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutProgressLogsInput
    connect?: GoalWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProgressLogsNestedInput = {
    create?: XOR<UserCreateWithoutProgressLogsInput, UserUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressLogsInput
    upsert?: UserUpsertWithoutProgressLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressLogsInput, UserUpdateWithoutProgressLogsInput>, UserUncheckedUpdateWithoutProgressLogsInput>
  }

  export type TaskUpdateOneWithoutProgressLogsNestedInput = {
    create?: XOR<TaskCreateWithoutProgressLogsInput, TaskUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutProgressLogsInput
    upsert?: TaskUpsertWithoutProgressLogsInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutProgressLogsInput, TaskUpdateWithoutProgressLogsInput>, TaskUncheckedUpdateWithoutProgressLogsInput>
  }

  export type GoalUpdateOneWithoutProgressLogsNestedInput = {
    create?: XOR<GoalCreateWithoutProgressLogsInput, GoalUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: GoalCreateOrConnectWithoutProgressLogsInput
    upsert?: GoalUpsertWithoutProgressLogsInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutProgressLogsInput, GoalUpdateWithoutProgressLogsInput>, GoalUncheckedUpdateWithoutProgressLogsInput>
  }

  export type ImportedFileCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutImportedFilesInput = {
    create?: XOR<UserCreateWithoutImportedFilesInput, UserUncheckedCreateWithoutImportedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImportedFilesInput
    connect?: UserWhereUniqueInput
  }

  export type ImportedFileUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutImportedFilesNestedInput = {
    create?: XOR<UserCreateWithoutImportedFilesInput, UserUncheckedCreateWithoutImportedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImportedFilesInput
    upsert?: UserUpsertWithoutImportedFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImportedFilesInput, UserUpdateWithoutImportedFilesInput>, UserUncheckedUpdateWithoutImportedFilesInput>
  }

  export type LogArchiveCreatetagsInput = {
    set: string[]
  }

  export type LogArchiveUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumGoalLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalLevel | EnumGoalLevelFieldRefInput<$PrismaModel>
    in?: $Enums.GoalLevel[] | ListEnumGoalLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalLevel[] | ListEnumGoalLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalLevelFilter<$PrismaModel> | $Enums.GoalLevel
  }

  export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type NestedEnumGoalLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalLevel | EnumGoalLevelFieldRefInput<$PrismaModel>
    in?: $Enums.GoalLevel[] | ListEnumGoalLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalLevel[] | ListEnumGoalLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalLevelWithAggregatesFilter<$PrismaModel> | $Enums.GoalLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalLevelFilter<$PrismaModel>
    _max?: NestedEnumGoalLevelFilter<$PrismaModel>
  }

  export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalCreateNestedOneWithoutSubGoalsInput
    subGoals?: GoalCreateNestedManyWithoutParentInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
    tags?: TagCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedCreateNestedManyWithoutParentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
    tags?: TagUncheckedCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryCreateNestedOneWithoutMessagesInput
    tags?: TagCreateNestedManyWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    tags?: TagUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    goal?: GoalCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    tags?: TagCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeRecordCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutTimeRecordsInput
  }

  export type TimeRecordUncheckedCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
  }

  export type TimeRecordCreateOrConnectWithoutUserInput = {
    where: TimeRecordWhereUniqueInput
    create: XOR<TimeRecordCreateWithoutUserInput, TimeRecordUncheckedCreateWithoutUserInput>
  }

  export type TimeRecordCreateManyUserInputEnvelope = {
    data: TimeRecordCreateManyUserInput | TimeRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgressLogCreateWithoutUserInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    task?: TaskCreateNestedOneWithoutProgressLogsInput
    goal?: GoalCreateNestedOneWithoutProgressLogsInput
  }

  export type ProgressLogUncheckedCreateWithoutUserInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId?: string | null
    goalId?: string | null
  }

  export type ProgressLogCreateOrConnectWithoutUserInput = {
    where: ProgressLogWhereUniqueInput
    create: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput>
  }

  export type ProgressLogCreateManyUserInputEnvelope = {
    data: ProgressLogCreateManyUserInput | ProgressLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ImportedFileCreateWithoutUserInput = {
    id?: string
    fileName: string
    fileType: string
    fileSize: number
    ossPath: string
    description?: string | null
    tags?: ImportedFileCreatetagsInput | string[]
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImportedFileUncheckedCreateWithoutUserInput = {
    id?: string
    fileName: string
    fileType: string
    fileSize: number
    ossPath: string
    description?: string | null
    tags?: ImportedFileCreatetagsInput | string[]
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImportedFileCreateOrConnectWithoutUserInput = {
    where: ImportedFileWhereUniqueInput
    create: XOR<ImportedFileCreateWithoutUserInput, ImportedFileUncheckedCreateWithoutUserInput>
  }

  export type ImportedFileCreateManyUserInputEnvelope = {
    data: ImportedFileCreateManyUserInput | ImportedFileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    level?: EnumGoalLevelFilter<"Goal"> | $Enums.GoalLevel
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    startDate?: DateTimeFilter<"Goal"> | Date | string
    endDate?: DateTimeFilter<"Goal"> | Date | string
    progress?: FloatFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    userId?: StringFilter<"Goal"> | string
    parentId?: StringNullableFilter<"Goal"> | string | null
    metrics?: JsonNullableFilter<"Goal">
    resources?: JsonNullableFilter<"Goal">
    priority?: IntFilter<"Goal"> | number
    weight?: FloatFilter<"Goal"> | number
    metadata?: JsonNullableFilter<"Goal">
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sourceType?: StringFilter<"Message"> | string
    sourceId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    userId?: StringFilter<"Message"> | string
    categoryId?: StringNullableFilter<"Message"> | string | null
    metadata?: JsonNullableFilter<"Message">
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userId?: StringFilter<"Task"> | string
    parentId?: StringNullableFilter<"Task"> | string | null
    goalId?: StringNullableFilter<"Task"> | string | null
    metadata?: JsonNullableFilter<"Task">
    totalTime?: IntFilter<"Task"> | number
  }

  export type TimeRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeRecordWhereUniqueInput
    update: XOR<TimeRecordUpdateWithoutUserInput, TimeRecordUncheckedUpdateWithoutUserInput>
    create: XOR<TimeRecordCreateWithoutUserInput, TimeRecordUncheckedCreateWithoutUserInput>
  }

  export type TimeRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeRecordWhereUniqueInput
    data: XOR<TimeRecordUpdateWithoutUserInput, TimeRecordUncheckedUpdateWithoutUserInput>
  }

  export type TimeRecordUpdateManyWithWhereWithoutUserInput = {
    where: TimeRecordScalarWhereInput
    data: XOR<TimeRecordUpdateManyMutationInput, TimeRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeRecordScalarWhereInput = {
    AND?: TimeRecordScalarWhereInput | TimeRecordScalarWhereInput[]
    OR?: TimeRecordScalarWhereInput[]
    NOT?: TimeRecordScalarWhereInput | TimeRecordScalarWhereInput[]
    id?: StringFilter<"TimeRecord"> | string
    startTime?: DateTimeFilter<"TimeRecord"> | Date | string
    endTime?: DateTimeNullableFilter<"TimeRecord"> | Date | string | null
    duration?: IntNullableFilter<"TimeRecord"> | number | null
    note?: StringNullableFilter<"TimeRecord"> | string | null
    createdAt?: DateTimeFilter<"TimeRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TimeRecord"> | Date | string
    userId?: StringFilter<"TimeRecord"> | string
    taskId?: StringFilter<"TimeRecord"> | string
  }

  export type ProgressLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressLogWhereUniqueInput
    update: XOR<ProgressLogUpdateWithoutUserInput, ProgressLogUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput>
  }

  export type ProgressLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressLogWhereUniqueInput
    data: XOR<ProgressLogUpdateWithoutUserInput, ProgressLogUncheckedUpdateWithoutUserInput>
  }

  export type ProgressLogUpdateManyWithWhereWithoutUserInput = {
    where: ProgressLogScalarWhereInput
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressLogScalarWhereInput = {
    AND?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
    OR?: ProgressLogScalarWhereInput[]
    NOT?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
    id?: StringFilter<"ProgressLog"> | string
    progress?: FloatFilter<"ProgressLog"> | number
    note?: StringNullableFilter<"ProgressLog"> | string | null
    createdAt?: DateTimeFilter<"ProgressLog"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressLog"> | Date | string
    userId?: StringFilter<"ProgressLog"> | string
    taskId?: StringNullableFilter<"ProgressLog"> | string | null
    goalId?: StringNullableFilter<"ProgressLog"> | string | null
  }

  export type ImportedFileUpsertWithWhereUniqueWithoutUserInput = {
    where: ImportedFileWhereUniqueInput
    update: XOR<ImportedFileUpdateWithoutUserInput, ImportedFileUncheckedUpdateWithoutUserInput>
    create: XOR<ImportedFileCreateWithoutUserInput, ImportedFileUncheckedCreateWithoutUserInput>
  }

  export type ImportedFileUpdateWithWhereUniqueWithoutUserInput = {
    where: ImportedFileWhereUniqueInput
    data: XOR<ImportedFileUpdateWithoutUserInput, ImportedFileUncheckedUpdateWithoutUserInput>
  }

  export type ImportedFileUpdateManyWithWhereWithoutUserInput = {
    where: ImportedFileScalarWhereInput
    data: XOR<ImportedFileUpdateManyMutationInput, ImportedFileUncheckedUpdateManyWithoutUserInput>
  }

  export type ImportedFileScalarWhereInput = {
    AND?: ImportedFileScalarWhereInput | ImportedFileScalarWhereInput[]
    OR?: ImportedFileScalarWhereInput[]
    NOT?: ImportedFileScalarWhereInput | ImportedFileScalarWhereInput[]
    id?: StringFilter<"ImportedFile"> | string
    fileName?: StringFilter<"ImportedFile"> | string
    fileType?: StringFilter<"ImportedFile"> | string
    fileSize?: IntFilter<"ImportedFile"> | number
    ossPath?: StringFilter<"ImportedFile"> | string
    description?: StringNullableFilter<"ImportedFile"> | string | null
    tags?: StringNullableListFilter<"ImportedFile">
    uploadedAt?: DateTimeFilter<"ImportedFile"> | Date | string
    updatedAt?: DateTimeFilter<"ImportedFile"> | Date | string
    userId?: StringFilter<"ImportedFile"> | string
  }

  export type GoalCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalCreateNestedOneWithoutSubGoalsInput
    subGoals?: GoalCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutGoalsInput
    tags?: TagCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedCreateNestedManyWithoutParentInput
    tags?: TagUncheckedCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutTasksInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
  }

  export type TaskCreateWithoutSubTasksInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    goal?: GoalCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    user: UserCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubTasksInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubTasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
  }

  export type TaskCreateWithoutParentInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    goal?: GoalCreateNestedOneWithoutTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutParentInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutParentInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskCreateManyParentInputEnvelope = {
    data: TaskCreateManyParentInput | TaskCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type TagCreateWithoutTasksInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutTagsInput
    messages?: MessageCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutTagsInput
    messages?: MessageUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutTasksInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
  }

  export type TimeRecordCreateWithoutTaskInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeRecordsInput
  }

  export type TimeRecordUncheckedCreateWithoutTaskInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TimeRecordCreateOrConnectWithoutTaskInput = {
    where: TimeRecordWhereUniqueInput
    create: XOR<TimeRecordCreateWithoutTaskInput, TimeRecordUncheckedCreateWithoutTaskInput>
  }

  export type TimeRecordCreateManyTaskInputEnvelope = {
    data: TimeRecordCreateManyTaskInput | TimeRecordCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ProgressLogCreateWithoutTaskInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressLogsInput
    goal?: GoalCreateNestedOneWithoutProgressLogsInput
  }

  export type ProgressLogUncheckedCreateWithoutTaskInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    goalId?: string | null
  }

  export type ProgressLogCreateOrConnectWithoutTaskInput = {
    where: ProgressLogWhereUniqueInput
    create: XOR<ProgressLogCreateWithoutTaskInput, ProgressLogUncheckedCreateWithoutTaskInput>
  }

  export type ProgressLogCreateManyTaskInputEnvelope = {
    data: ProgressLogCreateManyTaskInput | ProgressLogCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type GoalUpsertWithoutTasksInput = {
    update: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutTasksInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type GoalUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalUpdateOneWithoutSubGoalsNestedInput
    subGoals?: GoalUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tags?: TagUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagUncheckedUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type TaskUpsertWithoutSubTasksInput = {
    update: XOR<TaskUpdateWithoutSubTasksInput, TaskUncheckedUpdateWithoutSubTasksInput>
    create: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubTasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubTasksInput, TaskUncheckedUpdateWithoutSubTasksInput>
  }

  export type TaskUpdateWithoutSubTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    goal?: GoalUpdateOneWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
  }

  export type TaskUpdateManyWithWhereWithoutParentInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutParentInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutTasksInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutTasksInput, TagUncheckedUpdateWithoutTasksInput>
    create: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
  }

  export type TagUpdateWithWhereUniqueWithoutTasksInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutTasksInput, TagUncheckedUpdateWithoutTasksInput>
  }

  export type TagUpdateManyWithWhereWithoutTasksInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutTasksInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type TimeRecordUpsertWithWhereUniqueWithoutTaskInput = {
    where: TimeRecordWhereUniqueInput
    update: XOR<TimeRecordUpdateWithoutTaskInput, TimeRecordUncheckedUpdateWithoutTaskInput>
    create: XOR<TimeRecordCreateWithoutTaskInput, TimeRecordUncheckedCreateWithoutTaskInput>
  }

  export type TimeRecordUpdateWithWhereUniqueWithoutTaskInput = {
    where: TimeRecordWhereUniqueInput
    data: XOR<TimeRecordUpdateWithoutTaskInput, TimeRecordUncheckedUpdateWithoutTaskInput>
  }

  export type TimeRecordUpdateManyWithWhereWithoutTaskInput = {
    where: TimeRecordScalarWhereInput
    data: XOR<TimeRecordUpdateManyMutationInput, TimeRecordUncheckedUpdateManyWithoutTaskInput>
  }

  export type ProgressLogUpsertWithWhereUniqueWithoutTaskInput = {
    where: ProgressLogWhereUniqueInput
    update: XOR<ProgressLogUpdateWithoutTaskInput, ProgressLogUncheckedUpdateWithoutTaskInput>
    create: XOR<ProgressLogCreateWithoutTaskInput, ProgressLogUncheckedCreateWithoutTaskInput>
  }

  export type ProgressLogUpdateWithWhereUniqueWithoutTaskInput = {
    where: ProgressLogWhereUniqueInput
    data: XOR<ProgressLogUpdateWithoutTaskInput, ProgressLogUncheckedUpdateWithoutTaskInput>
  }

  export type ProgressLogUpdateManyWithWhereWithoutTaskInput = {
    where: ProgressLogScalarWhereInput
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyWithoutTaskInput>
  }

  export type GoalCreateWithoutSubGoalsInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalCreateNestedOneWithoutSubGoalsInput
    user: UserCreateNestedOneWithoutGoalsInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
    tags?: TagCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutSubGoalsInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
    tags?: TagUncheckedCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutSubGoalsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutSubGoalsInput, GoalUncheckedCreateWithoutSubGoalsInput>
  }

  export type GoalCreateWithoutParentInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutGoalsInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
    tags?: TagCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutParentInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedCreateNestedManyWithoutParentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
    tags?: TagUncheckedCreateNestedManyWithoutGoalsInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutParentInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutParentInput, GoalUncheckedCreateWithoutParentInput>
  }

  export type GoalCreateManyParentInputEnvelope = {
    data: GoalCreateManyParentInput | GoalCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type TaskCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutGoalInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskCreateManyGoalInputEnvelope = {
    data: TaskCreateManyGoalInput | TaskCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutGoalsInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutTagsInput
    tasks?: TaskCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutGoalsInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutTagsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutGoalsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutGoalsInput, TagUncheckedCreateWithoutGoalsInput>
  }

  export type ProgressLogCreateWithoutGoalInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressLogsInput
    task?: TaskCreateNestedOneWithoutProgressLogsInput
  }

  export type ProgressLogUncheckedCreateWithoutGoalInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    taskId?: string | null
  }

  export type ProgressLogCreateOrConnectWithoutGoalInput = {
    where: ProgressLogWhereUniqueInput
    create: XOR<ProgressLogCreateWithoutGoalInput, ProgressLogUncheckedCreateWithoutGoalInput>
  }

  export type ProgressLogCreateManyGoalInputEnvelope = {
    data: ProgressLogCreateManyGoalInput | ProgressLogCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type GoalUpsertWithoutSubGoalsInput = {
    update: XOR<GoalUpdateWithoutSubGoalsInput, GoalUncheckedUpdateWithoutSubGoalsInput>
    create: XOR<GoalCreateWithoutSubGoalsInput, GoalUncheckedCreateWithoutSubGoalsInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutSubGoalsInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutSubGoalsInput, GoalUncheckedUpdateWithoutSubGoalsInput>
  }

  export type GoalUpdateWithoutSubGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalUpdateOneWithoutSubGoalsNestedInput
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
    tags?: TagUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutSubGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
    tags?: TagUncheckedUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUpsertWithWhereUniqueWithoutParentInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutParentInput, GoalUncheckedUpdateWithoutParentInput>
    create: XOR<GoalCreateWithoutParentInput, GoalUncheckedCreateWithoutParentInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutParentInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutParentInput, GoalUncheckedUpdateWithoutParentInput>
  }

  export type GoalUpdateManyWithWhereWithoutParentInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutParentInput>
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
  }

  export type TaskUpdateManyWithWhereWithoutGoalInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutGoalInput>
  }

  export type TagUpsertWithWhereUniqueWithoutGoalsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutGoalsInput, TagUncheckedUpdateWithoutGoalsInput>
    create: XOR<TagCreateWithoutGoalsInput, TagUncheckedCreateWithoutGoalsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutGoalsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutGoalsInput, TagUncheckedUpdateWithoutGoalsInput>
  }

  export type TagUpdateManyWithWhereWithoutGoalsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutGoalsInput>
  }

  export type ProgressLogUpsertWithWhereUniqueWithoutGoalInput = {
    where: ProgressLogWhereUniqueInput
    update: XOR<ProgressLogUpdateWithoutGoalInput, ProgressLogUncheckedUpdateWithoutGoalInput>
    create: XOR<ProgressLogCreateWithoutGoalInput, ProgressLogUncheckedCreateWithoutGoalInput>
  }

  export type ProgressLogUpdateWithWhereUniqueWithoutGoalInput = {
    where: ProgressLogWhereUniqueInput
    data: XOR<ProgressLogUpdateWithoutGoalInput, ProgressLogUncheckedUpdateWithoutGoalInput>
  }

  export type ProgressLogUpdateManyWithWhereWithoutGoalInput = {
    where: ProgressLogScalarWhereInput
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyWithoutGoalInput>
  }

  export type CategoryCreateWithoutMessagesInput = {
    id?: string
    name: string
    description?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutSubCategoriesInput
    subCategories?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutMessagesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMessagesInput, CategoryUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type TagCreateWithoutMessagesInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutTagsInput
    tasks?: TaskCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutTagsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutMessagesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutMessagesInput, TagUncheckedCreateWithoutMessagesInput>
  }

  export type CategoryUpsertWithoutMessagesInput = {
    update: XOR<CategoryUpdateWithoutMessagesInput, CategoryUncheckedUpdateWithoutMessagesInput>
    create: XOR<CategoryCreateWithoutMessagesInput, CategoryUncheckedCreateWithoutMessagesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMessagesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMessagesInput, CategoryUncheckedUpdateWithoutMessagesInput>
  }

  export type CategoryUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutSubCategoriesNestedInput
    subCategories?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutMessagesInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutMessagesInput, TagUncheckedUpdateWithoutMessagesInput>
    create: XOR<TagCreateWithoutMessagesInput, TagUncheckedCreateWithoutMessagesInput>
  }

  export type TagUpdateWithWhereUniqueWithoutMessagesInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutMessagesInput, TagUncheckedUpdateWithoutMessagesInput>
  }

  export type TagUpdateManyWithWhereWithoutMessagesInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutMessagesInput>
  }

  export type CategoryCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    description?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutSubCategoriesInput
    messages?: MessageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    name: string
    description?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CategoryCreateNestedManyWithoutParentInput
    messages?: MessageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    description?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
    messages?: MessageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutCategoryInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutMessagesInput
    tags?: TagCreateNestedManyWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutCategoryInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    tags?: TagUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type MessageCreateOrConnectWithoutCategoryInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutCategoryInput, MessageUncheckedCreateWithoutCategoryInput>
  }

  export type MessageCreateManyCategoryInputEnvelope = {
    data: MessageCreateManyCategoryInput | MessageCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoryUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutSubCategoriesNestedInput
    messages?: MessageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    sourceType?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutCategoryInput, MessageUncheckedUpdateWithoutCategoryInput>
    create: XOR<MessageCreateWithoutCategoryInput, MessageUncheckedCreateWithoutCategoryInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutCategoryInput, MessageUncheckedUpdateWithoutCategoryInput>
  }

  export type MessageUpdateManyWithWhereWithoutCategoryInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutCategoryInput>
  }

  export type GoalCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalCreateNestedOneWithoutSubGoalsInput
    subGoals?: GoalCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutGoalsInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
    progressLogs?: ProgressLogCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedCreateNestedManyWithoutParentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutTagsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutTagsInput, GoalUncheckedCreateWithoutTagsInput>
  }

  export type MessageCreateWithoutTagsInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryCreateNestedOneWithoutMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutTagsInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageCreateOrConnectWithoutTagsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutTagsInput, MessageUncheckedCreateWithoutTagsInput>
  }

  export type TaskCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    goal?: GoalCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutTasksInput
    timeRecords?: TimeRecordCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutTaskInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTagsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
  }

  export type GoalUpsertWithWhereUniqueWithoutTagsInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutTagsInput, GoalUncheckedUpdateWithoutTagsInput>
    create: XOR<GoalCreateWithoutTagsInput, GoalUncheckedCreateWithoutTagsInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutTagsInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutTagsInput, GoalUncheckedUpdateWithoutTagsInput>
  }

  export type GoalUpdateManyWithWhereWithoutTagsInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutTagsInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutTagsInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutTagsInput, MessageUncheckedUpdateWithoutTagsInput>
    create: XOR<MessageCreateWithoutTagsInput, MessageUncheckedCreateWithoutTagsInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutTagsInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutTagsInput, MessageUncheckedUpdateWithoutTagsInput>
  }

  export type MessageUpdateManyWithWhereWithoutTagsInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutTagsInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutTagsInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTagsInput, TaskUncheckedUpdateWithoutTagsInput>
    create: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTagsInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTagsInput, TaskUncheckedUpdateWithoutTagsInput>
  }

  export type TaskUpdateManyWithWhereWithoutTagsInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTagsInput>
  }

  export type UserCreateWithoutTimeRecordsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimeRecordsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimeRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeRecordsInput, UserUncheckedCreateWithoutTimeRecordsInput>
  }

  export type TaskCreateWithoutTimeRecordsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    goal?: GoalCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    progressLogs?: ProgressLogCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTimeRecordsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTimeRecordsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTimeRecordsInput, TaskUncheckedCreateWithoutTimeRecordsInput>
  }

  export type UserUpsertWithoutTimeRecordsInput = {
    update: XOR<UserUpdateWithoutTimeRecordsInput, UserUncheckedUpdateWithoutTimeRecordsInput>
    create: XOR<UserCreateWithoutTimeRecordsInput, UserUncheckedCreateWithoutTimeRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeRecordsInput, UserUncheckedUpdateWithoutTimeRecordsInput>
  }

  export type UserUpdateWithoutTimeRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutTimeRecordsInput = {
    update: XOR<TaskUpdateWithoutTimeRecordsInput, TaskUncheckedUpdateWithoutTimeRecordsInput>
    create: XOR<TaskCreateWithoutTimeRecordsInput, TaskUncheckedCreateWithoutTimeRecordsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTimeRecordsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTimeRecordsInput, TaskUncheckedUpdateWithoutTimeRecordsInput>
  }

  export type TaskUpdateWithoutTimeRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    goal?: GoalUpdateOneWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTimeRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserCreateWithoutProgressLogsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressLogsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutUserInput
    importedFiles?: ImportedFileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressLogsInput, UserUncheckedCreateWithoutProgressLogsInput>
  }

  export type TaskCreateWithoutProgressLogsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    goal?: GoalCreateNestedOneWithoutTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProgressLogsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProgressLogsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProgressLogsInput, TaskUncheckedCreateWithoutProgressLogsInput>
  }

  export type GoalCreateWithoutProgressLogsInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalCreateNestedOneWithoutSubGoalsInput
    subGoals?: GoalCreateNestedManyWithoutParentInput
    user: UserCreateNestedOneWithoutGoalsInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
    tags?: TagCreateNestedManyWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutProgressLogsInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedCreateNestedManyWithoutParentInput
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
    tags?: TagUncheckedCreateNestedManyWithoutGoalsInput
  }

  export type GoalCreateOrConnectWithoutProgressLogsInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutProgressLogsInput, GoalUncheckedCreateWithoutProgressLogsInput>
  }

  export type UserUpsertWithoutProgressLogsInput = {
    update: XOR<UserUpdateWithoutProgressLogsInput, UserUncheckedUpdateWithoutProgressLogsInput>
    create: XOR<UserCreateWithoutProgressLogsInput, UserUncheckedCreateWithoutProgressLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressLogsInput, UserUncheckedUpdateWithoutProgressLogsInput>
  }

  export type UserUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutUserNestedInput
    importedFiles?: ImportedFileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutProgressLogsInput = {
    update: XOR<TaskUpdateWithoutProgressLogsInput, TaskUncheckedUpdateWithoutProgressLogsInput>
    create: XOR<TaskCreateWithoutProgressLogsInput, TaskUncheckedCreateWithoutProgressLogsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutProgressLogsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutProgressLogsInput, TaskUncheckedUpdateWithoutProgressLogsInput>
  }

  export type TaskUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    goal?: GoalUpdateOneWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type GoalUpsertWithoutProgressLogsInput = {
    update: XOR<GoalUpdateWithoutProgressLogsInput, GoalUncheckedUpdateWithoutProgressLogsInput>
    create: XOR<GoalCreateWithoutProgressLogsInput, GoalUncheckedCreateWithoutProgressLogsInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutProgressLogsInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutProgressLogsInput, GoalUncheckedUpdateWithoutProgressLogsInput>
  }

  export type GoalUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalUpdateOneWithoutSubGoalsNestedInput
    subGoals?: GoalUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
    tags?: TagUpdateManyWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedUpdateManyWithoutParentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
    tags?: TagUncheckedUpdateManyWithoutGoalsNestedInput
  }

  export type UserCreateWithoutImportedFilesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutImportedFilesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    timeRecords?: TimeRecordUncheckedCreateNestedManyWithoutUserInput
    progressLogs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutImportedFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImportedFilesInput, UserUncheckedCreateWithoutImportedFilesInput>
  }

  export type UserUpsertWithoutImportedFilesInput = {
    update: XOR<UserUpdateWithoutImportedFilesInput, UserUncheckedUpdateWithoutImportedFilesInput>
    create: XOR<UserCreateWithoutImportedFilesInput, UserUncheckedCreateWithoutImportedFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImportedFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImportedFilesInput, UserUncheckedUpdateWithoutImportedFilesInput>
  }

  export type UserUpdateWithoutImportedFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutImportedFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutUserNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoalCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageCreateManyUserInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
  }

  export type TimeRecordCreateManyUserInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
  }

  export type ProgressLogCreateManyUserInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId?: string | null
    goalId?: string | null
  }

  export type ImportedFileCreateManyUserInput = {
    id?: string
    fileName: string
    fileType: string
    fileSize: number
    ossPath: string
    description?: string | null
    tags?: ImportedFileCreatetagsInput | string[]
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalUpdateOneWithoutSubGoalsNestedInput
    subGoals?: GoalUpdateManyWithoutParentNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
    tags?: TagUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedUpdateManyWithoutParentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
    tags?: TagUncheckedUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryUpdateOneWithoutMessagesNestedInput
    tags?: TagUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    tags?: TagUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    goal?: GoalUpdateOneWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
  }

  export type TimeRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutTimeRecordsNestedInput
  }

  export type TimeRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneWithoutProgressLogsNestedInput
    goal?: GoalUpdateOneWithoutProgressLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportedFileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    ossPath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImportedFileUpdatetagsInput | string[]
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportedFileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    ossPath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImportedFileUpdatetagsInput | string[]
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportedFileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    ossPath?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImportedFileUpdatetagsInput | string[]
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyParentInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    goalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
  }

  export type TimeRecordCreateManyTaskInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ProgressLogCreateManyTaskInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    goalId?: string | null
  }

  export type TaskUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    goal?: GoalUpdateOneWithoutTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
  }

  export type TagUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutTagsNestedInput
    messages?: MessageUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutTagsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeRecordUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeRecordsNestedInput
  }

  export type TimeRecordUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeRecordUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressLogUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressLogsNestedInput
    goal?: GoalUpdateOneWithoutProgressLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalCreateManyParentInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.GoalLevel
    status?: $Enums.GoalStatus
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: number
    weight?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskCreateManyGoalInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: number
  }

  export type ProgressLogCreateManyGoalInput = {
    id?: string
    progress: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    taskId?: string | null
  }

  export type GoalUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
    tags?: TagUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedUpdateManyWithoutParentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
    tags?: TagUncheckedUpdateManyWithoutGoalsNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
  }

  export type TagUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutTagsNestedInput
    tasks?: TaskUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutTagsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressLogsNestedInput
    task?: TaskUpdateOneWithoutProgressLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutTagsNestedInput
    tasks?: TaskUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutTagsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    name: string
    description?: string | null
    sourceType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyCategoryInput = {
    id?: string
    content: string
    sourceType: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CategoryUpdateManyWithoutParentNestedInput
    messages?: MessageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    tags?: TagUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    tags?: TagUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GoalUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    parent?: GoalUpdateOneWithoutSubGoalsNestedInput
    subGoals?: GoalUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    subGoals?: GoalUncheckedUpdateManyWithoutParentNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumGoalLevelFieldUpdateOperationsInput | $Enums.GoalLevel
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    priority?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    category?: CategoryUpdateOneWithoutMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    goal?: GoalUpdateOneWithoutTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    timeRecords?: TimeRecordUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    timeRecords?: TimeRecordUncheckedUpdateManyWithoutTaskNestedInput
    progressLogs?: ProgressLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    totalTime?: IntFieldUpdateOperationsInput | number
  }



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