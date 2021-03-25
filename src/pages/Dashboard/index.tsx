import React, { useCallback, useState } from 'react'
import { MenuItem } from '@material-ui/core';

import Card from '../../components/Card'
import ProfileCard from '../../components/ProfileCard'
import BalanceCard from '../../components/BalanceCard'
import TransactionsCard from '../../components/TransactionsCard'

import Select from '../../components/Select'
import Movimentation from '../../components/Movimentation'

import DoughnutChart from '../../components/DoughnutChart'
import BarChart from '../../components/BarChart'

import currencyIcon from '../../assets/icons/currency.svg'
import incomeIcon from '../../assets/icons/income.svg'
import expenseIcon from '../../assets/icons/expense.svg'

import { Container, TopInfosGrid, CardsGrid, Grid } from './styles'

import { mouths } from '../../mocks'

const Dashboard: React.FC = () => {
  
  const [month, setMonth] = useState('Janeiro')

  const handleSelect = useCallback((e) => {
    setMonth(e.target.value)
  },[])

  return (
    <Container>

      <Movimentation />

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
          value="105.501,75" 
          label="Meu Saldo Atual"
          icon={currencyIcon}
        />
        
        <Card 
          type="income"
          value="5.815,00" 
          label="Minhas Receitas" 
          icon={incomeIcon} 
        />
        
        <Card 
          type="expense" 
          value="1.793,23" 
          label="Minhas Dispesas" 
          icon={expenseIcon} 
        />

        <Card 
          type="balance" 
          value="1.793,23" 
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