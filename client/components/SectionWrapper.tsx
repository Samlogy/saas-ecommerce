import { Box, Divider, Flex, Heading } from '@chakra-ui/react'

interface ISectionWrapper {
  children: React.ReactNode
  title: string
  [restProps: string]: any
}

export default function SectionWrapper({ children, title, restProps }: ISectionWrapper) {
  return (
    <Flex flexDir="column" p="2.5rem 1.5rem" {...restProps}>
      <Box textAlign={'center'}>
        <Heading
          fontSize="24px"
          mb="1rem"
          textTransform="uppercase"
          w={['15rem', '20rem', '', '']}
          mx="auto"
          wordBreak={'keep-all'}
        >
          {title}
        </Heading>
        <Divider
          w="10rem"
          borderColor="accent_4"
          borderWidth="2px"
          bg="accent_4"
          borderRadius={'10px'}
          m="0 auto 1rem auto"
        />
      </Box>
      {children}
    </Flex>
  )
}
