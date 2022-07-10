import { IconButton, Menu, MenuButton, MenuList, Button, Box } from '@chakra-ui/react'

interface IDropdown {
  icon?: any
  label?: string
  children?: any
}

export default function Dropdown({ icon, label, children }: IDropdown) {
  return (
    <Menu>
      <MenuButton
        as={label ? Button : IconButton}
        icon={icon}
        borderRadius="md"
        bg="transparent"
        _focus={{ boxShadow: 'outline' }}
        _hover={{ bg: 'transparent' }}
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
