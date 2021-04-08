import React from 'react'

import { ToastProvider } from './toast'
import { TransactionsProvider } from './transactions'

const AppProvider: React.FC = ({ children }) => {
  return (
    <TransactionsProvider>
      <ToastProvider>
        {children}
      </ToastProvider>  
    </TransactionsProvider>
  )
}

export default AppProvider