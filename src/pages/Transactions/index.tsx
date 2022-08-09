import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm/index";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Salário</td>
              <td>
                <PriceHighlight variant="income">R$ 2.000,00</PriceHighlight>
              </td>
              <td>Rendimento</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Mercado</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 160,00</PriceHighlight>
              </td>
              <td>Compras</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
