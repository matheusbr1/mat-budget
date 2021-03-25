import React, { useCallback, useState } from 'react'

import { Overlay, Container } from './styles'

import { MenuItem } from '@material-ui/core'

import TextField from '../../TextField'
import Button from '../../Button'

import closeIcon from '../../../assets/icons/close.svg'
import { Variation } from '../index'
import Select from '../../Select'

import { categories } from '../../../mocks'

import { useToast } from '../../../hooks/toast'

interface ModalProps {
  handleToggleModal(): void
  variation: Variation | undefined
}

const Modal: React.FC<ModalProps> = ({ handleToggleModal, variation }) => {
  
  const { addToast } = useToast()

  const handleNewTransaction = useCallback((type: 'expense' | 'income') => {
    
    if(type === 'income') {
      addToast({
        type:'success',
        title: 'Nova receita adicionada'
      })
    } else {
      addToast({
        type:'success',
        title: 'Nova despesa adicionada'
      })
    }
    
    handleToggleModal()
  }, [addToast, handleToggleModal])

  const [category, setCategory] = useState('Selecione')

  const handleCategory = useCallback(e => {
    setCategory(e.target.value)
  }, [])

  return (
    <Overlay>
      <Container>
        <button onClick={handleToggleModal} className="close">
          <img src={closeIcon} alt="Fechar modal"/>
        </button>

        {variation === 'income' && (
          <React.Fragment>
            <h2 className='income' >Nova Receita</h2>

            <TextField 
              variation={variation} 
              mask='currency' 
              placeholder="R$ 100,00" 
            />

            <Select 
              value={category}
              variation={variation}  
              onChange={handleCategory} 
              style={{ height: 50 }}>
              {categories[variation].map(category => (
                <MenuItem key={category} value={category} style={{ fontSize: '1.6rem'}}>
                  { category }
                </MenuItem>
              ))}
            </Select>

            <Button 
              label="Salvar" 
              variation="income" 
              onClick={() => handleNewTransaction('income')}
            />
          </React.Fragment>
        )}

        {variation === 'expense' && (
          <React.Fragment>
            <h2 className='expense' >Nova Despensa</h2>

            <TextField 
              variation={variation} 
              mask='currency' 
              placeholder="R$ 100,00" 
            />

            <Select 
              value={category}
              variation={variation}  
              onChange={handleCategory} 
              style={{ height: 50 }}>
              {categories[variation].map(category => (
                <MenuItem key={category} value={category} style={{ fontSize: '1.6rem'}}>
                  { category }
                </MenuItem>
              ))}
            </Select>

            <Button 
              label="Salvar" 
              variation="expense" 
              onClick={() => handleNewTransaction('expense')}
            />

          </React.Fragment>
        )}
      </Container>
    </Overlay>
  )
}

export default Modal