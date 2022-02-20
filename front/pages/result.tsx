import { Flex, Heading, Text } from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillInfoCircle, AiFillWarning, AiFillCloseCircle } from "react-icons/ai";

export default function Result({ type }: { type: string }) {
    // const type = "success"
  return (
    <Flex flexDir="column" justifyContent="center" textAlign="center" py={10} px={6}>
      <Flex justifyContent="center">
        {
            type === "success" ? <AiFillCheckCircle size={100} color="green" /> :
            type === "error" ? <AiFillCloseCircle size={100} color="red" /> :
            type === "warning" ? <AiFillWarning size={100} color="orange" /> :
            type === "info" ? <AiFillInfoCircle size={100} color="blue" /> : ""
        }
      </Flex>
      
      <Heading as="h2" size="xl" mt={6} mb={2}>
        This is the headline
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </Flex>
  );
}