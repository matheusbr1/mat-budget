import React, { useCallback, useState } from 'react'

import { Container } from './styles'
import plusIcon from '../../assets/icons/plus.svg'

import Modal from './Modal'
import Type from './Type'

export type Variation = 'expense' | 'income'

const Transaction: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({ ...rest }) => {

  const [isActive, setIsActive] = useState(false)

  const handleOptions = useCallback(() => {
    setIsActive(state => !state)
  },[])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = useCallback(() => {
    setIsModalOpen(state => !state)
    setIsActive(false)
  }, [])

  const [variation, setVariation] = useState<Variation | undefined>()

  const handleVariation = useCallback((variation: Variation) => {
    setVariation(variation)
  } ,[])
    
  return (
    <React.Fragment>

      {isModalOpen && (
        <Modal variation={variation} handleToggleModal={handleToggleModal} />
      )}

      {isActive && !isModalOpen && (
        <Type 
         handleVariation={handleVariation} 
         handleToggleModal={handleToggleModal} 
        />
      )}

      <Container onClick={handleOptions} active={isActive} {...rest}>
        <img src={plusIcon} alt="Nova transação"/>
      </Container>
    </React.Fragment>
  )
}

export default Transaction