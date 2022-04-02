import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Layout, View } from '../components'
// import { getURL } from '../utils/fonctions'

export default function Privacy({ data }: { data: any }) {
  // const url = getURL('origin') + '#'
  const url = ''

  return (
    <Layout isHeaderVisible isFooterVisible textAlign="left">
      <Box py={10} px={0}>
        <Heading as="h2" fontSize="2rem">
          Privacy
        </Heading>

        <Text color={'gray.500'} fontSize="12px" mt=".25rem" mb="1rem">
          Last updated: {data.createdAt || data.editedAt}
        </Text>

        <View cond={data.content.length > 0}>
          {data &&
            data.content.map(el => (
              <Link href={`${url}${el.link}`}>
                <Box color="accent_4" _hover={{ cursor: 'pointer' }} mb=".25rem">
                  {el.title}
                </Box>
              </Link>
            ))}
        </View>

        <View cond={data.content.length > 0}>
          {data &&
            data.content.map(el => (
              <Box key={el.title} my="2rem">
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

export const getStaticProps = async () => {
  const data = {
    content: [
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis',
        link: 'p1'
      },
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis',
        link: 'p2'
      },
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis',
        link: 'p3'
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
