import { Heading, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

import Layout from '../components/Layout'
import { useLocale } from '../lib/hooks'

function Page404() {
  const { t } = useLocale()

  return (
    <Layout textAlign="center" py={10} px={6} h="100vh" display="flex" justifyContent="center">
      <Heading
        display="inline-block"
        as="h1"
        fontSize="90px"
        bgGradient="linear(to-r, green.400, green.600)"
        backgroundClip="text"
      >
        404
      </Heading>

      <Text fontSize="26px" mt={3} mb={2}>
        {t.NotFound.title}
      </Text>

      <Text color={'gray.500'} mb={6} fontSize="18px">
        {t.NotFound.text}
      </Text>

      <Link href="/">
        <Button
          colorScheme="green"
          bgGradient="linear(to-r, green.400, green.500, green.600)"
          color="white"
          variant="solid"
        >
          {t.NotFound.button}
        </Button>
      </Link>
    </Layout>
  )
}

export default Page404
