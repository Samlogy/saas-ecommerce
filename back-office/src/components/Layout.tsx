import { Container, Flex, useColorModeValue } from '@chakra-ui/react'

import { TopBar } from 'components'

interface ILayout {
  children: React.ReactNode
  isHeaderVisible?: boolean
  rest?: any
}

export default function Layout({ children, isHeaderVisible, ...rest }: ILayout) {
  const bgColor = useColorModeValue('white', 'gray_3')
  return (
    <Flex flexDir="column" {...rest} bg={bgColor}>
      {isHeaderVisible && <TopBar />}
      <Container
        maxW="1024px"
        bg={bgColor}
        minHeight="calc(100vh - 100px)"
        p="1.5rem 1.5rem 2rem 1.5rem"
        borderRadius="4px"
      >
        {children}
      </Container>
    </Flex>
  )
}
