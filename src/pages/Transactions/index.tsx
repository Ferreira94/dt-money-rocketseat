import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm/index";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";

interface ITransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((item) => {
              return (
                <tr key={item.id}>
                  <td width="50%">{item.description}</td>
                  <td>
                    <PriceHighlight variant={item.type}>
                      {item.price}
                    </PriceHighlight>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
