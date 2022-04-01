import { IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BiDetail } from 'react-icons/bi'
import { FiEdit, FiTrash } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaEllipsisV } from 'react-icons/fa'

interface IActionMenu {
  productId: number | string
  setAction: any
  setProduct: any
  product: any
}

const ActionsMenu = ({ productId, setAction, setProduct, product }: IActionMenu) => {
  const onEdit = (productId: string | number) => {
    // console.log('edit product: ', productId)
    setAction({ edit: true })
    setProduct(product)
  }
  const onDelete = (productId: string | number) => {
    // console.log('delete product: ', productId)
    setAction({ delete: true })
    setProduct({ id: productId })
  }
  const onDisable = (productId: string | number) => {
    // console.log('disable product: ', productId)
    setAction({ disable: true })
    setProduct({ id: productId })
  }
  const onDetails = (productId: string | number) => {
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
          onClick={() => onEdit(productId)}
        >
          {' '}
          Edit{' '}
        </MenuItem>
        <MenuItem
          color={'error'}
          icon={<FiTrash color="error" size="18" />}
          onClick={() => onDelete(productId)}
        >
          {' '}
          Delete{' '}
        </MenuItem>
        <MenuItem
          color={'gray_4'}
          icon={<AiOutlineClose color="disable" size="18" />}
          onClick={() => onDisable(productId)}
        >
          {' '}
          Disable{' '}
        </MenuItem>
        <MenuItem
          color={'info'}
          icon={<BiDetail color={'info'} size="18" />}
          onClick={() => onDetails(productId)}
        >
          {' '}
          Details{' '}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ActionsMenu
