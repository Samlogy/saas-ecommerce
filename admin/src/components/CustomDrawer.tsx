import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

interface ICustomDrawer {
  isOpen: boolean
  onClose: any
  title?: string
  placement?: any
  body?: React.ReactNode
  footer?: React.ReactNode
}
export default function CustomDrawer({
  isOpen,
  onClose,
  title,
  placement = 'right',
  body,
  footer
}: ICustomDrawer) {
  const itemBgColor = useColorModeValue('white', 'gray_3')
  return (
    <Drawer isOpen={isOpen} placement={placement} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={itemBgColor}>
        <DrawerCloseButton />
        <DrawerHeader> {title && title} </DrawerHeader>

        <DrawerBody>{body && body}</DrawerBody>
        <DrawerFooter>{footer && footer}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
