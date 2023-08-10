import { useCallback, useEffect, useState } from 'react';

import {
  CreateTransactionInput,
  Transaction,
  TransactionContextType,
  TransactionProviderProps
} from '@/interfaces/transactions';

import { createContext } from 'use-context-selector';

import { api } from '../lib/axios';

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        }
      });
  
      setTransactions(response.data);
    }, []
  );

  const createTransaction = useCallback(
    async (transaction: CreateTransactionInput) => {
      const response = await api.post('/transactions', {
        ...transaction, createdAt: new Date()
      });
  
      setTransactions(state => [response.data, ...state]);
    }, [],
  );

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}