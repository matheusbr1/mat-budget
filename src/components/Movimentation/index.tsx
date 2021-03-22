import React, { useCallback, useState } from 'react'

import { Container } from './styles'
import plusIcon from '../../assets/icons/plus.svg'

import Modal from './Modal'

const Movimentation: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({ ...rest }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = useCallback(() => {
    setIsModalOpen(state => !state)
  }, [])
    
  return (
    <React.Fragment>

      {isModalOpen && (
        <Modal handleToggleModal={handleToggleModal} />
      )}

      <Container onClick={handleToggleModal} {...rest} >
        <img src={plusIcon} alt="Nova movimentação"/>
      </Container>
    </React.Fragment>
  )
}

export default Movimentation