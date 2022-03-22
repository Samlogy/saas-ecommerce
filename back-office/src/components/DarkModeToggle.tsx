import { IconButton, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const DarkModeToggle = () => {
  const { colorMode: mode, toggleColorMode } = useColorMode()

  // const bgColor = useColorModeValue('gray.100', 'gray.700')
  // const bgHoverColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <IconButton
      aria-label="dark mode"
      bg="transparent"
      onClick={() => toggleColorMode()}
      icon={mode === 'light' ? <FiMoon size="18" color="#ccc" /> : <FiSun size="18" color="#ccc" />}
    />
  )
}
export default DarkModeToggle
