import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export interface Transaction {
  id: number
  description: string
  value: string
  category: string
  type: 'income' | 'expense'
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContext {
  transactions: Transaction[]
  createTransaction(transaction: TransactionInput): Promise<void>
}

const TransactionsContext = createContext({} as TransactionContext)

const TransactionsProvider: React.FC = ({ children }) => {

  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  },[])

  const createTransaction = useCallback(async (transaction) => {
    const newTransaction = {
      ...transaction,
      createdAt: new Date()
    }

    await api.post('/transactions', newTransaction)

    setTransactions(state => ([
      ...state,
      newTransaction
    ]))
  },[])

  return (
    <TransactionsContext.Provider value={{ 
      transactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}

function useTransactions () {
  const context = useContext(TransactionsContext)

  if (!context)  {
    throw new Error (' useTransactions must be used within a TransactionsProvider')
  }

  return context
}

export { TransactionsProvider, useTransactions }