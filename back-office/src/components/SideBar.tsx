import React, { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Box
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { FaProductHunt } from 'react-icons/fa'
import LogoutButton from './LogoutButton'

interface ISideBar {
  onClose: () => void
  isOpen: boolean
}
interface ISideBarItem {
  key: number
  data: any
  active: boolean
}
const SideBar = ({ onClose, isOpen }: ISideBar) => {
  const activeItem = sideBarData.findIndex(item => item.url === window.location.pathname)

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />

        <DrawerHeader borderBottomWidth="1px"> Dashboard </DrawerHeader>

        <DrawerBody display="flex" flexDirection="column" justifyContent="left">
          {sideBarData.map((el: any, idx: number) => (
            <SideBarItem key={el.id} data={el} active={idx === activeItem} />
          ))}
        </DrawerBody>

        <DrawerFooter display="flex" flexDirection="column" justifyContent="center">
          <LogoutButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default SideBar

const SideBarItem = ({ key, data, active }: ISideBarItem) => {
  return (
    <Link key={key} to={data.url}>
      <Box
        display="flex"
        flexDirection="row"
        fontSize="15"
        justifyContent="left"
        mb=".5rem"
        p=".75rem 1rem"
        borderRadius="md"
        bg={active ? 'blue.500' : ''}
        color={active ? 'white' : ''}
        _hover={{ bg: 'bgClrHover', fontWeight: 'medium', textDecor: 'none' }}
      >
        {data.icon}
        <Text ml="1.5rem"> {data.label} </Text>
      </Box>
    </Link>
  )
}

export const sideBarData = [
  {
    url: '/',
    icon: <AiFillHome size="24" />,
    label: 'Analytics',
    id: 0
  },
  {
    url: '/products',
    icon: <FaProductHunt size="24" />,
    label: 'Products',
    id: 1
  }
]
