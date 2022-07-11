import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaEllipsisV } from 'react-icons/fa'

export default function CustomMenu({ data }: { data: any }) {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FaEllipsisV />}></MenuButton>

      <MenuList>
        {data.map((el: any) => (
          <MenuItem color={el.color} icon={el.icon} onClick={el.onclick}>
            {el.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
