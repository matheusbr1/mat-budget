import React from 'react'
import { Bar } from 'react-chartjs-2'

import Card from '../../components/Card'
import ProfileCard from '../../components/ProfileCard'
import Select from '../../components/Select'
import Movimentation from '../../components/Movimentation'

import DoughnutChart from '../../components/DoughnutChart'
import BarChart from '../../components/BarChart'

import currencyIcon from '../../assets/icons/currency.svg'

import { Container, TopInfosGrid, CardsGrid } from './styles'


const Dashboard: React.FC = () => {
  return (
    <Container>

      <Movimentation />

      <TopInfosGrid className="top-infos" >

        <div className="title">
          <h1>Dashboard</h1>
          <span>MatBudget</span>
        </div>

        <Select />

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
          icon={currencyIcon} 
        />
        
        <Card 
          type="expense" 
          value="1.793,23" 
          label="Minhas Dispesas" 
          icon={currencyIcon} 
        />

        <Card 
          type="balance" 
          value="1.793,23" 
          label="Balanço do último mês" 
          icon={currencyIcon} 
        />
      </CardsGrid>
        <div className="wrapper">
          <BarChart />
          <DoughnutChart />
        </div>
    </Container>
  )
}

export default Dashboard