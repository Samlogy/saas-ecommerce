import { Container, Flex } from '@chakra-ui/react'

import { SideBar, TopBar } from '../components'

interface ILayout {
  children?: React.ReactNode
  isHeaderVisible?: boolean
  rest?: any
}

export default function Layout({ children, isHeaderVisible, ...rest }: ILayout) {
  return (
    <Flex flexDir="column" {...rest}>
      {isHeaderVisible && <TopBar />}
      <Container
        maxW="1024px"
        bg="#FFFC"
        minHeight="calc(100vh - 100px)"
        py="36px"
        px={['16px', '', '', '50px', '100px']}
        borderRadius="4px"
      >
        {children}
      </Container>
    </Flex>
  )
}
