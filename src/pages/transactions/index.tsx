import { Header } from '@/components/header';
import { Summary } from '@/components/summary';
import { TransactionsTable } from '@/components/transactions-table';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsTable />
    </div>
  );
}