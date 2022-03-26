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
        p=".1rem 0"
        transition="all 0.2s"
        borderRadius="md"
        bg="transparent"
        // _expanded={{ bg: 'blue.400' }}
        // _hover={{ bg: 'gray.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        {label && (
          <Box as="span" textTransform="uppercase" color="#ccc">
            {label}
          </Box>
        )}
      </MenuButton>
      <MenuList p={'.5rem 1rem'}>{children}</MenuList>
    </Menu>
  )
}

export default Dropdown
