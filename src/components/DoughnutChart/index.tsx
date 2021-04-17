import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import Dot from '../../components/Dot'
import { Transaction, useTransactions } from '../../hooks/transactions'
import { currencyToNumber, numberToCurrency } from '../../utils/formatters'
import { shade } from 'polished'

import { Container, WidhoutData } from './styles'

interface ChartProps {
  label: string
  type: 'incomes' | 'expenses'
}

interface Category {
  label: string
  color: string
  value: number
  percent: number
}

const someColors = [
  '#9C69E2',
  '#FFB800',
  '#FF4C61',
  '#33D69F',
]

const colors = someColors.concat(
  someColors.map(color => shade(0.2, color))
).concat(
  someColors.map(color => shade(0.5, color))
)

const DoughnutChart: React.FC<ChartProps> = ({ label, type }) => {

  const { selectedMonthTransactions, selectedMonthSummary } = useTransactions()

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const [categorys, setCategorys] = useState<Category[]>([])

  const [data, setData] = useState({})

  useEffect(() => {
    setTransactions(
      selectedMonthTransactions.filter(item => item.type === type.slice(0, -1))
    )
  },[selectedMonthTransactions, type])

  useEffect(() => {

    const transactionsByCategory = transactions.reduce((categorys: any, transaction: Transaction) => {

      categorys[transaction.category] = [
        ...categorys[transaction.category] || [],
        transaction
      ]

      return categorys
    }, {})

    const categoryValuesMerged = Object.values(transactionsByCategory).map((item: any) => {

      if(item.length > 1) {
        return item.reduce((accumulator: { value: number, category: string }, transaction: any) => {

          accumulator.value += currencyToNumber(transaction?.value)

          return accumulator
        },{
          category: item[0].category,
          value: 0
        })
      } else {
        return {
          category: item[0].category,
          value: currencyToNumber(item[0].value)
        }
      }
    }).map((item, index) => {

      console.log('Summary', selectedMonthSummary[type])

      console.log(item.value)

      return {
        label: item.category,
        color: colors[index],
        value: item.value,
        percent: Number((item.value / selectedMonthSummary[type] * 100).toFixed(2))
      }
    }) 

    console.log(categoryValuesMerged)

    setCategorys(categoryValuesMerged)

  }, [transactions, selectedMonthSummary, type])

  useEffect(() => {
    setData({
      labels: categorys.map(item => item.label),
      datasets: [{
        data: categorys.map(item => item.value),
        backgroundColor: categorys.map(item => item.color),
        hoverOffset: 4
      }]
    })
  }, [categorys])

  return (
    <Container>

      <div className="title" >
        <h2>{label}</h2>
      </div>  

      {
        !categorys.length ? (
          <WidhoutData>
            <h2>O mês selecionado não possui dados!</h2>
          </WidhoutData>
        ) : (
          <React.Fragment>
            <Doughnut
              data={data}
              width={100}
              height={50}
            />

            <div className="categoryInfos">
              {
                categorys.map((category, index) => (
                  <div className="line" key={index} >
                    <div>
                      <Dot color={category.color} />
                      <p>{category.label}</p>
                    </div>

                    <p> 
                      {numberToCurrency(category.value)}
                      <span>({category.percent}%)</span>
                    </p>
                  </div>
                ))
              }
            </div>
          </React.Fragment>
        )
      }
    </Container>
  )
}

export default DoughnutChart