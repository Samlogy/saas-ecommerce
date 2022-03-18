import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from '@chakra-ui/react'
import React, { useRef } from 'react'

interface IProductBox {
  isOpen: boolean
  onClose: () => void
  productId: number
  setAction: any
  mode: string
}
const ProductBox = ({ isOpen, onClose, productId, setAction, mode }: IProductBox) => {
  const cancelRef = useRef(null)

  const onDelete = (productId: string | number) => {
    console.log('delete product: ', productId)
    setAction({ delete: false })
  }

  const onDisable = (productId: string | number) => {
    console.log('disable product: ', productId)
    setAction({ disable: false })
  }

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>
          {mode === 'delete' ? 'Delete Product ?' : 'Disable Product ?'}
        </AlertDialogHeader>

        <AlertDialogCloseButton />

        <AlertDialogBody>
          {mode === 'delete'
            ? 'Are you sure you want to delete this product ?'
            : 'Are you sure you want to disable this product ?'}
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button
            colorScheme="red"
            onClick={mode === 'delete' ? () => onDelete(productId) : () => onDisable(productId)}
          >
            Yes
          </Button>
          <Button
            ref={cancelRef}
            onClick={onClose}
            bg="gray.600"
            color="white"
            _hover={{ bg: 'gray.700' }}
            ml={3}
          >
            No
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ProductBox
