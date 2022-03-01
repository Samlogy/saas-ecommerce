import { IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FiMoon, FiSun } from "react-icons/fi"

import { useTheme } from "../store";

const DarkModeToggle = () => {    
    const mode = useTheme((state: any) => state.mode);
    const toggleDarkMode = useTheme((state: any) => state.toggleDarkMode);

    const [isDark, setIsDark] = useState(mode);

    const handleChanges = () => {
        setIsDark((isDark: boolean) => !isDark)
        toggleDarkMode()
    };

    return(
      <IconButton aria-label='dark mode' bg="transparent" 
            onClick={() => handleChanges()} 
            icon={isDark ? <FiMoon color={isDark ? 'white' : 'black'} /> : <FiSun color={isDark ? 'white' : 'black'} /> } />
    )
}
export default DarkModeToggle;