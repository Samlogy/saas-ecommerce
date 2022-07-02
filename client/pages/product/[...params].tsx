import { Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'

export default function catchAllRoutes() {
  const router = useRouter()
  // console.log('router: ', router.query)
  return (
    <Layout
      textAlign="center"
      py={10}
      px={6}
      h="100vh"
      display="flex"
      justifyContent="center"
      mt="4rem"
    >
      <Heading
        display="inline-block"
        as="h1"
        fontSize="90px"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        "Catch all route"
      </Heading>
    </Layout>
  )
}
