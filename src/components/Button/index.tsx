import React from 'react'

import { Container } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label,...rest }) => {
  return (
    <Container {...rest}>
      {label}
    </Container>
  )
}

export default Button