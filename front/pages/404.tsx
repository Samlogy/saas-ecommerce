import { Heading, Button, Text, ButtonGroup, Container } from "@chakra-ui/react"
import Link from 'next/link'

import Layout from "../components/Layout"

const NotFound = () => {
  
  // minHeight="100vh"
  return (
      <Layout> 
        <Container maxW="80em" py="39px" px={["16px","","","40px"]} m="10vh auto 0 auto" borderRadius="4px"
                  display="flex" flexDir="column" justifyContent="center" alignItems="center">
          <Heading as="h1" size="2xl" my="2rem">
            404 Not Found
          </Heading>

          <Text maxW="60em" m="2rem auto" textAlign="center"> Sorry this web Page do not exist please click in the button bellow to login </Text>

          <ButtonGroup>
            <Button variant="solid"
                    p=".5rem" borderRadius="md" bg="#4f46e5" textColor="#fff"> 
                <Link href="/"> Home </Link>               
            </Button>
            <Button variant="outline"
                    p=".5rem" borderRadius="md" bg="#e0e7ff" textColor="#4f46e5"> 
              <Link href="/contact"> Contact Us </Link> 
            </Button>
          </ButtonGroup>
        </Container>
      </Layout>
  );
}

export default NotFound;