import React, { useEffect } from 'react'

import { Container } from './styles'

import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'
import { ToastMessage, useToast } from '../../../hooks/toast'

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
}

interface ToastProps {
  message: ToastMessage,
  style: object
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {

  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  },[message.id, removeToast])

  return (
    <Container 
      type={message.type} 
      hasdescription={Number(!!message.description)} 
      style={style}
    >

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