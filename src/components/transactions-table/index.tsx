
import { useEffect, useState } from 'react';

import { Transaction } from '@/interfaces/transactions';

import { PriceHighlight, Table } from './styles';

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/transactions');
      const data = await response.json();
      setTransactions(data);
    })();
  }), [];

  return (
    <Table>
      <tbody>
        {
          transactions.map(transaction => (
            <tr key={transaction.id}>
              <td width='45%'>{transaction.description}</td>
              <td><PriceHighlight variant={transaction.type}>{transaction.price}</PriceHighlight></td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}