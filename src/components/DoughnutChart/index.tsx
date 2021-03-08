import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import { Container } from './styles'

const DoughnutChart: React.FC = () => {

  const data = {
    datasets: [{
      data: [10, 20, 30],
    }],
  
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ]
  }

  return (
    <Container>
       <Doughnut
          data={data}
          width={100}
          height={50}
        />
    </Container>
  )
}

export default DoughnutChart