import React from 'react'
import { Stack, Text, Button } from '@chakra-ui/react'
import { FcLock } from 'react-icons/fc'

export default function CookieBox() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold"> Your Privacy </Text>
        <FcLock />
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          We use cookies and similar technologies to help personalise content, tailor and measure
          ads, and provide a better experience. By clicking OK or turning an option on in Cookie
          Preferences, you agree to this, as outlined in our Cookie Policy. To change preferences or
          withdraw consent, please update your Cookie Preferences.
        </Text>

        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button border="1px solid" borderColor={'accent_3'} color={'accent_2'}>
            Cookie Preferences
          </Button>
          <Button bg={'accent_3'} _hover={{ bg: 'accent_2' }} color={'white'}>
            {' '}
            OK{' '}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
