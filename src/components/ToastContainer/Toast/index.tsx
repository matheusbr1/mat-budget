import React, { useCallback } from 'react'

import { Container } from './styles'

import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'
import { ToastMessage } from '../index'

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
}

interface ToastProps {
  message: ToastMessage,
}

const Toast: React.FC<ToastProps> = ({ message }) => {

  const removeToast = useCallback((messageId: number) => { 
    console.log(messageId)
  }, [])

  return (
    <Container type={message.type} hasDescription={Number(message.description)} >

        {icons[message.type || 'info']}

        <div>
          <strong>{message.title}</strong>
          {message.description && <p>{message.description}</p>}
        </div>

        <button type="button" onClick={() => removeToast(message.id)}>
          <FiXCircle size={18} />
        </button>
    </Container>
  )
}

export default Toast