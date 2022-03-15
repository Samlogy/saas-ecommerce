import { Box, Heading, Text, 
    ListItem,
    UnorderedList, } from '@chakra-ui/react';

import { Layout, View } from "../components"

export default function Privacy() {
    const date = "May 3, 2021"
    const data = [
        {
            title: 'Please read these conditions carefully',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis",
            link: 'Lorem ipsum dolor sit amet'
        },
        {
            title: 'Please read these conditions carefully',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis",
            link: 'Lorem ipsum dolor sit amet'
        },
        {
            title: 'Please read these conditions carefully',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis",
            link: 'Lorem ipsum dolor sit amet'
        }
    ]

  return (
    <Layout isHeaderVisible isFooterVisible textAlign="left">
      <Box py={10} px={0}>
        <Heading as="h2" fontSize="2rem">
            Conditions of Use
        </Heading>

        <Text color={'gray.500'} fontSize="12px" mt=".25rem">
            Last updated: {date}
        </Text>

        <UnorderedList my="1rem">
            { data.map((el) => <ListItem color="blue.500" _hover={{ cursor: 'pointer' }}> {el?.link} </ListItem>) }
        </UnorderedList>

        <View cond={data.length > 0}>
            {  data.map((el) => 
                <Box my="2rem">
                    <Heading as="h2" fontSize="1.5rem">
                        {el.title}
                    </Heading>

                    <Text fontSize="1rem" mt=".5rem">
                        {el.text}
                    </Text>
                </Box>
            )}
        </View>
      </Box>
    </Layout>
  );
}