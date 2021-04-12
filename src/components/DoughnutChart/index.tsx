import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Dot from '../../components/Dot'

import { Container } from './styles'

interface ChartProps {
  label: string
}

const DoughnutChart: React.FC<ChartProps> = ({ label }) => {

  const data = {
    labels: [
      'Educação',
      'Alimentação',
      'Lazer',
      'Outros',
    ],
    datasets: [{
      label: 'Datasets',
      data: [300, 258, 125 , 12],
      backgroundColor: [
        '#9C69E2',
        '#FFB800',
        '#FF4C61',
        '#33D69F',
      ],
      hoverOffset: 4
    }]
  }

  const categorys = [
    {
      id: 1,
      label: "Educação",
      color: 'var(--light-purple)',
      value: '300,00',
      percent: 50
    },
    {
      id: 2,
      label: "Alimentação",
      color: 'var(--yellow)',
      value: '258,50',
      percent: 26
    },
    {
      id: 3,
      label: "Lazer",
      color: 'var(--red)',
      value: '125,94',
      percent: 15
    },
    {
      id: 4,
      label: "Outros",
      color: 'var(--green)',
      value: '12,98',
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
              <div className="line" key={category.id} >
                <div>
                  <Dot color={category.color} />
                  <p>{category.label}</p>
                </div>

                <p> 
                  R$ {category.value}
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