import { Box, Heading, Text } from '@chakra-ui/react'

import { Layout, View } from '../components'

export default function Conditions({ data }: { data: any }) {
  return (
    <Layout isHeaderVisible isFooterVisible textAlign="left">
      <Box py={10} px={0}>
        <Heading as="h2" fontSize="2rem">
          Conditions of Use
        </Heading>

        <Text color={'gray.500'} mt=".25rem" fontSize="12px">
          Last updated: {data?.createdAt || data?.editedAt}
        </Text>

        <View cond={data?.content?.length > 0}>
          {data?.content.map(el => (
            <Box my="2rem">
              <Heading as="h2" fontSize="1.5rem">
                {el.title}
              </Heading>

              <Text fontSize="1rem" mt=".5rem">
                {el.text}
              </Text>
            </Box>
          ))}
        </View>
      </Box>
    </Layout>
  )
}


export const getStaticProps = () => {
  const data = {
    content: [
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis',
      },
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis',
      },
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis',
      }
    ],
    editedAt: "May 3, 2021",
    createdAt: "Jan 1, 2020"
  }
  
  return {
    props: {
      data
    }
  }
}