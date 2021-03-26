import React from 'react'

import { Container } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variation?: 'expense' | 'income'
}

const Button: React.FC<ButtonProps> = ({ label, variation, ...rest }) => {
  return (
    <Container {...rest} variation={variation || 'default'}>
      {label}
    </Container>
  )
}

export default Button