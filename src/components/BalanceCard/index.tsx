import React from 'react'
import Dot from '../Dot'

import { Container } from './styles'

const BalanceCard: React.FC = () => {

  const categorys = [
    {
      id: 1,
      label: 'Receitas',
      color: 'var(--purple)',
      value: '10.501,75,00'
    },
    {
      id: 2,
      label: 'Despesas',
      color: 'var(--orange)',
      value: '3.921,35'
    },
    {
      id: 3,
      label: 'Balanço',
      color: 'var(--green)',
      value: '3.580,40'
    }
  ]

  return (
    <Container>
      <div className='title'>
        <h2>Balanço mensal</h2>
      </div>

      <div className="categorys">
          {
            categorys.map(category => (
              <div className="line" key={category.id}>
                <div>
                  <Dot color={category.color} />
                  <p>{category.label}</p>
                </div>
                <p> 
                  R$ {category.value}
                </p>
              </div>
            ))
          }
        </div>
    </Container>
  )
}

export default BalanceCard