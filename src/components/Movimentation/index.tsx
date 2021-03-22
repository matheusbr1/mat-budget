import React, { useCallback, useEffect, useState } from 'react'

import { Container } from './styles'
import plusIcon from '../../assets/icons/plus.svg'

import TemporaryDrawer from './TemporaryDrawer'
import Modal from './Modal'

const Movimentation: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({ ...rest }) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleDrawer = useCallback((open: boolean) => {
    setIsOpen(open)
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = useCallback(() => {
    setIsModalOpen(state => !state)
  }, [])
    
  return (
    <React.Fragment>

      <Modal 
        isModalOpen={isModalOpen} 
        handleToggleModal={handleToggleModal} 
      />

      <TemporaryDrawer isOpen={isOpen} handleToggleDrawer={handleToggleDrawer} />

      <Container onClick={() => handleToggleDrawer(true)} {...rest} >
        <img src={plusIcon} alt="Nova movimentação"/>
      </Container>
    </React.Fragment>
  )
}

export default Movimentation