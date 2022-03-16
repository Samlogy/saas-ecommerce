import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const DarkModeToggle = () => {
  const { colorMode: mode, toggleColorMode } = useColorMode()

  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const bgHoverColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <IconButton
      aria-label="dark mode"
      bg={bgColor}
      _hover={{ bg: bgHoverColor }}
      onClick={() => toggleColorMode()}
      icon={
        mode === 'light' ? (
          <FiMoon color={mode ? 'black' : 'white'} />
        ) : (
          <FiSun color={mode ? 'white' : 'black'} />
        )
      }
    />
  )
}
export default DarkModeToggle
