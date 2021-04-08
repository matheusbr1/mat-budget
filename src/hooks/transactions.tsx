import { createContext, useCallback, useContext, useState } from 'react'

const TransactionsContext = createContext({})

const TransactionsProvider: React.FC = ({ children }) => {

  const [currentBalance, setcurrentBalance] = useState(0)

  const handleNewExpense = useCallback((value) => {
    setcurrentBalance(balance => balance - value)
  }, [])

  const handleNewIncome = useCallback((value) => {
    setcurrentBalance(balance => balance + value)
  }, [])

  return (
    <TransactionsContext.Provider value={{ currentBalance }} >
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