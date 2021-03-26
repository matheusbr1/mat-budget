import React, { useCallback, useState } from 'react'

import { Container } from './styles'
import plusIcon from '../../assets/icons/plus.svg'

import Modal from './Modal'
import Options from './Options'

export type Variation = 'expense' | 'income'

const Movimentation: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({ ...rest }) => {

  const [isOptionsActive, setIsOptionsActive] = useState(false)

  const handleOptions = useCallback(() => {
    setIsOptionsActive(state => !state)
  },[])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = useCallback(() => {
    setIsModalOpen(state => !state)
    setIsOptionsActive(false)
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

      {isOptionsActive && !isModalOpen && (
        <Options 
         handleVariation={handleVariation} 
          handleToggleModal={handleToggleModal} 
        />
      )}

      <Container onClick={handleOptions} active={isOptionsActive} {...rest}>
        <img src={plusIcon} alt="Nova movimentação"/>
      </Container>
    </React.Fragment>
  )
}

export default Movimentation