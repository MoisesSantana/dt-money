import { Controller, useForm } from 'react-hook-form';

import { CloseButton, DialogContent, DialogOverlay, TransactionType, TransactionTypeButton } from './styles';

import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useContextSelector } from 'use-context-selector';
import * as zod from 'zod';

import { TransactionsContext } from '../../../contexts/TransactionsContext';

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome'] as const),
});

type NewTransactionFormSchemaType = zod.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormSchemaType>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    }
  });

  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction
  );

  function handleCreateNewTransactions(data: NewTransactionFormSchemaType) {
    createTransaction(data);

    reset();
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <Dialog.Close asChild>
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </Dialog.Close>
        <form onSubmit={handleSubmit(handleCreateNewTransactions)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            { ...register('description') }
          />
          <input
            type="number"
            placeholder="Preço"
            required
            { ...register('price', { valueAsNumber: true }) }
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            { ...register('category') }
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType onValueChange={field.onChange} value={field.value}>
                <TransactionTypeButton variant='income' value='income'>
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant='outcome' value='outcome'>
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />
          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>

      </DialogContent>
    </Dialog.Portal>
  );
}