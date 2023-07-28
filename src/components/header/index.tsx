import { HeaderContaier, HeaderContent, NewTransactionButton } from './styles';

export function Header() {
  return (
    <HeaderContaier>
      <HeaderContent>
        <img src="/logo.svg" alt="logo dt money" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContaier>
  );
}