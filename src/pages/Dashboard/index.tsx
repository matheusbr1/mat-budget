import React from 'react'

import Card from '../../components/Card'

import currencyIcon from '../../assets/icons/currency.svg'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      
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

    </Container>
  )
}

export default Dashboard