import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { shade } from 'polished'
import { months } from '../../mocks'

import { Container } from './styles'
import { Transaction, useTransactions } from '../../hooks/transactions'

interface MonthIterator {
  [key: number]: Transaction[]
}

interface Month {
  value: number
  label: string
}

const BarChart: React.FC = () => {

  const { transactions, getSummary } = useTransactions()

  const [balancebyMonth, setBalanceByMonth] = useState<number[]>([])

  useEffect(() => {
    const transactionsByMonth = transactions.map(transaction => {
      const month = new Date(transaction.createdAt).getMonth() + 1
      
      return { 
        ...transaction,
        month
      }
    }).reduce((month: MonthIterator, transaction) => { 

      month[transaction.month] = [
        ...month[transaction.month] || [],
        transaction
      ] 
      
      return month
    }, [])

    const balances = months.map((month: Month) => {
      if (transactionsByMonth[month.value]) {
        return getSummary(transactionsByMonth[month.value]).balance
      } else {
        return 0
      }
    })

    setBalanceByMonth(balances)

    console.log( balances )
    
  }, [transactions, getSummary])

  const data = {
    labels: months.map(month => month.label),
    datasets: [
      {
        label: 'Balanço por mês',
        backgroundColor: '#9C69E2',
        hoverBackgroundColor: shade(0.2, '#9C69E2'),
        data: balancebyMonth
      }
    ]
  }

  return (
    <Container>
       <Bar
          data={data}
          width={100}
          height={50}
        />
    </Container>
  )
}

export default BarChart