import { Container, Flex, useColorModeValue } from '@chakra-ui/react'

import { TopBar } from 'components'

interface ILayout {
  children: React.ReactNode
  isHeaderVisible?: boolean
  [restProps: string]: any
}

export default function Layout({ children, isHeaderVisible, ...restProps }: ILayout) {
  const bgColor = useColorModeValue('white', 'gray_3')
  return (
    <Flex flexDir="column" {...restProps} bg={bgColor}>
      {isHeaderVisible && <TopBar />}
      <Container
        maxW="80em"
        bg={bgColor}
        minHeight="calc(100vh - 100px)"
        p="1.5rem 1.5rem 2rem 1.5rem"
        borderRadius="5px"
      >
        {children}
      </Container>
    </Flex>
  )
}
