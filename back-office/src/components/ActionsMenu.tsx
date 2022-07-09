import { IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BiDetail } from 'react-icons/bi'
import { FiEdit, FiTrash } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaEllipsisV } from 'react-icons/fa'

import { useProductStore } from 'store'
interface IActionMenu {
  setAction: any
}

export default function ActionsMenu({ setAction }: IActionMenu) {
  const product = useProductStore((state: any) => state.product)
  const setProduct = useProductStore((state: any) => state.setProduct)

  const onEdit = (id: number) => {
    // console.log('edit product: ', productId)
    setAction({ edit: true })
    setProduct(product)
  }
  const onDelete = (id: number) => {
    // console.log('delete product: ', productId)
    setAction({ delete: true })
    setProduct({ id })
  }
  const onDisable = (id: number) => {
    // console.log('disable product: ', productId)
    setAction({ disable: true })
    setProduct({ id })
  }
  const onDetails = (id: number) => {
    // console.log('details product: ', productId)
    setAction({ details: true })
    setProduct(product)
  }

  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FaEllipsisV />}></MenuButton>

      <MenuList>
        <MenuItem
          color={'warning'}
          icon={<FiEdit color="warning" size="18" />}
          onClick={() => onEdit(product?.id)}
        >
          Edit{' '}
        </MenuItem>
        <MenuItem
          color={'error'}
          icon={<FiTrash color="error" size="18" />}
          onClick={() => onDelete(product?.id)}
        >
          Delete{' '}
        </MenuItem>
        <MenuItem
          color={'gray_4'}
          icon={<AiOutlineClose color="disable" size="18" />}
          onClick={() => onDisable(product?.id)}
        >
          Disable{' '}
        </MenuItem>
        <MenuItem
          color="info"
          icon={<BiDetail color="info" size="18" />}
          onClick={() => onDetails(product?.id)}
        >
          Details{' '}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
