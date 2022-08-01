import { Box, Flex, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react'

import { Layout, View } from 'components'

interface IListing {
  title: string
  data: any
}
export default function Listing({ title, data }: IListing) {
  const bgColor = useColorModeValue('white', 'gray_2')
  const textColor = useColorModeValue('gray_2', 'gray_6')
  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        {title}
      </Heading>

      <Flex flexDir="column" justifyContent={'center'} mt="2rem">
        <View cond={data.length > 0}>
          {data?.map((item: any) => (
            <Box
              key={item.id}
              boxShadow="md"
              mb="1.5rem"
              borderRadius={'10px'}
              p=".75rem 1rem"
              w={['17rem', '20rem', '30rem', '35rem']}
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
