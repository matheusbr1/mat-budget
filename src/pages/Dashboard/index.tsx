import React, { useEffect, useState } from 'react'
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

import { months } from '../../mocks'
import { Transaction, useTransactions } from '../../hooks/transactions'
import { numberToCurrency } from '../../utils/formatters'
import { api } from '../../services/api'

interface Summary {
  incomes: number
  expenses: number
  balance: number
}

const Dashboard: React.FC = () => {
  
  const { 
    month, 
    setMonth, 
    getSummary, 
    transactions, 
    selectedMonthTransactions
  } = useTransactions()

  const [currentSummary, setCurrentSummary] = useState({} as Summary)

  const [lastMonthSummary, setLastMonthSummary] = useState({} as Summary)

  const [currentMonthIncomes, setCurrentMonthIncomes] = useState<Transaction[]>([])

  const [currentMonthExpenses, setCurrentMonthExpenses] = useState<Transaction[]>([])

  useEffect(() => {
    setCurrentMonthIncomes(
      selectedMonthTransactions.filter(item => item.type === 'income')
    )
    
    setCurrentMonthExpenses(
      selectedMonthTransactions.filter(item => item.type === 'expense')
    )
  }, [selectedMonthTransactions])

  useEffect(() => {
    setCurrentSummary(getSummary(transactions))
  }, [transactions, getSummary])

  useEffect(() => {
    api.get('/transactions', {
      params: { 
        month: new Date().getMonth()
      }
    }).then(response => setLastMonthSummary(getSummary(response.data.transactions)))
  }, [getSummary])
  
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
          onChange={e => setMonth(e.target.value)} 
          style={{ width: '95%', padding: 4 }}
          >
          {months.map((month, index) => (
            <MenuItem 
              key={index} 
              value={month.value} 
              style={{ fontSize: '1.6rem' }}
            >
              { month.label }
            </MenuItem>
          ))}
        </Select>

        <ProfileCard />
      </TopInfosGrid>

      <CardsGrid className="cards" >
        <Card 
          type="balance" 
          value={numberToCurrency(currentSummary.balance)}
          label="Meu Saldo Atual"
          icon={currencyIcon}
        />
        
        <Card 
          type="income"
          value={numberToCurrency(currentSummary.incomes)}
          label="Minhas Receitas" 
          icon={incomeIcon} 
        />
        
        <Card 
          type="expense" 
          value={numberToCurrency(currentSummary.expenses)}
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
          <DoughnutChart 
            label="Receitas por categoria" 
            transactions={currentMonthIncomes}
          />
          
          <DoughnutChart 
            label="Despesas por categoria" 
            transactions={currentMonthExpenses}
          />
        </div>
        
      </Grid>

    </Container>
  )
}

export default Dashboard