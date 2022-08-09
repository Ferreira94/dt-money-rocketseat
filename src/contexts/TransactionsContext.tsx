import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface ITransactionProps {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface ICreateTransactionProps {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface ITransactionContextType {
  transactions: ITransactionProps[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: ICreateTransactionProps) => Promise<void>;
}

interface ITransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionContextType);

export function TransactionsProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionProps[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(response.data);
  }

  async function createTransaction(data: ICreateTransactionProps) {
    const { description, price, category, type } = data;

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
