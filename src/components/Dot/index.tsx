import React from 'react'

import { Container } from './styles'

interface DotProps {
  color: string
}

const Dot: React.FC<DotProps> = ({ color }) => {
  return <Container color={color} />
}

export default Dot