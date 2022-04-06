import { Container, Flex, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer, NavBar, ProtectedPage, ShoppingCart } from '../components'

interface ILayout {
  children: React.ReactNode
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
  rest?: any
}

export default function Layout({ children, isHeaderVisible, isFooterVisible, ...rest }: ILayout) {
  const { pathname } = useRouter()
  const isProtected =
    pathname === '/profile' || pathname === '/edit-profile' || pathname === '/admin'
  // console.log('protected: ', pathname, isProtected)

  const bgColor = useColorModeValue('white', 'gray_3')

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ecommerce Web App" />
        <meta name="og:title" content="Ecommerce Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Ecommerce Web App </title>
      </Head>

      <Flex flexDir="column" {...rest} bg={bgColor}>
        {isHeaderVisible && <NavBar />}

        <Container
          maxW="1024px"
          bg={bgColor}
          minHeight="calc(100vh - 100px)"
          p="6rem 1.5rem 2rem 1.5rem"
          borderRadius="4px"
        >
          <ProtectedPage isProtected={isProtected}>{children}</ProtectedPage>
          <ShoppingCart />
        </Container>

        {isFooterVisible && <Footer />}
      </Flex>
    </>
  )
}
