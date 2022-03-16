import { useRouter } from 'next/router'
import { useColorMode } from '@chakra-ui/react'

import { useLocale } from '../lib/hooks'
// import lang from "../locales/index.json"
import { languages } from '../locales'

const SelectLanguage = () => {
  const router = useRouter()
  const { colorMode: mode, toggleColorMode } = useColorMode()
  const { locale } = useLocale()

  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }
  const style = mode === 'dark' ? 'option' : 'option active'

  return (
    <select onChange={changeLanguage} defaultValue={locale} className="select-language">
      {languages.map((el: string) => (
        <option className={style} value={el}>
          {' '}
          {el}{' '}
        </option>
      ))}
    </select>
  )
}

export default SelectLanguage
