import React from 'react'

import { Container, Infos } from './styles'

interface CardProps {
  value: string
  label: string
  icon: string
  type:  'balance' | 'income' | 'expense'
}

const Card: React.FC<CardProps> = ({ value, label, type, icon }) => {

  return (
    <Container type={type} >
      
      <div>
        <img src={icon} alt="Saldo Atual"/>
      </div>

      <Infos>
        <h3>R$ {value}</h3>
        
        <span>{label}</span>
      </Infos>
      
    </Container>
  )
}

export default Card