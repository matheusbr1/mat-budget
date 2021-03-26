import React, { useCallback, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'

import { FiCamera } from 'react-icons/fi'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import Button from '../../components/Button'
import TextField from '../../components/TextField'

import closeIcon from '../../assets/icons/close.svg'
import manWalking from '../../assets/images/ilustration.png'

import { Container, MainCard, Header, AvatarInput } from './styles'
import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../utils/validationFormErrors'

const Profile: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()

  const history = useHistory()

  const handleChangeProfile = useCallback(async (fields) => {

    console.log(fields)


    try {

      const schema = yup.object().shape({
        name: yup.string(),
        
        email: yup.string()
          .email('E-mail inválido'),
        
        oldPassword: yup.string(),

        newPassword: yup.string().when('oldPassword', {
          is: (value: string) => !!value,
          then: yup.string()
            .max(10, 'No máximo 10 caracteres')
            .min(5, 'No mínimo 5 caracteres')
            .required('Campo obrigatório')
        }),

        newPasswordConfirmation: yup.string().when('newPassword', {
          is: (value: string) => !!value,
          then: yup.string()
            .max(10, 'No máximo 10 caracteres')
            .min(5, 'No mínimo 5 caracteres')
            .required('Campo obrigatório')
          })
          .oneOf(
            [yup.ref('newPassword'), undefined],
            'Confirmação incorreta'
          )
      })

      await schema.validate(fields, {
        abortEarly: false
      })

      addToast({
        type: 'success',
        title: 'Perfil Atualizado',
        description: 'Seu perfil foi atualizado com sucesso, as novas informações já foram salvas'
      })
  
      history.push('/dashboard')

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

      <Link to='/dashboard' className="close" >
        <img src={closeIcon} alt="Retornar para o dashboard"/>
      </Link>

        <Form ref={formRef} onSubmit={handleChangeProfile} >

          <Header>

            <AvatarInput>
              <img src="https://github.com/matheusbr1.png" alt="Matheus Baron" />
              <label htmlFor="avatar" >
                <FiCamera />
                <input type="file" id="avatar" onChange={() => {}} />
              </label>
            </AvatarInput>
            
            <h1>Matheus Baron Ribeiro</h1>

          </Header>

          <TextField 
            colorOnFill 
            placeholder="Nome" 
            name='name'
          />
          
          <TextField 
            colorOnFill 
            placeholder="E-mail" 
            name="email" 
          />
          
          <TextField 
            colorOnFill 
            placeholder="Senha Atual" 
            type='password'
            name="oldPassword" 
          />
          
          <TextField 
            colorOnFill 
            placeholder="Nova Senha" 
            type='password'
            name="newPassword" 
          />
          
          <TextField 
            colorOnFill 
            placeholder="Confirme a nova Senha" 
            type='password'
            name="newPasswordConfirmation" 
          />

          <Button 
            label="Salvar" 
            type='submit' 
          />
        </Form>
      
      </MainCard>

      <img src={manWalking} alt='Faça login' className='ilustration'/>
    </Container>
  )
}

export default Profile