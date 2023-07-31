import { PriceHighlight, Table, TransactionsTableContainer } from './styles';

export function TransactionsTable() {
  return (
    <TransactionsTableContainer>
      <Table>
        <tbody>
          <tr>
            <td width='45%'>Xablau</td>
            <td><PriceHighlight variant='income'>R$ 22.002,22</PriceHighlight></td>
            <td>Lazer</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td width='45%'>Xablau</td>
            <td><PriceHighlight variant='outcome'>- R$ 22.002,22</PriceHighlight></td>
            <td>Lazer</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td width='45%'>Xablau</td>
            <td><PriceHighlight variant='income'>R$ 22.002,22</PriceHighlight></td>
            <td>Lazer</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td width='45%'>Xablau</td>
            <td><PriceHighlight variant='outcome'>- R$ 22.002,22</PriceHighlight></td>
            <td>Lazer</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td width='45%'>Xablau</td>
            <td><PriceHighlight variant='outcome'>- R$ 22.002,22</PriceHighlight></td>
            <td>Lazer</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td width='45%'>Xablau</td>
            <td><PriceHighlight variant='income'>R$ 22.002,22</PriceHighlight></td>
            <td>Lazer</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td width='45%'>Xablau</td>
            <td>
              <PriceHighlight variant='outcome'>- R$ 22.002,22</PriceHighlight>
            </td>
            <td>Lazer</td>
            <td>22/02/2022</td>
          </tr>
          <tr>
            <td width='45%'>Xablau</td>
            <td><PriceHighlight variant='income'>R$ 22.002,22</PriceHighlight></td>
            <td>Lazer</td>
            <td>22/02/2022</td>
          </tr>
        </tbody>
      </Table>
    </TransactionsTableContainer>
  );
}