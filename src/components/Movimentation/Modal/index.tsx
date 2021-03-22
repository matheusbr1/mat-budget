import React, { useCallback, useState } from 'react'

import { Overlay, Container } from './styles'

import TextField from '../../TextField'
import Button from '../../Button'

import closeIcon from '../../../assets/icons/close.svg'

interface ModalProps {
  handleToggleModal(): void
}

type Type = 'choose' | 'expense' | 'income'

const Modal: React.FC<ModalProps> = ({ handleToggleModal }) => {

  const [type, setType] = useState<Type>('choose')

  const handleType = useCallback((type: Type) => {
    setType(type)
  }, [])

  return (
    <Overlay>
      <Container>
        <button onClick={handleToggleModal} className="close">
          <img src={closeIcon} alt="Fechar modal"/>
        </button>

        {type === 'choose' && (
          <React.Fragment>
            <Button 
              variation="income"
              label="Nova Receita" 
              onClick={() => handleType('income')} 
            />
            
            <Button 
              variation="expense"
              label="Nova Despesa" 
              onClick={() => handleType('expense')} 
            />
          </React.Fragment>
        )}

        {type === 'income' && (
          <React.Fragment>
            <h2 className='income' >Nova Receita</h2>

            <TextField />

            <TextField />

            <Button label="salvar" variation="income" />
          </React.Fragment>
        )}

        {type === 'expense' && (
          <React.Fragment>
            <h2 className='expense' >Nova Despensa</h2>

            <TextField />

            <TextField />

            <Button label="salvar" variation="expense" />
          </React.Fragment>
        )}
      </Container>
    </Overlay>
  )
}

export default Modal