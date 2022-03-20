import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text
} from '@chakra-ui/react'

interface IDropdown {
  data?: any
  icon?: any
  children?: any
}

const Dropdown = ({ data, icon, children }: IDropdown) => {
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
      <MenuList>{children}</MenuList>
    </Menu>
  )
}

export default Dropdown
