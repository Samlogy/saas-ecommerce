import { Box, Heading, Text, 
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, } from '@chakra-ui/react';
import Link from 'next/link'

import Layout from "../components/Layout"

export default function Privacy() {
  return (
    <Layout isHeaderVisible isFooterVisible textAlign="left">
      <Box py={10} px={0}>
        <Heading as="h2" fontSize="2rem">
            Conditions of Use
        </Heading>

        <Text color={'gray.500'} fontSize="12px">
        Last updated: May 3, 2021
        </Text>

        <UnorderedList my="1rem">
            <ListItem color="blue.500">Lorem ipsum dolor sit amet</ListItem>
            <ListItem color="blue.500">Lorem ipsum dolor sit amet</ListItem>
            <ListItem color="blue.500">Lorem ipsum dolor sit amet</ListItem>
            <ListItem color="blue.500">Lorem ipsum dolor sit amet</ListItem>
            <ListItem color="blue.500">Lorem ipsum dolor sit amet</ListItem>
        </UnorderedList>

        <Heading as="h2" fontSize="1.5rem">
            Please read these conditions carefully
        </Heading>

        <Text fontSize="1rem" mt={3} mb={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
        </Text>

        <Heading as="h2" fontSize="1.5rem">
            Please read these conditions carefully
        </Heading>

        <Text fontSize="1rem" mt={3} mb={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
        </Text>

        <Heading as="h2" fontSize="1.5rem">
            Please read these conditions carefully
        </Heading>

        <Text fontSize="1rem" mt={3} mb={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
        </Text>

        <Heading as="h2" fontSize="1.5rem">
            Please read these conditions carefully
        </Heading>

        <Text fontSize="1rem" mt={3} mb={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
        </Text>

        <Heading as="h2" fontSize="1.5rem">
            Please read these conditions carefully
        </Heading>

        <Text fontSize="1rem" mt={3} mb={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis.
        </Text>
      </Box>
    </Layout>
  );
}