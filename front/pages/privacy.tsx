import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import { Layout, View } from '../components'

export default function Privacy({ data }: { data: any }) {
  return (
    <Layout isHeaderVisible isFooterVisible textAlign="left">
      <Box py={10} px={0}>
        <Heading as="h2" fontSize="2rem">
          Privacy
        </Heading>

        <Text color={'gray.500'} fontSize="12px" mt=".25rem">
          Last updated: {data?.createdAt || data?.editedAt}
        </Text>

        <View cond={data?.content?.length > 0}>
          {data &&
            data?.content?.map(el => (
              <>
                <Link key={el?.content?.link} href="/">
                  <Box color="blue.500" _hover={{ cursor: 'pointer' }}>
                    {el?.content?.link}
                  </Box>
                </Link>

                <Box key={el?.content?.title} my="2rem">
                  <Heading as="h2" fontSize="1.5rem">
                    {el.title}
                  </Heading>

                  <Text fontSize="1rem" mt=".5rem">
                    {el.text}
                  </Text>
                </Box>
              </>
            ))}
        </View>
      </Box>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = {
    content: [
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis',
        link: 'Lorem ipsum dolor sit amet'
      },
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis',
        link: 'Lorem ipsum dolor sit amet'
      },
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis',
        link: 'Lorem ipsum dolor sit amet'
      }
    ],
    editedAt: 'May 3, 2021',
    createdAt: 'Jan 1, 2020'
  }

  return {
    props: {
      data
    }
  }
}
