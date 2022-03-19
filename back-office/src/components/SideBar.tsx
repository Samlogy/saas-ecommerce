import React, { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  //   useColorModeValue,
  Text,
  Box,
  Link
} from '@chakra-ui/react'
// import { Link } from 'react-router-dom'

import { BiMessageSquareDetail } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { FaUsers, FaProductHunt, FaRegNewspaper } from 'react-icons/fa'
import LogoutButton from './LogoutButton'

interface ISideBar {
  onClose: () => void
  isOpen: boolean
}
const SideBar = ({ onClose, isOpen }: ISideBar) => {
  const [showList, setShowList] = useState({ state: false, id: null })

  const handleList = (item: any) => {
    // show / hide subMenu (list)
    if (!showList.state) {
      // #1 click
      setShowList({ ...showList, state: true, id: item.id })
      return
    } // #2 click
    setShowList({ ...showList, state: false, id: null })

    // update global store
    // dispatch(setSideBarItem(item))
  }

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />

        <DrawerHeader borderBottomWidth="1px"> Dashboard </DrawerHeader>

        <DrawerBody display="flex" flexDirection="column" justifyContent="left">
          {sideBarData.map((el: any) => (
            <Link key={el.id} href={el.url}>
              <Box
                display="flex"
                flexDirection="row"
                fontSize="15"
                justifyContent="left"
                mb="1rem"
                p="1rem"
                borderRadius="md"
                // bg={showList.id === el.id && 'bgClrHover'}
                _hover={{ bg: 'bgClrHover', fontWeight: 'medium' }}
                onClick={() => handleList(el)}
              >
                {el.icon}
                <Text ml="1.5rem"> {el.label} </Text>
              </Box>
            </Link>
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

export const sideBarData = [
  {
    url: '/',
    icon: <AiFillHome size="24" />,
    label: 'Analytics',
    id: 0
  },
  {
    url: '/users',
    icon: <FaUsers size="24" />,
    label: 'Users Management',
    id: 1
  },
  {
    url: '/products',
    icon: <FaProductHunt size="24" />,
    label: 'Products Management',
    id: 2
  },
  {
    url: '/newsletters',
    icon: <FaRegNewspaper size="24" />,
    label: 'Newsletters',
    id: 3
  },
  {
    url: '/contacts',
    icon: <BiMessageSquareDetail size="24" />,
    label: 'Contacts',
    id: 4
  }
]
