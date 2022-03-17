import { Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'
// import { useLocale } from "../lib/hooks";

function NotFound() {
  // const { t } = useLocale();
  {
    /* textAlign="center" py={10} px={6} h="100vh" display="flex" justifyContent="center" mt="4rem" */
  }
  return (
    <Layout>
      <Heading
        display="inline-block"
        as="h1"
        fontSize="90px"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>

      <Text fontSize="26px" mt={3} mb={2}>
        Page not found
      </Text>

      <Text color={'gray.500'} mb={6} fontSize="18px">
        Sorry this page is not available
      </Text>

      <Link to="/admin">
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
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
