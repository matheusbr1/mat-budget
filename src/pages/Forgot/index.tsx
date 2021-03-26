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

  const history = useHistory()

  const { addToast } = useToast()

  const handleSendRecoverEmail = useCallback(async (fields) => {

    try {

      const schema = yup.object().shape({
        email: yup.string()
          .email('E-mail inválido') 
          .required('Campo obrigatório')
      })

      await schema.validate(fields, {
        abortEarly: false
      })

      addToast({
        type: 'success',
        title: 'E-mail enviado!',
        description: 'O e-mail de recuperação foi enviado ao seu e-mail'
      })
  
      history.goBack()
    } catch (error) {
      if (error instanceof yup.ValidationError) {
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
          <h1>Recuperação de senha</h1>
          <span>
            Informe um e-mail válido para receber instruções para a recuperação de senha
          </span>
        </div>

        <Form ref={formRef} onSubmit={handleSendRecoverEmail} >

          <TextField 
            name='email'
            placeholder="E-mail" 
            colorOnFill 
          />

          <Button label="Enviar" />
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