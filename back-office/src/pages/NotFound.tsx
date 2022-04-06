import { Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { Layout } from 'components'
// import { useLocale } from "../lib/hooks";

function NotFound() {
  // const { t } = useLocale();
  // textAlign="center" py={10} px={6} h="100vh" display="flex" justifyContent="center"

  return (
    <Layout>
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
        Page not found
      </Text>

      <Text color={'gray_4'} mb={6} fontSize="18px">
        Sorry this page is not available
      </Text>

      <Link to="/admin">
        <Button
          colorScheme="green"
          bgGradient="linear(to-r, green.400, green.500, green.600)"
          color="white"
          variant="solid"
        >
          Go back to Home
        </Button>
      </Link>
    </Layout>
  )
}

export default NotFound
