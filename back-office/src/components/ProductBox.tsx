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
import { useProductStore } from 'store'

interface IProductBox {
  isOpen: boolean
  onClose: () => void
  setAction: any
  mode: string
}
export default function ProductBox({ isOpen, onClose, mode, setAction }: IProductBox) {
  const cancelRef = useRef(null)

  const product = useProductStore((state: any) => state.product)

  const onDelete = (id: number) => {
    console.log('delete product: ', id)
    setAction({ delete: false })
  }

  const onDisable = (id: number) => {
    console.log('disable product: ', id)
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
            onClick={mode === 'delete' ? () => onDelete(product.id) : () => onDisable(product.id)}
          >
            Yes
          </Button>
          <Button
            ref={cancelRef}
            onClick={onClose}
            bg="gray_3"
            color="white"
            _hover={{ bg: 'gray_4' }}
            ml={3}
          >
            No
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
