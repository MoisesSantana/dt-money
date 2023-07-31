import { Header } from '@/components/header';
import { SearchForm } from '@/components/search-form';
import { Summary } from '@/components/summary';
import { TransactionsTable } from '@/components/transactions-table';

import { TransactionsContainer } from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable />
      </TransactionsContainer>
    </div>
  );
}