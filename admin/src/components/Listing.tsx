import { Box, Flex, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react'

import { Layout, View } from './'

interface IListing {
  title: string
  data: any
}
export default function Listing({ title, data }: IListing) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const textColor = useColorModeValue('gray_3', 'gray_7')
  return (
    <Layout isHeaderVisible>
      <Heading
        fontSize="1.5rem"
        textTransform={'uppercase'}
        w={['100%', '90%', '80%']}
        m="0 auto 1.5rem auto"
      >
        {title}
      </Heading>

      <Flex flexDir="column" justifyContent={'center'} mt="2rem">
        <View cond={data.length > 0}>
          {data?.map((item: any) => (
            <Box
              key={item.id}
              boxShadow="md"
              borderRadius={'10px'}
              p=".75rem 1rem"
              w={['100%', '90%', '80%']}
              m="0 auto 1.5rem auto"
              bg={bgColor}
            >
              <Image
                src={item?.img}
                alt="message-image"
                borderRadius={'5px'}
                w="5rem"
                h="5rem"
                mb=".5rem"
              />
              <Text mb=".5rem" fontSize="1.3rem">
                {item.title}{' '}
              </Text>
              <Text mb=".5rem" color={textColor}>
                {item.text}{' '}
              </Text>
              <Text fontSize=".8rem" fontStyle="italic" textAlign={'right'} color="gray_4">
                {item?.editedAt || item?.createdAt}
              </Text>
            </Box>
          ))}
        </View>

        <View cond={data.length === 0}>
          <Text color="gray_4"> There's no Messages </Text>
        </View>
      </Flex>
    </Layout>
  )
}
