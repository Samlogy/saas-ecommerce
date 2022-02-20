import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link'

import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout textAlign="center" py={10} px={6}>
      <Heading display="inline-block" as="h1" fontSize="90px" bgGradient="linear(to-r, teal.400, teal.600)" backgroundClip="text">
        404
      </Heading>
      <Text fontSize="26px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6} fontSize="18px">
        The page you're looking for does not seem to exist
      </Text>

      <Button colorScheme="teal" bgGradient="linear(to-r, teal.400, teal.500, teal.600)" color="white" variant="solid">
        <Link href="/"> Go to Home </Link>
      </Button>
    </Layout>
  );
}