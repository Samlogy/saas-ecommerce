import {
    Flex,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';

export default function FormTemplate({ children }: { children: React.ReactNode }) {
  return (
      <Flex align={'center'} justify={'center'} w="400px">
        <Stack spacing={4} w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
            { children }
        </Stack>
      </Flex>
  );
}