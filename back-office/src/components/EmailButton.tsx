import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'

function EmailButton() {
  const onEmail = () => {
    console.log('check email !!')
  }
  return (
    <IconButton
      aria-label="dark mode"
      bg="transparent"
      onClick={() => onEmail()}
      icon={<MdEmail size="20" color="#ccc" />}
    />
  )
}

export default EmailButton
