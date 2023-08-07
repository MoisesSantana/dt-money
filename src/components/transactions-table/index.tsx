
import { useContext } from 'react';

import { PriceHighlight, Table } from './styles';

import { TransactionsContext } from 'src/contexts/TransactionsContext';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);
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