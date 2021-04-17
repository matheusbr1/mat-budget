import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { currencyToNumber } from '../utils/formatters'

export interface Transaction {
  id: number
  description: string
  value: string
  category: string
  type: 'income' | 'expense'
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface Summary {
  incomes: number
  expenses: number
  balance: number
}

interface TransactionContext {
  transactions: Transaction[]
  selectedMonthTransactions: Transaction[]
  selectedMonthSummary: Summary

  createTransaction(transaction: TransactionInput): Promise<void>
  getSummary(transactions: Transaction[]): Summary

  month: number
  setMonth(month: number): void
}

const TransactionsContext = createContext({} as TransactionContext)

const TransactionsProvider: React.FC = ({ children }) => {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const [month, setMonth] = useState(new Date().getMonth() + 1)

  const [selectedMonthTransactions, setSelectedMonthTransactions] = useState<Transaction[]>([])

  const [selectedMonthSummary, setSelectedMonthSummary] = useState({
    incomes: 0,
    expenses: 0,
    balance: 0
  })
  
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

    setSelectedMonthTransactions(state => ([
      ...state,
      newTransaction
    ]))
  }, [])

  const getSummary = useCallback((transactions: Transaction[]) => {
    return transactions.reduce((accumulator, transaction) => {

      const value = currencyToNumber(transaction.value) ?? 0

      if (transaction.type === 'income') {
        accumulator.incomes += value
        accumulator.balance += value
      } else {
        accumulator.expenses += value
        accumulator.balance -= value
      }

      return accumulator
    }, {
      incomes: 0,
      expenses: 0,
      balance: 0
    })
  }, [])

  useEffect(() => {
    api.get('/transactions').then(response => {
      setTransactions(response.data.transactions)
    })
  }, [])

  useEffect(() => {
    api.get('/transactions', {
      params: { month } 
    }).then(response => {
      setSelectedMonthTransactions(response.data.transactions)
      setSelectedMonthSummary(getSummary(response.data.transactions))
    })
  }, [month, getSummary])

  return (
    <TransactionsContext.Provider value={{ 
      transactions,
      selectedMonthTransactions,
      selectedMonthSummary,
      
      createTransaction,
      getSummary,
      
      month, 
      setMonth
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