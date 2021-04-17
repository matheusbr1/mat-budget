import React, { useEffect, useState } from 'react'
import { useTransactions } from '../../hooks/transactions'
import { numberToCurrency } from '../../utils/formatters'
import Dot from '../Dot'

import { Container } from './styles'

const BalanceCard: React.FC = () => {
  
  const { selectedMonthSummary } = useTransactions()

  const { incomes, expenses, balance } = selectedMonthSummary

  const categorys = [
    {
      id: 1,
      label: 'Receitas',
      color: 'var(--purple)',
      value: numberToCurrency(incomes)
    },
    {
      id: 2,
      label: 'Despesas',
      color: 'var(--orange)',
      value: numberToCurrency(expenses)
    },
    {
      id: 3,
      label: 'Balanço',
      color: 'var(--green)',
      value: numberToCurrency(balance)
    }
  ]

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => setLoading(false), 1000)
  }, [selectedMonthSummary])

  return (
    <Container>
      <div className='title'>
        <h2>Balanço mensal</h2>
      </div>

      <div className="categorys">
          {
            categorys.map((category, index) => (
              <div className="line" key={index}>
                <div>
                  <Dot color={category.color} />
                  <p> {category.label} </p>
                </div>
                <p>  { loading ? 'Carregando ... ' : category.value} </p>
              </div>
            ))
          }
        </div>
    </Container>
  )
}

export default BalanceCard