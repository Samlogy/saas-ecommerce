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
        {title && <DrawerHeader>{title}</DrawerHeader>}
        {body && <DrawerBody>{body}</DrawerBody>}
        {footer && <DrawerFooter justifyContent="center">{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  )
}
