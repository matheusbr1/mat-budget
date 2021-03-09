import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import { Container, Dot } from './styles'

interface ChartProps {
  label: string
}

const DoughnutChart: React.FC<ChartProps> = ({ label }) => {

  const data = {
    datasets: [{
      data: [10, 20, 30],
    }]
  }

  const categorys = [
    {
      label: "Educação",
      color: 'var(--white-purple)',
      value: 300,
      percent: 50
    },
    {
      label: "Alimentação",
      color: 'var(--yellow)',
      value: 258,
      percent: 26
    },
    {
      label: "Lazer",
      color: 'var(--red)',
      value: 125,
      percent: 15
    },
    {
      label: "Outros",
      color: 'var(--green)',
      value: 12,
      percent: 2
    },
  ]

  return (
    <Container>

      <div className="title" >
        <h2>{label}</h2>
      </div>  

       <Doughnut
          data={data}
          width={100}
          height={50}
        />

        <div className="categoryInfos">

          {
            categorys.map(category => (
              <div className="line">
                <div>
                  <Dot color={category.color} />
                  <p>{category.label}</p>
                </div>

                <p> 
                  R$ {category.value},00
                  <span>({category.percent}%)</span>
                </p>
              </div>
            ))
          }
        </div>
    </Container>
  )
}

export default DoughnutChart