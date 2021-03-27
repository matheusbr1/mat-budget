import React from 'react'

import { Container } from './styles'

interface TooltipProps {
  title: string
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className} >
      <div className="tooltip-content">
        {children}
        <span>{title}</span>
      </div>
    </Container>
  )
}

export default Tooltip