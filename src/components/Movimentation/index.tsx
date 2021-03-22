import React, { useCallback, useState } from 'react'

import { Container } from './styles'
import plusIcon from '../../assets/icons/plus.svg'

import Modal from './Modal'
import Options from './Options'

export type Type = 'expense' | 'income'

const Movimentation: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = 
  ({ ...rest }) => {

  const [isOptionsActive, setIsOptionsActive] = useState(true)

  const handleOptions = useCallback(() => {
    setIsOptionsActive(state => !state)
  },[])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = useCallback(() => {
    setIsModalOpen(state => !state)
    setIsOptionsActive(false)
  }, [])

  const [type, setType] = useState<Type | undefined>()

  const handleType = useCallback((type: Type) => {
    setType(type)
  } ,[])
    
  return (
    <React.Fragment>

      {isModalOpen && (
        <Modal type={type} handleToggleModal={handleToggleModal} />
      )}

      {isOptionsActive && !isModalOpen && (
        <Options 
          handleType={handleType} 
          handleToggleModal={handleToggleModal} 
        />
      )}

      <Container onClick={handleOptions} {...rest}>
        <img src={plusIcon} alt="Nova movimentação"/>
      </Container>
    </React.Fragment>
  )
}

export default Movimentation