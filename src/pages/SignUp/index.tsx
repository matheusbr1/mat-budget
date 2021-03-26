import React, { useCallback, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'

import * as yup from 'yup'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import Button from '../../components/Button'
import TextField from '../../components/TextField'

import arrow from '../../assets/icons/arrow.svg'
import manWalking from '../../assets/images/ilustration.png'

import { Container, MainCard } from './styles'
import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../utils/validationFormErrors'

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()

  const history = useHistory()

  const handleSignUp = useCallback(async (fields) => {
    
    try {
      
      const schema = yup.object().shape({
        name: yup.string()
          .required('Campo obrigatório'),
        email: yup.string()
          .email('E-mail inválido')
          .required('Campo obrigatório'),
        password: yup.string()
          .max(10, 'No máximo 10 caracteres')
          .min(5, 'No mínimo 5 caracteres')
          .required('Campo obrigatório'),
      })

      await schema.validate(fields, {
        abortEarly: false
      })

      addToast({
        type: 'success',
        title: 'Conta criada',
        description: 'Sua conta foi criada com sucesso e já pode ser utilizada!'
      })
  
      history.goBack()

    } catch (error) {
      if(error instanceof yup.ValidationError) {
        const errors = getValidationErrors(error)
        formRef.current?.setErrors(errors)
        console.log(errors)
      }
    }
    
  }, [history, addToast])

  return (
    <Container>
      <MainCard>

        <div className="titleContainer" >
          <h1>Faça seu cadastro</h1>
          <span>É gratuíto, rápido e fácil ;)</span>
        </div>

        <Form ref={formRef} onSubmit={handleSignUp} >
          
          <TextField 
            name='name'
            placeholder="Nome" 
            colorOnFill 
          />

          <TextField 
            name='email'
            placeholder="E-mail" 
            colorOnFill 
          />
          
          <TextField 
            type='password'
            name='password'
            placeholder="Senha" 
            colorOnFill 
          />

          <Button label="Cadastrar" />
        </Form>
         
        <Link to='/' className='signin'>
          <img src={arrow} alt='Voltar para o login'/>
          Voltar para o login
        </Link>
      
      </MainCard>

      <img src={manWalking} alt='Faça login' className='ilustration'/>
    </Container>
  )
}

export default SignUp