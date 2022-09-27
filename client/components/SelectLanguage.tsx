import { Select, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useLocale } from '../lib/hooks'

import { languages } from '../locales'

export default function SelectLanguage() {
  const router = useRouter()
  const { locale } = useLocale()

  const bgColor = useColorModeValue('white', 'gray_2')
  const bgHoverColor = useColorModeValue('gray_8', 'gray_3')

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <Select
      onChange={changeLanguage}
      defaultValue={locale}
      bg={bgColor}
      _hover={{ bg: bgHoverColor }}
      _focus={{ border: 'none', outline: 'none' }}
      textTransform="uppercase"
      w="2.5em"
      px="0!important"
      icon=""
    >
      {languages.map((lang: string, idx: number) => (
        <option key={idx} value={lang}>
          {lang}
        </option>
      ))}
    </Select>
  )
}
