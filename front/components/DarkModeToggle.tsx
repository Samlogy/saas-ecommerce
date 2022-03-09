import { IconButton, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from "react-icons/fi"


const DarkModeToggle = () => {    
    const { colorMode, toggleColorMode } = useColorMode();

    return(
      <IconButton aria-label='dark mode' bg="transparent" 
            onClick={() => toggleColorMode()} 
            icon={colorMode === 'light' ? 
                <FiMoon color={colorMode ? 'black' : 'white'} /> : 
                <FiSun color={colorMode ? 'white' : 'black'} /> } />
    )
}
export default DarkModeToggle;