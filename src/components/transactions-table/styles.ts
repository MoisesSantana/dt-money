import { styled } from 'styled-components';

export const TransactionsTableContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-radius: 6px 0px 0px 6px;
    }

    &:last-child {
      border-radius: 0px 6px 6px 0px;
    }
  }
`;

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ variant, theme }) => (
    variant === 'income' ? (
      theme['green-300']
      ) : (
        theme['red-300']
      )
  )};
`;