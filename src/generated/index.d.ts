
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
 * Model GuildSetting
 * 
 */
export type GuildSetting = $Result.DefaultSelection<Prisma.$GuildSettingPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketMessage
 * 
 */
export type TicketMessage = $Result.DefaultSelection<Prisma.$TicketMessagePayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model LevelConfig
 * 
 */
export type LevelConfig = $Result.DefaultSelection<Prisma.$LevelConfigPayload>
/**
 * Model EconomyTransaction
 * 
 */
export type EconomyTransaction = $Result.DefaultSelection<Prisma.$EconomyTransactionPayload>
/**
 * Model StoreItem
 * 
 */
export type StoreItem = $Result.DefaultSelection<Prisma.$StoreItemPayload>
/**
 * Model ModerationAction
 * 
 */
export type ModerationAction = $Result.DefaultSelection<Prisma.$ModerationActionPayload>
/**
 * Model AudioQueueItem
 * 
 */
export type AudioQueueItem = $Result.DefaultSelection<Prisma.$AudioQueueItemPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GuildSettings
 * const guildSettings = await prisma.guildSetting.findMany()
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
   * // Fetch zero or more GuildSettings
   * const guildSettings = await prisma.guildSetting.findMany()
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
   * `prisma.guildSetting`: Exposes CRUD operations for the **GuildSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildSettings
    * const guildSettings = await prisma.guildSetting.findMany()
    * ```
    */
  get guildSetting(): Prisma.GuildSettingDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.ticketMessage`: Exposes CRUD operations for the **TicketMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketMessages
    * const ticketMessages = await prisma.ticketMessage.findMany()
    * ```
    */
  get ticketMessage(): Prisma.TicketMessageDelegate<ExtArgs>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs>;

  /**
   * `prisma.levelConfig`: Exposes CRUD operations for the **LevelConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LevelConfigs
    * const levelConfigs = await prisma.levelConfig.findMany()
    * ```
    */
  get levelConfig(): Prisma.LevelConfigDelegate<ExtArgs>;

  /**
   * `prisma.economyTransaction`: Exposes CRUD operations for the **EconomyTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EconomyTransactions
    * const economyTransactions = await prisma.economyTransaction.findMany()
    * ```
    */
  get economyTransaction(): Prisma.EconomyTransactionDelegate<ExtArgs>;

  /**
   * `prisma.storeItem`: Exposes CRUD operations for the **StoreItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreItems
    * const storeItems = await prisma.storeItem.findMany()
    * ```
    */
  get storeItem(): Prisma.StoreItemDelegate<ExtArgs>;

  /**
   * `prisma.moderationAction`: Exposes CRUD operations for the **ModerationAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModerationActions
    * const moderationActions = await prisma.moderationAction.findMany()
    * ```
    */
  get moderationAction(): Prisma.ModerationActionDelegate<ExtArgs>;

  /**
   * `prisma.audioQueueItem`: Exposes CRUD operations for the **AudioQueueItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioQueueItems
    * const audioQueueItems = await prisma.audioQueueItem.findMany()
    * ```
    */
  get audioQueueItem(): Prisma.AudioQueueItemDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
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
    GuildSetting: 'GuildSetting',
    Ticket: 'Ticket',
    TicketMessage: 'TicketMessage',
    UserProfile: 'UserProfile',
    LevelConfig: 'LevelConfig',
    EconomyTransaction: 'EconomyTransaction',
    StoreItem: 'StoreItem',
    ModerationAction: 'ModerationAction',
    AudioQueueItem: 'AudioQueueItem',
    AuditLog: 'AuditLog',
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken'
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
      modelProps: 'guildSetting' | 'ticket' | 'ticketMessage' | 'userProfile' | 'levelConfig' | 'economyTransaction' | 'storeItem' | 'moderationAction' | 'audioQueueItem' | 'auditLog' | 'user' | 'account' | 'session' | 'verificationToken'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      GuildSetting: {
        payload: Prisma.$GuildSettingPayload<ExtArgs>
        fields: Prisma.GuildSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildSettingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildSettingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          findFirst: {
            args: Prisma.GuildSettingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildSettingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          findMany: {
            args: Prisma.GuildSettingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>[]
          }
          create: {
            args: Prisma.GuildSettingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          createMany: {
            args: Prisma.GuildSettingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildSettingCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>[]
          }
          delete: {
            args: Prisma.GuildSettingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          update: {
            args: Prisma.GuildSettingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          deleteMany: {
            args: Prisma.GuildSettingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GuildSettingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GuildSettingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          aggregate: {
            args: Prisma.GuildSettingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGuildSetting>
          }
          groupBy: {
            args: Prisma.GuildSettingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GuildSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildSettingCountArgs<ExtArgs>,
            result: $Utils.Optional<GuildSettingCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketMessage: {
        payload: Prisma.$TicketMessagePayload<ExtArgs>
        fields: Prisma.TicketMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findFirst: {
            args: Prisma.TicketMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findMany: {
            args: Prisma.TicketMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          create: {
            args: Prisma.TicketMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          createMany: {
            args: Prisma.TicketMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketMessageCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          delete: {
            args: Prisma.TicketMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          update: {
            args: Prisma.TicketMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          deleteMany: {
            args: Prisma.TicketMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          aggregate: {
            args: Prisma.TicketMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicketMessage>
          }
          groupBy: {
            args: Prisma.TicketMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketMessageCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      LevelConfig: {
        payload: Prisma.$LevelConfigPayload<ExtArgs>
        fields: Prisma.LevelConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelConfigFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelConfigFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          findFirst: {
            args: Prisma.LevelConfigFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelConfigFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          findMany: {
            args: Prisma.LevelConfigFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>[]
          }
          create: {
            args: Prisma.LevelConfigCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          createMany: {
            args: Prisma.LevelConfigCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelConfigCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>[]
          }
          delete: {
            args: Prisma.LevelConfigDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          update: {
            args: Prisma.LevelConfigUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          deleteMany: {
            args: Prisma.LevelConfigDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LevelConfigUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LevelConfigUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LevelConfigPayload>
          }
          aggregate: {
            args: Prisma.LevelConfigAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLevelConfig>
          }
          groupBy: {
            args: Prisma.LevelConfigGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LevelConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelConfigCountArgs<ExtArgs>,
            result: $Utils.Optional<LevelConfigCountAggregateOutputType> | number
          }
        }
      }
      EconomyTransaction: {
        payload: Prisma.$EconomyTransactionPayload<ExtArgs>
        fields: Prisma.EconomyTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EconomyTransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EconomyTransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload>
          }
          findFirst: {
            args: Prisma.EconomyTransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EconomyTransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload>
          }
          findMany: {
            args: Prisma.EconomyTransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload>[]
          }
          create: {
            args: Prisma.EconomyTransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload>
          }
          createMany: {
            args: Prisma.EconomyTransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EconomyTransactionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload>[]
          }
          delete: {
            args: Prisma.EconomyTransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload>
          }
          update: {
            args: Prisma.EconomyTransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload>
          }
          deleteMany: {
            args: Prisma.EconomyTransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EconomyTransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EconomyTransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EconomyTransactionPayload>
          }
          aggregate: {
            args: Prisma.EconomyTransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEconomyTransaction>
          }
          groupBy: {
            args: Prisma.EconomyTransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EconomyTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EconomyTransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<EconomyTransactionCountAggregateOutputType> | number
          }
        }
      }
      StoreItem: {
        payload: Prisma.$StoreItemPayload<ExtArgs>
        fields: Prisma.StoreItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          findFirst: {
            args: Prisma.StoreItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          findMany: {
            args: Prisma.StoreItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>[]
          }
          create: {
            args: Prisma.StoreItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          createMany: {
            args: Prisma.StoreItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreItemCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>[]
          }
          delete: {
            args: Prisma.StoreItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          update: {
            args: Prisma.StoreItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          deleteMany: {
            args: Prisma.StoreItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StoreItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StoreItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          aggregate: {
            args: Prisma.StoreItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStoreItem>
          }
          groupBy: {
            args: Prisma.StoreItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StoreItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreItemCountArgs<ExtArgs>,
            result: $Utils.Optional<StoreItemCountAggregateOutputType> | number
          }
        }
      }
      ModerationAction: {
        payload: Prisma.$ModerationActionPayload<ExtArgs>
        fields: Prisma.ModerationActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModerationActionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModerationActionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload>
          }
          findFirst: {
            args: Prisma.ModerationActionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModerationActionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload>
          }
          findMany: {
            args: Prisma.ModerationActionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload>[]
          }
          create: {
            args: Prisma.ModerationActionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload>
          }
          createMany: {
            args: Prisma.ModerationActionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModerationActionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload>[]
          }
          delete: {
            args: Prisma.ModerationActionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload>
          }
          update: {
            args: Prisma.ModerationActionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload>
          }
          deleteMany: {
            args: Prisma.ModerationActionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModerationActionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModerationActionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModerationActionPayload>
          }
          aggregate: {
            args: Prisma.ModerationActionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModerationAction>
          }
          groupBy: {
            args: Prisma.ModerationActionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModerationActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModerationActionCountArgs<ExtArgs>,
            result: $Utils.Optional<ModerationActionCountAggregateOutputType> | number
          }
        }
      }
      AudioQueueItem: {
        payload: Prisma.$AudioQueueItemPayload<ExtArgs>
        fields: Prisma.AudioQueueItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioQueueItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioQueueItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload>
          }
          findFirst: {
            args: Prisma.AudioQueueItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioQueueItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload>
          }
          findMany: {
            args: Prisma.AudioQueueItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload>[]
          }
          create: {
            args: Prisma.AudioQueueItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload>
          }
          createMany: {
            args: Prisma.AudioQueueItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioQueueItemCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload>[]
          }
          delete: {
            args: Prisma.AudioQueueItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload>
          }
          update: {
            args: Prisma.AudioQueueItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload>
          }
          deleteMany: {
            args: Prisma.AudioQueueItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AudioQueueItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AudioQueueItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AudioQueueItemPayload>
          }
          aggregate: {
            args: Prisma.AudioQueueItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAudioQueueItem>
          }
          groupBy: {
            args: Prisma.AudioQueueItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AudioQueueItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioQueueItemCountArgs<ExtArgs>,
            result: $Utils.Optional<AudioQueueItemCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>,
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
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
   * Count Type GuildSettingCountOutputType
   */

  export type GuildSettingCountOutputType = {
    tickets: number
    levelConfigs: number
    storeItems: number
    moderation: number
    audioQueues: number
    auditLogs: number
    userProfiles: number
  }

  export type GuildSettingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | GuildSettingCountOutputTypeCountTicketsArgs
    levelConfigs?: boolean | GuildSettingCountOutputTypeCountLevelConfigsArgs
    storeItems?: boolean | GuildSettingCountOutputTypeCountStoreItemsArgs
    moderation?: boolean | GuildSettingCountOutputTypeCountModerationArgs
    audioQueues?: boolean | GuildSettingCountOutputTypeCountAudioQueuesArgs
    auditLogs?: boolean | GuildSettingCountOutputTypeCountAuditLogsArgs
    userProfiles?: boolean | GuildSettingCountOutputTypeCountUserProfilesArgs
  }

  // Custom InputTypes
  /**
   * GuildSettingCountOutputType without action
   */
  export type GuildSettingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettingCountOutputType
     */
    select?: GuildSettingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildSettingCountOutputType without action
   */
  export type GuildSettingCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * GuildSettingCountOutputType without action
   */
  export type GuildSettingCountOutputTypeCountLevelConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelConfigWhereInput
  }

  /**
   * GuildSettingCountOutputType without action
   */
  export type GuildSettingCountOutputTypeCountStoreItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreItemWhereInput
  }

  /**
   * GuildSettingCountOutputType without action
   */
  export type GuildSettingCountOutputTypeCountModerationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModerationActionWhereInput
  }

  /**
   * GuildSettingCountOutputType without action
   */
  export type GuildSettingCountOutputTypeCountAudioQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioQueueItemWhereInput
  }

  /**
   * GuildSettingCountOutputType without action
   */
  export type GuildSettingCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * GuildSettingCountOutputType without action
   */
  export type GuildSettingCountOutputTypeCountUserProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    messages: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | TicketCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
  }


  /**
   * Count Type UserProfileCountOutputType
   */

  export type UserProfileCountOutputType = {
    transactions: number
  }

  export type UserProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserProfileCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileCountOutputType
     */
    select?: UserProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EconomyTransactionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    profiles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    profiles?: boolean | UserCountOutputTypeCountProfilesArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GuildSetting
   */

  export type AggregateGuildSetting = {
    _count: GuildSettingCountAggregateOutputType | null
    _avg: GuildSettingAvgAggregateOutputType | null
    _sum: GuildSettingSumAggregateOutputType | null
    _min: GuildSettingMinAggregateOutputType | null
    _max: GuildSettingMaxAggregateOutputType | null
  }

  export type GuildSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type GuildSettingSumAggregateOutputType = {
    id: number | null
  }

  export type GuildSettingMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    locale: string | null
    staffRoleIds: string | null
    ticketCategory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuildSettingMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    locale: string | null
    staffRoleIds: string | null
    ticketCategory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuildSettingCountAggregateOutputType = {
    id: number
    guildId: number
    locale: number
    staffRoleIds: number
    ticketCategory: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuildSettingAvgAggregateInputType = {
    id?: true
  }

  export type GuildSettingSumAggregateInputType = {
    id?: true
  }

  export type GuildSettingMinAggregateInputType = {
    id?: true
    guildId?: true
    locale?: true
    staffRoleIds?: true
    ticketCategory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuildSettingMaxAggregateInputType = {
    id?: true
    guildId?: true
    locale?: true
    staffRoleIds?: true
    ticketCategory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuildSettingCountAggregateInputType = {
    id?: true
    guildId?: true
    locale?: true
    staffRoleIds?: true
    ticketCategory?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuildSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildSetting to aggregate.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildSettings
    **/
    _count?: true | GuildSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuildSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuildSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildSettingMaxAggregateInputType
  }

  export type GetGuildSettingAggregateType<T extends GuildSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildSetting[P]>
      : GetScalarType<T[P], AggregateGuildSetting[P]>
  }




  export type GuildSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildSettingWhereInput
    orderBy?: GuildSettingOrderByWithAggregationInput | GuildSettingOrderByWithAggregationInput[]
    by: GuildSettingScalarFieldEnum[] | GuildSettingScalarFieldEnum
    having?: GuildSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildSettingCountAggregateInputType | true
    _avg?: GuildSettingAvgAggregateInputType
    _sum?: GuildSettingSumAggregateInputType
    _min?: GuildSettingMinAggregateInputType
    _max?: GuildSettingMaxAggregateInputType
  }

  export type GuildSettingGroupByOutputType = {
    id: number
    guildId: string
    locale: string | null
    staffRoleIds: string | null
    ticketCategory: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuildSettingCountAggregateOutputType | null
    _avg: GuildSettingAvgAggregateOutputType | null
    _sum: GuildSettingSumAggregateOutputType | null
    _min: GuildSettingMinAggregateOutputType | null
    _max: GuildSettingMaxAggregateOutputType | null
  }

  type GetGuildSettingGroupByPayload<T extends GuildSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildSettingGroupByOutputType[P]>
            : GetScalarType<T[P], GuildSettingGroupByOutputType[P]>
        }
      >
    >


  export type GuildSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    locale?: boolean
    staffRoleIds?: boolean
    ticketCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickets?: boolean | GuildSetting$ticketsArgs<ExtArgs>
    levelConfigs?: boolean | GuildSetting$levelConfigsArgs<ExtArgs>
    storeItems?: boolean | GuildSetting$storeItemsArgs<ExtArgs>
    moderation?: boolean | GuildSetting$moderationArgs<ExtArgs>
    audioQueues?: boolean | GuildSetting$audioQueuesArgs<ExtArgs>
    auditLogs?: boolean | GuildSetting$auditLogsArgs<ExtArgs>
    userProfiles?: boolean | GuildSetting$userProfilesArgs<ExtArgs>
    _count?: boolean | GuildSettingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildSetting"]>

  export type GuildSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    locale?: boolean
    staffRoleIds?: boolean
    ticketCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guildSetting"]>

  export type GuildSettingSelectScalar = {
    id?: boolean
    guildId?: boolean
    locale?: boolean
    staffRoleIds?: boolean
    ticketCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuildSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | GuildSetting$ticketsArgs<ExtArgs>
    levelConfigs?: boolean | GuildSetting$levelConfigsArgs<ExtArgs>
    storeItems?: boolean | GuildSetting$storeItemsArgs<ExtArgs>
    moderation?: boolean | GuildSetting$moderationArgs<ExtArgs>
    audioQueues?: boolean | GuildSetting$audioQueuesArgs<ExtArgs>
    auditLogs?: boolean | GuildSetting$auditLogsArgs<ExtArgs>
    userProfiles?: boolean | GuildSetting$userProfilesArgs<ExtArgs>
    _count?: boolean | GuildSettingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuildSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildSetting"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      levelConfigs: Prisma.$LevelConfigPayload<ExtArgs>[]
      storeItems: Prisma.$StoreItemPayload<ExtArgs>[]
      moderation: Prisma.$ModerationActionPayload<ExtArgs>[]
      audioQueues: Prisma.$AudioQueueItemPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      userProfiles: Prisma.$UserProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      locale: string | null
      staffRoleIds: string | null
      ticketCategory: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guildSetting"]>
    composites: {}
  }

  type GuildSettingGetPayload<S extends boolean | null | undefined | GuildSettingDefaultArgs> = $Result.GetResult<Prisma.$GuildSettingPayload, S>

  type GuildSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GuildSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GuildSettingCountAggregateInputType | true
    }

  export interface GuildSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildSetting'], meta: { name: 'GuildSetting' } }
    /**
     * Find zero or one GuildSetting that matches the filter.
     * @param {GuildSettingFindUniqueArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GuildSettingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GuildSettingFindUniqueArgs<ExtArgs>>
    ): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GuildSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GuildSettingFindUniqueOrThrowArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GuildSettingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GuildSettingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GuildSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingFindFirstArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GuildSettingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GuildSettingFindFirstArgs<ExtArgs>>
    ): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GuildSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingFindFirstOrThrowArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GuildSettingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GuildSettingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GuildSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildSettings
     * const guildSettings = await prisma.guildSetting.findMany()
     * 
     * // Get first 10 GuildSettings
     * const guildSettings = await prisma.guildSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildSettingWithIdOnly = await prisma.guildSetting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GuildSettingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GuildSettingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GuildSetting.
     * @param {GuildSettingCreateArgs} args - Arguments to create a GuildSetting.
     * @example
     * // Create one GuildSetting
     * const GuildSetting = await prisma.guildSetting.create({
     *   data: {
     *     // ... data to create a GuildSetting
     *   }
     * })
     * 
    **/
    create<T extends GuildSettingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GuildSettingCreateArgs<ExtArgs>>
    ): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GuildSettings.
     * @param {GuildSettingCreateManyArgs} args - Arguments to create many GuildSettings.
     * @example
     * // Create many GuildSettings
     * const guildSetting = await prisma.guildSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends GuildSettingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GuildSettingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildSettings and returns the data saved in the database.
     * @param {GuildSettingCreateManyAndReturnArgs} args - Arguments to create many GuildSettings.
     * @example
     * // Create many GuildSettings
     * const guildSetting = await prisma.guildSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildSettings and only return the `id`
     * const guildSettingWithIdOnly = await prisma.guildSetting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends GuildSettingCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, GuildSettingCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a GuildSetting.
     * @param {GuildSettingDeleteArgs} args - Arguments to delete one GuildSetting.
     * @example
     * // Delete one GuildSetting
     * const GuildSetting = await prisma.guildSetting.delete({
     *   where: {
     *     // ... filter to delete one GuildSetting
     *   }
     * })
     * 
    **/
    delete<T extends GuildSettingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GuildSettingDeleteArgs<ExtArgs>>
    ): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GuildSetting.
     * @param {GuildSettingUpdateArgs} args - Arguments to update one GuildSetting.
     * @example
     * // Update one GuildSetting
     * const guildSetting = await prisma.guildSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GuildSettingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GuildSettingUpdateArgs<ExtArgs>>
    ): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GuildSettings.
     * @param {GuildSettingDeleteManyArgs} args - Arguments to filter GuildSettings to delete.
     * @example
     * // Delete a few GuildSettings
     * const { count } = await prisma.guildSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GuildSettingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GuildSettingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildSettings
     * const guildSetting = await prisma.guildSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GuildSettingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GuildSettingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GuildSetting.
     * @param {GuildSettingUpsertArgs} args - Arguments to update or create a GuildSetting.
     * @example
     * // Update or create a GuildSetting
     * const guildSetting = await prisma.guildSetting.upsert({
     *   create: {
     *     // ... data to create a GuildSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildSetting we want to update
     *   }
     * })
    **/
    upsert<T extends GuildSettingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GuildSettingUpsertArgs<ExtArgs>>
    ): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingCountArgs} args - Arguments to filter GuildSettings to count.
     * @example
     * // Count the number of GuildSettings
     * const count = await prisma.guildSetting.count({
     *   where: {
     *     // ... the filter for the GuildSettings we want to count
     *   }
     * })
    **/
    count<T extends GuildSettingCountArgs>(
      args?: Subset<T, GuildSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuildSettingAggregateArgs>(args: Subset<T, GuildSettingAggregateArgs>): Prisma.PrismaPromise<GetGuildSettingAggregateType<T>>

    /**
     * Group by GuildSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingGroupByArgs} args - Group by arguments.
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
      T extends GuildSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildSettingGroupByArgs['orderBy'] }
        : { orderBy?: GuildSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuildSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildSetting model
   */
  readonly fields: GuildSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tickets<T extends GuildSetting$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, GuildSetting$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    levelConfigs<T extends GuildSetting$levelConfigsArgs<ExtArgs> = {}>(args?: Subset<T, GuildSetting$levelConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'findMany'> | Null>;

    storeItems<T extends GuildSetting$storeItemsArgs<ExtArgs> = {}>(args?: Subset<T, GuildSetting$storeItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    moderation<T extends GuildSetting$moderationArgs<ExtArgs> = {}>(args?: Subset<T, GuildSetting$moderationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'findMany'> | Null>;

    audioQueues<T extends GuildSetting$audioQueuesArgs<ExtArgs> = {}>(args?: Subset<T, GuildSetting$audioQueuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    auditLogs<T extends GuildSetting$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, GuildSetting$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    userProfiles<T extends GuildSetting$userProfilesArgs<ExtArgs> = {}>(args?: Subset<T, GuildSetting$userProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the GuildSetting model
   */ 
  interface GuildSettingFieldRefs {
    readonly id: FieldRef<"GuildSetting", 'Int'>
    readonly guildId: FieldRef<"GuildSetting", 'String'>
    readonly locale: FieldRef<"GuildSetting", 'String'>
    readonly staffRoleIds: FieldRef<"GuildSetting", 'String'>
    readonly ticketCategory: FieldRef<"GuildSetting", 'String'>
    readonly createdAt: FieldRef<"GuildSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"GuildSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuildSetting findUnique
   */
  export type GuildSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting findUniqueOrThrow
   */
  export type GuildSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting findFirst
   */
  export type GuildSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildSettings.
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildSettings.
     */
    distinct?: GuildSettingScalarFieldEnum | GuildSettingScalarFieldEnum[]
  }

  /**
   * GuildSetting findFirstOrThrow
   */
  export type GuildSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildSettings.
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildSettings.
     */
    distinct?: GuildSettingScalarFieldEnum | GuildSettingScalarFieldEnum[]
  }

  /**
   * GuildSetting findMany
   */
  export type GuildSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter, which GuildSettings to fetch.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildSettings.
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    distinct?: GuildSettingScalarFieldEnum | GuildSettingScalarFieldEnum[]
  }

  /**
   * GuildSetting create
   */
  export type GuildSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a GuildSetting.
     */
    data: XOR<GuildSettingCreateInput, GuildSettingUncheckedCreateInput>
  }

  /**
   * GuildSetting createMany
   */
  export type GuildSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildSettings.
     */
    data: GuildSettingCreateManyInput | GuildSettingCreateManyInput[]
  }

  /**
   * GuildSetting createManyAndReturn
   */
  export type GuildSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GuildSettings.
     */
    data: GuildSettingCreateManyInput | GuildSettingCreateManyInput[]
  }

  /**
   * GuildSetting update
   */
  export type GuildSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a GuildSetting.
     */
    data: XOR<GuildSettingUpdateInput, GuildSettingUncheckedUpdateInput>
    /**
     * Choose, which GuildSetting to update.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting updateMany
   */
  export type GuildSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildSettings.
     */
    data: XOR<GuildSettingUpdateManyMutationInput, GuildSettingUncheckedUpdateManyInput>
    /**
     * Filter which GuildSettings to update
     */
    where?: GuildSettingWhereInput
  }

  /**
   * GuildSetting upsert
   */
  export type GuildSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the GuildSetting to update in case it exists.
     */
    where: GuildSettingWhereUniqueInput
    /**
     * In case the GuildSetting found by the `where` argument doesn't exist, create a new GuildSetting with this data.
     */
    create: XOR<GuildSettingCreateInput, GuildSettingUncheckedCreateInput>
    /**
     * In case the GuildSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildSettingUpdateInput, GuildSettingUncheckedUpdateInput>
  }

  /**
   * GuildSetting delete
   */
  export type GuildSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
    /**
     * Filter which GuildSetting to delete.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting deleteMany
   */
  export type GuildSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildSettings to delete
     */
    where?: GuildSettingWhereInput
  }

  /**
   * GuildSetting.tickets
   */
  export type GuildSetting$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * GuildSetting.levelConfigs
   */
  export type GuildSetting$levelConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    where?: LevelConfigWhereInput
    orderBy?: LevelConfigOrderByWithRelationInput | LevelConfigOrderByWithRelationInput[]
    cursor?: LevelConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LevelConfigScalarFieldEnum | LevelConfigScalarFieldEnum[]
  }

  /**
   * GuildSetting.storeItems
   */
  export type GuildSetting$storeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    where?: StoreItemWhereInput
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    cursor?: StoreItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * GuildSetting.moderation
   */
  export type GuildSetting$moderationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    where?: ModerationActionWhereInput
    orderBy?: ModerationActionOrderByWithRelationInput | ModerationActionOrderByWithRelationInput[]
    cursor?: ModerationActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModerationActionScalarFieldEnum | ModerationActionScalarFieldEnum[]
  }

  /**
   * GuildSetting.audioQueues
   */
  export type GuildSetting$audioQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    where?: AudioQueueItemWhereInput
    orderBy?: AudioQueueItemOrderByWithRelationInput | AudioQueueItemOrderByWithRelationInput[]
    cursor?: AudioQueueItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudioQueueItemScalarFieldEnum | AudioQueueItemScalarFieldEnum[]
  }

  /**
   * GuildSetting.auditLogs
   */
  export type GuildSetting$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * GuildSetting.userProfiles
   */
  export type GuildSetting$userProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    cursor?: UserProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * GuildSetting without action
   */
  export type GuildSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    channelId: string | null
    category: string | null
    priority: string | null
    status: string | null
    assignedTo: string | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    channelId: string | null
    category: string | null
    priority: string | null
    status: string | null
    assignedTo: string | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    guildId: number
    userId: number
    channelId: number
    category: number
    priority: number
    status: number
    assignedTo: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    channelId?: true
    category?: true
    priority?: true
    status?: true
    assignedTo?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    channelId?: true
    category?: true
    priority?: true
    status?: true
    assignedTo?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    channelId?: true
    category?: true
    priority?: true
    status?: true
    assignedTo?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    guildId: string
    userId: string
    channelId: string
    category: string | null
    priority: string
    status: string
    assignedTo: string | null
    metadata: string | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    channelId?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    channelId?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    guildId?: boolean
    userId?: boolean
    channelId?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      guild: Prisma.$GuildSettingPayload<ExtArgs>
      messages: Prisma.$TicketMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      userId: string
      channelId: string
      category: string | null
      priority: string
      status: string
      assignedTo: string | null
      metadata: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
    **/
    create<T extends TicketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketCreateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TicketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
    **/
    delete<T extends TicketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
    **/
    upsert<T extends TicketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    guild<T extends GuildSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildSettingDefaultArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    messages<T extends Ticket$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly guildId: FieldRef<"Ticket", 'String'>
    readonly userId: FieldRef<"Ticket", 'String'>
    readonly channelId: FieldRef<"Ticket", 'String'>
    readonly category: FieldRef<"Ticket", 'String'>
    readonly priority: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'String'>
    readonly assignedTo: FieldRef<"Ticket", 'String'>
    readonly metadata: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.messages
   */
  export type Ticket$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    cursor?: TicketMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketMessage
   */

  export type AggregateTicketMessage = {
    _count: TicketMessageCountAggregateOutputType | null
    _avg: TicketMessageAvgAggregateOutputType | null
    _sum: TicketMessageSumAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  export type TicketMessageAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
  }

  export type TicketMessageSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
  }

  export type TicketMessageMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    authorId: string | null
    content: string | null
    attachments: string | null
    createdAt: Date | null
  }

  export type TicketMessageMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    authorId: string | null
    content: string | null
    attachments: string | null
    createdAt: Date | null
  }

  export type TicketMessageCountAggregateOutputType = {
    id: number
    ticketId: number
    authorId: number
    content: number
    attachments: number
    createdAt: number
    _all: number
  }


  export type TicketMessageAvgAggregateInputType = {
    id?: true
    ticketId?: true
  }

  export type TicketMessageSumAggregateInputType = {
    id?: true
    ticketId?: true
  }

  export type TicketMessageMinAggregateInputType = {
    id?: true
    ticketId?: true
    authorId?: true
    content?: true
    attachments?: true
    createdAt?: true
  }

  export type TicketMessageMaxAggregateInputType = {
    id?: true
    ticketId?: true
    authorId?: true
    content?: true
    attachments?: true
    createdAt?: true
  }

  export type TicketMessageCountAggregateInputType = {
    id?: true
    ticketId?: true
    authorId?: true
    content?: true
    attachments?: true
    createdAt?: true
    _all?: true
  }

  export type TicketMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessage to aggregate.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketMessages
    **/
    _count?: true | TicketMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMessageMaxAggregateInputType
  }

  export type GetTicketMessageAggregateType<T extends TicketMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketMessage[P]>
      : GetScalarType<T[P], AggregateTicketMessage[P]>
  }




  export type TicketMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithAggregationInput | TicketMessageOrderByWithAggregationInput[]
    by: TicketMessageScalarFieldEnum[] | TicketMessageScalarFieldEnum
    having?: TicketMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketMessageCountAggregateInputType | true
    _avg?: TicketMessageAvgAggregateInputType
    _sum?: TicketMessageSumAggregateInputType
    _min?: TicketMessageMinAggregateInputType
    _max?: TicketMessageMaxAggregateInputType
  }

  export type TicketMessageGroupByOutputType = {
    id: number
    ticketId: number
    authorId: string
    content: string
    attachments: string | null
    createdAt: Date
    _count: TicketMessageCountAggregateOutputType | null
    _avg: TicketMessageAvgAggregateOutputType | null
    _sum: TicketMessageSumAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  type GetTicketMessageGroupByPayload<T extends TicketMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
            : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
        }
      >
    >


  export type TicketMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    authorId?: boolean
    content?: boolean
    attachments?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    authorId?: boolean
    content?: boolean
    attachments?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>

  export type TicketMessageSelectScalar = {
    id?: boolean
    ticketId?: boolean
    authorId?: boolean
    content?: boolean
    attachments?: boolean
    createdAt?: boolean
  }

  export type TicketMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketMessage"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      authorId: string
      content: string
      attachments: string | null
      createdAt: Date
    }, ExtArgs["result"]["ticketMessage"]>
    composites: {}
  }

  type TicketMessageGetPayload<S extends boolean | null | undefined | TicketMessageDefaultArgs> = $Result.GetResult<Prisma.$TicketMessagePayload, S>

  type TicketMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketMessageCountAggregateInputType | true
    }

  export interface TicketMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketMessage'], meta: { name: 'TicketMessage' } }
    /**
     * Find zero or one TicketMessage that matches the filter.
     * @param {TicketMessageFindUniqueArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TicketMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketMessageFindUniqueOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TicketMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketMessageFindFirstArgs<ExtArgs>>
    ): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TicketMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TicketMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany()
     * 
     * // Get first 10 TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TicketMessage.
     * @param {TicketMessageCreateArgs} args - Arguments to create a TicketMessage.
     * @example
     * // Create one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.create({
     *   data: {
     *     // ... data to create a TicketMessage
     *   }
     * })
     * 
    **/
    create<T extends TicketMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketMessageCreateArgs<ExtArgs>>
    ): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TicketMessages.
     * @param {TicketMessageCreateManyArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TicketMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketMessages and returns the data saved in the database.
     * @param {TicketMessageCreateManyAndReturnArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketMessages and only return the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TicketMessageCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketMessageCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a TicketMessage.
     * @param {TicketMessageDeleteArgs} args - Arguments to delete one TicketMessage.
     * @example
     * // Delete one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.delete({
     *   where: {
     *     // ... filter to delete one TicketMessage
     *   }
     * })
     * 
    **/
    delete<T extends TicketMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketMessageDeleteArgs<ExtArgs>>
    ): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TicketMessage.
     * @param {TicketMessageUpdateArgs} args - Arguments to update one TicketMessage.
     * @example
     * // Update one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketMessageUpdateArgs<ExtArgs>>
    ): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TicketMessages.
     * @param {TicketMessageDeleteManyArgs} args - Arguments to filter TicketMessages to delete.
     * @example
     * // Delete a few TicketMessages
     * const { count } = await prisma.ticketMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketMessage.
     * @param {TicketMessageUpsertArgs} args - Arguments to update or create a TicketMessage.
     * @example
     * // Update or create a TicketMessage
     * const ticketMessage = await prisma.ticketMessage.upsert({
     *   create: {
     *     // ... data to create a TicketMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketMessage we want to update
     *   }
     * })
    **/
    upsert<T extends TicketMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketMessageUpsertArgs<ExtArgs>>
    ): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageCountArgs} args - Arguments to filter TicketMessages to count.
     * @example
     * // Count the number of TicketMessages
     * const count = await prisma.ticketMessage.count({
     *   where: {
     *     // ... the filter for the TicketMessages we want to count
     *   }
     * })
    **/
    count<T extends TicketMessageCountArgs>(
      args?: Subset<T, TicketMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketMessageAggregateArgs>(args: Subset<T, TicketMessageAggregateArgs>): Prisma.PrismaPromise<GetTicketMessageAggregateType<T>>

    /**
     * Group by TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageGroupByArgs} args - Group by arguments.
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
      T extends TicketMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketMessageGroupByArgs['orderBy'] }
        : { orderBy?: TicketMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketMessage model
   */
  readonly fields: TicketMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the TicketMessage model
   */ 
  interface TicketMessageFieldRefs {
    readonly id: FieldRef<"TicketMessage", 'Int'>
    readonly ticketId: FieldRef<"TicketMessage", 'Int'>
    readonly authorId: FieldRef<"TicketMessage", 'String'>
    readonly content: FieldRef<"TicketMessage", 'String'>
    readonly attachments: FieldRef<"TicketMessage", 'String'>
    readonly createdAt: FieldRef<"TicketMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketMessage findUnique
   */
  export type TicketMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findUniqueOrThrow
   */
  export type TicketMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findFirst
   */
  export type TicketMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findFirstOrThrow
   */
  export type TicketMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findMany
   */
  export type TicketMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessages to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage create
   */
  export type TicketMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketMessage.
     */
    data: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
  }

  /**
   * TicketMessage createMany
   */
  export type TicketMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
  }

  /**
   * TicketMessage createManyAndReturn
   */
  export type TicketMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketMessage update
   */
  export type TicketMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketMessage.
     */
    data: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
    /**
     * Choose, which TicketMessage to update.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage updateMany
   */
  export type TicketMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketMessages.
     */
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyInput>
    /**
     * Filter which TicketMessages to update
     */
    where?: TicketMessageWhereInput
  }

  /**
   * TicketMessage upsert
   */
  export type TicketMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketMessage to update in case it exists.
     */
    where: TicketMessageWhereUniqueInput
    /**
     * In case the TicketMessage found by the `where` argument doesn't exist, create a new TicketMessage with this data.
     */
    create: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
    /**
     * In case the TicketMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
  }

  /**
   * TicketMessage delete
   */
  export type TicketMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter which TicketMessage to delete.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage deleteMany
   */
  export type TicketMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessages to delete
     */
    where?: TicketMessageWhereInput
  }

  /**
   * TicketMessage without action
   */
  export type TicketMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
    experience: number | null
    level: number | null
    balance: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
    experience: number | null
    level: number | null
    balance: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    experience: number | null
    level: number | null
    balance: number | null
    inventory: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authUserId: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    experience: number | null
    level: number | null
    balance: number | null
    inventory: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authUserId: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    guildId: number
    userId: number
    experience: number
    level: number
    balance: number
    inventory: number
    createdAt: number
    updatedAt: number
    authUserId: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
    experience?: true
    level?: true
    balance?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
    experience?: true
    level?: true
    balance?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    experience?: true
    level?: true
    balance?: true
    inventory?: true
    createdAt?: true
    updatedAt?: true
    authUserId?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    experience?: true
    level?: true
    balance?: true
    inventory?: true
    createdAt?: true
    updatedAt?: true
    authUserId?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    experience?: true
    level?: true
    balance?: true
    inventory?: true
    createdAt?: true
    updatedAt?: true
    authUserId?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: number
    guildId: string
    userId: string
    experience: number
    level: number
    balance: number
    inventory: string | null
    createdAt: Date
    updatedAt: Date
    authUserId: string | null
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    experience?: boolean
    level?: boolean
    balance?: boolean
    inventory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authUserId?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
    transactions?: boolean | UserProfile$transactionsArgs<ExtArgs>
    authUser?: boolean | UserProfile$authUserArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    experience?: boolean
    level?: boolean
    balance?: boolean
    inventory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authUserId?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
    authUser?: boolean | UserProfile$authUserArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    guildId?: boolean
    userId?: boolean
    experience?: boolean
    level?: boolean
    balance?: boolean
    inventory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authUserId?: boolean
  }

  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
    transactions?: boolean | UserProfile$transactionsArgs<ExtArgs>
    authUser?: boolean | UserProfile$authUserArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
    authUser?: boolean | UserProfile$authUserArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      guild: Prisma.$GuildSettingPayload<ExtArgs>
      transactions: Prisma.$EconomyTransactionPayload<ExtArgs>[]
      authUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      userId: string
      experience: number
      level: number
      balance: number
      inventory: string | null
      createdAt: Date
      updatedAt: Date
      authUserId: string | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
    **/
    create<T extends UserProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
    **/
    delete<T extends UserProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends UserProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    guild<T extends GuildSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildSettingDefaultArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    transactions<T extends UserProfile$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    authUser<T extends UserProfile$authUserArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$authUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the UserProfile model
   */ 
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'Int'>
    readonly guildId: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly experience: FieldRef<"UserProfile", 'Int'>
    readonly level: FieldRef<"UserProfile", 'Int'>
    readonly balance: FieldRef<"UserProfile", 'Int'>
    readonly inventory: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly authUserId: FieldRef<"UserProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }

  /**
   * UserProfile.transactions
   */
  export type UserProfile$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    where?: EconomyTransactionWhereInput
    orderBy?: EconomyTransactionOrderByWithRelationInput | EconomyTransactionOrderByWithRelationInput[]
    cursor?: EconomyTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EconomyTransactionScalarFieldEnum | EconomyTransactionScalarFieldEnum[]
  }

  /**
   * UserProfile.authUser
   */
  export type UserProfile$authUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model LevelConfig
   */

  export type AggregateLevelConfig = {
    _count: LevelConfigCountAggregateOutputType | null
    _avg: LevelConfigAvgAggregateOutputType | null
    _sum: LevelConfigSumAggregateOutputType | null
    _min: LevelConfigMinAggregateOutputType | null
    _max: LevelConfigMaxAggregateOutputType | null
  }

  export type LevelConfigAvgAggregateOutputType = {
    id: number | null
    level: number | null
    requiredXp: number | null
    rewardItemId: number | null
  }

  export type LevelConfigSumAggregateOutputType = {
    id: number | null
    level: number | null
    requiredXp: number | null
    rewardItemId: number | null
  }

  export type LevelConfigMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    level: number | null
    requiredXp: number | null
    rewardRoleId: string | null
    rewardItemId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelConfigMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    level: number | null
    requiredXp: number | null
    rewardRoleId: string | null
    rewardItemId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelConfigCountAggregateOutputType = {
    id: number
    guildId: number
    level: number
    requiredXp: number
    rewardRoleId: number
    rewardItemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LevelConfigAvgAggregateInputType = {
    id?: true
    level?: true
    requiredXp?: true
    rewardItemId?: true
  }

  export type LevelConfigSumAggregateInputType = {
    id?: true
    level?: true
    requiredXp?: true
    rewardItemId?: true
  }

  export type LevelConfigMinAggregateInputType = {
    id?: true
    guildId?: true
    level?: true
    requiredXp?: true
    rewardRoleId?: true
    rewardItemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelConfigMaxAggregateInputType = {
    id?: true
    guildId?: true
    level?: true
    requiredXp?: true
    rewardRoleId?: true
    rewardItemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelConfigCountAggregateInputType = {
    id?: true
    guildId?: true
    level?: true
    requiredXp?: true
    rewardRoleId?: true
    rewardItemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LevelConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelConfig to aggregate.
     */
    where?: LevelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelConfigs to fetch.
     */
    orderBy?: LevelConfigOrderByWithRelationInput | LevelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LevelConfigs
    **/
    _count?: true | LevelConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelConfigMaxAggregateInputType
  }

  export type GetLevelConfigAggregateType<T extends LevelConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateLevelConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevelConfig[P]>
      : GetScalarType<T[P], AggregateLevelConfig[P]>
  }




  export type LevelConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelConfigWhereInput
    orderBy?: LevelConfigOrderByWithAggregationInput | LevelConfigOrderByWithAggregationInput[]
    by: LevelConfigScalarFieldEnum[] | LevelConfigScalarFieldEnum
    having?: LevelConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelConfigCountAggregateInputType | true
    _avg?: LevelConfigAvgAggregateInputType
    _sum?: LevelConfigSumAggregateInputType
    _min?: LevelConfigMinAggregateInputType
    _max?: LevelConfigMaxAggregateInputType
  }

  export type LevelConfigGroupByOutputType = {
    id: number
    guildId: string
    level: number
    requiredXp: number
    rewardRoleId: string | null
    rewardItemId: number | null
    createdAt: Date
    updatedAt: Date
    _count: LevelConfigCountAggregateOutputType | null
    _avg: LevelConfigAvgAggregateOutputType | null
    _sum: LevelConfigSumAggregateOutputType | null
    _min: LevelConfigMinAggregateOutputType | null
    _max: LevelConfigMaxAggregateOutputType | null
  }

  type GetLevelConfigGroupByPayload<T extends LevelConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelConfigGroupByOutputType[P]>
            : GetScalarType<T[P], LevelConfigGroupByOutputType[P]>
        }
      >
    >


  export type LevelConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    level?: boolean
    requiredXp?: boolean
    rewardRoleId?: boolean
    rewardItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelConfig"]>

  export type LevelConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    level?: boolean
    requiredXp?: boolean
    rewardRoleId?: boolean
    rewardItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelConfig"]>

  export type LevelConfigSelectScalar = {
    id?: boolean
    guildId?: boolean
    level?: boolean
    requiredXp?: boolean
    rewardRoleId?: boolean
    rewardItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LevelConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }
  export type LevelConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }

  export type $LevelConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LevelConfig"
    objects: {
      guild: Prisma.$GuildSettingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      level: number
      requiredXp: number
      rewardRoleId: string | null
      rewardItemId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["levelConfig"]>
    composites: {}
  }

  type LevelConfigGetPayload<S extends boolean | null | undefined | LevelConfigDefaultArgs> = $Result.GetResult<Prisma.$LevelConfigPayload, S>

  type LevelConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LevelConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LevelConfigCountAggregateInputType | true
    }

  export interface LevelConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LevelConfig'], meta: { name: 'LevelConfig' } }
    /**
     * Find zero or one LevelConfig that matches the filter.
     * @param {LevelConfigFindUniqueArgs} args - Arguments to find a LevelConfig
     * @example
     * // Get one LevelConfig
     * const levelConfig = await prisma.levelConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LevelConfigFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LevelConfigFindUniqueArgs<ExtArgs>>
    ): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LevelConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LevelConfigFindUniqueOrThrowArgs} args - Arguments to find a LevelConfig
     * @example
     * // Get one LevelConfig
     * const levelConfig = await prisma.levelConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LevelConfigFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LevelConfigFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LevelConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigFindFirstArgs} args - Arguments to find a LevelConfig
     * @example
     * // Get one LevelConfig
     * const levelConfig = await prisma.levelConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LevelConfigFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LevelConfigFindFirstArgs<ExtArgs>>
    ): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LevelConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigFindFirstOrThrowArgs} args - Arguments to find a LevelConfig
     * @example
     * // Get one LevelConfig
     * const levelConfig = await prisma.levelConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LevelConfigFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LevelConfigFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LevelConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LevelConfigs
     * const levelConfigs = await prisma.levelConfig.findMany()
     * 
     * // Get first 10 LevelConfigs
     * const levelConfigs = await prisma.levelConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelConfigWithIdOnly = await prisma.levelConfig.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LevelConfigFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LevelConfigFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LevelConfig.
     * @param {LevelConfigCreateArgs} args - Arguments to create a LevelConfig.
     * @example
     * // Create one LevelConfig
     * const LevelConfig = await prisma.levelConfig.create({
     *   data: {
     *     // ... data to create a LevelConfig
     *   }
     * })
     * 
    **/
    create<T extends LevelConfigCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LevelConfigCreateArgs<ExtArgs>>
    ): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LevelConfigs.
     * @param {LevelConfigCreateManyArgs} args - Arguments to create many LevelConfigs.
     * @example
     * // Create many LevelConfigs
     * const levelConfig = await prisma.levelConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LevelConfigCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LevelConfigCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LevelConfigs and returns the data saved in the database.
     * @param {LevelConfigCreateManyAndReturnArgs} args - Arguments to create many LevelConfigs.
     * @example
     * // Create many LevelConfigs
     * const levelConfig = await prisma.levelConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LevelConfigs and only return the `id`
     * const levelConfigWithIdOnly = await prisma.levelConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends LevelConfigCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, LevelConfigCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a LevelConfig.
     * @param {LevelConfigDeleteArgs} args - Arguments to delete one LevelConfig.
     * @example
     * // Delete one LevelConfig
     * const LevelConfig = await prisma.levelConfig.delete({
     *   where: {
     *     // ... filter to delete one LevelConfig
     *   }
     * })
     * 
    **/
    delete<T extends LevelConfigDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LevelConfigDeleteArgs<ExtArgs>>
    ): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LevelConfig.
     * @param {LevelConfigUpdateArgs} args - Arguments to update one LevelConfig.
     * @example
     * // Update one LevelConfig
     * const levelConfig = await prisma.levelConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LevelConfigUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LevelConfigUpdateArgs<ExtArgs>>
    ): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LevelConfigs.
     * @param {LevelConfigDeleteManyArgs} args - Arguments to filter LevelConfigs to delete.
     * @example
     * // Delete a few LevelConfigs
     * const { count } = await prisma.levelConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LevelConfigDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LevelConfigDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LevelConfigs
     * const levelConfig = await prisma.levelConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LevelConfigUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LevelConfigUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LevelConfig.
     * @param {LevelConfigUpsertArgs} args - Arguments to update or create a LevelConfig.
     * @example
     * // Update or create a LevelConfig
     * const levelConfig = await prisma.levelConfig.upsert({
     *   create: {
     *     // ... data to create a LevelConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LevelConfig we want to update
     *   }
     * })
    **/
    upsert<T extends LevelConfigUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LevelConfigUpsertArgs<ExtArgs>>
    ): Prisma__LevelConfigClient<$Result.GetResult<Prisma.$LevelConfigPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LevelConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigCountArgs} args - Arguments to filter LevelConfigs to count.
     * @example
     * // Count the number of LevelConfigs
     * const count = await prisma.levelConfig.count({
     *   where: {
     *     // ... the filter for the LevelConfigs we want to count
     *   }
     * })
    **/
    count<T extends LevelConfigCountArgs>(
      args?: Subset<T, LevelConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LevelConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelConfigAggregateArgs>(args: Subset<T, LevelConfigAggregateArgs>): Prisma.PrismaPromise<GetLevelConfigAggregateType<T>>

    /**
     * Group by LevelConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelConfigGroupByArgs} args - Group by arguments.
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
      T extends LevelConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelConfigGroupByArgs['orderBy'] }
        : { orderBy?: LevelConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LevelConfig model
   */
  readonly fields: LevelConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LevelConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    guild<T extends GuildSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildSettingDefaultArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the LevelConfig model
   */ 
  interface LevelConfigFieldRefs {
    readonly id: FieldRef<"LevelConfig", 'Int'>
    readonly guildId: FieldRef<"LevelConfig", 'String'>
    readonly level: FieldRef<"LevelConfig", 'Int'>
    readonly requiredXp: FieldRef<"LevelConfig", 'Int'>
    readonly rewardRoleId: FieldRef<"LevelConfig", 'String'>
    readonly rewardItemId: FieldRef<"LevelConfig", 'Int'>
    readonly createdAt: FieldRef<"LevelConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"LevelConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LevelConfig findUnique
   */
  export type LevelConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfig to fetch.
     */
    where: LevelConfigWhereUniqueInput
  }

  /**
   * LevelConfig findUniqueOrThrow
   */
  export type LevelConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfig to fetch.
     */
    where: LevelConfigWhereUniqueInput
  }

  /**
   * LevelConfig findFirst
   */
  export type LevelConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfig to fetch.
     */
    where?: LevelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelConfigs to fetch.
     */
    orderBy?: LevelConfigOrderByWithRelationInput | LevelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelConfigs.
     */
    cursor?: LevelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelConfigs.
     */
    distinct?: LevelConfigScalarFieldEnum | LevelConfigScalarFieldEnum[]
  }

  /**
   * LevelConfig findFirstOrThrow
   */
  export type LevelConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfig to fetch.
     */
    where?: LevelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelConfigs to fetch.
     */
    orderBy?: LevelConfigOrderByWithRelationInput | LevelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelConfigs.
     */
    cursor?: LevelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelConfigs.
     */
    distinct?: LevelConfigScalarFieldEnum | LevelConfigScalarFieldEnum[]
  }

  /**
   * LevelConfig findMany
   */
  export type LevelConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter, which LevelConfigs to fetch.
     */
    where?: LevelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelConfigs to fetch.
     */
    orderBy?: LevelConfigOrderByWithRelationInput | LevelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LevelConfigs.
     */
    cursor?: LevelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelConfigs.
     */
    skip?: number
    distinct?: LevelConfigScalarFieldEnum | LevelConfigScalarFieldEnum[]
  }

  /**
   * LevelConfig create
   */
  export type LevelConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a LevelConfig.
     */
    data: XOR<LevelConfigCreateInput, LevelConfigUncheckedCreateInput>
  }

  /**
   * LevelConfig createMany
   */
  export type LevelConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LevelConfigs.
     */
    data: LevelConfigCreateManyInput | LevelConfigCreateManyInput[]
  }

  /**
   * LevelConfig createManyAndReturn
   */
  export type LevelConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LevelConfigs.
     */
    data: LevelConfigCreateManyInput | LevelConfigCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LevelConfig update
   */
  export type LevelConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a LevelConfig.
     */
    data: XOR<LevelConfigUpdateInput, LevelConfigUncheckedUpdateInput>
    /**
     * Choose, which LevelConfig to update.
     */
    where: LevelConfigWhereUniqueInput
  }

  /**
   * LevelConfig updateMany
   */
  export type LevelConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LevelConfigs.
     */
    data: XOR<LevelConfigUpdateManyMutationInput, LevelConfigUncheckedUpdateManyInput>
    /**
     * Filter which LevelConfigs to update
     */
    where?: LevelConfigWhereInput
  }

  /**
   * LevelConfig upsert
   */
  export type LevelConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the LevelConfig to update in case it exists.
     */
    where: LevelConfigWhereUniqueInput
    /**
     * In case the LevelConfig found by the `where` argument doesn't exist, create a new LevelConfig with this data.
     */
    create: XOR<LevelConfigCreateInput, LevelConfigUncheckedCreateInput>
    /**
     * In case the LevelConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelConfigUpdateInput, LevelConfigUncheckedUpdateInput>
  }

  /**
   * LevelConfig delete
   */
  export type LevelConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
    /**
     * Filter which LevelConfig to delete.
     */
    where: LevelConfigWhereUniqueInput
  }

  /**
   * LevelConfig deleteMany
   */
  export type LevelConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelConfigs to delete
     */
    where?: LevelConfigWhereInput
  }

  /**
   * LevelConfig without action
   */
  export type LevelConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelConfig
     */
    select?: LevelConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelConfigInclude<ExtArgs> | null
  }


  /**
   * Model EconomyTransaction
   */

  export type AggregateEconomyTransaction = {
    _count: EconomyTransactionCountAggregateOutputType | null
    _avg: EconomyTransactionAvgAggregateOutputType | null
    _sum: EconomyTransactionSumAggregateOutputType | null
    _min: EconomyTransactionMinAggregateOutputType | null
    _max: EconomyTransactionMaxAggregateOutputType | null
  }

  export type EconomyTransactionAvgAggregateOutputType = {
    id: number | null
    profileId: number | null
    amount: number | null
  }

  export type EconomyTransactionSumAggregateOutputType = {
    id: number | null
    profileId: number | null
    amount: number | null
  }

  export type EconomyTransactionMinAggregateOutputType = {
    id: number | null
    profileId: number | null
    guildId: string | null
    amount: number | null
    type: string | null
    description: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type EconomyTransactionMaxAggregateOutputType = {
    id: number | null
    profileId: number | null
    guildId: string | null
    amount: number | null
    type: string | null
    description: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type EconomyTransactionCountAggregateOutputType = {
    id: number
    profileId: number
    guildId: number
    amount: number
    type: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type EconomyTransactionAvgAggregateInputType = {
    id?: true
    profileId?: true
    amount?: true
  }

  export type EconomyTransactionSumAggregateInputType = {
    id?: true
    profileId?: true
    amount?: true
  }

  export type EconomyTransactionMinAggregateInputType = {
    id?: true
    profileId?: true
    guildId?: true
    amount?: true
    type?: true
    description?: true
    metadata?: true
    createdAt?: true
  }

  export type EconomyTransactionMaxAggregateInputType = {
    id?: true
    profileId?: true
    guildId?: true
    amount?: true
    type?: true
    description?: true
    metadata?: true
    createdAt?: true
  }

  export type EconomyTransactionCountAggregateInputType = {
    id?: true
    profileId?: true
    guildId?: true
    amount?: true
    type?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type EconomyTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EconomyTransaction to aggregate.
     */
    where?: EconomyTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyTransactions to fetch.
     */
    orderBy?: EconomyTransactionOrderByWithRelationInput | EconomyTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EconomyTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EconomyTransactions
    **/
    _count?: true | EconomyTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EconomyTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EconomyTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EconomyTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EconomyTransactionMaxAggregateInputType
  }

  export type GetEconomyTransactionAggregateType<T extends EconomyTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateEconomyTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEconomyTransaction[P]>
      : GetScalarType<T[P], AggregateEconomyTransaction[P]>
  }




  export type EconomyTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EconomyTransactionWhereInput
    orderBy?: EconomyTransactionOrderByWithAggregationInput | EconomyTransactionOrderByWithAggregationInput[]
    by: EconomyTransactionScalarFieldEnum[] | EconomyTransactionScalarFieldEnum
    having?: EconomyTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EconomyTransactionCountAggregateInputType | true
    _avg?: EconomyTransactionAvgAggregateInputType
    _sum?: EconomyTransactionSumAggregateInputType
    _min?: EconomyTransactionMinAggregateInputType
    _max?: EconomyTransactionMaxAggregateInputType
  }

  export type EconomyTransactionGroupByOutputType = {
    id: number
    profileId: number
    guildId: string
    amount: number
    type: string
    description: string | null
    metadata: string | null
    createdAt: Date
    _count: EconomyTransactionCountAggregateOutputType | null
    _avg: EconomyTransactionAvgAggregateOutputType | null
    _sum: EconomyTransactionSumAggregateOutputType | null
    _min: EconomyTransactionMinAggregateOutputType | null
    _max: EconomyTransactionMaxAggregateOutputType | null
  }

  type GetEconomyTransactionGroupByPayload<T extends EconomyTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EconomyTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EconomyTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EconomyTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], EconomyTransactionGroupByOutputType[P]>
        }
      >
    >


  export type EconomyTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    guildId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["economyTransaction"]>

  export type EconomyTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    guildId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["economyTransaction"]>

  export type EconomyTransactionSelectScalar = {
    id?: boolean
    profileId?: boolean
    guildId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type EconomyTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type EconomyTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $EconomyTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EconomyTransaction"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profileId: number
      guildId: string
      amount: number
      type: string
      description: string | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["economyTransaction"]>
    composites: {}
  }

  type EconomyTransactionGetPayload<S extends boolean | null | undefined | EconomyTransactionDefaultArgs> = $Result.GetResult<Prisma.$EconomyTransactionPayload, S>

  type EconomyTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EconomyTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EconomyTransactionCountAggregateInputType | true
    }

  export interface EconomyTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EconomyTransaction'], meta: { name: 'EconomyTransaction' } }
    /**
     * Find zero or one EconomyTransaction that matches the filter.
     * @param {EconomyTransactionFindUniqueArgs} args - Arguments to find a EconomyTransaction
     * @example
     * // Get one EconomyTransaction
     * const economyTransaction = await prisma.economyTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EconomyTransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EconomyTransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__EconomyTransactionClient<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EconomyTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EconomyTransactionFindUniqueOrThrowArgs} args - Arguments to find a EconomyTransaction
     * @example
     * // Get one EconomyTransaction
     * const economyTransaction = await prisma.economyTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EconomyTransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EconomyTransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EconomyTransactionClient<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EconomyTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyTransactionFindFirstArgs} args - Arguments to find a EconomyTransaction
     * @example
     * // Get one EconomyTransaction
     * const economyTransaction = await prisma.economyTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EconomyTransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EconomyTransactionFindFirstArgs<ExtArgs>>
    ): Prisma__EconomyTransactionClient<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EconomyTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyTransactionFindFirstOrThrowArgs} args - Arguments to find a EconomyTransaction
     * @example
     * // Get one EconomyTransaction
     * const economyTransaction = await prisma.economyTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EconomyTransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EconomyTransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EconomyTransactionClient<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EconomyTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EconomyTransactions
     * const economyTransactions = await prisma.economyTransaction.findMany()
     * 
     * // Get first 10 EconomyTransactions
     * const economyTransactions = await prisma.economyTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const economyTransactionWithIdOnly = await prisma.economyTransaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EconomyTransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EconomyTransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EconomyTransaction.
     * @param {EconomyTransactionCreateArgs} args - Arguments to create a EconomyTransaction.
     * @example
     * // Create one EconomyTransaction
     * const EconomyTransaction = await prisma.economyTransaction.create({
     *   data: {
     *     // ... data to create a EconomyTransaction
     *   }
     * })
     * 
    **/
    create<T extends EconomyTransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EconomyTransactionCreateArgs<ExtArgs>>
    ): Prisma__EconomyTransactionClient<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EconomyTransactions.
     * @param {EconomyTransactionCreateManyArgs} args - Arguments to create many EconomyTransactions.
     * @example
     * // Create many EconomyTransactions
     * const economyTransaction = await prisma.economyTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends EconomyTransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EconomyTransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EconomyTransactions and returns the data saved in the database.
     * @param {EconomyTransactionCreateManyAndReturnArgs} args - Arguments to create many EconomyTransactions.
     * @example
     * // Create many EconomyTransactions
     * const economyTransaction = await prisma.economyTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EconomyTransactions and only return the `id`
     * const economyTransactionWithIdOnly = await prisma.economyTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends EconomyTransactionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EconomyTransactionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a EconomyTransaction.
     * @param {EconomyTransactionDeleteArgs} args - Arguments to delete one EconomyTransaction.
     * @example
     * // Delete one EconomyTransaction
     * const EconomyTransaction = await prisma.economyTransaction.delete({
     *   where: {
     *     // ... filter to delete one EconomyTransaction
     *   }
     * })
     * 
    **/
    delete<T extends EconomyTransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EconomyTransactionDeleteArgs<ExtArgs>>
    ): Prisma__EconomyTransactionClient<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EconomyTransaction.
     * @param {EconomyTransactionUpdateArgs} args - Arguments to update one EconomyTransaction.
     * @example
     * // Update one EconomyTransaction
     * const economyTransaction = await prisma.economyTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EconomyTransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EconomyTransactionUpdateArgs<ExtArgs>>
    ): Prisma__EconomyTransactionClient<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EconomyTransactions.
     * @param {EconomyTransactionDeleteManyArgs} args - Arguments to filter EconomyTransactions to delete.
     * @example
     * // Delete a few EconomyTransactions
     * const { count } = await prisma.economyTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EconomyTransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EconomyTransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EconomyTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EconomyTransactions
     * const economyTransaction = await prisma.economyTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EconomyTransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EconomyTransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EconomyTransaction.
     * @param {EconomyTransactionUpsertArgs} args - Arguments to update or create a EconomyTransaction.
     * @example
     * // Update or create a EconomyTransaction
     * const economyTransaction = await prisma.economyTransaction.upsert({
     *   create: {
     *     // ... data to create a EconomyTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EconomyTransaction we want to update
     *   }
     * })
    **/
    upsert<T extends EconomyTransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EconomyTransactionUpsertArgs<ExtArgs>>
    ): Prisma__EconomyTransactionClient<$Result.GetResult<Prisma.$EconomyTransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EconomyTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyTransactionCountArgs} args - Arguments to filter EconomyTransactions to count.
     * @example
     * // Count the number of EconomyTransactions
     * const count = await prisma.economyTransaction.count({
     *   where: {
     *     // ... the filter for the EconomyTransactions we want to count
     *   }
     * })
    **/
    count<T extends EconomyTransactionCountArgs>(
      args?: Subset<T, EconomyTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EconomyTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EconomyTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EconomyTransactionAggregateArgs>(args: Subset<T, EconomyTransactionAggregateArgs>): Prisma.PrismaPromise<GetEconomyTransactionAggregateType<T>>

    /**
     * Group by EconomyTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyTransactionGroupByArgs} args - Group by arguments.
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
      T extends EconomyTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EconomyTransactionGroupByArgs['orderBy'] }
        : { orderBy?: EconomyTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EconomyTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEconomyTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EconomyTransaction model
   */
  readonly fields: EconomyTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EconomyTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EconomyTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the EconomyTransaction model
   */ 
  interface EconomyTransactionFieldRefs {
    readonly id: FieldRef<"EconomyTransaction", 'Int'>
    readonly profileId: FieldRef<"EconomyTransaction", 'Int'>
    readonly guildId: FieldRef<"EconomyTransaction", 'String'>
    readonly amount: FieldRef<"EconomyTransaction", 'Int'>
    readonly type: FieldRef<"EconomyTransaction", 'String'>
    readonly description: FieldRef<"EconomyTransaction", 'String'>
    readonly metadata: FieldRef<"EconomyTransaction", 'String'>
    readonly createdAt: FieldRef<"EconomyTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EconomyTransaction findUnique
   */
  export type EconomyTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EconomyTransaction to fetch.
     */
    where: EconomyTransactionWhereUniqueInput
  }

  /**
   * EconomyTransaction findUniqueOrThrow
   */
  export type EconomyTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EconomyTransaction to fetch.
     */
    where: EconomyTransactionWhereUniqueInput
  }

  /**
   * EconomyTransaction findFirst
   */
  export type EconomyTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EconomyTransaction to fetch.
     */
    where?: EconomyTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyTransactions to fetch.
     */
    orderBy?: EconomyTransactionOrderByWithRelationInput | EconomyTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EconomyTransactions.
     */
    cursor?: EconomyTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyTransactions.
     */
    distinct?: EconomyTransactionScalarFieldEnum | EconomyTransactionScalarFieldEnum[]
  }

  /**
   * EconomyTransaction findFirstOrThrow
   */
  export type EconomyTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EconomyTransaction to fetch.
     */
    where?: EconomyTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyTransactions to fetch.
     */
    orderBy?: EconomyTransactionOrderByWithRelationInput | EconomyTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EconomyTransactions.
     */
    cursor?: EconomyTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyTransactions.
     */
    distinct?: EconomyTransactionScalarFieldEnum | EconomyTransactionScalarFieldEnum[]
  }

  /**
   * EconomyTransaction findMany
   */
  export type EconomyTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EconomyTransactions to fetch.
     */
    where?: EconomyTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyTransactions to fetch.
     */
    orderBy?: EconomyTransactionOrderByWithRelationInput | EconomyTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EconomyTransactions.
     */
    cursor?: EconomyTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyTransactions.
     */
    skip?: number
    distinct?: EconomyTransactionScalarFieldEnum | EconomyTransactionScalarFieldEnum[]
  }

  /**
   * EconomyTransaction create
   */
  export type EconomyTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a EconomyTransaction.
     */
    data: XOR<EconomyTransactionCreateInput, EconomyTransactionUncheckedCreateInput>
  }

  /**
   * EconomyTransaction createMany
   */
  export type EconomyTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EconomyTransactions.
     */
    data: EconomyTransactionCreateManyInput | EconomyTransactionCreateManyInput[]
  }

  /**
   * EconomyTransaction createManyAndReturn
   */
  export type EconomyTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EconomyTransactions.
     */
    data: EconomyTransactionCreateManyInput | EconomyTransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EconomyTransaction update
   */
  export type EconomyTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a EconomyTransaction.
     */
    data: XOR<EconomyTransactionUpdateInput, EconomyTransactionUncheckedUpdateInput>
    /**
     * Choose, which EconomyTransaction to update.
     */
    where: EconomyTransactionWhereUniqueInput
  }

  /**
   * EconomyTransaction updateMany
   */
  export type EconomyTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EconomyTransactions.
     */
    data: XOR<EconomyTransactionUpdateManyMutationInput, EconomyTransactionUncheckedUpdateManyInput>
    /**
     * Filter which EconomyTransactions to update
     */
    where?: EconomyTransactionWhereInput
  }

  /**
   * EconomyTransaction upsert
   */
  export type EconomyTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the EconomyTransaction to update in case it exists.
     */
    where: EconomyTransactionWhereUniqueInput
    /**
     * In case the EconomyTransaction found by the `where` argument doesn't exist, create a new EconomyTransaction with this data.
     */
    create: XOR<EconomyTransactionCreateInput, EconomyTransactionUncheckedCreateInput>
    /**
     * In case the EconomyTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EconomyTransactionUpdateInput, EconomyTransactionUncheckedUpdateInput>
  }

  /**
   * EconomyTransaction delete
   */
  export type EconomyTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
    /**
     * Filter which EconomyTransaction to delete.
     */
    where: EconomyTransactionWhereUniqueInput
  }

  /**
   * EconomyTransaction deleteMany
   */
  export type EconomyTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EconomyTransactions to delete
     */
    where?: EconomyTransactionWhereInput
  }

  /**
   * EconomyTransaction without action
   */
  export type EconomyTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyTransaction
     */
    select?: EconomyTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyTransactionInclude<ExtArgs> | null
  }


  /**
   * Model StoreItem
   */

  export type AggregateStoreItem = {
    _count: StoreItemCountAggregateOutputType | null
    _avg: StoreItemAvgAggregateOutputType | null
    _sum: StoreItemSumAggregateOutputType | null
    _min: StoreItemMinAggregateOutputType | null
    _max: StoreItemMaxAggregateOutputType | null
  }

  export type StoreItemAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type StoreItemSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type StoreItemMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    name: string | null
    description: string | null
    price: number | null
    isActive: boolean | null
    payload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreItemMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    name: string | null
    description: string | null
    price: number | null
    isActive: boolean | null
    payload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreItemCountAggregateOutputType = {
    id: number
    guildId: number
    name: number
    description: number
    price: number
    isActive: number
    payload: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreItemAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type StoreItemSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type StoreItemMinAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    payload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreItemMaxAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    payload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreItemCountAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    payload?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreItem to aggregate.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreItems
    **/
    _count?: true | StoreItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreItemMaxAggregateInputType
  }

  export type GetStoreItemAggregateType<T extends StoreItemAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreItem[P]>
      : GetScalarType<T[P], AggregateStoreItem[P]>
  }




  export type StoreItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreItemWhereInput
    orderBy?: StoreItemOrderByWithAggregationInput | StoreItemOrderByWithAggregationInput[]
    by: StoreItemScalarFieldEnum[] | StoreItemScalarFieldEnum
    having?: StoreItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreItemCountAggregateInputType | true
    _avg?: StoreItemAvgAggregateInputType
    _sum?: StoreItemSumAggregateInputType
    _min?: StoreItemMinAggregateInputType
    _max?: StoreItemMaxAggregateInputType
  }

  export type StoreItemGroupByOutputType = {
    id: number
    guildId: string
    name: string
    description: string | null
    price: number
    isActive: boolean
    payload: string | null
    createdAt: Date
    updatedAt: Date
    _count: StoreItemCountAggregateOutputType | null
    _avg: StoreItemAvgAggregateOutputType | null
    _sum: StoreItemSumAggregateOutputType | null
    _min: StoreItemMinAggregateOutputType | null
    _max: StoreItemMaxAggregateOutputType | null
  }

  type GetStoreItemGroupByPayload<T extends StoreItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreItemGroupByOutputType[P]>
            : GetScalarType<T[P], StoreItemGroupByOutputType[P]>
        }
      >
    >


  export type StoreItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    payload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeItem"]>

  export type StoreItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    payload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeItem"]>

  export type StoreItemSelectScalar = {
    id?: boolean
    guildId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    payload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }
  export type StoreItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }

  export type $StoreItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreItem"
    objects: {
      guild: Prisma.$GuildSettingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      name: string
      description: string | null
      price: number
      isActive: boolean
      payload: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storeItem"]>
    composites: {}
  }

  type StoreItemGetPayload<S extends boolean | null | undefined | StoreItemDefaultArgs> = $Result.GetResult<Prisma.$StoreItemPayload, S>

  type StoreItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreItemCountAggregateInputType | true
    }

  export interface StoreItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreItem'], meta: { name: 'StoreItem' } }
    /**
     * Find zero or one StoreItem that matches the filter.
     * @param {StoreItemFindUniqueArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoreItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StoreItemFindUniqueArgs<ExtArgs>>
    ): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StoreItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreItemFindUniqueOrThrowArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoreItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StoreItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemFindFirstArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoreItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreItemFindFirstArgs<ExtArgs>>
    ): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StoreItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemFindFirstOrThrowArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoreItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StoreItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreItems
     * const storeItems = await prisma.storeItem.findMany()
     * 
     * // Get first 10 StoreItems
     * const storeItems = await prisma.storeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeItemWithIdOnly = await prisma.storeItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StoreItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StoreItem.
     * @param {StoreItemCreateArgs} args - Arguments to create a StoreItem.
     * @example
     * // Create one StoreItem
     * const StoreItem = await prisma.storeItem.create({
     *   data: {
     *     // ... data to create a StoreItem
     *   }
     * })
     * 
    **/
    create<T extends StoreItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreItemCreateArgs<ExtArgs>>
    ): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StoreItems.
     * @param {StoreItemCreateManyArgs} args - Arguments to create many StoreItems.
     * @example
     * // Create many StoreItems
     * const storeItem = await prisma.storeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends StoreItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreItems and returns the data saved in the database.
     * @param {StoreItemCreateManyAndReturnArgs} args - Arguments to create many StoreItems.
     * @example
     * // Create many StoreItems
     * const storeItem = await prisma.storeItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreItems and only return the `id`
     * const storeItemWithIdOnly = await prisma.storeItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends StoreItemCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreItemCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a StoreItem.
     * @param {StoreItemDeleteArgs} args - Arguments to delete one StoreItem.
     * @example
     * // Delete one StoreItem
     * const StoreItem = await prisma.storeItem.delete({
     *   where: {
     *     // ... filter to delete one StoreItem
     *   }
     * })
     * 
    **/
    delete<T extends StoreItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StoreItemDeleteArgs<ExtArgs>>
    ): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StoreItem.
     * @param {StoreItemUpdateArgs} args - Arguments to update one StoreItem.
     * @example
     * // Update one StoreItem
     * const storeItem = await prisma.storeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoreItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreItemUpdateArgs<ExtArgs>>
    ): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StoreItems.
     * @param {StoreItemDeleteManyArgs} args - Arguments to filter StoreItems to delete.
     * @example
     * // Delete a few StoreItems
     * const { count } = await prisma.storeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoreItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreItems
     * const storeItem = await prisma.storeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoreItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StoreItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreItem.
     * @param {StoreItemUpsertArgs} args - Arguments to update or create a StoreItem.
     * @example
     * // Update or create a StoreItem
     * const storeItem = await prisma.storeItem.upsert({
     *   create: {
     *     // ... data to create a StoreItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreItem we want to update
     *   }
     * })
    **/
    upsert<T extends StoreItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StoreItemUpsertArgs<ExtArgs>>
    ): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StoreItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemCountArgs} args - Arguments to filter StoreItems to count.
     * @example
     * // Count the number of StoreItems
     * const count = await prisma.storeItem.count({
     *   where: {
     *     // ... the filter for the StoreItems we want to count
     *   }
     * })
    **/
    count<T extends StoreItemCountArgs>(
      args?: Subset<T, StoreItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreItemAggregateArgs>(args: Subset<T, StoreItemAggregateArgs>): Prisma.PrismaPromise<GetStoreItemAggregateType<T>>

    /**
     * Group by StoreItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemGroupByArgs} args - Group by arguments.
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
      T extends StoreItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreItemGroupByArgs['orderBy'] }
        : { orderBy?: StoreItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreItem model
   */
  readonly fields: StoreItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    guild<T extends GuildSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildSettingDefaultArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the StoreItem model
   */ 
  interface StoreItemFieldRefs {
    readonly id: FieldRef<"StoreItem", 'Int'>
    readonly guildId: FieldRef<"StoreItem", 'String'>
    readonly name: FieldRef<"StoreItem", 'String'>
    readonly description: FieldRef<"StoreItem", 'String'>
    readonly price: FieldRef<"StoreItem", 'Int'>
    readonly isActive: FieldRef<"StoreItem", 'Boolean'>
    readonly payload: FieldRef<"StoreItem", 'String'>
    readonly createdAt: FieldRef<"StoreItem", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreItem findUnique
   */
  export type StoreItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem findUniqueOrThrow
   */
  export type StoreItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem findFirst
   */
  export type StoreItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreItems.
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreItems.
     */
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * StoreItem findFirstOrThrow
   */
  export type StoreItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreItems.
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreItems.
     */
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * StoreItem findMany
   */
  export type StoreItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItems to fetch.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreItems.
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * StoreItem create
   */
  export type StoreItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreItem.
     */
    data: XOR<StoreItemCreateInput, StoreItemUncheckedCreateInput>
  }

  /**
   * StoreItem createMany
   */
  export type StoreItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreItems.
     */
    data: StoreItemCreateManyInput | StoreItemCreateManyInput[]
  }

  /**
   * StoreItem createManyAndReturn
   */
  export type StoreItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StoreItems.
     */
    data: StoreItemCreateManyInput | StoreItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreItem update
   */
  export type StoreItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreItem.
     */
    data: XOR<StoreItemUpdateInput, StoreItemUncheckedUpdateInput>
    /**
     * Choose, which StoreItem to update.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem updateMany
   */
  export type StoreItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreItems.
     */
    data: XOR<StoreItemUpdateManyMutationInput, StoreItemUncheckedUpdateManyInput>
    /**
     * Filter which StoreItems to update
     */
    where?: StoreItemWhereInput
  }

  /**
   * StoreItem upsert
   */
  export type StoreItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreItem to update in case it exists.
     */
    where: StoreItemWhereUniqueInput
    /**
     * In case the StoreItem found by the `where` argument doesn't exist, create a new StoreItem with this data.
     */
    create: XOR<StoreItemCreateInput, StoreItemUncheckedCreateInput>
    /**
     * In case the StoreItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreItemUpdateInput, StoreItemUncheckedUpdateInput>
  }

  /**
   * StoreItem delete
   */
  export type StoreItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter which StoreItem to delete.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem deleteMany
   */
  export type StoreItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreItems to delete
     */
    where?: StoreItemWhereInput
  }

  /**
   * StoreItem without action
   */
  export type StoreItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
  }


  /**
   * Model ModerationAction
   */

  export type AggregateModerationAction = {
    _count: ModerationActionCountAggregateOutputType | null
    _avg: ModerationActionAvgAggregateOutputType | null
    _sum: ModerationActionSumAggregateOutputType | null
    _min: ModerationActionMinAggregateOutputType | null
    _max: ModerationActionMaxAggregateOutputType | null
  }

  export type ModerationActionAvgAggregateOutputType = {
    id: number | null
    durationMinutes: number | null
  }

  export type ModerationActionSumAggregateOutputType = {
    id: number | null
    durationMinutes: number | null
  }

  export type ModerationActionMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    moderatorId: string | null
    type: string | null
    reason: string | null
    durationMinutes: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ModerationActionMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    userId: string | null
    moderatorId: string | null
    type: string | null
    reason: string | null
    durationMinutes: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ModerationActionCountAggregateOutputType = {
    id: number
    guildId: number
    userId: number
    moderatorId: number
    type: number
    reason: number
    durationMinutes: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type ModerationActionAvgAggregateInputType = {
    id?: true
    durationMinutes?: true
  }

  export type ModerationActionSumAggregateInputType = {
    id?: true
    durationMinutes?: true
  }

  export type ModerationActionMinAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    moderatorId?: true
    type?: true
    reason?: true
    durationMinutes?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ModerationActionMaxAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    moderatorId?: true
    type?: true
    reason?: true
    durationMinutes?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ModerationActionCountAggregateInputType = {
    id?: true
    guildId?: true
    userId?: true
    moderatorId?: true
    type?: true
    reason?: true
    durationMinutes?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type ModerationActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModerationAction to aggregate.
     */
    where?: ModerationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModerationActions to fetch.
     */
    orderBy?: ModerationActionOrderByWithRelationInput | ModerationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModerationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModerationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModerationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModerationActions
    **/
    _count?: true | ModerationActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModerationActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModerationActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModerationActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModerationActionMaxAggregateInputType
  }

  export type GetModerationActionAggregateType<T extends ModerationActionAggregateArgs> = {
        [P in keyof T & keyof AggregateModerationAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModerationAction[P]>
      : GetScalarType<T[P], AggregateModerationAction[P]>
  }




  export type ModerationActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModerationActionWhereInput
    orderBy?: ModerationActionOrderByWithAggregationInput | ModerationActionOrderByWithAggregationInput[]
    by: ModerationActionScalarFieldEnum[] | ModerationActionScalarFieldEnum
    having?: ModerationActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModerationActionCountAggregateInputType | true
    _avg?: ModerationActionAvgAggregateInputType
    _sum?: ModerationActionSumAggregateInputType
    _min?: ModerationActionMinAggregateInputType
    _max?: ModerationActionMaxAggregateInputType
  }

  export type ModerationActionGroupByOutputType = {
    id: number
    guildId: string
    userId: string
    moderatorId: string
    type: string
    reason: string | null
    durationMinutes: number | null
    expiresAt: Date | null
    createdAt: Date
    _count: ModerationActionCountAggregateOutputType | null
    _avg: ModerationActionAvgAggregateOutputType | null
    _sum: ModerationActionSumAggregateOutputType | null
    _min: ModerationActionMinAggregateOutputType | null
    _max: ModerationActionMaxAggregateOutputType | null
  }

  type GetModerationActionGroupByPayload<T extends ModerationActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModerationActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModerationActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModerationActionGroupByOutputType[P]>
            : GetScalarType<T[P], ModerationActionGroupByOutputType[P]>
        }
      >
    >


  export type ModerationActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    durationMinutes?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderationAction"]>

  export type ModerationActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    durationMinutes?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderationAction"]>

  export type ModerationActionSelectScalar = {
    id?: boolean
    guildId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    durationMinutes?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type ModerationActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }
  export type ModerationActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }

  export type $ModerationActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModerationAction"
    objects: {
      guild: Prisma.$GuildSettingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      userId: string
      moderatorId: string
      type: string
      reason: string | null
      durationMinutes: number | null
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["moderationAction"]>
    composites: {}
  }

  type ModerationActionGetPayload<S extends boolean | null | undefined | ModerationActionDefaultArgs> = $Result.GetResult<Prisma.$ModerationActionPayload, S>

  type ModerationActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModerationActionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModerationActionCountAggregateInputType | true
    }

  export interface ModerationActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModerationAction'], meta: { name: 'ModerationAction' } }
    /**
     * Find zero or one ModerationAction that matches the filter.
     * @param {ModerationActionFindUniqueArgs} args - Arguments to find a ModerationAction
     * @example
     * // Get one ModerationAction
     * const moderationAction = await prisma.moderationAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModerationActionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModerationActionFindUniqueArgs<ExtArgs>>
    ): Prisma__ModerationActionClient<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ModerationAction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModerationActionFindUniqueOrThrowArgs} args - Arguments to find a ModerationAction
     * @example
     * // Get one ModerationAction
     * const moderationAction = await prisma.moderationAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModerationActionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModerationActionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModerationActionClient<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ModerationAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationActionFindFirstArgs} args - Arguments to find a ModerationAction
     * @example
     * // Get one ModerationAction
     * const moderationAction = await prisma.moderationAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModerationActionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModerationActionFindFirstArgs<ExtArgs>>
    ): Prisma__ModerationActionClient<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ModerationAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationActionFindFirstOrThrowArgs} args - Arguments to find a ModerationAction
     * @example
     * // Get one ModerationAction
     * const moderationAction = await prisma.moderationAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModerationActionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModerationActionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModerationActionClient<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ModerationActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModerationActions
     * const moderationActions = await prisma.moderationAction.findMany()
     * 
     * // Get first 10 ModerationActions
     * const moderationActions = await prisma.moderationAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moderationActionWithIdOnly = await prisma.moderationAction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModerationActionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModerationActionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ModerationAction.
     * @param {ModerationActionCreateArgs} args - Arguments to create a ModerationAction.
     * @example
     * // Create one ModerationAction
     * const ModerationAction = await prisma.moderationAction.create({
     *   data: {
     *     // ... data to create a ModerationAction
     *   }
     * })
     * 
    **/
    create<T extends ModerationActionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModerationActionCreateArgs<ExtArgs>>
    ): Prisma__ModerationActionClient<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ModerationActions.
     * @param {ModerationActionCreateManyArgs} args - Arguments to create many ModerationActions.
     * @example
     * // Create many ModerationActions
     * const moderationAction = await prisma.moderationAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ModerationActionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModerationActionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModerationActions and returns the data saved in the database.
     * @param {ModerationActionCreateManyAndReturnArgs} args - Arguments to create many ModerationActions.
     * @example
     * // Create many ModerationActions
     * const moderationAction = await prisma.moderationAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModerationActions and only return the `id`
     * const moderationActionWithIdOnly = await prisma.moderationAction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ModerationActionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ModerationActionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ModerationAction.
     * @param {ModerationActionDeleteArgs} args - Arguments to delete one ModerationAction.
     * @example
     * // Delete one ModerationAction
     * const ModerationAction = await prisma.moderationAction.delete({
     *   where: {
     *     // ... filter to delete one ModerationAction
     *   }
     * })
     * 
    **/
    delete<T extends ModerationActionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModerationActionDeleteArgs<ExtArgs>>
    ): Prisma__ModerationActionClient<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ModerationAction.
     * @param {ModerationActionUpdateArgs} args - Arguments to update one ModerationAction.
     * @example
     * // Update one ModerationAction
     * const moderationAction = await prisma.moderationAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModerationActionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModerationActionUpdateArgs<ExtArgs>>
    ): Prisma__ModerationActionClient<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ModerationActions.
     * @param {ModerationActionDeleteManyArgs} args - Arguments to filter ModerationActions to delete.
     * @example
     * // Delete a few ModerationActions
     * const { count } = await prisma.moderationAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModerationActionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModerationActionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModerationActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModerationActions
     * const moderationAction = await prisma.moderationAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModerationActionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModerationActionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModerationAction.
     * @param {ModerationActionUpsertArgs} args - Arguments to update or create a ModerationAction.
     * @example
     * // Update or create a ModerationAction
     * const moderationAction = await prisma.moderationAction.upsert({
     *   create: {
     *     // ... data to create a ModerationAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModerationAction we want to update
     *   }
     * })
    **/
    upsert<T extends ModerationActionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModerationActionUpsertArgs<ExtArgs>>
    ): Prisma__ModerationActionClient<$Result.GetResult<Prisma.$ModerationActionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ModerationActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationActionCountArgs} args - Arguments to filter ModerationActions to count.
     * @example
     * // Count the number of ModerationActions
     * const count = await prisma.moderationAction.count({
     *   where: {
     *     // ... the filter for the ModerationActions we want to count
     *   }
     * })
    **/
    count<T extends ModerationActionCountArgs>(
      args?: Subset<T, ModerationActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModerationActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModerationAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModerationActionAggregateArgs>(args: Subset<T, ModerationActionAggregateArgs>): Prisma.PrismaPromise<GetModerationActionAggregateType<T>>

    /**
     * Group by ModerationAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModerationActionGroupByArgs} args - Group by arguments.
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
      T extends ModerationActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModerationActionGroupByArgs['orderBy'] }
        : { orderBy?: ModerationActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModerationActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModerationActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModerationAction model
   */
  readonly fields: ModerationActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModerationAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModerationActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    guild<T extends GuildSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildSettingDefaultArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ModerationAction model
   */ 
  interface ModerationActionFieldRefs {
    readonly id: FieldRef<"ModerationAction", 'Int'>
    readonly guildId: FieldRef<"ModerationAction", 'String'>
    readonly userId: FieldRef<"ModerationAction", 'String'>
    readonly moderatorId: FieldRef<"ModerationAction", 'String'>
    readonly type: FieldRef<"ModerationAction", 'String'>
    readonly reason: FieldRef<"ModerationAction", 'String'>
    readonly durationMinutes: FieldRef<"ModerationAction", 'Int'>
    readonly expiresAt: FieldRef<"ModerationAction", 'DateTime'>
    readonly createdAt: FieldRef<"ModerationAction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModerationAction findUnique
   */
  export type ModerationActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    /**
     * Filter, which ModerationAction to fetch.
     */
    where: ModerationActionWhereUniqueInput
  }

  /**
   * ModerationAction findUniqueOrThrow
   */
  export type ModerationActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    /**
     * Filter, which ModerationAction to fetch.
     */
    where: ModerationActionWhereUniqueInput
  }

  /**
   * ModerationAction findFirst
   */
  export type ModerationActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    /**
     * Filter, which ModerationAction to fetch.
     */
    where?: ModerationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModerationActions to fetch.
     */
    orderBy?: ModerationActionOrderByWithRelationInput | ModerationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModerationActions.
     */
    cursor?: ModerationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModerationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModerationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModerationActions.
     */
    distinct?: ModerationActionScalarFieldEnum | ModerationActionScalarFieldEnum[]
  }

  /**
   * ModerationAction findFirstOrThrow
   */
  export type ModerationActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    /**
     * Filter, which ModerationAction to fetch.
     */
    where?: ModerationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModerationActions to fetch.
     */
    orderBy?: ModerationActionOrderByWithRelationInput | ModerationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModerationActions.
     */
    cursor?: ModerationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModerationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModerationActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModerationActions.
     */
    distinct?: ModerationActionScalarFieldEnum | ModerationActionScalarFieldEnum[]
  }

  /**
   * ModerationAction findMany
   */
  export type ModerationActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    /**
     * Filter, which ModerationActions to fetch.
     */
    where?: ModerationActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModerationActions to fetch.
     */
    orderBy?: ModerationActionOrderByWithRelationInput | ModerationActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModerationActions.
     */
    cursor?: ModerationActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModerationActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModerationActions.
     */
    skip?: number
    distinct?: ModerationActionScalarFieldEnum | ModerationActionScalarFieldEnum[]
  }

  /**
   * ModerationAction create
   */
  export type ModerationActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    /**
     * The data needed to create a ModerationAction.
     */
    data: XOR<ModerationActionCreateInput, ModerationActionUncheckedCreateInput>
  }

  /**
   * ModerationAction createMany
   */
  export type ModerationActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModerationActions.
     */
    data: ModerationActionCreateManyInput | ModerationActionCreateManyInput[]
  }

  /**
   * ModerationAction createManyAndReturn
   */
  export type ModerationActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ModerationActions.
     */
    data: ModerationActionCreateManyInput | ModerationActionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModerationAction update
   */
  export type ModerationActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    /**
     * The data needed to update a ModerationAction.
     */
    data: XOR<ModerationActionUpdateInput, ModerationActionUncheckedUpdateInput>
    /**
     * Choose, which ModerationAction to update.
     */
    where: ModerationActionWhereUniqueInput
  }

  /**
   * ModerationAction updateMany
   */
  export type ModerationActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModerationActions.
     */
    data: XOR<ModerationActionUpdateManyMutationInput, ModerationActionUncheckedUpdateManyInput>
    /**
     * Filter which ModerationActions to update
     */
    where?: ModerationActionWhereInput
  }

  /**
   * ModerationAction upsert
   */
  export type ModerationActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    /**
     * The filter to search for the ModerationAction to update in case it exists.
     */
    where: ModerationActionWhereUniqueInput
    /**
     * In case the ModerationAction found by the `where` argument doesn't exist, create a new ModerationAction with this data.
     */
    create: XOR<ModerationActionCreateInput, ModerationActionUncheckedCreateInput>
    /**
     * In case the ModerationAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModerationActionUpdateInput, ModerationActionUncheckedUpdateInput>
  }

  /**
   * ModerationAction delete
   */
  export type ModerationActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
    /**
     * Filter which ModerationAction to delete.
     */
    where: ModerationActionWhereUniqueInput
  }

  /**
   * ModerationAction deleteMany
   */
  export type ModerationActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModerationActions to delete
     */
    where?: ModerationActionWhereInput
  }

  /**
   * ModerationAction without action
   */
  export type ModerationActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModerationAction
     */
    select?: ModerationActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModerationActionInclude<ExtArgs> | null
  }


  /**
   * Model AudioQueueItem
   */

  export type AggregateAudioQueueItem = {
    _count: AudioQueueItemCountAggregateOutputType | null
    _avg: AudioQueueItemAvgAggregateOutputType | null
    _sum: AudioQueueItemSumAggregateOutputType | null
    _min: AudioQueueItemMinAggregateOutputType | null
    _max: AudioQueueItemMaxAggregateOutputType | null
  }

  export type AudioQueueItemAvgAggregateOutputType = {
    id: number | null
    position: number | null
    durationSec: number | null
  }

  export type AudioQueueItemSumAggregateOutputType = {
    id: number | null
    position: number | null
    durationSec: number | null
  }

  export type AudioQueueItemMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    position: number | null
    title: string | null
    url: string | null
    thumbnail: string | null
    requestedBy: string | null
    durationSec: number | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AudioQueueItemMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    position: number | null
    title: string | null
    url: string | null
    thumbnail: string | null
    requestedBy: string | null
    durationSec: number | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AudioQueueItemCountAggregateOutputType = {
    id: number
    guildId: number
    position: number
    title: number
    url: number
    thumbnail: number
    requestedBy: number
    durationSec: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AudioQueueItemAvgAggregateInputType = {
    id?: true
    position?: true
    durationSec?: true
  }

  export type AudioQueueItemSumAggregateInputType = {
    id?: true
    position?: true
    durationSec?: true
  }

  export type AudioQueueItemMinAggregateInputType = {
    id?: true
    guildId?: true
    position?: true
    title?: true
    url?: true
    thumbnail?: true
    requestedBy?: true
    durationSec?: true
    metadata?: true
    createdAt?: true
  }

  export type AudioQueueItemMaxAggregateInputType = {
    id?: true
    guildId?: true
    position?: true
    title?: true
    url?: true
    thumbnail?: true
    requestedBy?: true
    durationSec?: true
    metadata?: true
    createdAt?: true
  }

  export type AudioQueueItemCountAggregateInputType = {
    id?: true
    guildId?: true
    position?: true
    title?: true
    url?: true
    thumbnail?: true
    requestedBy?: true
    durationSec?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AudioQueueItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioQueueItem to aggregate.
     */
    where?: AudioQueueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioQueueItems to fetch.
     */
    orderBy?: AudioQueueItemOrderByWithRelationInput | AudioQueueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioQueueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioQueueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioQueueItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioQueueItems
    **/
    _count?: true | AudioQueueItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioQueueItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioQueueItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioQueueItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioQueueItemMaxAggregateInputType
  }

  export type GetAudioQueueItemAggregateType<T extends AudioQueueItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioQueueItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioQueueItem[P]>
      : GetScalarType<T[P], AggregateAudioQueueItem[P]>
  }




  export type AudioQueueItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioQueueItemWhereInput
    orderBy?: AudioQueueItemOrderByWithAggregationInput | AudioQueueItemOrderByWithAggregationInput[]
    by: AudioQueueItemScalarFieldEnum[] | AudioQueueItemScalarFieldEnum
    having?: AudioQueueItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioQueueItemCountAggregateInputType | true
    _avg?: AudioQueueItemAvgAggregateInputType
    _sum?: AudioQueueItemSumAggregateInputType
    _min?: AudioQueueItemMinAggregateInputType
    _max?: AudioQueueItemMaxAggregateInputType
  }

  export type AudioQueueItemGroupByOutputType = {
    id: number
    guildId: string
    position: number
    title: string
    url: string
    thumbnail: string | null
    requestedBy: string
    durationSec: number | null
    metadata: string | null
    createdAt: Date
    _count: AudioQueueItemCountAggregateOutputType | null
    _avg: AudioQueueItemAvgAggregateOutputType | null
    _sum: AudioQueueItemSumAggregateOutputType | null
    _min: AudioQueueItemMinAggregateOutputType | null
    _max: AudioQueueItemMaxAggregateOutputType | null
  }

  type GetAudioQueueItemGroupByPayload<T extends AudioQueueItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioQueueItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioQueueItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioQueueItemGroupByOutputType[P]>
            : GetScalarType<T[P], AudioQueueItemGroupByOutputType[P]>
        }
      >
    >


  export type AudioQueueItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    position?: boolean
    title?: boolean
    url?: boolean
    thumbnail?: boolean
    requestedBy?: boolean
    durationSec?: boolean
    metadata?: boolean
    createdAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioQueueItem"]>

  export type AudioQueueItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    position?: boolean
    title?: boolean
    url?: boolean
    thumbnail?: boolean
    requestedBy?: boolean
    durationSec?: boolean
    metadata?: boolean
    createdAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audioQueueItem"]>

  export type AudioQueueItemSelectScalar = {
    id?: boolean
    guildId?: boolean
    position?: boolean
    title?: boolean
    url?: boolean
    thumbnail?: boolean
    requestedBy?: boolean
    durationSec?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AudioQueueItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }
  export type AudioQueueItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }

  export type $AudioQueueItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioQueueItem"
    objects: {
      guild: Prisma.$GuildSettingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      position: number
      title: string
      url: string
      thumbnail: string | null
      requestedBy: string
      durationSec: number | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["audioQueueItem"]>
    composites: {}
  }

  type AudioQueueItemGetPayload<S extends boolean | null | undefined | AudioQueueItemDefaultArgs> = $Result.GetResult<Prisma.$AudioQueueItemPayload, S>

  type AudioQueueItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AudioQueueItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AudioQueueItemCountAggregateInputType | true
    }

  export interface AudioQueueItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioQueueItem'], meta: { name: 'AudioQueueItem' } }
    /**
     * Find zero or one AudioQueueItem that matches the filter.
     * @param {AudioQueueItemFindUniqueArgs} args - Arguments to find a AudioQueueItem
     * @example
     * // Get one AudioQueueItem
     * const audioQueueItem = await prisma.audioQueueItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AudioQueueItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AudioQueueItemFindUniqueArgs<ExtArgs>>
    ): Prisma__AudioQueueItemClient<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AudioQueueItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AudioQueueItemFindUniqueOrThrowArgs} args - Arguments to find a AudioQueueItem
     * @example
     * // Get one AudioQueueItem
     * const audioQueueItem = await prisma.audioQueueItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AudioQueueItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioQueueItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AudioQueueItemClient<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AudioQueueItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioQueueItemFindFirstArgs} args - Arguments to find a AudioQueueItem
     * @example
     * // Get one AudioQueueItem
     * const audioQueueItem = await prisma.audioQueueItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AudioQueueItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioQueueItemFindFirstArgs<ExtArgs>>
    ): Prisma__AudioQueueItemClient<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AudioQueueItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioQueueItemFindFirstOrThrowArgs} args - Arguments to find a AudioQueueItem
     * @example
     * // Get one AudioQueueItem
     * const audioQueueItem = await prisma.audioQueueItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AudioQueueItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioQueueItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AudioQueueItemClient<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AudioQueueItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioQueueItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioQueueItems
     * const audioQueueItems = await prisma.audioQueueItem.findMany()
     * 
     * // Get first 10 AudioQueueItems
     * const audioQueueItems = await prisma.audioQueueItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioQueueItemWithIdOnly = await prisma.audioQueueItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AudioQueueItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioQueueItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AudioQueueItem.
     * @param {AudioQueueItemCreateArgs} args - Arguments to create a AudioQueueItem.
     * @example
     * // Create one AudioQueueItem
     * const AudioQueueItem = await prisma.audioQueueItem.create({
     *   data: {
     *     // ... data to create a AudioQueueItem
     *   }
     * })
     * 
    **/
    create<T extends AudioQueueItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AudioQueueItemCreateArgs<ExtArgs>>
    ): Prisma__AudioQueueItemClient<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AudioQueueItems.
     * @param {AudioQueueItemCreateManyArgs} args - Arguments to create many AudioQueueItems.
     * @example
     * // Create many AudioQueueItems
     * const audioQueueItem = await prisma.audioQueueItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AudioQueueItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioQueueItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudioQueueItems and returns the data saved in the database.
     * @param {AudioQueueItemCreateManyAndReturnArgs} args - Arguments to create many AudioQueueItems.
     * @example
     * // Create many AudioQueueItems
     * const audioQueueItem = await prisma.audioQueueItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudioQueueItems and only return the `id`
     * const audioQueueItemWithIdOnly = await prisma.audioQueueItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AudioQueueItemCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioQueueItemCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a AudioQueueItem.
     * @param {AudioQueueItemDeleteArgs} args - Arguments to delete one AudioQueueItem.
     * @example
     * // Delete one AudioQueueItem
     * const AudioQueueItem = await prisma.audioQueueItem.delete({
     *   where: {
     *     // ... filter to delete one AudioQueueItem
     *   }
     * })
     * 
    **/
    delete<T extends AudioQueueItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AudioQueueItemDeleteArgs<ExtArgs>>
    ): Prisma__AudioQueueItemClient<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AudioQueueItem.
     * @param {AudioQueueItemUpdateArgs} args - Arguments to update one AudioQueueItem.
     * @example
     * // Update one AudioQueueItem
     * const audioQueueItem = await prisma.audioQueueItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AudioQueueItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AudioQueueItemUpdateArgs<ExtArgs>>
    ): Prisma__AudioQueueItemClient<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AudioQueueItems.
     * @param {AudioQueueItemDeleteManyArgs} args - Arguments to filter AudioQueueItems to delete.
     * @example
     * // Delete a few AudioQueueItems
     * const { count } = await prisma.audioQueueItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AudioQueueItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AudioQueueItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioQueueItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioQueueItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioQueueItems
     * const audioQueueItem = await prisma.audioQueueItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AudioQueueItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AudioQueueItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioQueueItem.
     * @param {AudioQueueItemUpsertArgs} args - Arguments to update or create a AudioQueueItem.
     * @example
     * // Update or create a AudioQueueItem
     * const audioQueueItem = await prisma.audioQueueItem.upsert({
     *   create: {
     *     // ... data to create a AudioQueueItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioQueueItem we want to update
     *   }
     * })
    **/
    upsert<T extends AudioQueueItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AudioQueueItemUpsertArgs<ExtArgs>>
    ): Prisma__AudioQueueItemClient<$Result.GetResult<Prisma.$AudioQueueItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AudioQueueItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioQueueItemCountArgs} args - Arguments to filter AudioQueueItems to count.
     * @example
     * // Count the number of AudioQueueItems
     * const count = await prisma.audioQueueItem.count({
     *   where: {
     *     // ... the filter for the AudioQueueItems we want to count
     *   }
     * })
    **/
    count<T extends AudioQueueItemCountArgs>(
      args?: Subset<T, AudioQueueItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioQueueItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioQueueItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioQueueItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioQueueItemAggregateArgs>(args: Subset<T, AudioQueueItemAggregateArgs>): Prisma.PrismaPromise<GetAudioQueueItemAggregateType<T>>

    /**
     * Group by AudioQueueItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioQueueItemGroupByArgs} args - Group by arguments.
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
      T extends AudioQueueItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioQueueItemGroupByArgs['orderBy'] }
        : { orderBy?: AudioQueueItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioQueueItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioQueueItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioQueueItem model
   */
  readonly fields: AudioQueueItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioQueueItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioQueueItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    guild<T extends GuildSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildSettingDefaultArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the AudioQueueItem model
   */ 
  interface AudioQueueItemFieldRefs {
    readonly id: FieldRef<"AudioQueueItem", 'Int'>
    readonly guildId: FieldRef<"AudioQueueItem", 'String'>
    readonly position: FieldRef<"AudioQueueItem", 'Int'>
    readonly title: FieldRef<"AudioQueueItem", 'String'>
    readonly url: FieldRef<"AudioQueueItem", 'String'>
    readonly thumbnail: FieldRef<"AudioQueueItem", 'String'>
    readonly requestedBy: FieldRef<"AudioQueueItem", 'String'>
    readonly durationSec: FieldRef<"AudioQueueItem", 'Int'>
    readonly metadata: FieldRef<"AudioQueueItem", 'String'>
    readonly createdAt: FieldRef<"AudioQueueItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudioQueueItem findUnique
   */
  export type AudioQueueItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    /**
     * Filter, which AudioQueueItem to fetch.
     */
    where: AudioQueueItemWhereUniqueInput
  }

  /**
   * AudioQueueItem findUniqueOrThrow
   */
  export type AudioQueueItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    /**
     * Filter, which AudioQueueItem to fetch.
     */
    where: AudioQueueItemWhereUniqueInput
  }

  /**
   * AudioQueueItem findFirst
   */
  export type AudioQueueItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    /**
     * Filter, which AudioQueueItem to fetch.
     */
    where?: AudioQueueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioQueueItems to fetch.
     */
    orderBy?: AudioQueueItemOrderByWithRelationInput | AudioQueueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioQueueItems.
     */
    cursor?: AudioQueueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioQueueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioQueueItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioQueueItems.
     */
    distinct?: AudioQueueItemScalarFieldEnum | AudioQueueItemScalarFieldEnum[]
  }

  /**
   * AudioQueueItem findFirstOrThrow
   */
  export type AudioQueueItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    /**
     * Filter, which AudioQueueItem to fetch.
     */
    where?: AudioQueueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioQueueItems to fetch.
     */
    orderBy?: AudioQueueItemOrderByWithRelationInput | AudioQueueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioQueueItems.
     */
    cursor?: AudioQueueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioQueueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioQueueItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioQueueItems.
     */
    distinct?: AudioQueueItemScalarFieldEnum | AudioQueueItemScalarFieldEnum[]
  }

  /**
   * AudioQueueItem findMany
   */
  export type AudioQueueItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    /**
     * Filter, which AudioQueueItems to fetch.
     */
    where?: AudioQueueItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioQueueItems to fetch.
     */
    orderBy?: AudioQueueItemOrderByWithRelationInput | AudioQueueItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioQueueItems.
     */
    cursor?: AudioQueueItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioQueueItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioQueueItems.
     */
    skip?: number
    distinct?: AudioQueueItemScalarFieldEnum | AudioQueueItemScalarFieldEnum[]
  }

  /**
   * AudioQueueItem create
   */
  export type AudioQueueItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    /**
     * The data needed to create a AudioQueueItem.
     */
    data: XOR<AudioQueueItemCreateInput, AudioQueueItemUncheckedCreateInput>
  }

  /**
   * AudioQueueItem createMany
   */
  export type AudioQueueItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioQueueItems.
     */
    data: AudioQueueItemCreateManyInput | AudioQueueItemCreateManyInput[]
  }

  /**
   * AudioQueueItem createManyAndReturn
   */
  export type AudioQueueItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AudioQueueItems.
     */
    data: AudioQueueItemCreateManyInput | AudioQueueItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudioQueueItem update
   */
  export type AudioQueueItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    /**
     * The data needed to update a AudioQueueItem.
     */
    data: XOR<AudioQueueItemUpdateInput, AudioQueueItemUncheckedUpdateInput>
    /**
     * Choose, which AudioQueueItem to update.
     */
    where: AudioQueueItemWhereUniqueInput
  }

  /**
   * AudioQueueItem updateMany
   */
  export type AudioQueueItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioQueueItems.
     */
    data: XOR<AudioQueueItemUpdateManyMutationInput, AudioQueueItemUncheckedUpdateManyInput>
    /**
     * Filter which AudioQueueItems to update
     */
    where?: AudioQueueItemWhereInput
  }

  /**
   * AudioQueueItem upsert
   */
  export type AudioQueueItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    /**
     * The filter to search for the AudioQueueItem to update in case it exists.
     */
    where: AudioQueueItemWhereUniqueInput
    /**
     * In case the AudioQueueItem found by the `where` argument doesn't exist, create a new AudioQueueItem with this data.
     */
    create: XOR<AudioQueueItemCreateInput, AudioQueueItemUncheckedCreateInput>
    /**
     * In case the AudioQueueItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioQueueItemUpdateInput, AudioQueueItemUncheckedUpdateInput>
  }

  /**
   * AudioQueueItem delete
   */
  export type AudioQueueItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
    /**
     * Filter which AudioQueueItem to delete.
     */
    where: AudioQueueItemWhereUniqueInput
  }

  /**
   * AudioQueueItem deleteMany
   */
  export type AudioQueueItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioQueueItems to delete
     */
    where?: AudioQueueItemWhereInput
  }

  /**
   * AudioQueueItem without action
   */
  export type AudioQueueItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioQueueItem
     */
    select?: AudioQueueItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioQueueItemInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    guildId: string | null
    actorId: string | null
    action: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    guildId: string | null
    actorId: string | null
    action: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    guildId: number
    actorId: number
    action: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    guildId?: true
    actorId?: true
    action?: true
    metadata?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    guildId?: true
    actorId?: true
    action?: true
    metadata?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    guildId?: true
    actorId?: true
    action?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    guildId: string
    actorId: string
    action: string
    metadata: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    actorId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    actorId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    guildId?: boolean
    actorId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildSettingDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      guild: Prisma.$GuildSettingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guildId: string
      actorId: string
      action: string
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuditLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuditLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuditLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
    **/
    create<T extends AuditLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AuditLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
    **/
    delete<T extends AuditLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuditLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuditLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuditLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
    **/
    upsert<T extends AuditLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    guild<T extends GuildSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildSettingDefaultArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly guildId: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      profiles: Prisma.$UserProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

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

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    profiles<T extends User$profilesArgs<ExtArgs> = {}>(args?: Subset<T, User$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.profiles
   */
  export type User$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    cursor?: UserProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GuildSettingScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    locale: 'locale',
    staffRoleIds: 'staffRoleIds',
    ticketCategory: 'ticketCategory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuildSettingScalarFieldEnum = (typeof GuildSettingScalarFieldEnum)[keyof typeof GuildSettingScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    userId: 'userId',
    channelId: 'channelId',
    category: 'category',
    priority: 'priority',
    status: 'status',
    assignedTo: 'assignedTo',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketMessageScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    authorId: 'authorId',
    content: 'content',
    attachments: 'attachments',
    createdAt: 'createdAt'
  };

  export type TicketMessageScalarFieldEnum = (typeof TicketMessageScalarFieldEnum)[keyof typeof TicketMessageScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    userId: 'userId',
    experience: 'experience',
    level: 'level',
    balance: 'balance',
    inventory: 'inventory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authUserId: 'authUserId'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const LevelConfigScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    level: 'level',
    requiredXp: 'requiredXp',
    rewardRoleId: 'rewardRoleId',
    rewardItemId: 'rewardItemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LevelConfigScalarFieldEnum = (typeof LevelConfigScalarFieldEnum)[keyof typeof LevelConfigScalarFieldEnum]


  export const EconomyTransactionScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    guildId: 'guildId',
    amount: 'amount',
    type: 'type',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type EconomyTransactionScalarFieldEnum = (typeof EconomyTransactionScalarFieldEnum)[keyof typeof EconomyTransactionScalarFieldEnum]


  export const StoreItemScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    name: 'name',
    description: 'description',
    price: 'price',
    isActive: 'isActive',
    payload: 'payload',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreItemScalarFieldEnum = (typeof StoreItemScalarFieldEnum)[keyof typeof StoreItemScalarFieldEnum]


  export const ModerationActionScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    userId: 'userId',
    moderatorId: 'moderatorId',
    type: 'type',
    reason: 'reason',
    durationMinutes: 'durationMinutes',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type ModerationActionScalarFieldEnum = (typeof ModerationActionScalarFieldEnum)[keyof typeof ModerationActionScalarFieldEnum]


  export const AudioQueueItemScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    position: 'position',
    title: 'title',
    url: 'url',
    thumbnail: 'thumbnail',
    requestedBy: 'requestedBy',
    durationSec: 'durationSec',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AudioQueueItemScalarFieldEnum = (typeof AudioQueueItemScalarFieldEnum)[keyof typeof AudioQueueItemScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    actorId: 'actorId',
    action: 'action',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type GuildSettingWhereInput = {
    AND?: GuildSettingWhereInput | GuildSettingWhereInput[]
    OR?: GuildSettingWhereInput[]
    NOT?: GuildSettingWhereInput | GuildSettingWhereInput[]
    id?: IntFilter<"GuildSetting"> | number
    guildId?: StringFilter<"GuildSetting"> | string
    locale?: StringNullableFilter<"GuildSetting"> | string | null
    staffRoleIds?: StringNullableFilter<"GuildSetting"> | string | null
    ticketCategory?: StringNullableFilter<"GuildSetting"> | string | null
    createdAt?: DateTimeFilter<"GuildSetting"> | Date | string
    updatedAt?: DateTimeFilter<"GuildSetting"> | Date | string
    tickets?: TicketListRelationFilter
    levelConfigs?: LevelConfigListRelationFilter
    storeItems?: StoreItemListRelationFilter
    moderation?: ModerationActionListRelationFilter
    audioQueues?: AudioQueueItemListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    userProfiles?: UserProfileListRelationFilter
  }

  export type GuildSettingOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    locale?: SortOrderInput | SortOrder
    staffRoleIds?: SortOrderInput | SortOrder
    ticketCategory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    levelConfigs?: LevelConfigOrderByRelationAggregateInput
    storeItems?: StoreItemOrderByRelationAggregateInput
    moderation?: ModerationActionOrderByRelationAggregateInput
    audioQueues?: AudioQueueItemOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    userProfiles?: UserProfileOrderByRelationAggregateInput
  }

  export type GuildSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guildId?: string
    AND?: GuildSettingWhereInput | GuildSettingWhereInput[]
    OR?: GuildSettingWhereInput[]
    NOT?: GuildSettingWhereInput | GuildSettingWhereInput[]
    locale?: StringNullableFilter<"GuildSetting"> | string | null
    staffRoleIds?: StringNullableFilter<"GuildSetting"> | string | null
    ticketCategory?: StringNullableFilter<"GuildSetting"> | string | null
    createdAt?: DateTimeFilter<"GuildSetting"> | Date | string
    updatedAt?: DateTimeFilter<"GuildSetting"> | Date | string
    tickets?: TicketListRelationFilter
    levelConfigs?: LevelConfigListRelationFilter
    storeItems?: StoreItemListRelationFilter
    moderation?: ModerationActionListRelationFilter
    audioQueues?: AudioQueueItemListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    userProfiles?: UserProfileListRelationFilter
  }, "id" | "guildId">

  export type GuildSettingOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    locale?: SortOrderInput | SortOrder
    staffRoleIds?: SortOrderInput | SortOrder
    ticketCategory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuildSettingCountOrderByAggregateInput
    _avg?: GuildSettingAvgOrderByAggregateInput
    _max?: GuildSettingMaxOrderByAggregateInput
    _min?: GuildSettingMinOrderByAggregateInput
    _sum?: GuildSettingSumOrderByAggregateInput
  }

  export type GuildSettingScalarWhereWithAggregatesInput = {
    AND?: GuildSettingScalarWhereWithAggregatesInput | GuildSettingScalarWhereWithAggregatesInput[]
    OR?: GuildSettingScalarWhereWithAggregatesInput[]
    NOT?: GuildSettingScalarWhereWithAggregatesInput | GuildSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GuildSetting"> | number
    guildId?: StringWithAggregatesFilter<"GuildSetting"> | string
    locale?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
    staffRoleIds?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
    ticketCategory?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuildSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuildSetting"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    guildId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    channelId?: StringFilter<"Ticket"> | string
    category?: StringNullableFilter<"Ticket"> | string | null
    priority?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    assignedTo?: StringNullableFilter<"Ticket"> | string | null
    metadata?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
    messages?: TicketMessageListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    category?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guild?: GuildSettingOrderByWithRelationInput
    messages?: TicketMessageOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    channelId?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    guildId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    category?: StringNullableFilter<"Ticket"> | string | null
    priority?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    assignedTo?: StringNullableFilter<"Ticket"> | string | null
    metadata?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
    messages?: TicketMessageListRelationFilter
  }, "id" | "channelId">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    category?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    guildId?: StringWithAggregatesFilter<"Ticket"> | string
    userId?: StringWithAggregatesFilter<"Ticket"> | string
    channelId?: StringWithAggregatesFilter<"Ticket"> | string
    category?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    priority?: StringWithAggregatesFilter<"Ticket"> | string
    status?: StringWithAggregatesFilter<"Ticket"> | string
    assignedTo?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type TicketMessageWhereInput = {
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    id?: IntFilter<"TicketMessage"> | number
    ticketId?: IntFilter<"TicketMessage"> | number
    authorId?: StringFilter<"TicketMessage"> | string
    content?: StringFilter<"TicketMessage"> | string
    attachments?: StringNullableFilter<"TicketMessage"> | string | null
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }

  export type TicketMessageOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    attachments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    ticketId?: IntFilter<"TicketMessage"> | number
    authorId?: StringFilter<"TicketMessage"> | string
    content?: StringFilter<"TicketMessage"> | string
    attachments?: StringNullableFilter<"TicketMessage"> | string | null
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }, "id">

  export type TicketMessageOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    attachments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TicketMessageCountOrderByAggregateInput
    _avg?: TicketMessageAvgOrderByAggregateInput
    _max?: TicketMessageMaxOrderByAggregateInput
    _min?: TicketMessageMinOrderByAggregateInput
    _sum?: TicketMessageSumOrderByAggregateInput
  }

  export type TicketMessageScalarWhereWithAggregatesInput = {
    AND?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    OR?: TicketMessageScalarWhereWithAggregatesInput[]
    NOT?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketMessage"> | number
    ticketId?: IntWithAggregatesFilter<"TicketMessage"> | number
    authorId?: StringWithAggregatesFilter<"TicketMessage"> | string
    content?: StringWithAggregatesFilter<"TicketMessage"> | string
    attachments?: StringNullableWithAggregatesFilter<"TicketMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TicketMessage"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    guildId?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    experience?: IntFilter<"UserProfile"> | number
    level?: IntFilter<"UserProfile"> | number
    balance?: IntFilter<"UserProfile"> | number
    inventory?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    authUserId?: StringNullableFilter<"UserProfile"> | string | null
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
    transactions?: EconomyTransactionListRelationFilter
    authUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    balance?: SortOrder
    inventory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authUserId?: SortOrderInput | SortOrder
    guild?: GuildSettingOrderByWithRelationInput
    transactions?: EconomyTransactionOrderByRelationAggregateInput
    authUser?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    guildId?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    experience?: IntFilter<"UserProfile"> | number
    level?: IntFilter<"UserProfile"> | number
    balance?: IntFilter<"UserProfile"> | number
    inventory?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    authUserId?: StringNullableFilter<"UserProfile"> | string | null
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
    transactions?: EconomyTransactionListRelationFilter
    authUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    balance?: SortOrder
    inventory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authUserId?: SortOrderInput | SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfile"> | number
    guildId?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    experience?: IntWithAggregatesFilter<"UserProfile"> | number
    level?: IntWithAggregatesFilter<"UserProfile"> | number
    balance?: IntWithAggregatesFilter<"UserProfile"> | number
    inventory?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    authUserId?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
  }

  export type LevelConfigWhereInput = {
    AND?: LevelConfigWhereInput | LevelConfigWhereInput[]
    OR?: LevelConfigWhereInput[]
    NOT?: LevelConfigWhereInput | LevelConfigWhereInput[]
    id?: IntFilter<"LevelConfig"> | number
    guildId?: StringFilter<"LevelConfig"> | string
    level?: IntFilter<"LevelConfig"> | number
    requiredXp?: IntFilter<"LevelConfig"> | number
    rewardRoleId?: StringNullableFilter<"LevelConfig"> | string | null
    rewardItemId?: IntNullableFilter<"LevelConfig"> | number | null
    createdAt?: DateTimeFilter<"LevelConfig"> | Date | string
    updatedAt?: DateTimeFilter<"LevelConfig"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }

  export type LevelConfigOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    requiredXp?: SortOrder
    rewardRoleId?: SortOrderInput | SortOrder
    rewardItemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guild?: GuildSettingOrderByWithRelationInput
  }

  export type LevelConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guildId_level?: LevelConfigGuildIdLevelCompoundUniqueInput
    AND?: LevelConfigWhereInput | LevelConfigWhereInput[]
    OR?: LevelConfigWhereInput[]
    NOT?: LevelConfigWhereInput | LevelConfigWhereInput[]
    guildId?: StringFilter<"LevelConfig"> | string
    level?: IntFilter<"LevelConfig"> | number
    requiredXp?: IntFilter<"LevelConfig"> | number
    rewardRoleId?: StringNullableFilter<"LevelConfig"> | string | null
    rewardItemId?: IntNullableFilter<"LevelConfig"> | number | null
    createdAt?: DateTimeFilter<"LevelConfig"> | Date | string
    updatedAt?: DateTimeFilter<"LevelConfig"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }, "id" | "guildId_level">

  export type LevelConfigOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    requiredXp?: SortOrder
    rewardRoleId?: SortOrderInput | SortOrder
    rewardItemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LevelConfigCountOrderByAggregateInput
    _avg?: LevelConfigAvgOrderByAggregateInput
    _max?: LevelConfigMaxOrderByAggregateInput
    _min?: LevelConfigMinOrderByAggregateInput
    _sum?: LevelConfigSumOrderByAggregateInput
  }

  export type LevelConfigScalarWhereWithAggregatesInput = {
    AND?: LevelConfigScalarWhereWithAggregatesInput | LevelConfigScalarWhereWithAggregatesInput[]
    OR?: LevelConfigScalarWhereWithAggregatesInput[]
    NOT?: LevelConfigScalarWhereWithAggregatesInput | LevelConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LevelConfig"> | number
    guildId?: StringWithAggregatesFilter<"LevelConfig"> | string
    level?: IntWithAggregatesFilter<"LevelConfig"> | number
    requiredXp?: IntWithAggregatesFilter<"LevelConfig"> | number
    rewardRoleId?: StringNullableWithAggregatesFilter<"LevelConfig"> | string | null
    rewardItemId?: IntNullableWithAggregatesFilter<"LevelConfig"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"LevelConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LevelConfig"> | Date | string
  }

  export type EconomyTransactionWhereInput = {
    AND?: EconomyTransactionWhereInput | EconomyTransactionWhereInput[]
    OR?: EconomyTransactionWhereInput[]
    NOT?: EconomyTransactionWhereInput | EconomyTransactionWhereInput[]
    id?: IntFilter<"EconomyTransaction"> | number
    profileId?: IntFilter<"EconomyTransaction"> | number
    guildId?: StringFilter<"EconomyTransaction"> | string
    amount?: IntFilter<"EconomyTransaction"> | number
    type?: StringFilter<"EconomyTransaction"> | string
    description?: StringNullableFilter<"EconomyTransaction"> | string | null
    metadata?: StringNullableFilter<"EconomyTransaction"> | string | null
    createdAt?: DateTimeFilter<"EconomyTransaction"> | Date | string
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }

  export type EconomyTransactionOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    guildId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type EconomyTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EconomyTransactionWhereInput | EconomyTransactionWhereInput[]
    OR?: EconomyTransactionWhereInput[]
    NOT?: EconomyTransactionWhereInput | EconomyTransactionWhereInput[]
    profileId?: IntFilter<"EconomyTransaction"> | number
    guildId?: StringFilter<"EconomyTransaction"> | string
    amount?: IntFilter<"EconomyTransaction"> | number
    type?: StringFilter<"EconomyTransaction"> | string
    description?: StringNullableFilter<"EconomyTransaction"> | string | null
    metadata?: StringNullableFilter<"EconomyTransaction"> | string | null
    createdAt?: DateTimeFilter<"EconomyTransaction"> | Date | string
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }, "id">

  export type EconomyTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    guildId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EconomyTransactionCountOrderByAggregateInput
    _avg?: EconomyTransactionAvgOrderByAggregateInput
    _max?: EconomyTransactionMaxOrderByAggregateInput
    _min?: EconomyTransactionMinOrderByAggregateInput
    _sum?: EconomyTransactionSumOrderByAggregateInput
  }

  export type EconomyTransactionScalarWhereWithAggregatesInput = {
    AND?: EconomyTransactionScalarWhereWithAggregatesInput | EconomyTransactionScalarWhereWithAggregatesInput[]
    OR?: EconomyTransactionScalarWhereWithAggregatesInput[]
    NOT?: EconomyTransactionScalarWhereWithAggregatesInput | EconomyTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EconomyTransaction"> | number
    profileId?: IntWithAggregatesFilter<"EconomyTransaction"> | number
    guildId?: StringWithAggregatesFilter<"EconomyTransaction"> | string
    amount?: IntWithAggregatesFilter<"EconomyTransaction"> | number
    type?: StringWithAggregatesFilter<"EconomyTransaction"> | string
    description?: StringNullableWithAggregatesFilter<"EconomyTransaction"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"EconomyTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EconomyTransaction"> | Date | string
  }

  export type StoreItemWhereInput = {
    AND?: StoreItemWhereInput | StoreItemWhereInput[]
    OR?: StoreItemWhereInput[]
    NOT?: StoreItemWhereInput | StoreItemWhereInput[]
    id?: IntFilter<"StoreItem"> | number
    guildId?: StringFilter<"StoreItem"> | string
    name?: StringFilter<"StoreItem"> | string
    description?: StringNullableFilter<"StoreItem"> | string | null
    price?: IntFilter<"StoreItem"> | number
    isActive?: BoolFilter<"StoreItem"> | boolean
    payload?: StringNullableFilter<"StoreItem"> | string | null
    createdAt?: DateTimeFilter<"StoreItem"> | Date | string
    updatedAt?: DateTimeFilter<"StoreItem"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }

  export type StoreItemOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guild?: GuildSettingOrderByWithRelationInput
  }

  export type StoreItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreItemWhereInput | StoreItemWhereInput[]
    OR?: StoreItemWhereInput[]
    NOT?: StoreItemWhereInput | StoreItemWhereInput[]
    guildId?: StringFilter<"StoreItem"> | string
    name?: StringFilter<"StoreItem"> | string
    description?: StringNullableFilter<"StoreItem"> | string | null
    price?: IntFilter<"StoreItem"> | number
    isActive?: BoolFilter<"StoreItem"> | boolean
    payload?: StringNullableFilter<"StoreItem"> | string | null
    createdAt?: DateTimeFilter<"StoreItem"> | Date | string
    updatedAt?: DateTimeFilter<"StoreItem"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }, "id">

  export type StoreItemOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreItemCountOrderByAggregateInput
    _avg?: StoreItemAvgOrderByAggregateInput
    _max?: StoreItemMaxOrderByAggregateInput
    _min?: StoreItemMinOrderByAggregateInput
    _sum?: StoreItemSumOrderByAggregateInput
  }

  export type StoreItemScalarWhereWithAggregatesInput = {
    AND?: StoreItemScalarWhereWithAggregatesInput | StoreItemScalarWhereWithAggregatesInput[]
    OR?: StoreItemScalarWhereWithAggregatesInput[]
    NOT?: StoreItemScalarWhereWithAggregatesInput | StoreItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreItem"> | number
    guildId?: StringWithAggregatesFilter<"StoreItem"> | string
    name?: StringWithAggregatesFilter<"StoreItem"> | string
    description?: StringNullableWithAggregatesFilter<"StoreItem"> | string | null
    price?: IntWithAggregatesFilter<"StoreItem"> | number
    isActive?: BoolWithAggregatesFilter<"StoreItem"> | boolean
    payload?: StringNullableWithAggregatesFilter<"StoreItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StoreItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreItem"> | Date | string
  }

  export type ModerationActionWhereInput = {
    AND?: ModerationActionWhereInput | ModerationActionWhereInput[]
    OR?: ModerationActionWhereInput[]
    NOT?: ModerationActionWhereInput | ModerationActionWhereInput[]
    id?: IntFilter<"ModerationAction"> | number
    guildId?: StringFilter<"ModerationAction"> | string
    userId?: StringFilter<"ModerationAction"> | string
    moderatorId?: StringFilter<"ModerationAction"> | string
    type?: StringFilter<"ModerationAction"> | string
    reason?: StringNullableFilter<"ModerationAction"> | string | null
    durationMinutes?: IntNullableFilter<"ModerationAction"> | number | null
    expiresAt?: DateTimeNullableFilter<"ModerationAction"> | Date | string | null
    createdAt?: DateTimeFilter<"ModerationAction"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }

  export type ModerationActionOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    guild?: GuildSettingOrderByWithRelationInput
  }

  export type ModerationActionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModerationActionWhereInput | ModerationActionWhereInput[]
    OR?: ModerationActionWhereInput[]
    NOT?: ModerationActionWhereInput | ModerationActionWhereInput[]
    guildId?: StringFilter<"ModerationAction"> | string
    userId?: StringFilter<"ModerationAction"> | string
    moderatorId?: StringFilter<"ModerationAction"> | string
    type?: StringFilter<"ModerationAction"> | string
    reason?: StringNullableFilter<"ModerationAction"> | string | null
    durationMinutes?: IntNullableFilter<"ModerationAction"> | number | null
    expiresAt?: DateTimeNullableFilter<"ModerationAction"> | Date | string | null
    createdAt?: DateTimeFilter<"ModerationAction"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }, "id">

  export type ModerationActionOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ModerationActionCountOrderByAggregateInput
    _avg?: ModerationActionAvgOrderByAggregateInput
    _max?: ModerationActionMaxOrderByAggregateInput
    _min?: ModerationActionMinOrderByAggregateInput
    _sum?: ModerationActionSumOrderByAggregateInput
  }

  export type ModerationActionScalarWhereWithAggregatesInput = {
    AND?: ModerationActionScalarWhereWithAggregatesInput | ModerationActionScalarWhereWithAggregatesInput[]
    OR?: ModerationActionScalarWhereWithAggregatesInput[]
    NOT?: ModerationActionScalarWhereWithAggregatesInput | ModerationActionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModerationAction"> | number
    guildId?: StringWithAggregatesFilter<"ModerationAction"> | string
    userId?: StringWithAggregatesFilter<"ModerationAction"> | string
    moderatorId?: StringWithAggregatesFilter<"ModerationAction"> | string
    type?: StringWithAggregatesFilter<"ModerationAction"> | string
    reason?: StringNullableWithAggregatesFilter<"ModerationAction"> | string | null
    durationMinutes?: IntNullableWithAggregatesFilter<"ModerationAction"> | number | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ModerationAction"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ModerationAction"> | Date | string
  }

  export type AudioQueueItemWhereInput = {
    AND?: AudioQueueItemWhereInput | AudioQueueItemWhereInput[]
    OR?: AudioQueueItemWhereInput[]
    NOT?: AudioQueueItemWhereInput | AudioQueueItemWhereInput[]
    id?: IntFilter<"AudioQueueItem"> | number
    guildId?: StringFilter<"AudioQueueItem"> | string
    position?: IntFilter<"AudioQueueItem"> | number
    title?: StringFilter<"AudioQueueItem"> | string
    url?: StringFilter<"AudioQueueItem"> | string
    thumbnail?: StringNullableFilter<"AudioQueueItem"> | string | null
    requestedBy?: StringFilter<"AudioQueueItem"> | string
    durationSec?: IntNullableFilter<"AudioQueueItem"> | number | null
    metadata?: StringNullableFilter<"AudioQueueItem"> | string | null
    createdAt?: DateTimeFilter<"AudioQueueItem"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }

  export type AudioQueueItemOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    position?: SortOrder
    title?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    requestedBy?: SortOrder
    durationSec?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    guild?: GuildSettingOrderByWithRelationInput
  }

  export type AudioQueueItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guildId_position?: AudioQueueItemGuildIdPositionCompoundUniqueInput
    AND?: AudioQueueItemWhereInput | AudioQueueItemWhereInput[]
    OR?: AudioQueueItemWhereInput[]
    NOT?: AudioQueueItemWhereInput | AudioQueueItemWhereInput[]
    guildId?: StringFilter<"AudioQueueItem"> | string
    position?: IntFilter<"AudioQueueItem"> | number
    title?: StringFilter<"AudioQueueItem"> | string
    url?: StringFilter<"AudioQueueItem"> | string
    thumbnail?: StringNullableFilter<"AudioQueueItem"> | string | null
    requestedBy?: StringFilter<"AudioQueueItem"> | string
    durationSec?: IntNullableFilter<"AudioQueueItem"> | number | null
    metadata?: StringNullableFilter<"AudioQueueItem"> | string | null
    createdAt?: DateTimeFilter<"AudioQueueItem"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }, "id" | "guildId_position">

  export type AudioQueueItemOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    position?: SortOrder
    title?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    requestedBy?: SortOrder
    durationSec?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AudioQueueItemCountOrderByAggregateInput
    _avg?: AudioQueueItemAvgOrderByAggregateInput
    _max?: AudioQueueItemMaxOrderByAggregateInput
    _min?: AudioQueueItemMinOrderByAggregateInput
    _sum?: AudioQueueItemSumOrderByAggregateInput
  }

  export type AudioQueueItemScalarWhereWithAggregatesInput = {
    AND?: AudioQueueItemScalarWhereWithAggregatesInput | AudioQueueItemScalarWhereWithAggregatesInput[]
    OR?: AudioQueueItemScalarWhereWithAggregatesInput[]
    NOT?: AudioQueueItemScalarWhereWithAggregatesInput | AudioQueueItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AudioQueueItem"> | number
    guildId?: StringWithAggregatesFilter<"AudioQueueItem"> | string
    position?: IntWithAggregatesFilter<"AudioQueueItem"> | number
    title?: StringWithAggregatesFilter<"AudioQueueItem"> | string
    url?: StringWithAggregatesFilter<"AudioQueueItem"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"AudioQueueItem"> | string | null
    requestedBy?: StringWithAggregatesFilter<"AudioQueueItem"> | string
    durationSec?: IntNullableWithAggregatesFilter<"AudioQueueItem"> | number | null
    metadata?: StringNullableWithAggregatesFilter<"AudioQueueItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AudioQueueItem"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    guildId?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    guild?: GuildSettingOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    guildId?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    guild?: XOR<GuildSettingRelationFilter, GuildSettingWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    guildId?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    metadata?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    profiles?: UserProfileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    profiles?: UserProfileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    profiles?: UserProfileListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type GuildSettingCreateInput = {
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingUncheckedCreateInput = {
    id?: number
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigUncheckedCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemUncheckedCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionUncheckedCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemUncheckedCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUncheckedUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUncheckedUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUncheckedUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUncheckedUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingCreateManyInput = {
    id?: number
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuildSettingUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    userId: string
    channelId: string
    category?: string | null
    priority?: string
    status?: string
    assignedTo?: string | null
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutTicketsInput
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    guildId: string
    userId: string
    channelId: string
    category?: string | null
    priority?: string
    status?: string
    assignedTo?: string | null
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutTicketsNestedInput
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    guildId: string
    userId: string
    channelId: string
    category?: string | null
    priority?: string
    status?: string
    assignedTo?: string | null
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateInput = {
    authorId: string
    content: string
    attachments?: string | null
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutMessagesInput
  }

  export type TicketMessageUncheckedCreateInput = {
    id?: number
    ticketId: number
    authorId: string
    content: string
    attachments?: string | null
    createdAt?: Date | string
  }

  export type TicketMessageUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type TicketMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateManyInput = {
    id?: number
    ticketId: number
    authorId: string
    content: string
    attachments?: string | null
    createdAt?: Date | string
  }

  export type TicketMessageUpdateManyMutationInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutUserProfilesInput
    transactions?: EconomyTransactionCreateNestedManyWithoutProfileInput
    authUser?: UserCreateNestedOneWithoutProfilesInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    guildId: string
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authUserId?: string | null
    transactions?: EconomyTransactionUncheckedCreateNestedManyWithoutProfileInput
  }

  export type UserProfileUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutUserProfilesNestedInput
    transactions?: EconomyTransactionUpdateManyWithoutProfileNestedInput
    authUser?: UserUpdateOneWithoutProfilesNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: EconomyTransactionUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileCreateManyInput = {
    id?: number
    guildId: string
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authUserId?: string | null
  }

  export type UserProfileUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LevelConfigCreateInput = {
    level: number
    requiredXp: number
    rewardRoleId?: string | null
    rewardItemId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutLevelConfigsInput
  }

  export type LevelConfigUncheckedCreateInput = {
    id?: number
    guildId: string
    level: number
    requiredXp: number
    rewardRoleId?: string | null
    rewardItemId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelConfigUpdateInput = {
    level?: IntFieldUpdateOperationsInput | number
    requiredXp?: IntFieldUpdateOperationsInput | number
    rewardRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    rewardItemId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutLevelConfigsNestedInput
  }

  export type LevelConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    requiredXp?: IntFieldUpdateOperationsInput | number
    rewardRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    rewardItemId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelConfigCreateManyInput = {
    id?: number
    guildId: string
    level: number
    requiredXp: number
    rewardRoleId?: string | null
    rewardItemId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelConfigUpdateManyMutationInput = {
    level?: IntFieldUpdateOperationsInput | number
    requiredXp?: IntFieldUpdateOperationsInput | number
    rewardRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    rewardItemId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    requiredXp?: IntFieldUpdateOperationsInput | number
    rewardRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    rewardItemId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyTransactionCreateInput = {
    guildId: string
    amount: number
    type?: string
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
    profile: UserProfileCreateNestedOneWithoutTransactionsInput
  }

  export type EconomyTransactionUncheckedCreateInput = {
    id?: number
    profileId: number
    guildId: string
    amount: number
    type?: string
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EconomyTransactionUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type EconomyTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyTransactionCreateManyInput = {
    id?: number
    profileId: number
    guildId: string
    amount: number
    type?: string
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EconomyTransactionUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profileId?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreItemCreateInput = {
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    payload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutStoreItemsInput
  }

  export type StoreItemUncheckedCreateInput = {
    id?: number
    guildId: string
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    payload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutStoreItemsNestedInput
  }

  export type StoreItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreItemCreateManyInput = {
    id?: number
    guildId: string
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    payload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationActionCreateInput = {
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    durationMinutes?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutModerationInput
  }

  export type ModerationActionUncheckedCreateInput = {
    id?: number
    guildId: string
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    durationMinutes?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ModerationActionUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutModerationNestedInput
  }

  export type ModerationActionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationActionCreateManyInput = {
    id?: number
    guildId: string
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    durationMinutes?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ModerationActionUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationActionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioQueueItemCreateInput = {
    position: number
    title: string
    url: string
    thumbnail?: string | null
    requestedBy: string
    durationSec?: number | null
    metadata?: string | null
    createdAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutAudioQueuesInput
  }

  export type AudioQueueItemUncheckedCreateInput = {
    id?: number
    guildId: string
    position: number
    title: string
    url: string
    thumbnail?: string | null
    requestedBy: string
    durationSec?: number | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AudioQueueItemUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutAudioQueuesNestedInput
  }

  export type AudioQueueItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioQueueItemCreateManyInput = {
    id?: number
    guildId: string
    position: number
    title: string
    url: string
    thumbnail?: string | null
    requestedBy: string
    durationSec?: number | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AudioQueueItemUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioQueueItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    actorId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    guildId: string
    actorId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    guildId: string
    actorId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    profiles?: UserProfileCreateNestedManyWithoutAuthUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profiles?: UserProfileUncheckedCreateNestedManyWithoutAuthUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profiles?: UserProfileUpdateManyWithoutAuthUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profiles?: UserProfileUncheckedUpdateManyWithoutAuthUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type LevelConfigListRelationFilter = {
    every?: LevelConfigWhereInput
    some?: LevelConfigWhereInput
    none?: LevelConfigWhereInput
  }

  export type StoreItemListRelationFilter = {
    every?: StoreItemWhereInput
    some?: StoreItemWhereInput
    none?: StoreItemWhereInput
  }

  export type ModerationActionListRelationFilter = {
    every?: ModerationActionWhereInput
    some?: ModerationActionWhereInput
    none?: ModerationActionWhereInput
  }

  export type AudioQueueItemListRelationFilter = {
    every?: AudioQueueItemWhereInput
    some?: AudioQueueItemWhereInput
    none?: AudioQueueItemWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type UserProfileListRelationFilter = {
    every?: UserProfileWhereInput
    some?: UserProfileWhereInput
    none?: UserProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModerationActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AudioQueueItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildSettingCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    locale?: SortOrder
    staffRoleIds?: SortOrder
    ticketCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuildSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GuildSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    locale?: SortOrder
    staffRoleIds?: SortOrder
    ticketCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuildSettingMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    locale?: SortOrder
    staffRoleIds?: SortOrder
    ticketCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuildSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GuildSettingRelationFilter = {
    is?: GuildSettingWhereInput
    isNot?: GuildSettingWhereInput
  }

  export type TicketMessageListRelationFilter = {
    every?: TicketMessageWhereInput
    some?: TicketMessageWhereInput
    none?: TicketMessageWhereInput
  }

  export type TicketMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TicketRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketMessageCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
  }

  export type TicketMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
  }

  export type EconomyTransactionListRelationFilter = {
    every?: EconomyTransactionWhereInput
    some?: EconomyTransactionWhereInput
    none?: EconomyTransactionWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EconomyTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    balance?: SortOrder
    inventory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authUserId?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    balance?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    balance?: SortOrder
    inventory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authUserId?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    balance?: SortOrder
    inventory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authUserId?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    balance?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LevelConfigGuildIdLevelCompoundUniqueInput = {
    guildId: string
    level: number
  }

  export type LevelConfigCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    requiredXp?: SortOrder
    rewardRoleId?: SortOrder
    rewardItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    requiredXp?: SortOrder
    rewardItemId?: SortOrder
  }

  export type LevelConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    requiredXp?: SortOrder
    rewardRoleId?: SortOrder
    rewardItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelConfigMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    level?: SortOrder
    requiredXp?: SortOrder
    rewardRoleId?: SortOrder
    rewardItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelConfigSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    requiredXp?: SortOrder
    rewardItemId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type UserProfileRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type EconomyTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    guildId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EconomyTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    amount?: SortOrder
  }

  export type EconomyTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    guildId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EconomyTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    guildId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EconomyTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    amount?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StoreItemCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreItemAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type StoreItemMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreItemMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreItemSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ModerationActionCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    durationMinutes?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ModerationActionAvgOrderByAggregateInput = {
    id?: SortOrder
    durationMinutes?: SortOrder
  }

  export type ModerationActionMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    durationMinutes?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ModerationActionMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    durationMinutes?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ModerationActionSumOrderByAggregateInput = {
    id?: SortOrder
    durationMinutes?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AudioQueueItemGuildIdPositionCompoundUniqueInput = {
    guildId: string
    position: number
  }

  export type AudioQueueItemCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    position?: SortOrder
    title?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    requestedBy?: SortOrder
    durationSec?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioQueueItemAvgOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    durationSec?: SortOrder
  }

  export type AudioQueueItemMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    position?: SortOrder
    title?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    requestedBy?: SortOrder
    durationSec?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioQueueItemMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    position?: SortOrder
    title?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    requestedBy?: SortOrder
    durationSec?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioQueueItemSumOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    durationSec?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TicketCreateNestedManyWithoutGuildInput = {
    create?: XOR<TicketCreateWithoutGuildInput, TicketUncheckedCreateWithoutGuildInput> | TicketCreateWithoutGuildInput[] | TicketUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutGuildInput | TicketCreateOrConnectWithoutGuildInput[]
    createMany?: TicketCreateManyGuildInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type LevelConfigCreateNestedManyWithoutGuildInput = {
    create?: XOR<LevelConfigCreateWithoutGuildInput, LevelConfigUncheckedCreateWithoutGuildInput> | LevelConfigCreateWithoutGuildInput[] | LevelConfigUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: LevelConfigCreateOrConnectWithoutGuildInput | LevelConfigCreateOrConnectWithoutGuildInput[]
    createMany?: LevelConfigCreateManyGuildInputEnvelope
    connect?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
  }

  export type StoreItemCreateNestedManyWithoutGuildInput = {
    create?: XOR<StoreItemCreateWithoutGuildInput, StoreItemUncheckedCreateWithoutGuildInput> | StoreItemCreateWithoutGuildInput[] | StoreItemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: StoreItemCreateOrConnectWithoutGuildInput | StoreItemCreateOrConnectWithoutGuildInput[]
    createMany?: StoreItemCreateManyGuildInputEnvelope
    connect?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
  }

  export type ModerationActionCreateNestedManyWithoutGuildInput = {
    create?: XOR<ModerationActionCreateWithoutGuildInput, ModerationActionUncheckedCreateWithoutGuildInput> | ModerationActionCreateWithoutGuildInput[] | ModerationActionUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModerationActionCreateOrConnectWithoutGuildInput | ModerationActionCreateOrConnectWithoutGuildInput[]
    createMany?: ModerationActionCreateManyGuildInputEnvelope
    connect?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
  }

  export type AudioQueueItemCreateNestedManyWithoutGuildInput = {
    create?: XOR<AudioQueueItemCreateWithoutGuildInput, AudioQueueItemUncheckedCreateWithoutGuildInput> | AudioQueueItemCreateWithoutGuildInput[] | AudioQueueItemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AudioQueueItemCreateOrConnectWithoutGuildInput | AudioQueueItemCreateOrConnectWithoutGuildInput[]
    createMany?: AudioQueueItemCreateManyGuildInputEnvelope
    connect?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutGuildInput = {
    create?: XOR<AuditLogCreateWithoutGuildInput, AuditLogUncheckedCreateWithoutGuildInput> | AuditLogCreateWithoutGuildInput[] | AuditLogUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutGuildInput | AuditLogCreateOrConnectWithoutGuildInput[]
    createMany?: AuditLogCreateManyGuildInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UserProfileCreateNestedManyWithoutGuildInput = {
    create?: XOR<UserProfileCreateWithoutGuildInput, UserProfileUncheckedCreateWithoutGuildInput> | UserProfileCreateWithoutGuildInput[] | UserProfileUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutGuildInput | UserProfileCreateOrConnectWithoutGuildInput[]
    createMany?: UserProfileCreateManyGuildInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<TicketCreateWithoutGuildInput, TicketUncheckedCreateWithoutGuildInput> | TicketCreateWithoutGuildInput[] | TicketUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutGuildInput | TicketCreateOrConnectWithoutGuildInput[]
    createMany?: TicketCreateManyGuildInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type LevelConfigUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<LevelConfigCreateWithoutGuildInput, LevelConfigUncheckedCreateWithoutGuildInput> | LevelConfigCreateWithoutGuildInput[] | LevelConfigUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: LevelConfigCreateOrConnectWithoutGuildInput | LevelConfigCreateOrConnectWithoutGuildInput[]
    createMany?: LevelConfigCreateManyGuildInputEnvelope
    connect?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
  }

  export type StoreItemUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<StoreItemCreateWithoutGuildInput, StoreItemUncheckedCreateWithoutGuildInput> | StoreItemCreateWithoutGuildInput[] | StoreItemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: StoreItemCreateOrConnectWithoutGuildInput | StoreItemCreateOrConnectWithoutGuildInput[]
    createMany?: StoreItemCreateManyGuildInputEnvelope
    connect?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
  }

  export type ModerationActionUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<ModerationActionCreateWithoutGuildInput, ModerationActionUncheckedCreateWithoutGuildInput> | ModerationActionCreateWithoutGuildInput[] | ModerationActionUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModerationActionCreateOrConnectWithoutGuildInput | ModerationActionCreateOrConnectWithoutGuildInput[]
    createMany?: ModerationActionCreateManyGuildInputEnvelope
    connect?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
  }

  export type AudioQueueItemUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<AudioQueueItemCreateWithoutGuildInput, AudioQueueItemUncheckedCreateWithoutGuildInput> | AudioQueueItemCreateWithoutGuildInput[] | AudioQueueItemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AudioQueueItemCreateOrConnectWithoutGuildInput | AudioQueueItemCreateOrConnectWithoutGuildInput[]
    createMany?: AudioQueueItemCreateManyGuildInputEnvelope
    connect?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<AuditLogCreateWithoutGuildInput, AuditLogUncheckedCreateWithoutGuildInput> | AuditLogCreateWithoutGuildInput[] | AuditLogUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutGuildInput | AuditLogCreateOrConnectWithoutGuildInput[]
    createMany?: AuditLogCreateManyGuildInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<UserProfileCreateWithoutGuildInput, UserProfileUncheckedCreateWithoutGuildInput> | UserProfileCreateWithoutGuildInput[] | UserProfileUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutGuildInput | UserProfileCreateOrConnectWithoutGuildInput[]
    createMany?: UserProfileCreateManyGuildInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
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

  export type TicketUpdateManyWithoutGuildNestedInput = {
    create?: XOR<TicketCreateWithoutGuildInput, TicketUncheckedCreateWithoutGuildInput> | TicketCreateWithoutGuildInput[] | TicketUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutGuildInput | TicketCreateOrConnectWithoutGuildInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutGuildInput | TicketUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: TicketCreateManyGuildInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutGuildInput | TicketUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutGuildInput | TicketUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type LevelConfigUpdateManyWithoutGuildNestedInput = {
    create?: XOR<LevelConfigCreateWithoutGuildInput, LevelConfigUncheckedCreateWithoutGuildInput> | LevelConfigCreateWithoutGuildInput[] | LevelConfigUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: LevelConfigCreateOrConnectWithoutGuildInput | LevelConfigCreateOrConnectWithoutGuildInput[]
    upsert?: LevelConfigUpsertWithWhereUniqueWithoutGuildInput | LevelConfigUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: LevelConfigCreateManyGuildInputEnvelope
    set?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
    disconnect?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
    delete?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
    connect?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
    update?: LevelConfigUpdateWithWhereUniqueWithoutGuildInput | LevelConfigUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: LevelConfigUpdateManyWithWhereWithoutGuildInput | LevelConfigUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: LevelConfigScalarWhereInput | LevelConfigScalarWhereInput[]
  }

  export type StoreItemUpdateManyWithoutGuildNestedInput = {
    create?: XOR<StoreItemCreateWithoutGuildInput, StoreItemUncheckedCreateWithoutGuildInput> | StoreItemCreateWithoutGuildInput[] | StoreItemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: StoreItemCreateOrConnectWithoutGuildInput | StoreItemCreateOrConnectWithoutGuildInput[]
    upsert?: StoreItemUpsertWithWhereUniqueWithoutGuildInput | StoreItemUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: StoreItemCreateManyGuildInputEnvelope
    set?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
    disconnect?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
    delete?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
    connect?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
    update?: StoreItemUpdateWithWhereUniqueWithoutGuildInput | StoreItemUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: StoreItemUpdateManyWithWhereWithoutGuildInput | StoreItemUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: StoreItemScalarWhereInput | StoreItemScalarWhereInput[]
  }

  export type ModerationActionUpdateManyWithoutGuildNestedInput = {
    create?: XOR<ModerationActionCreateWithoutGuildInput, ModerationActionUncheckedCreateWithoutGuildInput> | ModerationActionCreateWithoutGuildInput[] | ModerationActionUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModerationActionCreateOrConnectWithoutGuildInput | ModerationActionCreateOrConnectWithoutGuildInput[]
    upsert?: ModerationActionUpsertWithWhereUniqueWithoutGuildInput | ModerationActionUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: ModerationActionCreateManyGuildInputEnvelope
    set?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
    disconnect?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
    delete?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
    connect?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
    update?: ModerationActionUpdateWithWhereUniqueWithoutGuildInput | ModerationActionUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: ModerationActionUpdateManyWithWhereWithoutGuildInput | ModerationActionUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: ModerationActionScalarWhereInput | ModerationActionScalarWhereInput[]
  }

  export type AudioQueueItemUpdateManyWithoutGuildNestedInput = {
    create?: XOR<AudioQueueItemCreateWithoutGuildInput, AudioQueueItemUncheckedCreateWithoutGuildInput> | AudioQueueItemCreateWithoutGuildInput[] | AudioQueueItemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AudioQueueItemCreateOrConnectWithoutGuildInput | AudioQueueItemCreateOrConnectWithoutGuildInput[]
    upsert?: AudioQueueItemUpsertWithWhereUniqueWithoutGuildInput | AudioQueueItemUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: AudioQueueItemCreateManyGuildInputEnvelope
    set?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
    disconnect?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
    delete?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
    connect?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
    update?: AudioQueueItemUpdateWithWhereUniqueWithoutGuildInput | AudioQueueItemUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: AudioQueueItemUpdateManyWithWhereWithoutGuildInput | AudioQueueItemUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: AudioQueueItemScalarWhereInput | AudioQueueItemScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutGuildNestedInput = {
    create?: XOR<AuditLogCreateWithoutGuildInput, AuditLogUncheckedCreateWithoutGuildInput> | AuditLogCreateWithoutGuildInput[] | AuditLogUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutGuildInput | AuditLogCreateOrConnectWithoutGuildInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutGuildInput | AuditLogUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: AuditLogCreateManyGuildInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutGuildInput | AuditLogUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutGuildInput | AuditLogUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserProfileUpdateManyWithoutGuildNestedInput = {
    create?: XOR<UserProfileCreateWithoutGuildInput, UserProfileUncheckedCreateWithoutGuildInput> | UserProfileCreateWithoutGuildInput[] | UserProfileUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutGuildInput | UserProfileCreateOrConnectWithoutGuildInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutGuildInput | UserProfileUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: UserProfileCreateManyGuildInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutGuildInput | UserProfileUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutGuildInput | UserProfileUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<TicketCreateWithoutGuildInput, TicketUncheckedCreateWithoutGuildInput> | TicketCreateWithoutGuildInput[] | TicketUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutGuildInput | TicketCreateOrConnectWithoutGuildInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutGuildInput | TicketUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: TicketCreateManyGuildInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutGuildInput | TicketUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutGuildInput | TicketUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type LevelConfigUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<LevelConfigCreateWithoutGuildInput, LevelConfigUncheckedCreateWithoutGuildInput> | LevelConfigCreateWithoutGuildInput[] | LevelConfigUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: LevelConfigCreateOrConnectWithoutGuildInput | LevelConfigCreateOrConnectWithoutGuildInput[]
    upsert?: LevelConfigUpsertWithWhereUniqueWithoutGuildInput | LevelConfigUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: LevelConfigCreateManyGuildInputEnvelope
    set?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
    disconnect?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
    delete?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
    connect?: LevelConfigWhereUniqueInput | LevelConfigWhereUniqueInput[]
    update?: LevelConfigUpdateWithWhereUniqueWithoutGuildInput | LevelConfigUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: LevelConfigUpdateManyWithWhereWithoutGuildInput | LevelConfigUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: LevelConfigScalarWhereInput | LevelConfigScalarWhereInput[]
  }

  export type StoreItemUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<StoreItemCreateWithoutGuildInput, StoreItemUncheckedCreateWithoutGuildInput> | StoreItemCreateWithoutGuildInput[] | StoreItemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: StoreItemCreateOrConnectWithoutGuildInput | StoreItemCreateOrConnectWithoutGuildInput[]
    upsert?: StoreItemUpsertWithWhereUniqueWithoutGuildInput | StoreItemUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: StoreItemCreateManyGuildInputEnvelope
    set?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
    disconnect?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
    delete?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
    connect?: StoreItemWhereUniqueInput | StoreItemWhereUniqueInput[]
    update?: StoreItemUpdateWithWhereUniqueWithoutGuildInput | StoreItemUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: StoreItemUpdateManyWithWhereWithoutGuildInput | StoreItemUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: StoreItemScalarWhereInput | StoreItemScalarWhereInput[]
  }

  export type ModerationActionUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<ModerationActionCreateWithoutGuildInput, ModerationActionUncheckedCreateWithoutGuildInput> | ModerationActionCreateWithoutGuildInput[] | ModerationActionUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModerationActionCreateOrConnectWithoutGuildInput | ModerationActionCreateOrConnectWithoutGuildInput[]
    upsert?: ModerationActionUpsertWithWhereUniqueWithoutGuildInput | ModerationActionUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: ModerationActionCreateManyGuildInputEnvelope
    set?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
    disconnect?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
    delete?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
    connect?: ModerationActionWhereUniqueInput | ModerationActionWhereUniqueInput[]
    update?: ModerationActionUpdateWithWhereUniqueWithoutGuildInput | ModerationActionUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: ModerationActionUpdateManyWithWhereWithoutGuildInput | ModerationActionUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: ModerationActionScalarWhereInput | ModerationActionScalarWhereInput[]
  }

  export type AudioQueueItemUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<AudioQueueItemCreateWithoutGuildInput, AudioQueueItemUncheckedCreateWithoutGuildInput> | AudioQueueItemCreateWithoutGuildInput[] | AudioQueueItemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AudioQueueItemCreateOrConnectWithoutGuildInput | AudioQueueItemCreateOrConnectWithoutGuildInput[]
    upsert?: AudioQueueItemUpsertWithWhereUniqueWithoutGuildInput | AudioQueueItemUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: AudioQueueItemCreateManyGuildInputEnvelope
    set?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
    disconnect?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
    delete?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
    connect?: AudioQueueItemWhereUniqueInput | AudioQueueItemWhereUniqueInput[]
    update?: AudioQueueItemUpdateWithWhereUniqueWithoutGuildInput | AudioQueueItemUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: AudioQueueItemUpdateManyWithWhereWithoutGuildInput | AudioQueueItemUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: AudioQueueItemScalarWhereInput | AudioQueueItemScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<AuditLogCreateWithoutGuildInput, AuditLogUncheckedCreateWithoutGuildInput> | AuditLogCreateWithoutGuildInput[] | AuditLogUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutGuildInput | AuditLogCreateOrConnectWithoutGuildInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutGuildInput | AuditLogUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: AuditLogCreateManyGuildInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutGuildInput | AuditLogUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutGuildInput | AuditLogUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<UserProfileCreateWithoutGuildInput, UserProfileUncheckedCreateWithoutGuildInput> | UserProfileCreateWithoutGuildInput[] | UserProfileUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutGuildInput | UserProfileCreateOrConnectWithoutGuildInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutGuildInput | UserProfileUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: UserProfileCreateManyGuildInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutGuildInput | UserProfileUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutGuildInput | UserProfileUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type GuildSettingCreateNestedOneWithoutTicketsInput = {
    create?: XOR<GuildSettingCreateWithoutTicketsInput, GuildSettingUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutTicketsInput
    connect?: GuildSettingWhereUniqueInput
  }

  export type TicketMessageCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type TicketMessageUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type GuildSettingUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<GuildSettingCreateWithoutTicketsInput, GuildSettingUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutTicketsInput
    upsert?: GuildSettingUpsertWithoutTicketsInput
    connect?: GuildSettingWhereUniqueInput
    update?: XOR<XOR<GuildSettingUpdateToOneWithWhereWithoutTicketsInput, GuildSettingUpdateWithoutTicketsInput>, GuildSettingUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketMessageUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutMessagesInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    upsert?: TicketUpsertWithoutMessagesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutMessagesInput, TicketUpdateWithoutMessagesInput>, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type GuildSettingCreateNestedOneWithoutUserProfilesInput = {
    create?: XOR<GuildSettingCreateWithoutUserProfilesInput, GuildSettingUncheckedCreateWithoutUserProfilesInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutUserProfilesInput
    connect?: GuildSettingWhereUniqueInput
  }

  export type EconomyTransactionCreateNestedManyWithoutProfileInput = {
    create?: XOR<EconomyTransactionCreateWithoutProfileInput, EconomyTransactionUncheckedCreateWithoutProfileInput> | EconomyTransactionCreateWithoutProfileInput[] | EconomyTransactionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EconomyTransactionCreateOrConnectWithoutProfileInput | EconomyTransactionCreateOrConnectWithoutProfileInput[]
    createMany?: EconomyTransactionCreateManyProfileInputEnvelope
    connect?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProfilesInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type EconomyTransactionUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<EconomyTransactionCreateWithoutProfileInput, EconomyTransactionUncheckedCreateWithoutProfileInput> | EconomyTransactionCreateWithoutProfileInput[] | EconomyTransactionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EconomyTransactionCreateOrConnectWithoutProfileInput | EconomyTransactionCreateOrConnectWithoutProfileInput[]
    createMany?: EconomyTransactionCreateManyProfileInputEnvelope
    connect?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
  }

  export type GuildSettingUpdateOneRequiredWithoutUserProfilesNestedInput = {
    create?: XOR<GuildSettingCreateWithoutUserProfilesInput, GuildSettingUncheckedCreateWithoutUserProfilesInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutUserProfilesInput
    upsert?: GuildSettingUpsertWithoutUserProfilesInput
    connect?: GuildSettingWhereUniqueInput
    update?: XOR<XOR<GuildSettingUpdateToOneWithWhereWithoutUserProfilesInput, GuildSettingUpdateWithoutUserProfilesInput>, GuildSettingUncheckedUpdateWithoutUserProfilesInput>
  }

  export type EconomyTransactionUpdateManyWithoutProfileNestedInput = {
    create?: XOR<EconomyTransactionCreateWithoutProfileInput, EconomyTransactionUncheckedCreateWithoutProfileInput> | EconomyTransactionCreateWithoutProfileInput[] | EconomyTransactionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EconomyTransactionCreateOrConnectWithoutProfileInput | EconomyTransactionCreateOrConnectWithoutProfileInput[]
    upsert?: EconomyTransactionUpsertWithWhereUniqueWithoutProfileInput | EconomyTransactionUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: EconomyTransactionCreateManyProfileInputEnvelope
    set?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
    disconnect?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
    delete?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
    connect?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
    update?: EconomyTransactionUpdateWithWhereUniqueWithoutProfileInput | EconomyTransactionUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: EconomyTransactionUpdateManyWithWhereWithoutProfileInput | EconomyTransactionUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: EconomyTransactionScalarWhereInput | EconomyTransactionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutProfilesNestedInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    upsert?: UserUpsertWithoutProfilesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfilesInput, UserUpdateWithoutProfilesInput>, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type EconomyTransactionUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<EconomyTransactionCreateWithoutProfileInput, EconomyTransactionUncheckedCreateWithoutProfileInput> | EconomyTransactionCreateWithoutProfileInput[] | EconomyTransactionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EconomyTransactionCreateOrConnectWithoutProfileInput | EconomyTransactionCreateOrConnectWithoutProfileInput[]
    upsert?: EconomyTransactionUpsertWithWhereUniqueWithoutProfileInput | EconomyTransactionUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: EconomyTransactionCreateManyProfileInputEnvelope
    set?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
    disconnect?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
    delete?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
    connect?: EconomyTransactionWhereUniqueInput | EconomyTransactionWhereUniqueInput[]
    update?: EconomyTransactionUpdateWithWhereUniqueWithoutProfileInput | EconomyTransactionUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: EconomyTransactionUpdateManyWithWhereWithoutProfileInput | EconomyTransactionUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: EconomyTransactionScalarWhereInput | EconomyTransactionScalarWhereInput[]
  }

  export type GuildSettingCreateNestedOneWithoutLevelConfigsInput = {
    create?: XOR<GuildSettingCreateWithoutLevelConfigsInput, GuildSettingUncheckedCreateWithoutLevelConfigsInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutLevelConfigsInput
    connect?: GuildSettingWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GuildSettingUpdateOneRequiredWithoutLevelConfigsNestedInput = {
    create?: XOR<GuildSettingCreateWithoutLevelConfigsInput, GuildSettingUncheckedCreateWithoutLevelConfigsInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutLevelConfigsInput
    upsert?: GuildSettingUpsertWithoutLevelConfigsInput
    connect?: GuildSettingWhereUniqueInput
    update?: XOR<XOR<GuildSettingUpdateToOneWithWhereWithoutLevelConfigsInput, GuildSettingUpdateWithoutLevelConfigsInput>, GuildSettingUncheckedUpdateWithoutLevelConfigsInput>
  }

  export type UserProfileCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserProfileCreateWithoutTransactionsInput, UserProfileUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutTransactionsInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserProfileCreateWithoutTransactionsInput, UserProfileUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutTransactionsInput
    upsert?: UserProfileUpsertWithoutTransactionsInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutTransactionsInput, UserProfileUpdateWithoutTransactionsInput>, UserProfileUncheckedUpdateWithoutTransactionsInput>
  }

  export type GuildSettingCreateNestedOneWithoutStoreItemsInput = {
    create?: XOR<GuildSettingCreateWithoutStoreItemsInput, GuildSettingUncheckedCreateWithoutStoreItemsInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutStoreItemsInput
    connect?: GuildSettingWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GuildSettingUpdateOneRequiredWithoutStoreItemsNestedInput = {
    create?: XOR<GuildSettingCreateWithoutStoreItemsInput, GuildSettingUncheckedCreateWithoutStoreItemsInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutStoreItemsInput
    upsert?: GuildSettingUpsertWithoutStoreItemsInput
    connect?: GuildSettingWhereUniqueInput
    update?: XOR<XOR<GuildSettingUpdateToOneWithWhereWithoutStoreItemsInput, GuildSettingUpdateWithoutStoreItemsInput>, GuildSettingUncheckedUpdateWithoutStoreItemsInput>
  }

  export type GuildSettingCreateNestedOneWithoutModerationInput = {
    create?: XOR<GuildSettingCreateWithoutModerationInput, GuildSettingUncheckedCreateWithoutModerationInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutModerationInput
    connect?: GuildSettingWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GuildSettingUpdateOneRequiredWithoutModerationNestedInput = {
    create?: XOR<GuildSettingCreateWithoutModerationInput, GuildSettingUncheckedCreateWithoutModerationInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutModerationInput
    upsert?: GuildSettingUpsertWithoutModerationInput
    connect?: GuildSettingWhereUniqueInput
    update?: XOR<XOR<GuildSettingUpdateToOneWithWhereWithoutModerationInput, GuildSettingUpdateWithoutModerationInput>, GuildSettingUncheckedUpdateWithoutModerationInput>
  }

  export type GuildSettingCreateNestedOneWithoutAudioQueuesInput = {
    create?: XOR<GuildSettingCreateWithoutAudioQueuesInput, GuildSettingUncheckedCreateWithoutAudioQueuesInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutAudioQueuesInput
    connect?: GuildSettingWhereUniqueInput
  }

  export type GuildSettingUpdateOneRequiredWithoutAudioQueuesNestedInput = {
    create?: XOR<GuildSettingCreateWithoutAudioQueuesInput, GuildSettingUncheckedCreateWithoutAudioQueuesInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutAudioQueuesInput
    upsert?: GuildSettingUpsertWithoutAudioQueuesInput
    connect?: GuildSettingWhereUniqueInput
    update?: XOR<XOR<GuildSettingUpdateToOneWithWhereWithoutAudioQueuesInput, GuildSettingUpdateWithoutAudioQueuesInput>, GuildSettingUncheckedUpdateWithoutAudioQueuesInput>
  }

  export type GuildSettingCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<GuildSettingCreateWithoutAuditLogsInput, GuildSettingUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutAuditLogsInput
    connect?: GuildSettingWhereUniqueInput
  }

  export type GuildSettingUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<GuildSettingCreateWithoutAuditLogsInput, GuildSettingUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: GuildSettingCreateOrConnectWithoutAuditLogsInput
    upsert?: GuildSettingUpsertWithoutAuditLogsInput
    connect?: GuildSettingWhereUniqueInput
    update?: XOR<XOR<GuildSettingUpdateToOneWithWhereWithoutAuditLogsInput, GuildSettingUpdateWithoutAuditLogsInput>, GuildSettingUncheckedUpdateWithoutAuditLogsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserProfileCreateNestedManyWithoutAuthUserInput = {
    create?: XOR<UserProfileCreateWithoutAuthUserInput, UserProfileUncheckedCreateWithoutAuthUserInput> | UserProfileCreateWithoutAuthUserInput[] | UserProfileUncheckedCreateWithoutAuthUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthUserInput | UserProfileCreateOrConnectWithoutAuthUserInput[]
    createMany?: UserProfileCreateManyAuthUserInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedManyWithoutAuthUserInput = {
    create?: XOR<UserProfileCreateWithoutAuthUserInput, UserProfileUncheckedCreateWithoutAuthUserInput> | UserProfileCreateWithoutAuthUserInput[] | UserProfileUncheckedCreateWithoutAuthUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthUserInput | UserProfileCreateOrConnectWithoutAuthUserInput[]
    createMany?: UserProfileCreateManyAuthUserInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserProfileUpdateManyWithoutAuthUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutAuthUserInput, UserProfileUncheckedCreateWithoutAuthUserInput> | UserProfileCreateWithoutAuthUserInput[] | UserProfileUncheckedCreateWithoutAuthUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthUserInput | UserProfileCreateOrConnectWithoutAuthUserInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutAuthUserInput | UserProfileUpsertWithWhereUniqueWithoutAuthUserInput[]
    createMany?: UserProfileCreateManyAuthUserInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutAuthUserInput | UserProfileUpdateWithWhereUniqueWithoutAuthUserInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutAuthUserInput | UserProfileUpdateManyWithWhereWithoutAuthUserInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateManyWithoutAuthUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutAuthUserInput, UserProfileUncheckedCreateWithoutAuthUserInput> | UserProfileCreateWithoutAuthUserInput[] | UserProfileUncheckedCreateWithoutAuthUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthUserInput | UserProfileCreateOrConnectWithoutAuthUserInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutAuthUserInput | UserProfileUpsertWithWhereUniqueWithoutAuthUserInput[]
    createMany?: UserProfileCreateManyAuthUserInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutAuthUserInput | UserProfileUpdateWithWhereUniqueWithoutAuthUserInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutAuthUserInput | UserProfileUpdateManyWithWhereWithoutAuthUserInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TicketCreateWithoutGuildInput = {
    userId: string
    channelId: string
    category?: string | null
    priority?: string
    status?: string
    assignedTo?: string | null
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutGuildInput = {
    id?: number
    userId: string
    channelId: string
    category?: string | null
    priority?: string
    status?: string
    assignedTo?: string | null
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutGuildInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutGuildInput, TicketUncheckedCreateWithoutGuildInput>
  }

  export type TicketCreateManyGuildInputEnvelope = {
    data: TicketCreateManyGuildInput | TicketCreateManyGuildInput[]
  }

  export type LevelConfigCreateWithoutGuildInput = {
    level: number
    requiredXp: number
    rewardRoleId?: string | null
    rewardItemId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelConfigUncheckedCreateWithoutGuildInput = {
    id?: number
    level: number
    requiredXp: number
    rewardRoleId?: string | null
    rewardItemId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelConfigCreateOrConnectWithoutGuildInput = {
    where: LevelConfigWhereUniqueInput
    create: XOR<LevelConfigCreateWithoutGuildInput, LevelConfigUncheckedCreateWithoutGuildInput>
  }

  export type LevelConfigCreateManyGuildInputEnvelope = {
    data: LevelConfigCreateManyGuildInput | LevelConfigCreateManyGuildInput[]
  }

  export type StoreItemCreateWithoutGuildInput = {
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    payload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreItemUncheckedCreateWithoutGuildInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    payload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreItemCreateOrConnectWithoutGuildInput = {
    where: StoreItemWhereUniqueInput
    create: XOR<StoreItemCreateWithoutGuildInput, StoreItemUncheckedCreateWithoutGuildInput>
  }

  export type StoreItemCreateManyGuildInputEnvelope = {
    data: StoreItemCreateManyGuildInput | StoreItemCreateManyGuildInput[]
  }

  export type ModerationActionCreateWithoutGuildInput = {
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    durationMinutes?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ModerationActionUncheckedCreateWithoutGuildInput = {
    id?: number
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    durationMinutes?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ModerationActionCreateOrConnectWithoutGuildInput = {
    where: ModerationActionWhereUniqueInput
    create: XOR<ModerationActionCreateWithoutGuildInput, ModerationActionUncheckedCreateWithoutGuildInput>
  }

  export type ModerationActionCreateManyGuildInputEnvelope = {
    data: ModerationActionCreateManyGuildInput | ModerationActionCreateManyGuildInput[]
  }

  export type AudioQueueItemCreateWithoutGuildInput = {
    position: number
    title: string
    url: string
    thumbnail?: string | null
    requestedBy: string
    durationSec?: number | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AudioQueueItemUncheckedCreateWithoutGuildInput = {
    id?: number
    position: number
    title: string
    url: string
    thumbnail?: string | null
    requestedBy: string
    durationSec?: number | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AudioQueueItemCreateOrConnectWithoutGuildInput = {
    where: AudioQueueItemWhereUniqueInput
    create: XOR<AudioQueueItemCreateWithoutGuildInput, AudioQueueItemUncheckedCreateWithoutGuildInput>
  }

  export type AudioQueueItemCreateManyGuildInputEnvelope = {
    data: AudioQueueItemCreateManyGuildInput | AudioQueueItemCreateManyGuildInput[]
  }

  export type AuditLogCreateWithoutGuildInput = {
    actorId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutGuildInput = {
    id?: number
    actorId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutGuildInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutGuildInput, AuditLogUncheckedCreateWithoutGuildInput>
  }

  export type AuditLogCreateManyGuildInputEnvelope = {
    data: AuditLogCreateManyGuildInput | AuditLogCreateManyGuildInput[]
  }

  export type UserProfileCreateWithoutGuildInput = {
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: EconomyTransactionCreateNestedManyWithoutProfileInput
    authUser?: UserCreateNestedOneWithoutProfilesInput
  }

  export type UserProfileUncheckedCreateWithoutGuildInput = {
    id?: number
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authUserId?: string | null
    transactions?: EconomyTransactionUncheckedCreateNestedManyWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutGuildInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutGuildInput, UserProfileUncheckedCreateWithoutGuildInput>
  }

  export type UserProfileCreateManyGuildInputEnvelope = {
    data: UserProfileCreateManyGuildInput | UserProfileCreateManyGuildInput[]
  }

  export type TicketUpsertWithWhereUniqueWithoutGuildInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutGuildInput, TicketUncheckedUpdateWithoutGuildInput>
    create: XOR<TicketCreateWithoutGuildInput, TicketUncheckedCreateWithoutGuildInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutGuildInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutGuildInput, TicketUncheckedUpdateWithoutGuildInput>
  }

  export type TicketUpdateManyWithWhereWithoutGuildInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutGuildInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    guildId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    channelId?: StringFilter<"Ticket"> | string
    category?: StringNullableFilter<"Ticket"> | string | null
    priority?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    assignedTo?: StringNullableFilter<"Ticket"> | string | null
    metadata?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type LevelConfigUpsertWithWhereUniqueWithoutGuildInput = {
    where: LevelConfigWhereUniqueInput
    update: XOR<LevelConfigUpdateWithoutGuildInput, LevelConfigUncheckedUpdateWithoutGuildInput>
    create: XOR<LevelConfigCreateWithoutGuildInput, LevelConfigUncheckedCreateWithoutGuildInput>
  }

  export type LevelConfigUpdateWithWhereUniqueWithoutGuildInput = {
    where: LevelConfigWhereUniqueInput
    data: XOR<LevelConfigUpdateWithoutGuildInput, LevelConfigUncheckedUpdateWithoutGuildInput>
  }

  export type LevelConfigUpdateManyWithWhereWithoutGuildInput = {
    where: LevelConfigScalarWhereInput
    data: XOR<LevelConfigUpdateManyMutationInput, LevelConfigUncheckedUpdateManyWithoutGuildInput>
  }

  export type LevelConfigScalarWhereInput = {
    AND?: LevelConfigScalarWhereInput | LevelConfigScalarWhereInput[]
    OR?: LevelConfigScalarWhereInput[]
    NOT?: LevelConfigScalarWhereInput | LevelConfigScalarWhereInput[]
    id?: IntFilter<"LevelConfig"> | number
    guildId?: StringFilter<"LevelConfig"> | string
    level?: IntFilter<"LevelConfig"> | number
    requiredXp?: IntFilter<"LevelConfig"> | number
    rewardRoleId?: StringNullableFilter<"LevelConfig"> | string | null
    rewardItemId?: IntNullableFilter<"LevelConfig"> | number | null
    createdAt?: DateTimeFilter<"LevelConfig"> | Date | string
    updatedAt?: DateTimeFilter<"LevelConfig"> | Date | string
  }

  export type StoreItemUpsertWithWhereUniqueWithoutGuildInput = {
    where: StoreItemWhereUniqueInput
    update: XOR<StoreItemUpdateWithoutGuildInput, StoreItemUncheckedUpdateWithoutGuildInput>
    create: XOR<StoreItemCreateWithoutGuildInput, StoreItemUncheckedCreateWithoutGuildInput>
  }

  export type StoreItemUpdateWithWhereUniqueWithoutGuildInput = {
    where: StoreItemWhereUniqueInput
    data: XOR<StoreItemUpdateWithoutGuildInput, StoreItemUncheckedUpdateWithoutGuildInput>
  }

  export type StoreItemUpdateManyWithWhereWithoutGuildInput = {
    where: StoreItemScalarWhereInput
    data: XOR<StoreItemUpdateManyMutationInput, StoreItemUncheckedUpdateManyWithoutGuildInput>
  }

  export type StoreItemScalarWhereInput = {
    AND?: StoreItemScalarWhereInput | StoreItemScalarWhereInput[]
    OR?: StoreItemScalarWhereInput[]
    NOT?: StoreItemScalarWhereInput | StoreItemScalarWhereInput[]
    id?: IntFilter<"StoreItem"> | number
    guildId?: StringFilter<"StoreItem"> | string
    name?: StringFilter<"StoreItem"> | string
    description?: StringNullableFilter<"StoreItem"> | string | null
    price?: IntFilter<"StoreItem"> | number
    isActive?: BoolFilter<"StoreItem"> | boolean
    payload?: StringNullableFilter<"StoreItem"> | string | null
    createdAt?: DateTimeFilter<"StoreItem"> | Date | string
    updatedAt?: DateTimeFilter<"StoreItem"> | Date | string
  }

  export type ModerationActionUpsertWithWhereUniqueWithoutGuildInput = {
    where: ModerationActionWhereUniqueInput
    update: XOR<ModerationActionUpdateWithoutGuildInput, ModerationActionUncheckedUpdateWithoutGuildInput>
    create: XOR<ModerationActionCreateWithoutGuildInput, ModerationActionUncheckedCreateWithoutGuildInput>
  }

  export type ModerationActionUpdateWithWhereUniqueWithoutGuildInput = {
    where: ModerationActionWhereUniqueInput
    data: XOR<ModerationActionUpdateWithoutGuildInput, ModerationActionUncheckedUpdateWithoutGuildInput>
  }

  export type ModerationActionUpdateManyWithWhereWithoutGuildInput = {
    where: ModerationActionScalarWhereInput
    data: XOR<ModerationActionUpdateManyMutationInput, ModerationActionUncheckedUpdateManyWithoutGuildInput>
  }

  export type ModerationActionScalarWhereInput = {
    AND?: ModerationActionScalarWhereInput | ModerationActionScalarWhereInput[]
    OR?: ModerationActionScalarWhereInput[]
    NOT?: ModerationActionScalarWhereInput | ModerationActionScalarWhereInput[]
    id?: IntFilter<"ModerationAction"> | number
    guildId?: StringFilter<"ModerationAction"> | string
    userId?: StringFilter<"ModerationAction"> | string
    moderatorId?: StringFilter<"ModerationAction"> | string
    type?: StringFilter<"ModerationAction"> | string
    reason?: StringNullableFilter<"ModerationAction"> | string | null
    durationMinutes?: IntNullableFilter<"ModerationAction"> | number | null
    expiresAt?: DateTimeNullableFilter<"ModerationAction"> | Date | string | null
    createdAt?: DateTimeFilter<"ModerationAction"> | Date | string
  }

  export type AudioQueueItemUpsertWithWhereUniqueWithoutGuildInput = {
    where: AudioQueueItemWhereUniqueInput
    update: XOR<AudioQueueItemUpdateWithoutGuildInput, AudioQueueItemUncheckedUpdateWithoutGuildInput>
    create: XOR<AudioQueueItemCreateWithoutGuildInput, AudioQueueItemUncheckedCreateWithoutGuildInput>
  }

  export type AudioQueueItemUpdateWithWhereUniqueWithoutGuildInput = {
    where: AudioQueueItemWhereUniqueInput
    data: XOR<AudioQueueItemUpdateWithoutGuildInput, AudioQueueItemUncheckedUpdateWithoutGuildInput>
  }

  export type AudioQueueItemUpdateManyWithWhereWithoutGuildInput = {
    where: AudioQueueItemScalarWhereInput
    data: XOR<AudioQueueItemUpdateManyMutationInput, AudioQueueItemUncheckedUpdateManyWithoutGuildInput>
  }

  export type AudioQueueItemScalarWhereInput = {
    AND?: AudioQueueItemScalarWhereInput | AudioQueueItemScalarWhereInput[]
    OR?: AudioQueueItemScalarWhereInput[]
    NOT?: AudioQueueItemScalarWhereInput | AudioQueueItemScalarWhereInput[]
    id?: IntFilter<"AudioQueueItem"> | number
    guildId?: StringFilter<"AudioQueueItem"> | string
    position?: IntFilter<"AudioQueueItem"> | number
    title?: StringFilter<"AudioQueueItem"> | string
    url?: StringFilter<"AudioQueueItem"> | string
    thumbnail?: StringNullableFilter<"AudioQueueItem"> | string | null
    requestedBy?: StringFilter<"AudioQueueItem"> | string
    durationSec?: IntNullableFilter<"AudioQueueItem"> | number | null
    metadata?: StringNullableFilter<"AudioQueueItem"> | string | null
    createdAt?: DateTimeFilter<"AudioQueueItem"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutGuildInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutGuildInput, AuditLogUncheckedUpdateWithoutGuildInput>
    create: XOR<AuditLogCreateWithoutGuildInput, AuditLogUncheckedCreateWithoutGuildInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutGuildInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutGuildInput, AuditLogUncheckedUpdateWithoutGuildInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutGuildInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutGuildInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    guildId?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserProfileUpsertWithWhereUniqueWithoutGuildInput = {
    where: UserProfileWhereUniqueInput
    update: XOR<UserProfileUpdateWithoutGuildInput, UserProfileUncheckedUpdateWithoutGuildInput>
    create: XOR<UserProfileCreateWithoutGuildInput, UserProfileUncheckedCreateWithoutGuildInput>
  }

  export type UserProfileUpdateWithWhereUniqueWithoutGuildInput = {
    where: UserProfileWhereUniqueInput
    data: XOR<UserProfileUpdateWithoutGuildInput, UserProfileUncheckedUpdateWithoutGuildInput>
  }

  export type UserProfileUpdateManyWithWhereWithoutGuildInput = {
    where: UserProfileScalarWhereInput
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyWithoutGuildInput>
  }

  export type UserProfileScalarWhereInput = {
    AND?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    OR?: UserProfileScalarWhereInput[]
    NOT?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    guildId?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    experience?: IntFilter<"UserProfile"> | number
    level?: IntFilter<"UserProfile"> | number
    balance?: IntFilter<"UserProfile"> | number
    inventory?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    authUserId?: StringNullableFilter<"UserProfile"> | string | null
  }

  export type GuildSettingCreateWithoutTicketsInput = {
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    levelConfigs?: LevelConfigCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingUncheckedCreateWithoutTicketsInput = {
    id?: number
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    levelConfigs?: LevelConfigUncheckedCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemUncheckedCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionUncheckedCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemUncheckedCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingCreateOrConnectWithoutTicketsInput = {
    where: GuildSettingWhereUniqueInput
    create: XOR<GuildSettingCreateWithoutTicketsInput, GuildSettingUncheckedCreateWithoutTicketsInput>
  }

  export type TicketMessageCreateWithoutTicketInput = {
    authorId: string
    content: string
    attachments?: string | null
    createdAt?: Date | string
  }

  export type TicketMessageUncheckedCreateWithoutTicketInput = {
    id?: number
    authorId: string
    content: string
    attachments?: string | null
    createdAt?: Date | string
  }

  export type TicketMessageCreateOrConnectWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageCreateManyTicketInputEnvelope = {
    data: TicketMessageCreateManyTicketInput | TicketMessageCreateManyTicketInput[]
  }

  export type GuildSettingUpsertWithoutTicketsInput = {
    update: XOR<GuildSettingUpdateWithoutTicketsInput, GuildSettingUncheckedUpdateWithoutTicketsInput>
    create: XOR<GuildSettingCreateWithoutTicketsInput, GuildSettingUncheckedCreateWithoutTicketsInput>
    where?: GuildSettingWhereInput
  }

  export type GuildSettingUpdateToOneWithWhereWithoutTicketsInput = {
    where?: GuildSettingWhereInput
    data: XOR<GuildSettingUpdateWithoutTicketsInput, GuildSettingUncheckedUpdateWithoutTicketsInput>
  }

  export type GuildSettingUpdateWithoutTicketsInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    levelConfigs?: LevelConfigUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    levelConfigs?: LevelConfigUncheckedUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUncheckedUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUncheckedUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUncheckedUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type TicketMessageUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    update: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    data: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
  }

  export type TicketMessageUpdateManyWithWhereWithoutTicketInput = {
    where: TicketMessageScalarWhereInput
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketMessageScalarWhereInput = {
    AND?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    OR?: TicketMessageScalarWhereInput[]
    NOT?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    id?: IntFilter<"TicketMessage"> | number
    ticketId?: IntFilter<"TicketMessage"> | number
    authorId?: StringFilter<"TicketMessage"> | string
    content?: StringFilter<"TicketMessage"> | string
    attachments?: StringNullableFilter<"TicketMessage"> | string | null
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
  }

  export type TicketCreateWithoutMessagesInput = {
    userId: string
    channelId: string
    category?: string | null
    priority?: string
    status?: string
    assignedTo?: string | null
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutMessagesInput = {
    id?: number
    guildId: string
    userId: string
    channelId: string
    category?: string | null
    priority?: string
    status?: string
    assignedTo?: string | null
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutMessagesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
  }

  export type TicketUpsertWithoutMessagesInput = {
    update: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutMessagesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type TicketUpdateWithoutMessagesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildSettingCreateWithoutUserProfilesInput = {
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingUncheckedCreateWithoutUserProfilesInput = {
    id?: number
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigUncheckedCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemUncheckedCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionUncheckedCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemUncheckedCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingCreateOrConnectWithoutUserProfilesInput = {
    where: GuildSettingWhereUniqueInput
    create: XOR<GuildSettingCreateWithoutUserProfilesInput, GuildSettingUncheckedCreateWithoutUserProfilesInput>
  }

  export type EconomyTransactionCreateWithoutProfileInput = {
    guildId: string
    amount: number
    type?: string
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EconomyTransactionUncheckedCreateWithoutProfileInput = {
    id?: number
    guildId: string
    amount: number
    type?: string
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EconomyTransactionCreateOrConnectWithoutProfileInput = {
    where: EconomyTransactionWhereUniqueInput
    create: XOR<EconomyTransactionCreateWithoutProfileInput, EconomyTransactionUncheckedCreateWithoutProfileInput>
  }

  export type EconomyTransactionCreateManyProfileInputEnvelope = {
    data: EconomyTransactionCreateManyProfileInput | EconomyTransactionCreateManyProfileInput[]
  }

  export type UserCreateWithoutProfilesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfilesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
  }

  export type GuildSettingUpsertWithoutUserProfilesInput = {
    update: XOR<GuildSettingUpdateWithoutUserProfilesInput, GuildSettingUncheckedUpdateWithoutUserProfilesInput>
    create: XOR<GuildSettingCreateWithoutUserProfilesInput, GuildSettingUncheckedCreateWithoutUserProfilesInput>
    where?: GuildSettingWhereInput
  }

  export type GuildSettingUpdateToOneWithWhereWithoutUserProfilesInput = {
    where?: GuildSettingWhereInput
    data: XOR<GuildSettingUpdateWithoutUserProfilesInput, GuildSettingUncheckedUpdateWithoutUserProfilesInput>
  }

  export type GuildSettingUpdateWithoutUserProfilesInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingUncheckedUpdateWithoutUserProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUncheckedUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUncheckedUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUncheckedUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUncheckedUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type EconomyTransactionUpsertWithWhereUniqueWithoutProfileInput = {
    where: EconomyTransactionWhereUniqueInput
    update: XOR<EconomyTransactionUpdateWithoutProfileInput, EconomyTransactionUncheckedUpdateWithoutProfileInput>
    create: XOR<EconomyTransactionCreateWithoutProfileInput, EconomyTransactionUncheckedCreateWithoutProfileInput>
  }

  export type EconomyTransactionUpdateWithWhereUniqueWithoutProfileInput = {
    where: EconomyTransactionWhereUniqueInput
    data: XOR<EconomyTransactionUpdateWithoutProfileInput, EconomyTransactionUncheckedUpdateWithoutProfileInput>
  }

  export type EconomyTransactionUpdateManyWithWhereWithoutProfileInput = {
    where: EconomyTransactionScalarWhereInput
    data: XOR<EconomyTransactionUpdateManyMutationInput, EconomyTransactionUncheckedUpdateManyWithoutProfileInput>
  }

  export type EconomyTransactionScalarWhereInput = {
    AND?: EconomyTransactionScalarWhereInput | EconomyTransactionScalarWhereInput[]
    OR?: EconomyTransactionScalarWhereInput[]
    NOT?: EconomyTransactionScalarWhereInput | EconomyTransactionScalarWhereInput[]
    id?: IntFilter<"EconomyTransaction"> | number
    profileId?: IntFilter<"EconomyTransaction"> | number
    guildId?: StringFilter<"EconomyTransaction"> | string
    amount?: IntFilter<"EconomyTransaction"> | number
    type?: StringFilter<"EconomyTransaction"> | string
    description?: StringNullableFilter<"EconomyTransaction"> | string | null
    metadata?: StringNullableFilter<"EconomyTransaction"> | string | null
    createdAt?: DateTimeFilter<"EconomyTransaction"> | Date | string
  }

  export type UserUpsertWithoutProfilesInput = {
    update: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type UserUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GuildSettingCreateWithoutLevelConfigsInput = {
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingUncheckedCreateWithoutLevelConfigsInput = {
    id?: number
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemUncheckedCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionUncheckedCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemUncheckedCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingCreateOrConnectWithoutLevelConfigsInput = {
    where: GuildSettingWhereUniqueInput
    create: XOR<GuildSettingCreateWithoutLevelConfigsInput, GuildSettingUncheckedCreateWithoutLevelConfigsInput>
  }

  export type GuildSettingUpsertWithoutLevelConfigsInput = {
    update: XOR<GuildSettingUpdateWithoutLevelConfigsInput, GuildSettingUncheckedUpdateWithoutLevelConfigsInput>
    create: XOR<GuildSettingCreateWithoutLevelConfigsInput, GuildSettingUncheckedCreateWithoutLevelConfigsInput>
    where?: GuildSettingWhereInput
  }

  export type GuildSettingUpdateToOneWithWhereWithoutLevelConfigsInput = {
    where?: GuildSettingWhereInput
    data: XOR<GuildSettingUpdateWithoutLevelConfigsInput, GuildSettingUncheckedUpdateWithoutLevelConfigsInput>
  }

  export type GuildSettingUpdateWithoutLevelConfigsInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingUncheckedUpdateWithoutLevelConfigsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUncheckedUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUncheckedUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUncheckedUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type UserProfileCreateWithoutTransactionsInput = {
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutUserProfilesInput
    authUser?: UserCreateNestedOneWithoutProfilesInput
  }

  export type UserProfileUncheckedCreateWithoutTransactionsInput = {
    id?: number
    guildId: string
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authUserId?: string | null
  }

  export type UserProfileCreateOrConnectWithoutTransactionsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutTransactionsInput, UserProfileUncheckedCreateWithoutTransactionsInput>
  }

  export type UserProfileUpsertWithoutTransactionsInput = {
    update: XOR<UserProfileUpdateWithoutTransactionsInput, UserProfileUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserProfileCreateWithoutTransactionsInput, UserProfileUncheckedCreateWithoutTransactionsInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutTransactionsInput, UserProfileUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserProfileUpdateWithoutTransactionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutUserProfilesNestedInput
    authUser?: UserUpdateOneWithoutProfilesNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildSettingCreateWithoutStoreItemsInput = {
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingUncheckedCreateWithoutStoreItemsInput = {
    id?: number
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigUncheckedCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionUncheckedCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemUncheckedCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingCreateOrConnectWithoutStoreItemsInput = {
    where: GuildSettingWhereUniqueInput
    create: XOR<GuildSettingCreateWithoutStoreItemsInput, GuildSettingUncheckedCreateWithoutStoreItemsInput>
  }

  export type GuildSettingUpsertWithoutStoreItemsInput = {
    update: XOR<GuildSettingUpdateWithoutStoreItemsInput, GuildSettingUncheckedUpdateWithoutStoreItemsInput>
    create: XOR<GuildSettingCreateWithoutStoreItemsInput, GuildSettingUncheckedCreateWithoutStoreItemsInput>
    where?: GuildSettingWhereInput
  }

  export type GuildSettingUpdateToOneWithWhereWithoutStoreItemsInput = {
    where?: GuildSettingWhereInput
    data: XOR<GuildSettingUpdateWithoutStoreItemsInput, GuildSettingUncheckedUpdateWithoutStoreItemsInput>
  }

  export type GuildSettingUpdateWithoutStoreItemsInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingUncheckedUpdateWithoutStoreItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUncheckedUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUncheckedUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUncheckedUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingCreateWithoutModerationInput = {
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingUncheckedCreateWithoutModerationInput = {
    id?: number
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigUncheckedCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemUncheckedCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemUncheckedCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingCreateOrConnectWithoutModerationInput = {
    where: GuildSettingWhereUniqueInput
    create: XOR<GuildSettingCreateWithoutModerationInput, GuildSettingUncheckedCreateWithoutModerationInput>
  }

  export type GuildSettingUpsertWithoutModerationInput = {
    update: XOR<GuildSettingUpdateWithoutModerationInput, GuildSettingUncheckedUpdateWithoutModerationInput>
    create: XOR<GuildSettingCreateWithoutModerationInput, GuildSettingUncheckedCreateWithoutModerationInput>
    where?: GuildSettingWhereInput
  }

  export type GuildSettingUpdateToOneWithWhereWithoutModerationInput = {
    where?: GuildSettingWhereInput
    data: XOR<GuildSettingUpdateWithoutModerationInput, GuildSettingUncheckedUpdateWithoutModerationInput>
  }

  export type GuildSettingUpdateWithoutModerationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingUncheckedUpdateWithoutModerationInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUncheckedUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUncheckedUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUncheckedUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingCreateWithoutAudioQueuesInput = {
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingUncheckedCreateWithoutAudioQueuesInput = {
    id?: number
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigUncheckedCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemUncheckedCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionUncheckedCreateNestedManyWithoutGuildInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingCreateOrConnectWithoutAudioQueuesInput = {
    where: GuildSettingWhereUniqueInput
    create: XOR<GuildSettingCreateWithoutAudioQueuesInput, GuildSettingUncheckedCreateWithoutAudioQueuesInput>
  }

  export type GuildSettingUpsertWithoutAudioQueuesInput = {
    update: XOR<GuildSettingUpdateWithoutAudioQueuesInput, GuildSettingUncheckedUpdateWithoutAudioQueuesInput>
    create: XOR<GuildSettingCreateWithoutAudioQueuesInput, GuildSettingUncheckedCreateWithoutAudioQueuesInput>
    where?: GuildSettingWhereInput
  }

  export type GuildSettingUpdateToOneWithWhereWithoutAudioQueuesInput = {
    where?: GuildSettingWhereInput
    data: XOR<GuildSettingUpdateWithoutAudioQueuesInput, GuildSettingUncheckedUpdateWithoutAudioQueuesInput>
  }

  export type GuildSettingUpdateWithoutAudioQueuesInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingUncheckedUpdateWithoutAudioQueuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUncheckedUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUncheckedUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUncheckedUpdateManyWithoutGuildNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingCreateWithoutAuditLogsInput = {
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingUncheckedCreateWithoutAuditLogsInput = {
    id?: number
    guildId: string
    locale?: string | null
    staffRoleIds?: string | null
    ticketCategory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutGuildInput
    levelConfigs?: LevelConfigUncheckedCreateNestedManyWithoutGuildInput
    storeItems?: StoreItemUncheckedCreateNestedManyWithoutGuildInput
    moderation?: ModerationActionUncheckedCreateNestedManyWithoutGuildInput
    audioQueues?: AudioQueueItemUncheckedCreateNestedManyWithoutGuildInput
    userProfiles?: UserProfileUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildSettingCreateOrConnectWithoutAuditLogsInput = {
    where: GuildSettingWhereUniqueInput
    create: XOR<GuildSettingCreateWithoutAuditLogsInput, GuildSettingUncheckedCreateWithoutAuditLogsInput>
  }

  export type GuildSettingUpsertWithoutAuditLogsInput = {
    update: XOR<GuildSettingUpdateWithoutAuditLogsInput, GuildSettingUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<GuildSettingCreateWithoutAuditLogsInput, GuildSettingUncheckedCreateWithoutAuditLogsInput>
    where?: GuildSettingWhereInput
  }

  export type GuildSettingUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: GuildSettingWhereInput
    data: XOR<GuildSettingUpdateWithoutAuditLogsInput, GuildSettingUncheckedUpdateWithoutAuditLogsInput>
  }

  export type GuildSettingUpdateWithoutAuditLogsInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUpdateManyWithoutGuildNestedInput
  }

  export type GuildSettingUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    staffRoleIds?: NullableStringFieldUpdateOperationsInput | string | null
    ticketCategory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutGuildNestedInput
    levelConfigs?: LevelConfigUncheckedUpdateManyWithoutGuildNestedInput
    storeItems?: StoreItemUncheckedUpdateManyWithoutGuildNestedInput
    moderation?: ModerationActionUncheckedUpdateManyWithoutGuildNestedInput
    audioQueues?: AudioQueueItemUncheckedUpdateManyWithoutGuildNestedInput
    userProfiles?: UserProfileUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type UserProfileCreateWithoutAuthUserInput = {
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildSettingCreateNestedOneWithoutUserProfilesInput
    transactions?: EconomyTransactionCreateNestedManyWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutAuthUserInput = {
    id?: number
    guildId: string
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: EconomyTransactionUncheckedCreateNestedManyWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutAuthUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutAuthUserInput, UserProfileUncheckedCreateWithoutAuthUserInput>
  }

  export type UserProfileCreateManyAuthUserInputEnvelope = {
    data: UserProfileCreateManyAuthUserInput | UserProfileCreateManyAuthUserInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserProfileUpsertWithWhereUniqueWithoutAuthUserInput = {
    where: UserProfileWhereUniqueInput
    update: XOR<UserProfileUpdateWithoutAuthUserInput, UserProfileUncheckedUpdateWithoutAuthUserInput>
    create: XOR<UserProfileCreateWithoutAuthUserInput, UserProfileUncheckedCreateWithoutAuthUserInput>
  }

  export type UserProfileUpdateWithWhereUniqueWithoutAuthUserInput = {
    where: UserProfileWhereUniqueInput
    data: XOR<UserProfileUpdateWithoutAuthUserInput, UserProfileUncheckedUpdateWithoutAuthUserInput>
  }

  export type UserProfileUpdateManyWithWhereWithoutAuthUserInput = {
    where: UserProfileScalarWhereInput
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyWithoutAuthUserInput>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    profiles?: UserProfileCreateNestedManyWithoutAuthUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profiles?: UserProfileUncheckedCreateNestedManyWithoutAuthUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profiles?: UserProfileUpdateManyWithoutAuthUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profiles?: UserProfileUncheckedUpdateManyWithoutAuthUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    profiles?: UserProfileCreateNestedManyWithoutAuthUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profiles?: UserProfileUncheckedCreateNestedManyWithoutAuthUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profiles?: UserProfileUpdateManyWithoutAuthUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profiles?: UserProfileUncheckedUpdateManyWithoutAuthUserNestedInput
  }

  export type TicketCreateManyGuildInput = {
    id?: number
    userId: string
    channelId: string
    category?: string | null
    priority?: string
    status?: string
    assignedTo?: string | null
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelConfigCreateManyGuildInput = {
    id?: number
    level: number
    requiredXp: number
    rewardRoleId?: string | null
    rewardItemId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreItemCreateManyGuildInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    payload?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModerationActionCreateManyGuildInput = {
    id?: number
    userId: string
    moderatorId: string
    type: string
    reason?: string | null
    durationMinutes?: number | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AudioQueueItemCreateManyGuildInput = {
    id?: number
    position: number
    title: string
    url: string
    thumbnail?: string | null
    requestedBy: string
    durationSec?: number | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyGuildInput = {
    id?: number
    actorId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type UserProfileCreateManyGuildInput = {
    id?: number
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authUserId?: string | null
  }

  export type TicketUpdateWithoutGuildInput = {
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelConfigUpdateWithoutGuildInput = {
    level?: IntFieldUpdateOperationsInput | number
    requiredXp?: IntFieldUpdateOperationsInput | number
    rewardRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    rewardItemId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelConfigUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    requiredXp?: IntFieldUpdateOperationsInput | number
    rewardRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    rewardItemId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelConfigUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    requiredXp?: IntFieldUpdateOperationsInput | number
    rewardRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    rewardItemId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreItemUpdateWithoutGuildInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreItemUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreItemUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationActionUpdateWithoutGuildInput = {
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationActionUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModerationActionUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioQueueItemUpdateWithoutGuildInput = {
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioQueueItemUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioQueueItemUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutGuildInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUpdateWithoutGuildInput = {
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: EconomyTransactionUpdateManyWithoutProfileNestedInput
    authUser?: UserUpdateOneWithoutProfilesNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: EconomyTransactionUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketMessageCreateManyTicketInput = {
    id?: number
    authorId: string
    content: string
    attachments?: string | null
    createdAt?: Date | string
  }

  export type TicketMessageUpdateWithoutTicketInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyTransactionCreateManyProfileInput = {
    id?: number
    guildId: string
    amount: number
    type?: string
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EconomyTransactionUpdateWithoutProfileInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyTransactionUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyTransactionUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type UserProfileCreateManyAuthUserInput = {
    id?: number
    guildId: string
    userId: string
    experience?: number
    level?: number
    balance?: number
    inventory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUpdateWithoutAuthUserInput = {
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildSettingUpdateOneRequiredWithoutUserProfilesNestedInput
    transactions?: EconomyTransactionUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutAuthUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: EconomyTransactionUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateManyWithoutAuthUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    guildId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use GuildSettingCountOutputTypeDefaultArgs instead
     */
    export type GuildSettingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuildSettingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketCountOutputTypeDefaultArgs instead
     */
    export type TicketCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProfileCountOutputTypeDefaultArgs instead
     */
    export type UserProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GuildSettingDefaultArgs instead
     */
    export type GuildSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuildSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketDefaultArgs instead
     */
    export type TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketMessageDefaultArgs instead
     */
    export type TicketMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProfileDefaultArgs instead
     */
    export type UserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LevelConfigDefaultArgs instead
     */
    export type LevelConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LevelConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EconomyTransactionDefaultArgs instead
     */
    export type EconomyTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EconomyTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreItemDefaultArgs instead
     */
    export type StoreItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModerationActionDefaultArgs instead
     */
    export type ModerationActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModerationActionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AudioQueueItemDefaultArgs instead
     */
    export type AudioQueueItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AudioQueueItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>

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