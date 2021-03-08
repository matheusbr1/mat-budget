import React from 'react'

import currencyIcon from '../../assets/icons/currency.svg'

import Card from '../../components/Card'
import ProfileCard from '../../components/ProfileCard'

import { Container, Row } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>

      <Row>

        <div className="title">
          <h1>Dashboard</h1>
          <span>MatBudget</span>
        </div>

        <div className="componentTest" >
          <h2>Nova movimentação</h2>
        </div>

        <div className="componentTest" >
          <h2>Seletor de mês</h2>
        </div>

        <ProfileCard />
      </Row>
      
      <Row>

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
      
      </Row>

    </Container>
  )
}

export default Dashboard