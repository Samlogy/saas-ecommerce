import { Text } from '@chakra-ui/react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <Text
        textTransform={'uppercase'}
        fontWeight="700"
        letterSpacing={'1px'}
        p=".25rem"
        borderRadius={'10px'}
        fontStyle="italic"
        fontSize={'.9rem'}
        cursor="pointer"
      >
        {' '}
        E-commece{' '}
      </Text>
    </Link>
  )
}

export default Logo
