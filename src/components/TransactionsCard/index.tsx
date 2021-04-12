import React from 'react'
import Dot from '../Dot'
import { useTransactions } from '../../hooks/transactions'

import { Container } from './styles'

const TransactionsCard: React.FC = () => {

  const { transactions } = useTransactions()

  return (
    <Container>
      <div className='title'>
        <h2>Últimas Transações</h2>
      </div>

      <div className="transactions">
        {
          transactions.reverse().map(transaction => (
            <div className="line" key={transaction.id}>
              <div>
                
                <Dot 
                  color={
                    transaction.type === 'income' 
                      ? 'var(--green)' 
                      : 'var(--red)'
                  } 
                />
                
                <p>{transaction.description}</p>
              </div>
              <p> {transaction.value} </p>
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default TransactionsCard