
import { PriceHighlight, Table } from './styles';

import { dateFormatter, priceFormatter } from '@/utils/formatter';

import { useContextSelector } from 'use-context-selector';

import { TransactionsContext } from '../../contexts/TransactionsContext';

export function TransactionsTable() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,  
  );

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