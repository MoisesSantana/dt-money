
import { useContext } from 'react';

import { PriceHighlight, Table } from './styles';

import { dateFormatter, priceFormatter } from '@/utils/formatter';

import { TransactionsContext } from '../../contexts/TransactionsContext';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Table>
      <tbody>
        {
          transactions.map(transaction => (
            <tr key={transaction.id}>
              <td width='45%'>{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price )}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}