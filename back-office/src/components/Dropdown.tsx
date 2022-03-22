import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'

interface IDropdown {
  icon?: any
  children?: any
}

const Dropdown = ({ icon, children }: IDropdown) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={icon}
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        bg="transparent"
        _hover={{ bg: 'gray.400' }}
        _focus={{ boxShadow: 'outline' }}
      ></MenuButton>
      <MenuList p={'.75rem 1rem'} maxW="5rem">
        {children}
      </MenuList>
    </Menu>
  )
}

export default Dropdown
