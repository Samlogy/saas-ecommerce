import { Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link'

import Layout from "../components/Layout"
import { useLocale } from "../lib/hooks"


export default function NotFound() {
  const { t } = useLocale();
  
  return (
    <Layout textAlign="center" py={10} px={6} h="100vh" display="flex" justifyContent="center" mt="4rem">
      <Heading display="inline-block" as="h1" fontSize="90px" bgGradient="linear(to-r, teal.400, teal.600)" backgroundClip="text">
        404
      </Heading>
      <Text fontSize="26px" mt={3} mb={2}>
        {t.NotFound.title}
      </Text>
      <Text color={'gray.500'} mb={6} fontSize="18px">
        {t.NotFound.text}
      </Text>

      <Link href="/">
        <Button colorScheme="teal" bgGradient="linear(to-r, teal.400, teal.500, teal.600)" color="white" variant="solid">
          {t.NotFound.button} 
        </Button>
      </Link>
    </Layout>
  );
}