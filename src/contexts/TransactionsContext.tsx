import { createContext, useEffect, useState } from 'react';

import {
  Transaction,
  TransactionContextType,
  TransactionProviderProps
} from '@/interfaces/transactions';

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/transactions');
      const data = await response.json();
      setTransactions(data);
    })();
  }), [];

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}