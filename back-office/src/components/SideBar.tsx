import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react'
import { AiFillHome } from 'react-icons/ai'
import { FaChartLine, FaProductHunt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CustomDrawer, LogoutButton } from './'

interface ISideBar {
  onClose: () => void
  isOpen: boolean
}
interface ISideBarItem {
  data: any
  active: boolean
}
export default function SideBar({ onClose, isOpen }: ISideBar) {
  const activeItem = sideBarData.findIndex(item => item.url === window.location.pathname)

  const Body = (
    <>
      {sideBarData.map((item: any) => (
        <SideBarItem key={item.id} data={item} active={item.id === activeItem} />
      ))}
    </>
  )
  const Footer = (
    <Flex justify="center" w="full">
      <LogoutButton />
    </Flex>
  )

  return (
    <CustomDrawer
      title="Dashboard"
      placement="left"
      isOpen={isOpen}
      onClose={onClose}
      body={Body}
      footer={Footer}
    />
  )
}

const SideBarItem = ({ data, active }: ISideBarItem) => {
  const textColor = useColorModeValue('black', 'white')
  return (
    <Link to={data.url}>
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
