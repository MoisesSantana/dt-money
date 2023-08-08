import { useForm } from 'react-hook-form';

import { SearchFormContainer } from './styles';

import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import * as zod from 'zod';

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormSchemaType = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchTransactions(data: SearchFormSchemaType) {
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />  
        Buscar
      </button>
    </SearchFormContainer>
  );
}