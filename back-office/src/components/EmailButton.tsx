import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { AiOutlineMail } from 'react-icons/ai'

function EmailButton() {
  const onEmail = () => {
    console.log('check email !!')
  }
  return (
    <IconButton
      aria-label="dark mode"
      bg="transparent"
      onClick={() => onEmail()}
      icon={<AiOutlineMail size="20" />}
    />
  )
}

export default EmailButton
