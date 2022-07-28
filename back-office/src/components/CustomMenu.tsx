import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue
} from '@chakra-ui/react'
import { FaEllipsisV } from 'react-icons/fa'

export default function CustomMenu({ data, options }: { data: any; options: any }) {
  const bgColor = useColorModeValue('gray_6', 'gray_3')
  const textColor = useColorModeValue('gray_2', 'gray_7')
  // console.log(data)
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FaEllipsisV />}
        bg={bgColor}
        color={textColor}
      ></MenuButton>

      <MenuList>
        {options.map((el: any) => (
          <MenuItem color={el.color} icon={el.icon} onClick={el.onclick}>
            {el.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
