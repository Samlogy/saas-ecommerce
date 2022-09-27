import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function DarkModeToggle() {
  const { colorMode: mode, toggleColorMode } = useColorMode()

  const bgColor = useColorModeValue('white', 'gray_2')
  const bgHoverColor = useColorModeValue('gray_8', 'gray_3')
  return (
    <IconButton
      aria-label="dark mode"
      bg={bgColor}
      _hover={{ bg: bgHoverColor }}
      _focus={{ outline: 'none', border: 'none' }}
      onClick={() => toggleColorMode()}
      icon={mode === 'light' ? <FiMoon /> : <FiSun />}
    />
  )
}
