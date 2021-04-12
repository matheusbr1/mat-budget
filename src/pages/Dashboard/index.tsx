import React, { useCallback, useMemo, useState } from 'react'
import { MenuItem } from '@material-ui/core'

import Card from '../../components/Card'
import ProfileCard from '../../components/ProfileCard'
import BalanceCard from '../../components/BalanceCard'
import TransactionsCard from '../../components/TransactionsCard'

import { Unregistered as Select } from '../../components/Select'
import NewTransaction from '../../components/Transaction'

import DoughnutChart from '../../components/DoughnutChart'
import BarChart from '../../components/BarChart'

import currencyIcon from '../../assets/icons/currency.svg'
import incomeIcon from '../../assets/icons/income.svg'
import expenseIcon from '../../assets/icons/expense.svg'

import { Container, TopInfosGrid, CardsGrid, Grid } from './styles'

import { mouths } from '../../mocks'
import { Transaction, useTransactions } from '../../hooks/transactions';
import { currencyToNumber, numberToCurrency } from '../../utils/formatters';

const Dashboard: React.FC = () => {
  
  const [month, setMonth] = useState('Janeiro')

  const { transactions } = useTransactions()

  const handleSelect = useCallback((e) => {
    setMonth(e.target.value)
  },[])

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

  const currentMonthSummary = useMemo(() => {
    const currentMonth = new Date().getMonth()

    const currentMonthTransactions = transactions.filter(
      transaction => new Date(transaction.createdAt).getMonth() === currentMonth
    )

    return getSummary(currentMonthTransactions)
  }, [transactions, getSummary]) 

  
  const lastMonthSummary = useMemo(() => {
    const lastMonth = new Date().getMonth() - 1

    const lastMonthTransactions = transactions.filter(
      transaction => new Date(transaction.createdAt).getMonth() === lastMonth
    )

    return getSummary(lastMonthTransactions)
  }, [transactions, getSummary]) 
  
  return (
    <Container>

      <NewTransaction />

      <TopInfosGrid className="top-infos" >

        <div className="title">
          <h1>Dashboard</h1>
          <span>MatBudget</span>
        </div>

        <Select 
          value={month} 
          onChange={handleSelect} 
          style={{ width: '95%', padding: 4 }}
          >
          {mouths.map(month => (
            <MenuItem value={month} key={month} style={{ fontSize: '1.6rem' }}>
              { month }
            </MenuItem>
          ))}
        </Select>

        <ProfileCard />
      </TopInfosGrid>

      <CardsGrid className="cards" >
        <Card 
          type="balance" 
          value={numberToCurrency(currentMonthSummary.balance)}
          label="Meu Saldo Atual"
          icon={currencyIcon}
        />
        
        <Card 
          type="income"
          value={numberToCurrency(currentMonthSummary.incomes)}
          label="Minhas Receitas" 
          icon={incomeIcon} 
        />
        
        <Card 
          type="expense" 
          value={numberToCurrency(currentMonthSummary.expenses)}
          label="Minhas Dispesas" 
          icon={expenseIcon} 
        />

        <Card 
          type="balance" 
          value={numberToCurrency(lastMonthSummary.balance)}
          label="Balanço do último mês" 
          icon={currencyIcon} 
        />
      </CardsGrid>

      <Grid>
        <BarChart />

        <BalanceCard />

        <TransactionsCard />

        <div className="doughnutChartsContainer">
          <DoughnutChart label="Receitas por categoria" />
          <DoughnutChart label="Despesas por categoria" />
        </div>
        
      </Grid>

    </Container>
  )
}

export default Dashboard