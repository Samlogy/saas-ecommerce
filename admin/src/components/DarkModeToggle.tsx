import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function DarkModeToggle() {
  const { colorMode: mode, toggleColorMode } = useColorMode()

  const bgHoverColor = useColorModeValue('gray_8', 'gray_2')

  return (
    <IconButton
      aria-label="dark mode"
      bg={'transparent'}
      _hover={{ bg: bgHoverColor }}
      onClick={() => toggleColorMode()}
      color={useColorModeValue('black', 'white')}
      icon={mode === 'light' ? <FiMoon /> : <FiSun />}
    />
  )
}
