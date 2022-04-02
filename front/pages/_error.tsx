import { Heading, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

import Layout from '../components/Layout'
import { useLocale } from '../lib/hooks'

function Error({ statusCode }: { statusCode: number }) {
  const { t } = useLocale()

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
        bgGradient="linear(to-r, green.400, green.600)"
        backgroundClip="text"
      >
        {statusCode}
      </Heading>

      <Text fontSize="26px" mt={3} mb={2}>
        {t.NotFound.title}
      </Text>

      <Text color={'gray.500'} mb={6} fontSize="18px">
        {statusCode === 404 ? t.NotFound.text : 'Server-side error occurred'}
      </Text>

      <Link href="/">
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          {t.NotFound.button}
        </Button>
      </Link>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
