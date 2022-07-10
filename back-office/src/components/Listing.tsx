import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

import { Layout, View } from 'components'

interface IListing {
  title: string
  data: any
}
export default function Listing({ title, data }: IListing) {
  const bgColor = useColorModeValue('white', 'gray_2')
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
              <Text mb=".5rem" fontSize="1.3rem">
                {item.title}{' '}
              </Text>
              <Text mb=".5rem" color="gray_2">
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
