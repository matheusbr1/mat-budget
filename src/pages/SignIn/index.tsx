import React, { useCallback, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as yup from  'yup'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import Button from '../../components/Button'
import TextField from '../../components/TextField'

import arrow from '../../assets/icons/arrow.svg'
import manWalking from '../../assets/images/ilustration.png'

import { Container, MainCard } from './styles'
import getValidationErrors from '../../utils/getValidationErrors'

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const history = useHistory()

  const handleSignIn = useCallback(async (fields) => {

    try {
      formRef.current?.setErrors({})

      const schema = yup.object().shape({
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
  
      console.log(fields)

      history.push('/dashboard')
    } catch (error) {
      if(error instanceof yup.ValidationError) {
        const errors = getValidationErrors(error)
        formRef.current?.setErrors(errors)
        console.log(errors)
      }
    }
    
  }, [history])

  return (
    <Container>

      <MainCard>
        <h1>Faça seu Login</h1>

        <Form ref={formRef} onSubmit={handleSignIn} >

          <TextField 
            name='email'
            placeholder="E-mail" 
            colorOnFill 
          />
          
          <TextField 
            name='password'
            type='password' 
            placeholder="Senha" 
            colorOnFill 
          />

          <Button label="Entrar" />

          <Link to='/forgot'>Esqueci minha senha</Link>

        </Form>
        
        <Link to='/signUp' className='sign-up'>
          Criar conta
          <img src={arrow} alt='Criar conta'/>
        </Link>
      
      </MainCard>

      <img src={manWalking} alt='Faça login' className='ilustration'/>
    </Container>
  )
}

export default SignIn