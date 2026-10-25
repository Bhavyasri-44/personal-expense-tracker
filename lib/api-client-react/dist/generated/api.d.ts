import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { HealthStatus, Transaction, TransactionInput, TransactionSummary } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListTransactionsUrl: () => string;
/**
 * @summary List transactions
 */
export declare const listTransactions: (options?: Parameters<typeof customFetch>[1]) => Promise<Transaction[]>;
export declare const getListTransactionsQueryKey: () => readonly ["/api/transactions"];
export declare const getListTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof listTransactions>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof listTransactions>>>;
export type ListTransactionsQueryError = ErrorType<void>;
/**
 * @summary List transactions
 */
export declare function useListTransactions<TData = Awaited<ReturnType<typeof listTransactions>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateTransactionUrl: () => string;
/**
 * @summary Record an income or expense
 */
export declare const createTransaction: (transactionInput: TransactionInput, options?: Parameters<typeof customFetch>[1]) => Promise<Transaction>;
export declare const getCreateTransactionMutationKey: () => readonly ["createTransaction"];
export declare const getCreateTransactionMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTransaction>>, TError, CreateTransactionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createTransaction>>, TError, CreateTransactionMutationVariables, TContext>;
export type CreateTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof createTransaction>>>;
export type CreateTransactionMutationBody = BodyType<TransactionInput>;
export type CreateTransactionMutationError = ErrorType<void>;
export type CreateTransactionMutationVariables = {
    data: BodyType<TransactionInput>;
};
/**
* @summary Record an income or expense
*/
export declare const useCreateTransaction: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTransaction>>, TError, CreateTransactionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createTransaction>>, TError, CreateTransactionMutationVariables, TContext>;
export declare const getDeleteTransactionUrl: (id: number) => string;
/**
 * @summary Delete a transaction
 */
export declare const deleteTransaction: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getDeleteTransactionMutationKey: () => readonly ["deleteTransaction"];
export declare const getDeleteTransactionMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTransaction>>, TError, DeleteTransactionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteTransaction>>, TError, DeleteTransactionMutationVariables, TContext>;
export type DeleteTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof deleteTransaction>>>;
export type DeleteTransactionMutationError = ErrorType<void>;
export type DeleteTransactionMutationVariables = {
    id: number;
};
/**
* @summary Delete a transaction
*/
export declare const useDeleteTransaction: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTransaction>>, TError, DeleteTransactionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteTransaction>>, TError, DeleteTransactionMutationVariables, TContext>;
export declare const getGetTransactionSummaryUrl: () => string;
/**
 * @summary Get dashboard totals and expense breakdown
 */
export declare const getTransactionSummary: (options?: Parameters<typeof customFetch>[1]) => Promise<TransactionSummary>;
export declare const getGetTransactionSummaryQueryKey: () => readonly ["/api/transactions/summary"];
export declare const getGetTransactionSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getTransactionSummary>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactionSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransactionSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getTransactionSummary>>>;
export type GetTransactionSummaryQueryError = ErrorType<void>;
/**
 * @summary Get dashboard totals and expense breakdown
 */
export declare function useGetTransactionSummary<TData = Awaited<ReturnType<typeof getTransactionSummary>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactionSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map