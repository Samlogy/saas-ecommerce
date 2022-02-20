import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Box } from '@chakra-ui/react'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


interface ILayout {
  children: React.ReactNode,
  isHeaderVisible?: boolean,
  isFooterVisible?: boolean,
  rest?: any
}

export default function Layout({ children, isHeaderVisible, isFooterVisible, ...rest }: ILayout) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ecommerce Web App" />
        <meta name="og:title" content='Ecommerce Web App' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Ecommerce Web App </title>
      </Head>

      <Container maxW='container.xl' px="0" {...rest}>
        { isHeaderVisible && <NavBar /> }
          <Box px="2rem" py="1rem">
            {children}
          </Box>
        { isFooterVisible && <Footer /> }
      </Container>
    </>
  )
}