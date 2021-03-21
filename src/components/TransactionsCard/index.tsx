import React, { useState } from 'react'
import { transactionsList } from '../../mocks'
import Dot from '../Dot'

import { Container } from './styles'

const TransactionsCard: React.FC = () => {

  const [transactions] = useState(transactionsList) 

  return (
    <Container>
      <div className='title'>
        <h2>Últimas Transações</h2>
      </div>

      <div className="transactions">
          {
            transactions.map(transaction => (
              <div className="line" key={transaction.id} >
                <div>
                  <Dot color={transaction.color} />
                  <p>{transaction.label}</p>
                </div>
                <p> 
                  R$ {transaction.value}
                </p>
              </div>
            ))
          }
        </div>
    </Container>
  )
}

export default TransactionsCard