import { Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react'
import { Layout, View, MiniMap } from '../components'

export default function Conditions({ data }: { data: any }) {
  const textColor = useColorModeValue('gray_3', 'gray_7')
  const titleColor = useColorModeValue('gray_2', 'gray_8')
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Box py={10} px={0}>
        <Heading
          fontSize="1.5rem"
          textTransform={'uppercase'}
          color={titleColor}
          mr="auto"
          w="full"
        >
          Conditions of Use
        </Heading>

        <Text color={textColor} mt=".25rem" fontSize="12px">
          Last updated: {data?.editedAt || data?.createdAt}
        </Text>

        <Flex flexDir="row" justify="space-between">
          <View
            cond={data?.content.length > 0}
            display="flex"
            flexDir="column"
            flexBasis={['full', '', '60%', '70%']}
          >
            {data?.content.map(el => (
              <Box key={el.title} my="2rem">
                <Heading fontSize="1.5rem" color={titleColor}>
                  {el.title}
                </Heading>

                <Text fontSize="1rem" mt=".5rem" color={textColor}>
                  {el.text}
                </Text>
              </Box>
            ))}
          </View>

          <MiniMap data={data?.content} />
        </Flex>
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
        link: ''
      },
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis'
      },
      {
        title: 'Please read these conditions carefully',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores omnis earum repellendus, et natus harum. Vel corporis praesentium nostrum at, nemo tenetur temporibus ad, amet vero, delectus pariatur perspiciatis'
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
