import React, { useState } from 'react'
import Dot from '../Dot'

import { Container } from './styles'

const TransactionsCard: React.FC = () => {

  const [categorys] = useState(() => {
    const items = [
      {
        label: 'Mc Donald’s',
        color: 'var(--red)',
        value: '90,00'
      },
      {
        label: 'Salário',
        color: 'var(--green)',
        value: '5.090,00'
      },
      {
        label: 'Extra Uber',
        color: 'var(--green)',
        value: '890,00'
      }
    ]

    return items.concat(items.concat(items.concat(items.concat(items))))
  }) 

  return (
    <Container>
      <div className='title'>
        <h2>Últimas Transações</h2>
      </div>

      <div className="categorys">
          {
            categorys.map(category => (
              <div className="line">
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

export default TransactionsCard