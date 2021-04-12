import React, { useCallback } from 'react'
import { Variation } from '../index'

import { Container, Overlay } from './styles'

interface TypeProps {
  handleVariation(variation: Variation): void
  handleToggleModal(): void
}

const Type: React.FC<TypeProps> = ({ handleVariation, handleToggleModal }) => {

  const handleClick = useCallback((variation: Variation) => {
    handleVariation(variation)
    handleToggleModal()
  }, [
    handleToggleModal, 
    handleVariation
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

export default Type