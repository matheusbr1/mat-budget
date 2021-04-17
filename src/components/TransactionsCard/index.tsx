import React, { useMemo } from 'react'
import Dot from '../Dot'
import { useTransactions } from '../../hooks/transactions'

import { Container } from './styles'

const TransactionsCard: React.FC = () => {

  const { transactions } = useTransactions()

  const lastTransactions = useMemo(() => transactions.reverse(), [transactions])

  return (
    <Container>
      <div className='title'>
        <h2>Últimas Transações</h2>
      </div>

      <div className="transactions">
        {
          lastTransactions.map((transaction, index) => (
            <div className="line" key={index}>
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