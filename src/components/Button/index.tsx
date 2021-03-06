import React from 'react'

import { Container } from './styles'

interface ButtonProps {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <Container>
      {label}
    </Container>
  )
}

export default Button