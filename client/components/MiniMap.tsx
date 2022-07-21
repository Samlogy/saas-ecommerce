import { Flex, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react'

export default function MiniMap({ data }: { data: any }) {
  const bgColor = useColorModeValue('gray_8', 'gray_2')
  const textColor = useColorModeValue('gray_3', 'gray_9')
  return (
    <Flex
      flexDir={'column'}
      h="fit-content"
      border="1px solid"
      borderColor={bgColor}
      bg={bgColor}
      color={textColor}
      p=".5rem"
      borderRadius={'10px'}
      flexBasis={['25%', '', '', '20%']}
      display={['none', '', 'flex']}
    >
      {data.map((el, idx) => (
        <ChakraLink
          key={idx}
          href={el.link}
          _hover={{ color: 'accent_3', textDecor: 'underline' }}
          mb=".25rem"
        >
          {el.title}
        </ChakraLink>
      ))}
    </Flex>
  )
}
