import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import Dot from '../../components/Dot'
import { Transaction } from '../../hooks/transactions'
import { currencyToNumber } from '../../utils/formatters'

import { Container, WidhoutData } from './styles'

interface ChartProps {
  label: string
  transactions: Transaction[]
}

interface Category {
  label: string,
  color: string,
  value: string,
  percent: number
}

const someColors = [
  '#9C69E2',
  '#FFB800',
  '#FF4C61',
  '#33D69F',
]

const colors = someColors.concat(someColors).concat(someColors)

const DoughnutChart: React.FC<ChartProps> = ({ label, transactions }) => {

  const [categorys, setCategorys] = useState<Category[]>([])

  const [data, setData] = useState({})

  useEffect(() => {

    setCategorys(transactions.map((item, index) => ({
      label: item.category,
      color: colors[index],
      value: item.value,
      percent: 50
    })))

  }, [transactions])

  useEffect(() => {
    setData({
      labels: categorys.map(item => item.label),
      datasets: [{
        data: categorys.map(item => currencyToNumber(item.value)),
        backgroundColor: categorys.map(item => item.color),
        hoverOffset: 4
      }]
    })
  }, [categorys])

  useEffect(() => {
    console.log(transactions, 'Pizza')
  }, [transactions])

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
                      {category.value}
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