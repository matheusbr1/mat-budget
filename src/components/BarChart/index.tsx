import React from 'react'
import { Bar } from 'react-chartjs-2'

import { Container } from './styles'

const BarChart: React.FC = () => {

  const data = {
    labels: [
      'Janeiro', 
      'Fevereiro', 
      'Março', 
      'Abril', 
      'Maio', 
      'Junho', 
      'Julho', 
      'Agosto', 
      'Setembro', 
      'Outubro', 
      'Novembro', 
      'Dezembro'
    ],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 65, 65, 59, 80, 81, 56]
      }
    ]
  }

  return (
    <Container>
       <Bar
          data={data}
          width={100}
          height={50}
        />
    </Container>
  )
}

export default BarChart