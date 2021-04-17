import React, { useCallback, useState, useRef } from 'react'

import * as yup from 'yup'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { Overlay, Container } from './styles'

import { MenuItem } from '@material-ui/core'

import TextField from '../../TextField'
import Button from '../../Button'

import closeIcon from '../../../assets/icons/close.svg'
import { Variation } from '../index'
import Select from '../../Select'

import { categories } from '../../../mocks'

import { useToast } from '../../../hooks/toast'
import getValidationErrors from '../../../utils/getValidationErrors'
import { useTransactions } from '../../../hooks/transactions'

interface ModalProps {
  handleToggleModal(): void
  variation: Variation | undefined
}

const Modal: React.FC<ModalProps> = ({ handleToggleModal, variation }) => {

  const incomeFormRef = useRef<FormHandles>(null)
  const expenseFormRef = useRef<FormHandles>(null)

  const { addToast } = useToast()

  const { createTransaction } = useTransactions()

  const handleExpense = useCallback(async (fields) => {

    try {

      const schema = yup.object().shape({
        value: yup.string()
          .max(17 ,'Valor inválido')
          .min(3, 'Valor inválido')
          .required('Campo obrigatório'),
        description: yup.string()
          .required('Campo obrigatório')
      })

      await schema.validate(fields, {
        abortEarly: false
      })

      await createTransaction({
        ...fields,
        type: 'expense'
      })

      addToast({
        type:'success',
        title: 'Nova despesa adicionada'
      })

      handleToggleModal()
      
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors = getValidationErrors(error)
        expenseFormRef.current?.setErrors(errors)
      }
    }
  }, [addToast, handleToggleModal, createTransaction])

  const handleIncome = useCallback(async (fields) => {

    try {

      const schema = yup.object().shape({
        value: yup.string()
          .max(17 ,'Valor inválido')
          .min(3, 'Valor inválido')
          .required('Campo obrigatório'),
        description: yup.string()
          .required('Campo obrigatório')
      })

      await schema.validate(fields, {
        abortEarly: false
      })

      await createTransaction({
        ...fields,
        type: 'income'
      })

      addToast({
        type:'success',
        title: 'Nova receita adicionada'
      })
  
      handleToggleModal()
      
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors = getValidationErrors(error)
        incomeFormRef.current?.setErrors(errors)
      }
    }
  }, [addToast, handleToggleModal, createTransaction])

  const [category, setCategory] = useState('Categoria')

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
          <Form ref={incomeFormRef} onSubmit={handleIncome} >
            <h2 className='income' >Nova Receita</h2>

            <TextField
              name='value'
              variation={variation} 
              mask='currency' 
              placeholder="Valor da receita" 
            />

            <TextField
              name='description'
              variation={variation} 
              placeholder="Descrição" 
            />

            <Select 
              name='category'
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
              type='submit'
              variation="income" 
            />
          </Form>
        )}

        {variation === 'expense' && (
          <Form ref={expenseFormRef} onSubmit={handleExpense} >
            
            <h2 className='expense' >Nova Despensa</h2>

            <TextField 
              name='value'
              variation={variation} 
              mask='currency' 
              placeholder="Valor da despesa" 
            />

            <TextField
              name='description'
              variation={variation} 
              placeholder="Descrição" 
            />

            <Select 
              name='category'
              value={category}
              variation={variation}  
              onChange={handleCategory} 
              style={{ height: 50 }}>
              {categories[variation].map((category, index) => (
                <MenuItem key={index} value={category} style={{ fontSize: '1.6rem'}}>
                  { category }
                </MenuItem>
              ))}
            </Select>

            <Button 
              label="Salvar" 
              variation="expense" 
              type='submit'
            />
          </Form>
        )}
      </Container>
    </Overlay>
  )
}

export default Modal