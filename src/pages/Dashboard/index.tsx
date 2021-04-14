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

import { mouths } from '../../mocks'
import { useTransactions } from '../../hooks/transactions'
import { numberToCurrency } from '../../utils/formatters'
import { api } from '../../services/api'

interface Summary {
  incomes: number
  expenses: number
  balance: number
}

const Dashboard: React.FC = () => {
  
  const { month, setMonth, getSummary } = useTransactions()

  const [currentMonthSummary, setCurrentMonthSummary] = useState({} as Summary)

  const [lastMonthSummary, setLastMonthSummary] = useState({} as Summary)

  useEffect(() => {
    api.get('/transactions', {
      params: { 
        month: new Date().getMonth() + 1
      }
    }).then(response => setCurrentMonthSummary(getSummary(response.data.transactions)))
  }, [getSummary])

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
          {mouths.map(month => (
            <MenuItem 
              value={month.value} 
              key={month.value} 
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