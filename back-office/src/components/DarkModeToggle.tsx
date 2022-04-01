import { IconButton, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const DarkModeToggle = () => {
  const { colorMode: mode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="dark mode"
      bg="transparent"
      onClick={() => toggleColorMode()}
      _hover={{ bg: 'transparent' }}
      className="hover-icon"
      icon={mode === 'light' ? <FiMoon size="18" color="#ccc" /> : <FiSun size="18" color="#ccc" />}
    />
  )
}
export default DarkModeToggle
