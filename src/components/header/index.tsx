import { HeaderContaier, HeaderContent, NewTransactionButton } from './styles';

import * as Dialog from '@radix-ui/react-dialog';

import { NewTransactionModal } from './new-transaction-modal';
export function Header() {
  return (
    <HeaderContaier>
      <HeaderContent>
        <img src="/logo.svg" alt="logo dt money" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContaier>
  );
}