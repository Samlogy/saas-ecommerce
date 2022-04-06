import { Container, Flex } from '@chakra-ui/react'

import { TopBar } from 'components'

interface ILayout {
  children: React.ReactNode
  isHeaderVisible?: boolean
  rest?: any
}

export default function Layout({ children, isHeaderVisible, ...rest }: ILayout) {
  // console.log({ ...rest })
  return (
    <Flex flexDir="column" {...rest}>
      {isHeaderVisible && <TopBar />}
      <Container
        maxW="1024px"
        bg="#FFFC"
        minHeight="calc(100vh - 100px)"
        p="1.5rem 1.5rem 2rem 1.5rem"
        borderRadius="4px"
      >
        {children}
      </Container>
    </Flex>
  )
}
