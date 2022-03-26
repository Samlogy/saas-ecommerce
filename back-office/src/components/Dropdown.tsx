import { IconButton, Menu, MenuButton, MenuList, Button, Box } from '@chakra-ui/react'

interface IDropdown {
  icon?: any
  label?: string
  children?: any
}

const Dropdown = ({ icon, label, children }: IDropdown) => {
  return (
    <Menu>
      <MenuButton
        as={label ? Button : IconButton}
        icon={icon}
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        bg="transparent"
        // _expanded={{ bg: 'blue.400' }}
        // _hover={{ bg: 'gray.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        <Box as="span" textTransform="uppercase" color="#ccc">
          {' '}
          {label && label}{' '}
        </Box>
      </MenuButton>
      <MenuList p={'.75rem 1rem'} maxW="5rem">
        {children}
      </MenuList>
    </Menu>
  )
}

export default Dropdown
