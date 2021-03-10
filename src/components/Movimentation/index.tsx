import React from 'react'

import { Container } from './styles'
import plusIcon from '../../assets/icons/plus.svg'

const Movimentation: React.FC = () => {
  return (
    <Container>
      <img src={plusIcon} alt="Nova movimentação"/>
    </Container>
  )
}

export default Movimentation