import React from 'react'
import { Stack, Flex, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { AiFillLock } from 'react-icons/ai'

export default function CookieBox() {
  const bgColor = useColorModeValue('white', 'gray_2')
  return (
    <Flex flexDir={'column'} p="4" boxShadow="lg" m="4" bg={bgColor} borderRadius={'10px'}>
      <Flex alignItems="center">
        <Text fontWeight="semibold" mr=".5rem">
          {' '}
          Your Privacy{' '}
        </Text>
        <AiFillLock />
      </Flex>

      <Flex
        flexDir={['column', '', 'row', '']}
        justifyContent="space-between"
        alignItems={'center'}
        p=".5rem 0"
      >
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'xl'}>
          We use cookies and similar technologies to help personalise content, tailor and measure
          ads, and provide a better experience. By clicking OK or turning an option on in Cookie
          Preferences, you agree to this, as outlined in our Cookie Policy. To change preferences or
          withdraw consent, please update your Cookie Preferences.
        </Text>

        <Flex flexDir={['column', 'row']} alignItems="center" mt={['2rem', '', '0', '']}>
          <Button
            border="1px solid"
            borderColor={'accent_3'}
            color={'accent_2'}
            bg={bgColor}
            w={['10rem', '', '10rem', '']}
            mx={['.15rem']}
          >
            Cookie Preferences
          </Button>
          <Button
            bg={'accent_3'}
            _hover={{ bg: 'accent_2' }}
            color={'white'}
            w={['10rem', '', '10rem', '']}
            mx={['.15rem']}
          >
            {' '}
            OK{' '}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
