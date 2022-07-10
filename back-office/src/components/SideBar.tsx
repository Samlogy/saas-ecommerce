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
  Box,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { FaProductHunt, FaChartLine } from 'react-icons/fa'
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
export default function SideBar({ onClose, isOpen }: ISideBar) {
  const activeItem = sideBarData.findIndex(item => item.url === window.location.pathname)
  const bgColor = useColorModeValue('white', 'gray_3')

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay />

      <DrawerContent bg={bgColor}>
        <DrawerCloseButton />

        <DrawerHeader borderBottomWidth="1px"> Dashboard </DrawerHeader>

        <DrawerBody display="flex" flexDirection="column" justifyContent="left">
          {sideBarData.map((item: any) => (
            <SideBarItem key={item.id} data={item} active={item.id === activeItem} />
          ))}
        </DrawerBody>

        <DrawerFooter display="flex" flexDirection="column" justifyContent="center">
          <LogoutButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const SideBarItem = ({ key, data, active }: ISideBarItem) => {
  const textColor = useColorModeValue('black', 'white')
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
        transition={'all .5s'}
        bg={active ? 'accent_3' : 'transparent'}
        color={active ? 'white' : textColor}
        _hover={{
          bg: active ? 'accent_3' : 'accent_4',
          color: 'white',
          fontWeight: 'medium',
          textDecor: 'none'
        }}
      >
        {data.icon}
        <Text ml="1.5rem"> {data.label} </Text>
      </Box>
    </Link>
  )
}

const sideBarData = [
  {
    url: '/',
    icon: <FaChartLine size="24" />,
    label: 'Analytics',
    id: 0
  },
  {
    url: '/products',
    icon: <FaProductHunt size="24" />,
    label: 'Products',
    id: 1
  },
  {
    url: '/home',
    icon: <AiFillHome size="24" />,
    label: 'Home',
    id: 2
  }
]
