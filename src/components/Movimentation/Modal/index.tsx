import React, { useCallback, useState } from 'react'

import { Overlay, Container } from './styles'

import TextField from '../../TextField'
import Button from '../../Button'

import closeIcon from '../../../assets/icons/close.svg'
import { Type } from '../index'

interface ModalProps {
  handleToggleModal(): void
  type: Type | undefined
}

const Modal: React.FC<ModalProps> = ({ handleToggleModal, type }) => {

  return (
    <Overlay>
      <Container>
        <button onClick={handleToggleModal} className="close">
          <img src={closeIcon} alt="Fechar modal"/>
        </button>

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