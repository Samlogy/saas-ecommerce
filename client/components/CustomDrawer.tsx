import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react'
import React from 'react'

interface ICustomDrawer {
  isOpen: boolean
  onClose: any
  title?: string
  placement?: any
  size?: string
  body?: React.ReactNode
  footer?: React.ReactNode
}
export default function CustomDrawer({
  isOpen,
  onClose,
  title,
  placement = 'right',
  size = 'md',
  body,
  footer
}: ICustomDrawer) {
  return (
    <Drawer size={size} isOpen={isOpen} placement={placement} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader> {title && title} </DrawerHeader>

        <DrawerBody>{body && body}</DrawerBody>
        <DrawerFooter>{footer && footer}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
