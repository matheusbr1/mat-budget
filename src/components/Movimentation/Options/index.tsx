import React, { useCallback } from 'react'
import { Type } from '../index'

import { Container, Overlay } from './styles'

interface OptionsProps {
  handleType(type: Type): void
  handleToggleModal(): void
}

const Options: React.FC<OptionsProps> = ({ handleType, handleToggleModal }) => {

  const handleClick = useCallback((type: Type) => {
    handleType(type)
    handleToggleModal()
  }, [
    handleToggleModal, 
    handleType
  ])

  return (
    <Overlay>
      <Container>
          <button 
            type='button' 
            className='income' 
            onClick={() => handleClick('income')}
          >
            Nova Receita
          </button>

          <button 
            type='button' 
            className='expense'
            onClick={() => handleClick('expense')} 
          >
              Nova Despesa
          </button>
      </Container>
    </Overlay>
  )
}

export default Options